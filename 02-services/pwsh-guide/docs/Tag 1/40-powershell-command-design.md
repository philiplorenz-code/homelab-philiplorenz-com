---
id: powershell-command-design
title: "PowerShell-Command-Design: Verb-Noun-Konvention"
sidebar_position: 40
---

# PowerShell-Command-Design: Verb-Noun-Konvention

PowerShell-Cmdlets folgen einer standardisierten Namenskonvention, die aus einem **Verb** und einem **Noun** besteht. Diese Struktur sorgt für Konsistenz, Verständlichkeit und erleichtert die Entdeckbarkeit von Cmdlets in der PowerShell-Umgebung.

## 1. Die Verb-Noun-Struktur verstehen

Die Grundidee der Verb-Noun-Konvention lautet:

- **Verb:** Beschreibt die Aktion, die ausgeführt wird (z. B. `Get`, `Set`, `New`, `Remove`).
- **Noun:** Beschreibt das Ziel oder Objekt der Aktion (z. B. `Process`, `Item`, `Service`).

Beispiele:
- **Get-Process:** Ruft Informationen zu laufenden Prozessen ab.
- **Set-Item:** Legt Werte für ein bestimmtes Element fest.

Diese einheitliche Struktur macht es einfacher, Cmdlets zu lernen und zu nutzen.

![](/img/verbnoun-explain.png)  


## 2. Vorteile der Verb-Noun-Konvention

- **Einheitlichkeit:**  
  Alle Cmdlets folgen dem gleichen Namensschema, was die Lernkurve verkürzt und Verwirrung vermeidet.

- **Entdeckbarkeit:**  
  Benutzer können mithilfe von Funktionen wie Tab-Vervollständigung und `Get-Command` schnell passende Cmdlets finden.

- **Erweiterbarkeit:**  
  Bei der Entwicklung eigener Cmdlets wird eine konsistente Namensstruktur gefördert, die sich nahtlos in die bestehende Umgebung einfügt.

## 3. Verwendung der genehmigten Verben

Microsoft stellt eine Liste von **genehmigten Verben** bereit, um Inkonsistenzen und Dopplungen zu vermeiden. Einige Beispiele sind:

| **Genehmigtes Verb** | **Beschreibung**                        |
|----------------------|------------------------------------------|
| Get                  | Zum Abrufen von Informationen            |
| Set                  | Zum Ändern von Werten                     |
| New                  | Zum Erstellen neuer Objekte              |
| Remove               | Zum Entfernen von Objekten               |
| Convert              | Zum Umwandeln von Daten                  |
| Test                 | Zum Überprüfen von Bedingungen           |

Um eine Übersicht über die verwendeten Verben zu erhalten, kann folgender Befehl genutzt werden:

```powershell
Get-Command -Verb * | Select-Object -ExpandProperty Verb | Sort-Object -Unique
```

## 4. Best Practices beim Cmdlet-Design

- **Genehmigte Verben verwenden:**  
  Nutze die offizielle Liste, um eine konsistente Namensgebung zu gewährleisten. (`Get-Verb`)

- **Präziser Noun:**  
  Wähle einen Noun, der klar beschreibt, worauf sich die Aktion bezieht.

- **Dokumentation:**  
  Dokumentiere dein Cmdlet umfassend, um die Nutzung für andere verständlich zu machen.

- **Parameterüberprüfung:**  
  Nutze Parameterattribute (z. B. `[Parameter(Mandatory = $true)]`), um Eingaben zu validieren und Fehler zu vermeiden.

## 5. Zusammenfassung

Die Verb-Noun-Konvention ist ein zentraler Bestandteil des PowerShell-Command-Designs. Sie sorgt für:

- **Konsistenz und Einheitlichkeit**
- **Verbesserte Entdeckbarkeit von Cmdlets**
- **Einfache Erweiterbarkeit bei der Erstellung eigener Cmdlets**

Indem du diese Konvention anwendest, stellst du sicher, dass deine Cmdlets und Skripte verständlich und wartbar bleiben – sowohl für dich als auch für andere PowerShell-Anwender.

![Meme: Der Wechsel von CMD zu PowerShell](/img/verbnoun.webp)  
