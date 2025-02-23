# Datei: /etc/dnsmasq.d/02-custom.conf
# Diese Datei konfiguriert dnsmasq für dein 192.168.0.0/16-Netzwerk

# DNS-Anfragen nur von Clients im 192.168.0.0/16-Netzwerk erlauben
listen-address=192.168.0.1
listen-address=192.168.255.254

# Interface, an dem DNS-Anfragen akzeptiert werden (ändern, falls nicht eth0)
interface=eth0

# Anfrageweiterleitung nur für lokale Clients
localise-queries

# Hostnamen automatisch auflösen
expand-hosts

# Standard-Domain für lokale Geräte (optional ändern)
domain=home.local

# Maximale Anzahl gleichzeitiger Anfragen
cache-size=10000
