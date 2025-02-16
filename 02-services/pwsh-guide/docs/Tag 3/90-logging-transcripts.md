---
id: logging-transcripts
title: Logging & Transcripts (Start-Transcript)
sidebar_position: 90
---

# Logging & Transcripts in PowerShell

Das Protokollieren von Skript-Ausgaben ist eine wertvolle Methode, um die Ausführung von PowerShell-Skripten zu überwachen, Fehler zu diagnostizieren und Aktivitäten zu dokumentieren. Mit **Start-Transcript** kannst du den gesamten Konsolenausgang in eine Datei schreiben, während **Stop-Transcript** die Aufzeichnung beendet.

> **Tipp zur Visualisierung:**  
> Eine begleitende Grafik könnte den Ablauf einer Transkription veranschaulichen, indem sie zeigt:  
> - Den Start der Aufzeichnung (Start-Transcript)  
> - Den fortlaufenden Konsolenausgang während der Skriptausführung  
> - Das Beenden der Aufzeichnung (Stop-Transcript)

## 1. Grundlagen von Start-Transcript

**Start-Transcript** startet die Protokollierung aller Konsolenausgaben in eine Log-Datei. Dies ist besonders nützlich für:
- Debugging und Fehlerdiagnose
- Audit-Trails und Aktivitätsprotokollierung
- Dokumentation von Skriptausführungen

**Stop-Transcript** beendet die Protokollierung und speichert die gesammelten Daten.

## 2. Anwendung von Start-Transcript

### Beispiel: Transkript einer Skriptausführung

```powershell
# Starte die Transkription und speichere die Ausgabe in einer Log-Datei
Start-Transcript -Path "C:\Logs\MyScript.log" -Append

# Beispielhafte Skriptbefehle
Write-Output "Starte den Prozess..."
# Hier folgen weitere Skriptbefehle
Write-Output "Prozess abgeschlossen."

# Beende die Transkription
Stop-Transcript
```

### Wichtige Hinweise:
- **Dateipfad:** Achte darauf, dass der angegebene Pfad existiert und du über Schreibrechte verfügst.
- **-Append Parameter:** Mit `-Append` wird die neue Transkription an eine bestehende Datei angehängt, andernfalls wird sie überschrieben.
- **Sicherheit:** Vermeide das Protokollieren sensibler Daten und überprüfe regelmäßig die erstellten Log-Dateien.

## 3. Integration in Skripte

Um den gesamten Ablauf deines Skripts zu dokumentieren, füge **Start-Transcript** am Anfang und **Stop-Transcript** am Ende ein:

```powershell
# Starte das Transkript
Start-Transcript -Path "C:\Logs\CompleteScript.log"

# Skriptinhalt
Write-Output "Skript startet..."
# Weitere Befehle
Write-Output "Skript endet..."

# Beende das Transkript
Stop-Transcript
```

## 4. Zusammenfassung

- **Start-Transcript & Stop-Transcript:**  
  Ermöglichen das Protokollieren des Konsolenausgangs während der Skriptausführung.
- **Anwendungsfälle:**  
  Ideal für Debugging, Fehlerdiagnose und die Erstellung von Audit-Trails.
- **Best Practices:**  
  Achte auf einen korrekten Dateipfad, verwende den `-Append` Parameter, falls notwendig, und schütze sensible Informationen.

Diese Techniken helfen dir, die Ausführung deiner PowerShell-Skripte detailliert zu dokumentieren und erleichtern die Fehlerbehebung sowie das Monitoring von Systemaktivitäten.