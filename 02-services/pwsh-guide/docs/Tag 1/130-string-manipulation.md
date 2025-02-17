---
id: string-manipulation
title: String-Manipulation (Ersetzen, Trimmen, Splitten, Formatieren)
sidebar_position: 130
---

# String-Manipulation in PowerShell

In diesem Dokument lernst du, wie du Strings in PowerShell manipulieren kannst. Wir behandeln grundlegende Operationen wie **Ersetzen**, **Trimmen**, **Splitten** und **Formatieren**. Diese Techniken sind besonders nützlich, wenn du Textdaten verarbeiten oder für die Ausgabe aufbereiten möchtest.



## 1. Ersetzen

Mit dem `-replace` Operator kannst du Teile eines Strings ersetzen. Dabei wird standardmäßig ein regulärer Ausdruck verwendet.

```powershell
# Beispiel: Ersetzen eines Wortes in einem String
$string = "Hallo Welt"
$neu = $string -replace "Welt", "PowerShell"
Write-Output $neu  # Ausgabe: "Hallo PowerShell"
```

## 2. Trimmen

Die Methoden `.Trim()`, `.TrimStart()` und `.TrimEnd()` entfernen Leerzeichen (oder andere Zeichen) vom Anfang und/oder Ende eines Strings.

```powershell
# Beispiel: Entfernen von Leerzeichen am Anfang und Ende
$string = "   Hallo PowerShell   "
$trimmed = $string.Trim()
Write-Output "'$trimmed'"  # Ausgabe: "'Hallo PowerShell'"

# Nur vom Anfang entfernen
$trimStart = $string.TrimStart()
Write-Output "'$trimStart'"

# Nur vom Ende entfernen
$trimEnd = $string.TrimEnd()
Write-Output "'$trimEnd'"
```

## 3. Splitten

Mit der Methode `.Split()` kannst du einen String anhand eines bestimmten Trennzeichens in ein Array von Teilstrings zerlegen.

```powershell
# Beispiel: Zerlegen eines Strings anhand eines Kommas
$string = "Apfel, Banane, Kirsche"
$teile = $string.Split(",")
# Ausgabe: Array mit den Elementen "Apfel", " Banane", " Kirsche"
Write-Output $teile
```

## 4. Formatieren

Es gibt mehrere Möglichkeiten, Strings in PowerShell zu formatieren:

### 4.1 String-Interpolation

Du kannst Variablen direkt in einen String einbetten:

```powershell
$name = "Max"
Write-Output "Hallo, $name!"
```

### 4.2 Format-Operator (-f)

Mit dem Format-Operator kannst du Platzhalter in einem String durch Variablen ersetzen:

```powershell
$formatString = "Name: {0}, Alter: {1}"
$name = "Max"
$alter = 30
$output = $formatString -f $name, $alter
Write-Output $output  # Ausgabe: "Name: Max, Alter: 30"
```

### 4.3 Formatierung mit .ToString()

Für numerische oder spezielle Formatierungen kannst du die Methode `.ToString()` nutzen:

```powershell
$zahl = 3.14159
$formatted = $zahl.ToString("F2")  # Rundet auf 2 Dezimalstellen
Write-Output "Formatierte Zahl: $formatted"  # Ausgabe: "Formatierte Zahl: 3.14"
```

## 5. Zusammenfassung

- **Ersetzen:**  
  Mit dem `-replace` Operator kannst du Teile eines Strings ersetzen.

- **Trimmen:**  
  Entfernt unerwünschte Leerzeichen oder Zeichen vom Anfang und/oder Ende eines Strings.

- **Splitten:**  
  Zerlegt einen String anhand eines bestimmten Trennzeichens in ein Array von Teilstrings.

- **Formatieren:**  
  Nutzt String-Interpolation, den Format-Operator (-f) oder `.ToString()` für präzise Formatierungen.

Diese Techniken der String-Manipulation ermöglichen es dir, Textdaten in PowerShell flexibel zu verarbeiten und an deine Anforderungen anzupassen.
