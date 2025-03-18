---
id: kill-your-darling
title: Kill your Darling - Wo die PowerShell versagt
---

# Umgang mit extrem großen Dateien

## Problem

Cmdlets wie `Get-Content` laden standardmäßig die gesamte Datei in den Speicher. Bei sehr großen Dateien (z.B. 10-GB-Logfiles) kann das zu hohem RAM-Verbrauch oder einer `OutOfMemoryException` führen.

## Demonstration / Code-Beispiel

```powershell
# Lädt die gesamte Datei in den RAM (problematisch bei großen Dateien)
Get-Content -Path "C:\large.log" | ForEach-Object {
    # Verarbeitung jeder Zeile
}
```

## Workaround

### Stream-basiertes Lesen mit .NET

```powershell
$reader = [System.IO.File]::OpenText("C:\large.log")
try {
    while ($line = $reader.ReadLine()) {
        # Verarbeitung pro Zeile
    }
}
finally {
    $reader.Close()
}
```

**Vorteil:**  
RAM-Verbrauch bleibt stabil, da zeilenweise gelesen wird.

# Begrenzte ZIP-Kompression großer Verzeichnisse

## Problem

`Compress-Archive` (PowerShell 5.1) hat folgende Einschränkungen:  
- Maximal ~2 GB pro Datei im Archiv  
- Hoher RAM-Verbrauch bei großen Ordnern (>25 GB)  
- Keine ZIP64-Unterstützung

## Demonstration / Code-Beispiel

```powershell
# Fehlermeldung bei großen Dateien:
Compress-Archive -Path "C:\MassiveFolder" -DestinationPath "C:\large.zip"
```

## Workaround

### .NET-ZipFile oder 7-Zip

```powershell
Add-Type -AssemblyName System.IO.Compression.FileSystem
[System.IO.Compression.ZipFile]::CreateFromDirectory(
    "C:\MassiveFolder", 
    "C:\large.zip"
)
```

**Externer Tipp:**  
Für Dateien >4 GB: 7-Zip CLI (`7z a -tzip large.zip C:\MassiveFolder`).



# Schwächen in der Parallelverarbeitung

## Problem

PowerShell 5.1 bietet keine native Parallelverarbeitung für Schleifen.  
- `Start-Job` ist prozessbasiert (langsam)  
- `Workflows` sind komplex und veraltet  
- `ForEach-Object -Parallel` erst ab PowerShell 7

## Demonstration / Code-Beispiel

```powershell
# Serielle Ausführung (1 Thread)
1..10 | ForEach-Object {
    Start-Sleep -Seconds 1
    "Verarbeitung: $_"
}
```

## Workaround

### ThreadJobs oder Runspaces

```powershell
# Mit ThreadJob-Modul (Install-Module ThreadJob):
1..10 | Start-ThreadJob -ScriptBlock {
    Start-Sleep -Seconds 1
    "Job $_"
} | Receive-Job -Wait -AutoRemoveJob
```

**Vorteil:**  
Threads statt Prozesse → schneller und ressourcenschonender.



# Eingeschränkte Quoten im Remoting

## Problem

Standardmäßige WinRM-Limits in PowerShell 5.1:  
- `MaxMemoryPerShellMB = 150` → Out of Memory bei großen Daten  
- `MaxConcurrentUsers = 5` → Skalierungsprobleme

## Demonstration / Code-Beispiel

```powershell
Invoke-Command -ComputerName Server01 -ScriptBlock {
    # 1 Million Einträge → Überschreitet Speicherquote
    1..1000000 | ForEach-Object { "Data $_" }
}
```

## Workaround

### Quoten erhöhen

```powershell
# Maximaler RAM pro Session auf 2 GB setzen:
Set-Item WSMan:\localhost\Shell\MaxMemoryPerShellMB -Value 2048

# Oder via GPO für Unternehmen.
```

**Alternativ:**  
Daten über Fileshares austauschen statt via Remoting streamen.

