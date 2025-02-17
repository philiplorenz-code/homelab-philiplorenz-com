---
id: alias-konzepte-shortcuts
title: Alias-Konzepte & Shortcuts
sidebar_position: 100
---

# Alias-Konzepte & Shortcuts in PowerShell

In PowerShell bieten Aliases die Möglichkeit, lange Cmdlet-Namen durch kurze Bezeichnungen zu ersetzen. Das erleichtert die interaktive Nutzung und spart Zeit bei der Eingabe von Befehlen. In diesem Dokument erfährst du, wie Aliases funktionieren, wie du sie anpasst und welche Shortcuts dir im Arbeitsalltag nützlich sein können.

## 1. Was sind Aliases?

- **Definition:**  
  Ein Alias ist ein alternativer Name für ein Cmdlet, eine Funktion, ein Skript oder ein Programm. Er ermöglicht es dir, mit kürzeren Befehlen zu arbeiten.

- **Beispiele:**  
  Standard-Aliases in PowerShell sind z. B.:
  - `ls` für `Get-ChildItem`
  - `cd` für `Set-Location`

## 2. Auflisten und Anzeigen von Aliases

Um alle definierten Aliases anzuzeigen, kannst du den folgenden Befehl verwenden:

```powershell
Get-Alias
```

Möchtest du nach einem bestimmten Alias suchen, kannst du:

```powershell
Get-Alias -Name ls
```

## 3. Erstellen und Anpassen von Aliases

Mit `Set-Alias` kannst du eigene Aliases erstellen oder bestehende überschreiben:

```powershell
# Erstelle einen neuen Alias "ll" für "Get-ChildItem"
Set-Alias ll Get-ChildItem
```

**Hinweis:**  
Änderungen an Aliases gelten standardmäßig nur für die aktuelle Sitzung. Um Aliases dauerhaft zu speichern, solltest du sie in dein PowerShell-Profil aufnehmen.

Mit diesen Alias-Konzepten und Shortcuts kannst du deine tägliche PowerShell-Arbeit effizienter gestalten.
