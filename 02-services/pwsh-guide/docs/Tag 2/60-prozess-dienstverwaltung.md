---
id: prozess-dienstverwaltung
title: Prozess- & Dienstverwaltung (Get-Process, Get-Service)
sidebar_position: 60
---

# Prozess- & Dienstverwaltung in PowerShell

PowerShell bietet mit **Get-Process** und **Get-Service** leistungsfähige Cmdlets zur Verwaltung von Prozessen und Diensten. Mit diesen Befehlen kannst du Informationen über laufende Prozesse und Systemdienste abrufen, filtern und analysieren – was besonders in der Systemadministration und Fehlerbehebung nützlich ist.

## 1. Prozessverwaltung mit Get-Process

Das Cmdlet **Get-Process** liefert Informationen zu allen aktuell laufenden Prozessen auf deinem System. Du kannst damit unter anderem den Namen, die ID, die CPU-Auslastung und den Speicherverbrauch eines Prozesses abfragen.

### 1.1 Alle Prozesse anzeigen

```powershell
Get-Process
```

### 1.2 Spezifische Prozesse filtern

Du kannst **Get-Process** in Kombination mit **Where-Object** verwenden, um Prozesse nach bestimmten Kriterien zu filtern. Im folgenden Beispiel werden alle Prozesse angezeigt, die mehr als 100 MB Arbeitsspeicher belegen:

```powershell
Get-Process | Where-Object { $_.WorkingSet -gt 100MB }
```

### 1.3 Prozessinformationen formatieren

Mit **Select-Object** kannst du die Ausgabe gezielt anpassen. Hier werden beispielsweise der Name, die Prozess-ID und die CPU-Auslastung ausgegeben:

```powershell
Get-Process | Select-Object Name, Id, CPU
```

## 2. Dienstverwaltung mit Get-Service

Das Cmdlet **Get-Service** liefert Informationen über alle installierten Dienste. Du kannst den Status (gestartet, gestoppt usw.) eines Dienstes abfragen oder gezielt nach einem bestimmten Dienst suchen.

### 2.1 Alle Dienste anzeigen

```powershell
Get-Service
```

### 2.2 Einen bestimmten Dienst abfragen

Um gezielt einen Dienst, beispielsweise den Windows Update-Dienst, abzufragen, verwendest du:

```powershell
Get-Service -Name wuauserv
```

### 2.3 Dienste filtern und sortieren

Hier ein Beispiel, das alle gestarteten Dienste filtert und nach dem Dienstnamen sortiert:

```powershell
Get-Service | Where-Object { $_.Status -eq "Running" } | Sort-Object DisplayName
```

## 3. Best Practices und Tipps

- **Kombination mit der Pipeline:**  
  Nutze die Pipeline, um Ergebnisse weiter zu verarbeiten – etwa durch Filtern, Sortieren und Formatieren. Dies macht deinen Code modular und wartbar.
- **Gezielte Abfragen:**  
  Verwende Parameter wie `-Name` bei **Get-Service** oder filtere Ergebnisse mit **Where-Object**, um nur die relevanten Informationen anzuzeigen.
- **Leistung im Blick behalten:**  
  Bei Systemen mit vielen laufenden Prozessen oder Diensten kann es sinnvoll sein, die Ausgabe zu begrenzen oder gezielt zu filtern, um die Übersicht zu behalten.

## 4. Zusammenfassung

- **Get-Process:**  
  Ermöglicht dir, detaillierte Informationen zu allen laufenden Prozessen zu erhalten. Durch den Einsatz von Filtern und Formatierung kannst du gezielt die Informationen abrufen, die du benötigst.
- **Get-Service:**  
  Liefert Informationen zu allen installierten Diensten und deren Status. Mit gezielten Abfragen und Filtern kannst du schnell den Status einzelner Dienste ermitteln.

Diese Cmdlets sind zentrale Werkzeuge in der Systemadministration und bieten eine flexible Möglichkeit, Prozesse und Dienste zu überwachen und zu verwalten.

