---
id: interaktion-webapis
title: Interaktion mit Web-APIs (Invoke-RestMethod)
sidebar_position: 60
---

# Interaktion mit Web-APIs (Invoke-RestMethod)

Mit PowerShell kannst du ganz einfach mit Web-APIs interagieren. Das Cmdlet **Invoke-RestMethod** ermöglicht es dir, HTTP-Anfragen an eine API zu senden und die Antworten – typischerweise in JSON-Format – direkt in PowerShell-Objekte umzuwandeln. Dadurch kannst du API-Daten verarbeiten und in deine Skripte integrieren.


## 1. Beispiel: Abfrage einer öffentlichen API

Als Beispiel verwenden wir die GitHub API, um Informationen über den öffentlichen Benutzer **octocat** abzurufen. Diese API erfordert keine Authentifizierung und kann direkt getestet werden.

### Beispiel: GitHub-Benutzerinformationen abrufen

```powershell
# Sende eine HTTP-Anfrage an die GitHub API, um Informationen über den Benutzer "octocat" zu erhalten
$user = Invoke-RestMethod -Uri "https://api.github.com/users/octocat"

# Gib alle Eigenschaften des zurückgegebenen Objekts formatiert aus
$user | Format-List *
```

Dieses Beispiel ruft Daten vom Endpunkt `https://api.github.com/users/octocat` ab und wandelt die JSON-Antwort in ein PowerShell-Objekt um. Du kannst dann auf einzelne Eigenschaften zugreifen, beispielsweise:

```powershell
# Zugriff auf spezifische Eigenschaften
Write-Output "Login: $($user.login)"
Write-Output "Name: $($user.name)"
Write-Output "Öffentliche Repositories: $($user.public_repos)"
```

## 2. Weitere Tipps zur Arbeit mit Web-APIs

- **HTTP-Methoden:**  
  Mit Invoke-RestMethod kannst du nicht nur GET-Anfragen, sondern auch POST-, PUT- oder DELETE-Anfragen senden. Verwende dazu den Parameter `-Method`.

  Beispiel für eine POST-Anfrage:
  
  ```powershell
  $response = Invoke-RestMethod -Uri "https://example.com/api/resource" -Method Post -Body @{ key = "value" } -ContentType "application/json"
  ```

- **Fehlerbehandlung:**  
  Baue Fehlerbehandlung ein, um unerwartete API-Antworten abzufangen. Dies kann mit try/catch-Blöcken erfolgen.

  ```powershell
  try {
      $data = Invoke-RestMethod -Uri "https://api.github.com/users/octocat"
  }
  catch {
      Write-Error "Fehler beim Abrufen der API-Daten: $_"
  }
  ```

- **API-Dokumentation:**  
  Lies immer die API-Dokumentation, um zu verstehen, welche Parameter benötigt werden und wie die Antwortstruktur aussieht.

## 3. Zusammenfassung

- **Invoke-RestMethod:**  
  Ein leistungsfähiges Cmdlet, um HTTP-Anfragen zu senden und die JSON-Antwort in PowerShell-Objekte zu konvertieren.
- **Öffentliche APIs:**  
  Nutze öffentliche APIs wie die GitHub API, um direkt zu experimentieren und Daten abzurufen.
- **Weiterverarbeitung:**  
  Verarbeite die zurückgegebenen Objekte mit anderen PowerShell-Cmdlets, um die Daten nach Bedarf zu filtern, sortieren oder zu analysieren.

Diese Techniken ermöglichen es dir, Web-APIs einfach in deine PowerShell-Skripte zu integrieren und automatisierte Datenabfragen sowie -verarbeitungen umzusetzen.

