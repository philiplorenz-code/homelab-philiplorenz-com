---
id: powershell-skripte-planen
title: PowerShell-Skripte planen (Task Scheduler, schtasks)
sidebar_position: 80
---

# PowerShell-Skripte planen (Task Scheduler, schtasks)

Das Planen von PowerShell-Skripten ist eine wichtige Methode, um wiederkehrende Aufgaben zu automatisieren. In Windows kannst du dazu den integrierten Task Scheduler oder das Befehlszeilentool **schtasks** verwenden. Zusätzlich bietet PowerShell eigene Funktionen, wie Scheduled Jobs, um Aufgaben direkt zu planen.

> **Tipp zur Visualisierung:**  
> Eine begleitende Grafik könnte den Unterschied zwischen:
> - Der Verwendung des Task Schedulers (GUI)  
> - Der Nutzung von schtasks (CLI)  
> - Der Anwendung von PowerShell Scheduled Jobs  
> darstellen.

## 1. Task Scheduler (GUI)

Der Windows Task Scheduler ist eine grafische Anwendung, mit der du geplante Aufgaben einfach konfigurieren kannst.

### 1.1 Einen Scheduled Task über die GUI anlegen

1. Öffne den **Task Scheduler** (Aufgabenplanung) über die Systemsteuerung oder suche im Startmenü nach "Aufgabenplanung".
2. Wähle im rechten Bereich **Task erstellen...**.
3. Im Reiter **Allgemein** gibst du einen Namen und eine Beschreibung für die Aufgabe ein.
4. Im Reiter **Trigger** definierst du, wann die Aufgabe ausgeführt werden soll (z. B. täglich, wöchentlich oder bei Systemstart).
5. Im Reiter **Aktionen** klickst du auf **Neu...** und wählst **Programm starten**.
6. Als Programm/Skript gibst du den Pfad zu `pwsh.exe` an (z. B. `C:\Program Files\PowerShell\7\pwsh.exe`).
7. Im Feld **Argumente hinzufügen (optional)** gibst du den Pfad zu deinem PowerShell-Skript an, z. B.:  
   `-File "C:\Scripts\MeinSkript.ps1"`
8. Konfiguriere bei Bedarf weitere Einstellungen in den Reitern **Bedingungen** und **Einstellungen** und speichere die Aufgabe.

## 2. Scheduled Task mittels PowerShell

Neben der GUI kannst du geplante Aufgaben auch direkt über PowerShell erstellen. Zwei gängige Ansätze sind:

### 2.1 Erstellung eines Scheduled Task mit schtasks

Das Befehlszeilentool **schtasks.exe** kann über PowerShell aufgerufen werden, um geplante Aufgaben zu erstellen.

#### Beispiel: Erstellung einer geplanten Aufgabe mit schtasks

```powershell
schtasks.exe /Create /TN "MyPowerShellTask" /TR '"C:\Program Files\PowerShell\7\pwsh.exe" -File "C:\Scripts\MeinSkript.ps1"' /SC DAILY /ST 09:00
```

_Erklärung:_  
- `/TN "MyPowerShellTask"`: Legt den Namen der Aufgabe fest.  
- `/TR '..."`: Definiert die Aktion, die ausgeführt wird (Ausführung von pwsh.exe mit dem Skript als Argument).  
- `/SC DAILY`: Gibt den Zeitplan an (täglich).  
- `/ST 09:00`: Startzeit der Aufgabe.

### 2.2 Erstellung eines Scheduled Tasks mit PowerShell Scheduled Jobs

PowerShell bietet das **ScheduledJob**-Modul, mit dem du geplante Aufgaben direkt aus PowerShell heraus registrieren kannst.

#### Beispiel: Registrierung eines Scheduled Jobs

```powershell
Register-ScheduledJob -Name "MyScheduledJob" -ScriptBlock {
    & "C:\Scripts\MeinSkript.ps1"
} -Trigger (New-JobTrigger -Daily -At 09:00)
```

_Erklärung:_  
- `Register-ScheduledJob`: Registriert einen neuen geplanten Job in PowerShell.  
- `-Name "MyScheduledJob"`: Vergibt einen Namen.  
- `-ScriptBlock { & "C:\Scripts\MeinSkript.ps1" }`: Definiert den auszuführenden Code.  
- `-Trigger (New-JobTrigger -Daily -At 09:00)`: Legt den Trigger fest, hier täglich um 09:00 Uhr.

## 3. Alternativen zum Task Scheduler

Neben dem klassischen Task Scheduler gibt es weitere Ansätze, um Aufgaben zeitgesteuert auszuführen:

- **PowerShell Scheduled Jobs:**  
  Integrierte Methode, um geplante Aufgaben direkt in PowerShell zu verwalten.
- **Windows Admin Center:**  
  Eine moderne, webbasierte Verwaltungsplattform, die u.a. Aufgabenplanung unterstützt.
- **Drittanbieter-Tools:**  
  Tools wie **System Scheduler** oder **Cron for Windows** bieten zusätzliche Funktionen, wenn du erweiterte Anforderungen hast.

## 4. Zusammenfassung

- **Task Scheduler (GUI):**  
  Eine benutzerfreundliche Oberfläche zur Erstellung und Verwaltung geplanter Aufgaben.
- **schtasks.exe:**  
  Ein Befehlszeilentool, ideal für automatisierte und skriptbasierte Aufgabenplanung.
- **PowerShell Scheduled Jobs:**  
  Ermöglichen die direkte Planung von Aufgaben innerhalb von PowerShell.
- **Alternativen:**  
  Zusätzliche Tools oder Plattformen wie Windows Admin Center bieten alternative Ansätze zur Aufgabenplanung.

Mit diesen Methoden kannst du PowerShell-Skripte zuverlässig und effizient planen, um wiederkehrende Aufgaben automatisiert auszuführen.

