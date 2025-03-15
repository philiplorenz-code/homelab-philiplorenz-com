---
id: tag1
title: Aufgaben - Tag 1
sidebar_position: 1
---

# Aufgaben - Tag 1

## Teil 1: PowerShell vs. CMD – Mini-Vergleich
1. **Öffne** eine PowerShell-Konsole.
2. **Wechsle** in das Verzeichnis `C:\Windows\System32`.
3. **Zeige** den Inhalt des Verzeichnisses an. Vergleiche, wie du den gleichen Verzeichnisinhalt in der **CMD** anzeigen würdest.
4. **Rufe** die integrierte Hilfe zu `Get-ChildItem` auf, um dir ein Beispiel oder die Parameter anzeigen zu lassen.

## Teil 2: Systeminformationen sammeln & berichten

1. **Ermittle** den Computernamen über eine Umgebungsvariable.
2. **Lese** den Namen deines Betriebssystems aus (z. B. über WMI oder CIM).
3. **Bestimme** den freien Speicherplatz auf Laufwerk C.
4. **Berechne** prozentual, wie viel Speicherplatz noch frei ist (ganz einfache Mathematik).
5. **Speichere** diese Informationen in einer Textdatei (z. B. in `C:\Temp\SystemReport.txt`).

**Tipp:**
Schaue dir die Befehle an:

- Get-CimInstance
- Out-File

# Teil 3: Erste Schritte mit dem Active Directory

1. **Hole** eine Liste aller Benutzer im AD.
2. Hole eine Liste aller Benutzer im AD mitsamt dem Attribut LastLogonDate
3. **Speichere** das Ergebnis in einer Textdatei.

# Aufgabe 4: Mini-Skript korrigieren

Dein Vorgänger hat ein Mini-Skript namens **`DiskCheck.ps1`** erstellt. Dieses Skript soll zwei Dinge tun:

1. **Den freien Festplattenspeicher** auf Laufwerk C: ermitteln.
2. **Ergebnis** in eine Textdatei schreiben.

Das Script liegt auf deiner VM hier: C:\assets\aufgaben\DiskCheck.ps1

Leider funktioniert das Script nicht so wie es soll - finde die Fehlerquellen und behebe diese!