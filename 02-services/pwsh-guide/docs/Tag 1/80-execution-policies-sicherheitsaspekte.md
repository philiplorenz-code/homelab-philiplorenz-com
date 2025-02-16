---
id: execution-policies-sicherheitsaspekte
title: Execution Policies & Sicherheitsaspekte
sidebar_position: 80
---

# Execution Policies & Sicherheitsaspekte in PowerShell

Execution Policies sind ein wichtiger Sicherheitsmechanismus in PowerShell, der den Rahmen vorgibt, welche Skripte und Konfigurationsdateien ausgeführt werden dürfen. Sie helfen, ungewollte oder potenziell gefährliche Skriptausführungen zu verhindern – wobei sie primär als Richtlinie und nicht als absoluter Sicherheitsschutz verstanden werden sollten.

## 1. Überblick der Execution Policies

PowerShell bietet verschiedene Execution Policies, die sich in ihrem Sicherheitsniveau unterscheiden:

- **Restricted:**  
  Die Standard-Policy auf Windows. Es dürfen **keine** Skripte ausgeführt werden. Nur interaktive Befehle sind erlaubt.

- **AllSigned:**  
  Es können Skripte ausgeführt werden, jedoch **müssen alle Skripte** von einem vertrauenswürdigen Herausgeber digital signiert sein.

- **RemoteSigned:**  
  Lokale Skripte können ohne Signatur ausgeführt werden. Skripte, die aus dem Internet heruntergeladen wurden, **müssen signiert** sein.

- **Unrestricted:**  
  Skripte werden ohne Einschränkungen ausgeführt. Allerdings zeigt PowerShell Warnungen an, bevor Skripte, die aus dem Internet stammen, ausgeführt werden.

- **Bypass:**  
  Keine Einschränkungen, keine Warnungen – geeignet für automatisierte Prozesse, in denen Sicherheitsrichtlinien anderweitig abgesichert sind.

- **Undefined:**  
  Es ist keine Policy definiert, sodass die effektive Policy von anderen Scopes (z. B. Gruppenrichtlinien) übernommen wird.

## 2. Abfragen der aktuellen Execution Policy

Um die aktuell aktive Execution Policy zu ermitteln, kannst du den folgenden Befehl verwenden:

```powershell
Get-ExecutionPolicy
```

Möchtest du einen detaillierten Überblick über alle konfigurierten Policies in den verschiedenen Scopes erhalten, nutze:

```powershell
Get-ExecutionPolicy -List
```

## 3. Ändern der Execution Policy

Um die Execution Policy für den aktuellen Benutzer oder das gesamte System zu ändern, verwende den Befehl `Set-ExecutionPolicy`. Zum Beispiel kannst du die Policy für den aktuellen Benutzer auf *RemoteSigned* setzen:

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**Hinweis:**  
- Zum Ändern der Policy im Scope *LocalMachine* sind in der Regel Administratorrechte erforderlich.
- Änderungen an der Execution Policy wirken sich nur auf neue PowerShell-Sitzungen aus.

## 4. Sicherheitsaspekte und Best Practices

- **Nicht als alleiniger Schutzmechanismus ansehen:**  
  Execution Policies sollen primär dazu dienen, unbeabsichtigte Skriptausführungen zu verhindern. Sie sind **kein Ersatz** für umfassende Sicherheitsmaßnahmen oder Benutzerrechte.

- **Verwendung signierter Skripte:**  
  Setze, wenn möglich, auf signierte Skripte (AllSigned oder RemoteSigned), um sicherzustellen, dass nur vertrauenswürdiger Code ausgeführt wird.

- **Spezifische Scopes nutzen:**  
  Passe die Execution Policy gezielt an, z. B. für den aktuellen Benutzer (CurrentUser) oder nur für die laufende Sitzung (Process), um das Risiko zu minimieren.

- **Automatisierung und Bypass:**  
  Für automatisierte Prozesse oder CI/CD-Pipelines kann die Policy vorübergehend auf *Bypass* gesetzt werden – jedoch sollte dies mit Bedacht erfolgen und die Sicherheit stets im Auge behalten werden.

## 5. Zusammenfassung

- **Execution Policies** bieten eine erste Sicherheitsbarriere, indem sie den Rahmen festlegen, welche Skripte ausgeführt werden dürfen.
- **Unterschiedliche Policies** (Restricted, AllSigned, RemoteSigned, Unrestricted, Bypass) erlauben es, das Sicherheitsniveau je nach Anforderung zu steuern.
- **Abfragen und Ändern** der Policy erfolgen über `Get-ExecutionPolicy` und `Set-ExecutionPolicy`.
- **Best Practices:** Verwende signierte Skripte, setze Policies gezielt nach Scope und betrachte Execution Policies als einen Baustein in einem ganzheitlichen Sicherheitskonzept.

