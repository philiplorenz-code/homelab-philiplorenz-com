---
id: powershell-remoting
title: PowerShell-Remoting
sidebar_position: 70
---

# PowerShell-Remoting

PowerShell-Remoting ermöglicht es dir, Befehle und Skripte auf entfernten Computern auszuführen. Dieses Feature basiert auf Windows Remote Management (WinRM) und verwendet das WS-Management-Protokoll, um eine sichere, verschlüsselte Kommunikation zwischen lokalen und entfernten Systemen zu gewährleisten. Mit PowerShell-Remoting kannst du Systeme zentral verwalten, Automatisierungsaufgaben realisieren und Remote-Diagnosen durchführen.


## 1. Grundlagen des Remotings

PowerShell-Remoting erlaubt es dir,:
- Befehle auf einem oder mehreren Remote-Computern auszuführen.
- Interaktive Remoting-Sitzungen zu starten.
- Skripte zentral zu verwalten und auszuführen.

Bevor du Remoting nutzen kannst, muss es auf den Zielcomputern aktiviert und richtig konfiguriert sein.

## 2. Aktivierung von PowerShell-Remoting

Um PowerShell-Remoting zu aktivieren, führe folgenden Befehl auf dem Zielcomputer (als Administrator) aus:

```powershell
Enable-PSRemoting -Force
```

Dieser Befehl startet den WinRM-Dienst, konfiguriert die Firewall und richtet die notwendigen Einstellungen ein.

## 3. Herstellung einer Remoting-Verbindung

### 3.1 Interaktive Remoting-Sitzung

Mit **Enter-PSSession** kannst du eine interaktive Sitzung zu einem Remote-Computer starten:

```powershell
Enter-PSSession -ComputerName RemoteComputerName
```

Um die Sitzung zu beenden, verwende:

```powershell
Exit-PSSession
```

### 3.2 Ausführen von Befehlen auf Remote-Computern

Mit **Invoke-Command** kannst du Befehle oder Skripte auf einem oder mehreren Remote-Computern ausführen. Beispiel:

```powershell
# Führe den Befehl Get-Process auf einem Remote-Computer aus
Invoke-Command -ComputerName RemoteComputerName -ScriptBlock { Get-Process }
```

Du kannst auch mehrere Computer gleichzeitig ansprechen:

```powershell
# Führe den Befehl auf mehreren Remote-Computern aus
Invoke-Command -ComputerName Server1, Server2 -ScriptBlock { Get-Service }
```

## 4. Sicherheitsaspekte

- **Authentifizierung:**  
  Standardmäßig wird die Windows-Authentifizierung verwendet. In Domänenumgebungen wird häufig Kerberos eingesetzt.
  
- **Verschlüsselung:**  
  Die Kommunikation über PowerShell-Remoting ist verschlüsselt, um die Sicherheit der Daten zu gewährleisten.
  
- **Firewall-Konfiguration:**  
  Stelle sicher, dass die entsprechenden Firewall-Regeln für WinRM aktiviert sind.

## 5. Best Practices

- **Testen der Verbindung:**  
  Verwende `Test-WSMan -ComputerName RemoteComputerName`, um zu prüfen, ob der Remote-Computer für Remoting konfiguriert ist.
  
- **Sitzungsmanagement:**  
  Schließe interaktive Sitzungen nach Gebrauch, um Systemressourcen zu schonen.
  
- **Fehlerbehandlung:**  
  In Skripten sollten Remoting-Befehle mit Fehlerbehandlungsmechanismen versehen werden, um robustere Automatisierungslösungen zu realisieren.

## 6. Zusammenfassung

PowerShell-Remoting ermöglicht es dir, Befehle und Skripte auf entfernten Computern auszuführen und so die zentrale Verwaltung und Automatisierung von Systemen zu optimieren. Mit den Cmdlets **Enable-PSRemoting**, **Enter-PSSession**, **Exit-PSSession** und **Invoke-Command** kannst du leistungsfähige Remoting-Szenarien umsetzen, die in kleinen Netzwerken ebenso wie in großen Unternehmensumgebungen von großem Nutzen sind.
