---
id: einfache-datentypen-variablen-formatierung
title: Einfache Datentypen, Variablen & Formatierung
sidebar_position: 120
---

# Einfache Datentypen, Variablen & Formatierung in PowerShell

In diesem Dokument lernst du, wie du in PowerShell mit einfachen Datentypen arbeitest, Variablen deklarierst und deren Ausgabe formatierst. PowerShell ist dynamisch typisiert – Variablen nehmen automatisch den Typ des zugewiesenen Werts an, was dir eine flexible und unkomplizierte Programmierung ermöglicht. Du kannst jedoch den Datentyp auch explizit erzwingen, um unerwartete Ergebnisse zu vermeiden.

## 1. Einfache Datentypen und Typ-Erzwingung

### 1.1 Strings

Strings sind Textwerte, die in Anführungszeichen angegeben werden. Wird der `+`-Operator auf Strings angewendet, so erfolgt eine Verkettung.

```powershell
# Standard-String-Verkettung:
$resultString = "5" + "5"   # ergibt "55"
Write-Output "String: '5' + '5' = $resultString"

# Explizit als String erzwingt:
[string]$str1 = "5"
[string]$str2 = "5"
$resultStringEnforced = $str1 + $str2  # ergibt "55"
Write-Output "Erzwungene String-Konkatenation: $resultStringEnforced"
```

### 1.2 Zahlen

Zahlen können als Ganzzahlen (Integer) oder Fließkommazahlen (Double) dargestellt werden. Bei numerischen Operationen wird dann tatsächlich gerechnet.

```powershell
# Standard-Zahlenaddition:
$resultNumber = 5 + 5   # ergibt 10
Write-Output "Zahl: 5 + 5 = $resultNumber"

# Explizite Typ-Erzwingung als Integer:
[int]$num1 = 5
[int]$num2 = 5
$resultNumberEnforced = $num1 + $num2   # ergibt 10
Write-Output "Erzwungene Zahlenaddition: $resultNumberEnforced"
```

> **Hinweis:**  
> Je nach Datentyp kann derselbe Ausdruck unterschiedlich interpretiert werden – als String-Verkettung oder als numerische Addition.

### 1.3 Booleans

Booleans speichern Wahrheitswerte – entweder `$true` oder `$false`.  
Du kannst den Typ auch hier erzwingen, um sicherzustellen, dass du mit logischen Werten arbeitest.

```powershell
[bool]$isActive = $true
Write-Output "Boolean: Ist aktiv? $isActive"
```

### 1.4 Arrays

Arrays sind geordnete Sammlungen von Werten. Zur Erzwingung, dass ein Array nur Werte eines bestimmten Typs enthält, kannst du den Typ des Arrays festlegen.

```powershell
# Ein Array von Strings:
[string[]]$farben = @("Rot", "Grün", "Blau")
Write-Output "Farben: $($farben -join ', ')"
```

### 1.5 Hashtables

Hashtables speichern Schlüssel-Wert-Paare und eignen sich hervorragend zur strukturierten Datenspeicherung. Hier erzwingst du nicht direkt den Typ der Hashtable, aber du kannst sicherstellen, dass du in den Werten den gewünschten Datentyp nutzt.

```powershell
$person = @{
    Name  = "Max"
    Alter = 30
    Aktiv = $true
}
Write-Output "Person: $($person.Name) ist $($person.Alter) Jahre alt, Aktiv: $($person.Aktiv)"
```

## 2. Variablen in PowerShell

Variablen werden in PowerShell mit dem Dollarzeichen (`$`) deklariert. Dank dynamischer Typisierung ist es meist nicht nötig, den Typ anzugeben – jedoch kannst du den Typ erzwingen, um die korrekte Verarbeitung sicherzustellen.

### 2.1 Deklaration und Zuweisung

```powershell
# Ohne explizite Typdeklaration:
$name = "Max"
$alter = 30
$isActive = $true
Write-Output "Name: $name, Alter: $alter, Aktiv: $isActive"

# Mit expliziter Typdeklaration:
[string]$nameEnforced = "Max"
[int]$alterEnforced = 30
[bool]$activeEnforced = $true
Write-Output "Erzwungene Variablen - Name: $nameEnforced, Alter: $alterEnforced, Aktiv: $activeEnforced"
```

### 2.2 Unterschiedliche Ergebnisse bei Addition

Je nach Datentyp können Operationen unterschiedlich interpretiert werden:

```powershell
# Zahlenaddition:
[int]$a = 5
[int]$b = 5
$resultZahl = $a + $b   # ergibt 10
Write-Output "Zahlenaddition: 5 + 5 = $resultZahl"

# String-Konkatenation:
[string]$aStr = "5"
[string]$bStr = "5"
$resultString = $aStr + $bStr   # ergibt "55"
Write-Output "String-Konkatenation: '5' + '5' = $resultString"
```

## 3. Formatierung von Ausgaben

PowerShell bietet verschiedene Techniken, um Ausgaben ansprechend zu formatieren.

### 3.1 String-Interpolation

Variablen können direkt in Strings eingebettet werden:

```powershell
$name = "Max"
Write-Output "Hallo, $name!"
```

### 3.2 Format-Operator (-f)

Mit dem Format-Operator kannst du Platzhalter in einem String durch Variablen ersetzen:

```powershell
$formatString = "Name: {0}, Alter: {1}"
$name = "Max"
$alter = 30
Write-Output ($formatString -f $name, $alter)
```

### 3.3 Formatierung von Zahlen

Nutze die `ToString()`-Methode, um Zahlen mit einem bestimmten Format darzustellen:

```powershell
$zahl = 3.14159
$formatted = $zahl.ToString("F2")  # Rundet auf 2 Dezimalstellen
Write-Output "Formatierte Zahl: $formatted"
```

## 4. Zusammenfassung

- **Einfache Datentypen:**  
  PowerShell unterstützt Strings, Zahlen, Booleans, Arrays und Hashtables. Diese bilden die Basis für die Datenverarbeitung in Skripten.
  
- **Typ-Erzwingung:**  
  Du kannst den Datentyp einer Variablen explizit erzwingen, um sicherzustellen, dass Operationen wie Addition numerisch durchgeführt oder Strings nicht ungewollt verkettet werden.
  
- **Variablen:**  
  Variablen werden mit dem `$`-Zeichen deklariert. Die dynamische Typisierung erleichtert die Entwicklung, kann aber durch explizite Deklaration präzisiert werden.
  
- **Formatierung:**  
  Nutze String-Interpolation, den Format-Operator (-f) und Methoden wie `ToString()`, um Ausgaben ansprechend zu gestalten.

Diese Grundlagen bilden das Fundament für fortgeschrittene PowerShell-Skripte und Automatisierungsaufgaben. Eine präzise Handhabung von Datentypen, Variablen und Formatierungstechniken erleichtert nicht nur die Skriptentwicklung, sondern auch deren Wartung und Erweiterung.