---
id: automatisiertes-scheduled-tasks
title: Automatisiertes Ausführen von PowerShell über Scheduled Tasks
---

# Automatisiertes Ausführen von PowerShell über Scheduled Tasks

In diesem Dokument erfährst du, wie du PowerShell-Skripte automatisiert über den Windows Task Scheduler ausführen kannst. Dies ist besonders nützlich für regelmäßige Wartungsaufgaben, Berichte oder Automatisierungslösungen in Unternehmensumgebungen.

> **Hinweis:**  
> Du kannst auch andere Methoden wie PowerShell Scheduled Jobs oder Drittanbieter-Tools verwenden, aber in diesem Beispiel konzentrieren wir uns auf den klassischen Task Scheduler und das Cmdlet **Register-ScheduledTask**.

## 1. Konzept und Vorgehensweise

Der Windows Task Scheduler ermöglicht es, Aufgaben (Scheduled Tasks) zu erstellen, die zu festgelegten Zeiten oder bei bestimmten Ereignissen ausgeführt werden. Mit PowerShell kannst du diese Aufgaben programmgesteuert erstellen und konfigurieren. In unserem Beispiel wird ein Skript (`02-help.ps1`) täglich um 11:00 Uhr ausgeführt.

## 2. Beispiel: Geplanter Task für ein PowerShell-Skript

Im folgenden Beispiel wird ein Task erstellt, der das Skript `02-help.ps1` täglich um 11:00 Uhr ausführt. Die Aufgabe wird so konfiguriert, dass sie mit administrativen Rechten läuft.

```powershell
$TaskName = "DailyPowershellScript"
$TaskDescription = "Führt das PowerShell-Skript 02-help.ps1 täglich um 11:00 Uhr aus."
$ScriptPath = "Y:\powershell-training\03cmdlets\02-help.ps1"
$TriggerTime = "11:00:00"

# Definiere die Aktion: Starte powershell.exe mit dem Skript als Argument
$Action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-NoProfile -WindowStyle Hidden -File `"$ScriptPath`""

# Erstelle einen täglichen Trigger um die angegebene Zeit
$Trigger = New-ScheduledTaskTrigger -Daily -At $TriggerTime

# Lege fest, dass der Task mit höchsten Privilegien ausgeführt wird
$Principal = New-ScheduledTaskPrincipal -GroupId "BUILTIN\Administrators" -RunLevel Highest

# Verwende die Standard-Task-Einstellungen
$Settings = New-ScheduledTaskSettingsSet

try {
    Register-ScheduledTask -TaskName $TaskName -Action $Action -Trigger $Trigger -Principal $Principal -Settings $Settings -Description $TaskDescription
    Write-Host "Der geplante Task wurde erfolgreich erstellt." -ForegroundColor Green
} catch {
    Write-Host "Fehler beim Erstellen des geplanten Tasks: $($_.Exception.Message)" -ForegroundColor Red
}
```

## 3. Erklärung der wichtigsten Parameter

- **$TaskName & $TaskDescription:**  
  Legen den Namen und eine kurze Beschreibung der Aufgabe fest.

- **$ScriptPath:**  
  Gibt den vollständigen Pfad zum PowerShell-Skript an, das ausgeführt werden soll.

- **$TriggerTime:**  
  Definiert, wann die Aufgabe täglich ausgeführt werden soll.

- **New-ScheduledTaskAction:**  
  Erstellt die Aktion, die ausgeführt wird. Hier wird `powershell.exe` mit den Parametern `-NoProfile -WindowStyle Hidden -File $ScriptPath` gestartet.

- **New-ScheduledTaskTrigger:**  
  Erstellt einen täglichen Trigger, der die Aufgabe zur angegebenen Uhrzeit startet.

- **New-ScheduledTaskPrincipal:**  
  Legt fest, unter welchem Benutzerkonto und mit welchen Berechtigungen (hier: höchste Privilegien) die Aufgabe ausgeführt wird.

- **Register-ScheduledTask:**  
  Registriert die Aufgabe im Task Scheduler. Der `try/catch`-Block fängt mögliche Fehler ab und gibt eine entsprechende Rückmeldung.

## 4. Best Practices

- **Überprüfe den Pfad:**  
  Stelle sicher, dass der in `$ScriptPath` angegebene Pfad korrekt ist und das Skript existiert.
- **Firewall und Sicherheitsrichtlinien:**  
  Achte darauf, dass die Ausführung von geplanten Tasks den Sicherheitsrichtlinien deiner Umgebung entspricht.
- **Testen der Aufgabe:**  
  Nach dem Erstellen des Tasks solltest du diesen testen, um sicherzustellen, dass das Skript wie gewünscht ausgeführt wird.
- **Dokumentation:**  
  Kommentiere und dokumentiere deine geplanten Tasks, um bei späteren Anpassungen schnell den Überblick zu behalten.

## 5. Zusammenfassung

Dieses Beispiel zeigt, wie du mit PowerShell einen geplanten Task erstellst, der ein Skript täglich um 11:00 Uhr ausführt. Durch die Automatisierung solcher Aufgaben kannst du regelmäßige Wartungs- und Verwaltungsaufgaben effizient durchführen und so deine IT-Administration vereinfachen.

