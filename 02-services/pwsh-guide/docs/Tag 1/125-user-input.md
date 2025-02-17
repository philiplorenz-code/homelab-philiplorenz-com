---
id: nutzer-interaktionen
title: Nutzer-Interaktionen - Benutzereingaben und Optionen
sidebar_position: 125
---

# Nutzer-Interaktionen: Benutzereingaben und Optionen in PowerShell

Interaktive Skripte sind ein leistungsfähiges Mittel, um Benutzer in den Ausführungsprozess einzubeziehen. In PowerShell kannst du mit **Read-Host** Daten vom Nutzer abfragen. Außerdem kannst du einfache Menüs erstellen, bei denen der Benutzer aus mehreren Optionen wählt – beispielsweise durch Drücken der Tasten 1, 2, 3 oder 4.

In diesem Kapitel zeigen wir zwei praktische Beispiele:
1. **Eingabe von Daten:** Hier wird der Benutzer zur Eingabe seines Namens aufgefordert.
2. **Auswahlmenü:** Hier kann der Benutzer aus vier Optionen wählen und das Skript führt abhängig von der Auswahl unterschiedliche Aktionen aus.

## 1. Eingabe von Daten mit Read-Host

Mit **Read-Host** kannst du den Benutzer zur Eingabe von Informationen auffordern. Das folgende Beispiel fragt nach dem Namen des Benutzers und begrüßt ihn anschließend.

```powershell
# Fordere den Benutzer zur Eingabe seines Namens auf
$name = Read-Host "Bitte gib deinen Namen ein"
# Begrüße den Benutzer
Write-Output "Hallo, $name! Willkommen im PowerShell-Kurs."
```
<!-- Beispieloutput:
Bitte gib deinen Namen ein: Max
Hallo, Max! Willkommen im PowerShell-Kurs.
-->

## 2. Auswahlmenü mit Read-Host und Switch

In diesem Beispiel wird ein einfaches Menü erstellt, bei dem der Benutzer eine von vier Optionen auswählen kann. Die Eingabe erfolgt über **Read-Host** und wird mit einer Switch-Anweisung ausgewertet.

```powershell
# Zeige dem Benutzer ein Menü mit vier Optionen
Write-Output "Bitte wähle eine Option:"
Write-Output "1: Starte Backup"
Write-Output "2: Führe System-Scan durch"
Write-Output "3: Zeige Systeminformationen an"
Write-Output "4: Beende das Skript"

# Lese die Benutzereingabe
$choice = Read-Host "Drücke die Taste (1, 2, 3 oder 4)"

# Verarbeite die Auswahl mit einer Switch-Anweisung
switch ($choice) {
    "1" {
        Write-Output "Backup wird gestartet..."
        # Hier Backup-Befehle einfügen
    }
    "2" {
        Write-Output "System-Scan wird durchgeführt..."
        # Hier Scan-Befehle einfügen
    }
    "3" {
        Write-Output "Systeminformationen werden angezeigt..."
        # Hier Befehle zur Anzeige von Systeminformationen einfügen
    }
    "4" {
        Write-Output "Das Skript wird beendet."
        exit
    }
    default {
        Write-Output "Ungültige Auswahl. Bitte starte das Skript neu und wähle eine Option zwischen 1 und 4."
    }
}
```
<!-- Beispieloutput:
Bitte wähle eine Option:
1: Starte Backup
2: Führe System-Scan durch
3: Zeige Systeminformationen an
4: Beende das Skript
Drücke die Taste (1, 2, 3 oder 4): 2
System-Scan wird durchgeführt...
-->

## 3. Zusammenfassung

- **Read-Host:**  
  Ermöglicht es, Benutzereingaben zu erfassen und im Skript zu verwenden.
- **Switch-Anweisung:**  
  Hilft dabei, verschiedene Aktionen basierend auf der Benutzerauswahl umzusetzen.
- **Interaktive Skripte:**  
  Durch die Einbindung von Benutzerinteraktionen wird dein Skript dynamischer und anpassungsfähiger.

Diese Techniken erleichtern es, PowerShell-Skripte interaktiv zu gestalten und dem Benutzer eine direkte Einflussmöglichkeit auf den Ablauf zu geben.
