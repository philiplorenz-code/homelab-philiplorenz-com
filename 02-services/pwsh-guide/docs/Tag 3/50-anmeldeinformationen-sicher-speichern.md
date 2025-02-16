---
id: anmeldeinformationen-sicher-speichern
title: Anmeldeinformationen sicher speichern (Get-Credential, SecureString)
sidebar_position: 50
---

# Anmeldeinformationen sicher speichern in PowerShell

Die sichere Speicherung von Anmeldeinformationen ist in der Automatisierung und Verwaltung von Systemen unerlässlich. PowerShell bietet mit **Get-Credential** und **SecureString** effektive Mechanismen, um Benutzernamen und Passwörter sicher zu verarbeiten und zu speichern, ohne dass sensitive Informationen im Klartext vorliegen.


## 1. Verwendung von Get-Credential

Das Cmdlet **Get-Credential** fordert den Benutzer zur Eingabe eines Benutzernamens und Passworts auf und erstellt daraus ein PSCredential-Objekt. Dieses Objekt enthält den Benutzernamen als Klartext und das Passwort als SecureString.

### Beispiel: Anmeldeinformationen abfragen

```powershell
$credential = Get-Credential
Write-Output "Benutzername: $($credential.UserName)"
```

*Hinweis:* Beim Ausführen dieses Befehls erscheint ein Eingabefenster, in dem du deine Anmeldedaten eingeben kannst.

## 2. Arbeiten mit SecureString

Ein **SecureString** speichert sensible Daten in verschlüsselter Form. Du kannst ein SecureString-Objekt direkt über **Get-Credential** erhalten oder auch einen Klartext-String in einen SecureString umwandeln.

### Beispiel: Klartext in SecureString umwandeln

```powershell
$plainPassword = "P@ssw0rd"
$securePassword = ConvertTo-SecureString $plainPassword -AsPlainText -Force
```

### Beispiel: PSCredential-Objekt manuell erstellen

Wenn du bereits einen Benutzernamen und ein SecureString-Passwort hast, kannst du ein PSCredential-Objekt erstellen:

```powershell
$username = "Domain\User"
$securePassword = ConvertTo-SecureString "P@ssw0rd" -AsPlainText -Force
$credential = New-Object System.Management.Automation.PSCredential ($username, $securePassword)
Write-Output "Erstellt: $($credential.UserName)"
```

## 3. Best Practices

- **Vermeide Klartext:**  
  Speichere Passwörter niemals im Klartext in Skripten. Verwende stattdessen SecureString und PSCredential.
- **Eingabeaufforderungen:**  
  Nutze Get-Credential, um sicherzustellen, dass sensible Daten nur zur Laufzeit eingegeben werden.
- **Schutz von Skripten:**  
  Wenn du Skripte veröffentlichst, entferne sensible Informationen oder verwende Mechanismen, um diese zu verschlüsseln.
- **Regelmäßige Aktualisierung:**  
  Überprüfe und aktualisiere gespeicherte Anmeldeinformationen regelmäßig, um Sicherheitsrisiken zu minimieren.

## 4. Zusammenfassung

- **Get-Credential:**  
  Ermöglicht das sichere Abfragen von Benutzerdaten über ein Eingabeformular und erstellt ein PSCredential-Objekt.
- **SecureString:**  
  Sorgt dafür, dass Passwörter in verschlüsselter Form gespeichert werden.
- **Manuelle Erstellung von PSCredential:**  
  Nutze ConvertTo-SecureString und New-Object, um Anmeldeinformationen programmgesteuert zu erstellen.

Diese Techniken helfen dir, Anmeldeinformationen in deinen PowerShell-Skripten sicher zu verwalten und die Risiken einer Offenlegung sensibler Daten zu minimieren.

