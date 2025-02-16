---
id: wmi-cim
title: WMI/CIM (Get-CimInstance, Unterschied zu WMI)
sidebar_position: 70
---

# WMI/CIM in PowerShell

Windows Management Instrumentation (WMI) und Common Information Model (CIM) sind Technologien zur Verwaltung und Überwachung von Windows-Systemen. Während WMI seit langem verfügbar ist und auf DCOM basiert, bietet CIM eine modernere Schnittstelle, die typischerweise über das WS-Management-Protokoll kommuniziert. PowerShell stellt Cmdlets bereit, die den Zugriff auf beide Technologien ermöglichen – jedoch wird **Get-CimInstance** für neue Skripte empfohlen.


## 1. Einführung in WMI und CIM

- **WMI:**  
  WMI ist eine ältere Technologie, die auf DCOM basiert und seit Windows 2000 existiert. Es wird oft über das Cmdlet **Get-WmiObject** angesprochen, das jedoch mittlerweile als veraltet gilt.

- **CIM:**  
  CIM ist der standardisierte Ansatz zur Systemverwaltung und nutzt WS-Management. Mit **Get-CimInstance** erhältst du CIM-Objekte, die im Wesentlichen denselben Inhalt wie WMI-Objekte haben, aber moderner und effizienter übertragen werden.

## 2. Beispiele mit Get-CimInstance

### 2.1 Betriebssysteminformationen abfragen

Dieses Beispiel zeigt, wie du Informationen über das Betriebssystem eines lokalen Computers abrufen kannst:

```powershell
# Ruft Informationen über das Betriebssystem ab
$os = Get-CimInstance -ClassName Win32_OperatingSystem
$os | Format-List Caption, Version, BuildNumber, OSArchitecture
```

### 2.2 Computerinformationen abrufen

Hier wird das Cmdlet verwendet, um grundlegende Informationen über das Computersystem zu erhalten:

```powershell
# Ruft Informationen über das Computersystem ab
$computer = Get-CimInstance -ClassName Win32_ComputerSystem
$computer | Format-List Manufacturer, Model, TotalPhysicalMemory
```

### 2.3 Remote-Abfrage mit CIM

Ein großer Vorteil von Get-CimInstance ist die vereinfachte Remote-Abfrage. Beispiel:

```powershell
# Ruft Betriebssysteminformationen von einem Remote-Computer ab
Get-CimInstance -ClassName Win32_OperatingSystem -ComputerName "RemoteComputerName"
```

## 3. Unterschiede zwischen Get-CimInstance und Get-WmiObject

- **Kommunikationsprotokoll:**  
  - **Get-WmiObject:** Nutzt DCOM, was in Netzwerken mit strengen Firewall-Regeln problematisch sein kann.  
  - **Get-CimInstance:** Nutzt WS-Management (WinRM), was moderner, sicherer und oft besser kompatibel mit Remote-Szenarien ist.

- **Performance und Fehlerbehandlung:**  
  Get-CimInstance bietet eine bessere Fehlerbehandlung und leichtere Konfiguration für Remote-Zugriffe.

- **Empfohlene Nutzung:**  
  Für neue Skripte wird **Get-CimInstance** empfohlen, da es zukunftssicher ist und von Microsoft aktiv weiterentwickelt wird.

## 4. Best Practices

- **Verwende Get-CimInstance:**  
  Nutze für neue Projekte immer Get-CimInstance, um von den Vorteilen des WS-Management-Protokolls zu profitieren.
  
- **Remote-Zugriffe konfigurieren:**  
  Stelle sicher, dass auf Remote-Computern WinRM aktiviert und richtig konfiguriert ist, um CIM-Abfragen durchzuführen.

- **Fehlerbehandlung:**  
  Implementiere try/catch-Blöcke, um Fehler bei Remote-Abfragen oder Verbindungsproblemen abzufangen.

## 5. Zusammenfassung

- **WMI vs. CIM:**  
  Beide Technologien liefern ähnliche Daten, aber CIM (über Get-CimInstance) nutzt moderne Protokolle und bietet bessere Unterstützung für Remote-Management.
- **Get-CimInstance:**  
  Ein leistungsfähiges Cmdlet, das es dir ermöglicht, lokale und entfernte Systeminformationen effizient abzurufen.
- **Remote-Verwaltung:**  
  Durch die Nutzung von WS-Management eignet sich CIM hervorragend für sichere und zuverlässige Remote-Abfragen.

Diese Beispiele und Best Practices helfen dir, den vollen Nutzen aus der modernen Systemverwaltung mit CIM in PowerShell zu ziehen.

