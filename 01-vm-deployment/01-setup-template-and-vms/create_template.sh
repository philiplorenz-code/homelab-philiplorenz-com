#!/bin/bash

# Load environment variables if .env file exists
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

# Set default values if not provided via environment variables
VMID=${VMID:-9999}
TEMPLATE_NAME=${TEMPLATE_NAME:-Debian12CloudInit}
DISKIMAGE=${DISKIMAGE:-debian-12-genericcloud-amd64.qcow2}
HOST_DISK=${HOST_DISK:-local-lvm}

# Download the disk image if it doesn't exist
if [ ! -f "$DISKIMAGE" ]; then
    echo "Downloading $DISKIMAGE..."
    wget "https://cloud.debian.org/images/cloud/bookworm/latest/$DISKIMAGE"
else
    echo "$DISKIMAGE already exists, skipping download."
fi

# Create the VM template
echo "Creating VM template with ID $VMID..."
qm create "$VMID" --name "$TEMPLATE_NAME" --net0 virtio,bridge=vmbr0
qm set "$VMID" --ostype l26
qm importdisk "$VMID" "$DISKIMAGE" "$HOST_DISK"
qm set "$VMID" --scsihw virtio-scsi-pci --scsi0 "$HOST_DISK:vm-$VMID-disk-0"
qm set "$VMID" --boot c --bootdisk scsi0
qm set "$VMID" --ide2 "$HOST_DISK:cloudinit"
qm set "$VMID" --serial0 socket --vga serial0
qm set "$VMID" --agent enabled=1
qm set "$VMID" --onboot 1

# Convert VM to a template
echo "Converting VM $VMID to template..."
qm template "$VMID"

echo "Template creation completed."
