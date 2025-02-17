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

## 2. Aktivierung und Konfiguration von PowerShell-Remoting

Um PowerShell-Remoting zu aktivieren, führe folgenden Befehl (als Administrator) auf dem Zielcomputer aus:

```powershell
Enable-PSRemoting -Force -SkipNetworkProfileCheck
```

Dieser Befehl startet den WinRM-Dienst, konfiguriert die Firewall und richtet die notwendigen Einstellungen ein. Falls du in einer Umgebung mit mehreren Netzwerken arbeitest, hilft der Parameter `-SkipNetworkProfileCheck`, Remoting auch auf nicht als "Privat" markierten Netzwerken zuzulassen.

### 2.1 Festlegen vertrauenswürdiger Hosts

Um Remoting-Verbindungen zu einem bestimmten Remote-Computer zuzulassen, kannst du dessen IP-Adresse oder Hostname als vertrauenswürdigen Host definieren:

```powershell
Set-Item WSMan:\localhost\Client\TrustedHosts -Value "10.3.7.104" -Force
```

> **Tipp:**  
> Verwende diesen Befehl mit Bedacht, da das Zulassen von nicht vertrauenswürdigen Hosts ein Sicherheitsrisiko darstellen kann.

### 2.2 Remote-fähige Cmdlets finden

Um herauszufinden, welche Cmdlets die Option `-ComputerName` unterstützen (und somit für Remoting geeignet sind), kannst du folgenden Befehl verwenden:

```powershell
Get-Command -ParameterName ComputerName
```

## 3. Herstellung einer Remoting-Verbindung

### 3.1 Interaktive Remoting-Sitzung

Um eine interaktive Sitzung zu einem Remote-Computer zu starten, verwende **Enter-PSSession**. Beispiel:

```powershell
# Anmeldeinformationen abfragen
$Cred = Get-Credential

# Starte eine interaktive Sitzung mit dem Remote-Computer "dc01"
Enter-PSSession -ComputerName dc01 -Credential $Cred

# (Interaktive Befehle ausführen)

# Beende die Sitzung
Exit-PSSession
```

### 3.2 Ausführen von Befehlen auf mehreren Remote-Computern (1:N Befehle)

Mit **Invoke-Command** kannst du Befehle gleichzeitig auf mehreren Remote-Computern ausführen. Beispiel:

```powershell
Invoke-Command -ComputerName dc01, sql02, web01 -Credential $Cred -ScriptBlock {
    Get-Service -Name W32time
}
```

### 3.3 Erstellen und Verwenden von Remoting-Sessions

Manchmal ist es effizienter, zuerst eine Remoting-Session zu erstellen und diese dann mehrfach zu verwenden:

```powershell
# Erstelle eine Session zu mehreren Remote-Computern
$Session = New-PSSession -ComputerName dc01, sql02, web01 -Credential $Cred

# Führe Befehle in der erstellten Session aus
Invoke-Command -Session $Session -ScriptBlock {
    Get-Service -Name W32time
}

# Zeige alle aktiven Sessions an
Get-PSSession

# Entferne alle erstellten Sessions, um Ressourcen freizugeben
Get-PSSession | Remove-PSSession
```

## 4. Sicherheitsaspekte

- **Authentifizierung:**  
  Standardmäßig wird die Windows-Authentifizierung verwendet, wobei in Domänenumgebungen häufig Kerberos zum Einsatz kommt.
  
- **Verschlüsselung:**  
  Die Kommunikation über PowerShell-Remoting ist verschlüsselt, um die Sicherheit der übertragenen Daten zu gewährleisten.
  
- **Firewall-Konfiguration:**  
  Stelle sicher, dass die entsprechenden Firewall-Regeln für WinRM aktiviert sind.

## 5. Best Practices

- **Verbindung testen:**  
  Verwende `Test-WSMan -ComputerName <RemoteComputerName>`, um zu prüfen, ob der Remote-Computer für Remoting konfiguriert ist.
- **Sitzungsmanagement:**  
  Schließe interaktive Sitzungen und entferne erstellte Remoting-Sessions, um Systemressourcen zu schonen.
- **Fehlerbehandlung:**  
  Implementiere try/catch-Blöcke, um Fehler bei Remoting-Befehlen abzufangen und robustere Automatisierungslösungen zu realisieren.
- **Vertrauenswürdige Hosts:**  
  Konfiguriere WSMan:\localhost\Client\TrustedHosts mit Bedacht und beschränke diese Liste nur auf bekannte, vertrauenswürdige Rechner.

## 6. Zusammenfassung

PowerShell-Remoting ermöglicht es dir, Befehle und Skripte auf entfernten Computern auszuführen und somit die zentrale Verwaltung und Automatisierung von Systemen zu optimieren. Mit den Cmdlets **Enable-PSRemoting**, **Enter-PSSession**, **Exit-PSSession**, **Invoke-Command** und **New-PSSession** kannst du leistungsfähige Remoting-Szenarien umsetzen – von interaktiven Sitzungen bis hin zu Massenbefehlen in großen Netzwerken.

Diese erweiterten Beispiele und Best Practices helfen dir, PowerShell-Remoting sicher und effektiv in deiner Umgebung einzusetzen.
