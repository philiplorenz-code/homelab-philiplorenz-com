---
id: grundlegende-navigation-powershell-provider
title: Grundlegende Navigation & PowerShell-Provider
sidebar_position: 90
---

# Grundlegende Navigation & PowerShell-Provider

In diesem Dokument erhältst du einen kurzen Überblick über die grundlegende Navigation in PowerShell und die Rolle der PowerShell-Provider. Eine detaillierte Vertiefung dieser Themen erfolgt am zweiten Tag.

## 1. Navigation in PowerShell

PowerShell nutzt ein Dateisystem-ähnliches Konzept, um verschiedene Datenquellen zu navigieren. Die grundlegenden Cmdlets zur Navigation sind:

- **Get-Location (alias `pwd`):** Zeigt das aktuelle Verzeichnis bzw. den aktuellen Pfad an.
- **Set-Location (alias `cd`):** Wechselt das aktuelle Verzeichnis.
- **Push-Location & Pop-Location:** Erlauben das Speichern und Wiederherstellen von Verzeichnissen.

### 1.1 Beispiele zur Navigation

```powershell
# Aktuelles Verzeichnis anzeigen
Get-Location

# In ein anderes Verzeichnis wechseln
Set-Location C:\Windows

# Aktuelles Verzeichnis speichern und in ein neues wechseln
Push-Location C:\Temp

# Zurück zum vorherigen Verzeichnis wechseln
Pop-Location
```

## 2. PowerShell-Provider

PowerShell-Provider ermöglichen den Zugriff auf verschiedene Datenspeicher, als ob es sich um Dateisysteme handeln würde. Jeder Provider stellt eine eigene "Drive" dar, die den Zugriff auf spezielle Datenquellen vereinfacht.

### 2.1 Wichtige PowerShell-Provider

- **FileSystem:** Erlaubt den Zugriff auf das lokale Dateisystem.
- **Registry:** Ermöglicht den Zugriff auf die Windows-Registry.
- **Environment:** Zeigt Umgebungsvariablen als virtuelle Verzeichnisstruktur an.
- **Certificate:** Bietet Zugriff auf Zertifikate (sofern installiert).

### 2.2 Beispiele für den Zugriff auf verschiedene Provider

```powershell
# Auf das Dateisystem zugreifen
Set-Location C:\

# Auf die Windows-Registry zugreifen
Set-Location HKLM:\

# Umgebungsvariablen anzeigen
Set-Location Env:
Get-ChildItem

# Auf Zertifikate zugreifen (sofern vorhanden)
Set-Location Cert:
Get-ChildItem -Recurse
```

## 3. Zusammenfassung

- **Navigation:**  
  Mit den Cmdlets `Get-Location`, `Set-Location`, `Push-Location` und `Pop-Location` bewegst du dich innerhalb der PowerShell-Umgebung.

- **PowerShell-Provider:**  
  Provider wie FileSystem, Registry, Environment und Certificate ermöglichen dir, verschiedene Datenspeicher wie ein Dateisystem zu durchsuchen.

**Vertiefung:**  
Diese Grundlagen werden am zweiten Tag detaillierter behandelt. Hier erhältst du lediglich einen kompakten Überblick, um den Einstieg zu erleichtern.
