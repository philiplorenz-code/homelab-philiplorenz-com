---
id: debugging-troubleshooting
title: Debugging & Troubleshooting (Write-Debug, PowerShell-Debugger)
sidebar_position: 40
---

# Debugging & Troubleshooting in PowerShell

Effektives Debugging und Troubleshooting sind entscheidend, um PowerShell-Skripte zu entwickeln und Fehler schnell zu beheben. Hier findest du leicht zugängliche Tipps, die dir helfen, Probleme zu identifizieren und zu lösen – von der Verwendung von **Write-Debug** bis hin zum Einsatz des integrierten PowerShell-Debuggers und der Debugging-Tools in Visual Studio Code.

> **Tipp zur Visualisierung:**  
> Eine begleitende Grafik könnte den Ablauf eines Debugging-Prozesses veranschaulichen, z. B. wie:
> - **Write-Debug** Meldungen erzeugt und diese bei aktiviertem Debug-Modus angezeigt werden.
> - Breakpoints im Code gesetzt werden und der Debugger an diesen Punkten anhält.
> - Visual Studio Code das Durchschreiten des Codes (Step Over, Step Into, etc.) und die Variable-Inspektion darstellt.

## 1. Debugging mit Write-Debug

**Write-Debug** ermöglicht es dir, Debug-Ausgaben in dein Skript einzufügen, die nur angezeigt werden, wenn der Debug-Modus aktiviert ist. Dies ist besonders nützlich, um den Ablauf deines Skripts zu überwachen, ohne die normale Ausgabe zu stören.

### Tipp:
- Stelle sicher, dass `$DebugPreference` auf `Continue` gesetzt ist, um Debug-Meldungen anzuzeigen:

```powershell
$DebugPreference = "Continue"
```

### Beispiel:

```powershell
function Test-Debug {
    Write-Debug "Starte Funktion Test-Debug"
    $result = 2 + 2
    Write-Debug "Berechnetes Ergebnis: $result"
    return $result
}

# Aufruf der Funktion, Debug-Meldungen werden angezeigt, wenn Debugging aktiviert ist
Test-Debug
```

## 2. Debugging mit dem PowerShell-Debugger

Der integrierte PowerShell-Debugger erlaubt es dir, Breakpoints zu setzen, Variablen zu inspizieren und schrittweise durch deinen Code zu gehen.

### Tipp:
- Verwende **Set-PSBreakpoint**, um Breakpoints in deinem Skript zu setzen und so den Ablauf genau zu untersuchen.

### Beispiel mit Set-PSBreakpoint:

```powershell
function Calculate-Sum {
    param([int]$a, [int]$b)
    $sum = $a + $b
    return $sum
}

# Setze einen Breakpoint in der Funktion Calculate-Sum (bitte passe den Pfad und die Zeilennummer an)
Set-PSBreakpoint -Script "C:\Path\To\YourScript.ps1" -Line 10

# Führe das Skript aus, um am Breakpoint anzuhalten
Calculate-Sum -a 5 -b 7
```

## 3. Debugging in Visual Studio Code

Visual Studio Code bietet eine moderne, integrierte Debugging-Umgebung für PowerShell-Skripte. Mit der offiziellen PowerShell-Erweiterung kannst du Breakpoints setzen, deinen Code schrittweise durchlaufen und Variablen live inspizieren.

### Tipps für VSCode-Debugging:
- **PowerShell Extension:**  
  Stelle sicher, dass du die offizielle PowerShell-Erweiterung installiert hast.
- **Breakpoint setzen:**  
  Klicke in der linken Leiste des Editors auf die Zeilennummer, um einen Breakpoint zu setzen.
- **Debuggen starten:**  
  Drücke `F5` oder wähle im Menü "Run and Debug", um den Debugging-Modus zu starten.
- **Steuerung:**  
  Nutze die Debug-Leiste, um den Code schrittweise zu durchlaufen (Step Over, Step Into, Step Out) und den Call-Stack sowie Variablen zu überwachen.

## 4. Zusammenfassung

- **Write-Debug:**  
  Nutze Write-Debug, um konditionale Debug-Ausgaben in deinen Code einzufügen. Stelle sicher, dass `$DebugPreference` korrekt gesetzt ist.
- **PowerShell-Debugger:**  
  Setze Breakpoints mit Set-PSBreakpoint und verwende den integrierten Debugger, um deinen Code schrittweise zu überprüfen und Fehler zu identifizieren.
- **VSCode-Debugging:**  
  Die PowerShell-Erweiterung in Visual Studio Code bietet eine benutzerfreundliche Debugging-Umgebung, die das Setzen von Breakpoints, das Durchschreiten des Codes und das Überwachen von Variablen erleichtert.

Diese Tipps und Techniken helfen dir dabei, Fehler in deinen PowerShell-Skripten effizient zu finden und zu beheben – und machen den Entwicklungsprozess insgesamt robuster und produktiver.

