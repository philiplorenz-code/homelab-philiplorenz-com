---
id: datenstrukturen
title: "Datenstrukturen: Arrays, Hashtables, PSCustomObject"
sidebar_position: 140
---

# Datenstrukturen: Arrays, Hashtables, PSCustomObject

In PowerShell stehen dir verschiedene Datenstrukturen zur Verfügung, um Daten strukturiert zu speichern und zu verarbeiten. In diesem Dokument betrachten wir im Detail **Arrays**, **Hashtables** und **PSCustomObject**. Diese Datenstrukturen ermöglichen es dir, Informationen effizient zu organisieren und für die weitere Verarbeitung aufzubereiten.


## 1. Arrays

Arrays sind geordnete Sammlungen von Elementen. Sie werden häufig verwendet, um Listen von Werten (z. B. Zahlen, Strings) zu speichern.  
PowerShell-Arrays werden mit der `@()`-Syntax definiert.

![Array](/img/array.webp)  

### 1.1 Erstellung und Zugriff

```powershell
# Array-Erstellung mit Zahlen
$zahlen = @(1, 2, 3, 4, 5)
# Array-Erstellung mit Strings
$namen = @("Alice", "Bob", "Charlie")

# Ausgabe des gesamten Arrays
Write-Output $zahlen
Write-Output $namen

# Zugriff auf einzelne Elemente (Index beginnt bei 0)
Write-Output "Erstes Element in 'zahlen': $($zahlen[0])"
Write-Output "Zweiter Name: $($namen[1])"
```

### 1.2 Dynamische Typisierung und Operationen

Je nachdem, ob du Zahlen oder Strings in einem Array speicherst, können Operationen unterschiedlich interpretiert werden:

```powershell
# Addition als numerische Operation
[int]$a = 5
[int]$b = 5
$resultZahl = $a + $b   # ergibt 10

# Addition als String-Verkettung
[string]$aStr = "5"
[string]$bStr = "5"
$resultString = $aStr + $bStr   # ergibt "55"

Write-Output "Zahlenaddition: 5 + 5 = $resultZahl"
Write-Output "String-Konkatenation: '5' + '5' = $resultString"
```

## 2. Hashtables

Hashtables speichern Daten als Schlüssel-Wert-Paare und sind vergleichbar mit Dictionaries in anderen Sprachen. Sie eignen sich hervorragend zur strukturierten Speicherung von zusammengehörigen Daten.

![Hashtable](/img/KeyValue.png)  

### 2.1 Erstellung und Zugriff

```powershell
# Erstellung eines Hashtables
$person = @{
    "Name"  = "Alice"
    "Alter" = 28
    "Beruf" = "Entwicklerin"
}

# Ausgabe des gesamten Hashtables
Write-Output $person

# Zugriff auf einen Wert über den Schlüssel
Write-Output "Name: $($person['Name'])"
```

### 2.2 Eigenschaften von Hashtables

- **Schlüssel sind standardmäßig case-insensitive.**
- Du kannst den Inhalt eines Hashtables auch dynamisch erweitern:
  
```powershell
# Hinzufügen eines neuen Schlüssel-Wert-Paares
$person["Stadt"] = "Berlin"
Write-Output $person
```

## 3. PSCustomObject

Mit **PSCustomObject** kannst du benutzerdefinierte Objekte erstellen, die strukturierte Daten in Form von Eigenschaften enthalten. Diese Objekte eignen sich ideal zur Ausgabe in Tabellenform und zur Übergabe in der Pipeline.

### 3.1 Erstellung eines PSCustomObject

```powershell
# Erstellung eines benutzerdefinierten Objekts
$customPerson = [PSCustomObject]@{
    Name   = "Bob"
    Alter  = 35
    Beruf  = "Designer"
    Stadt  = "Berlin"
}

# Ausgabe des Objekts
Write-Output $customPerson
```

### 3.2 Verwendung in der Pipeline

PSCustomObject-Instanzen lassen sich hervorragend mit Cmdlets wie `Select-Object`, `Format-Table` oder `Export-Csv` weiterverarbeiten:

```powershell
# Beispiel: Ausgabe als Tabelle
$customPerson | Format-Table -AutoSize
```

## 4. Zusammenfassung und Best Practices

- **Arrays:**  
  Verwende Arrays, um geordnete Listen von Werten zu speichern. Achte darauf, dass der Datentyp der Elemente (Zahl oder String) die Interpretation von Operationen beeinflusst.

- **Hashtables:**  
  Hashtables ermöglichen das Speichern von Daten als Schlüssel-Wert-Paare und eignen sich für strukturierte Informationen, bei denen ein direkter Zugriff über den Schlüssel erforderlich ist.

- **PSCustomObject:**  
  Mit PSCustomObject kannst du benutzerdefinierte Objekte mit beliebigen Eigenschaften erstellen. Dies ist besonders nützlich, wenn du strukturierte Ergebnisse erzeugen und in der Pipeline weiterverarbeiten möchtest.

Diese Datenstrukturen sind die Grundlage für viele fortgeschrittene Skripting- und Automatisierungsaufgaben in PowerShell. Mit Hilfe von Abbildungen, die den Aufbau und die Unterschiede visuell darstellen, kannst du dein Verständnis dieser Konzepte noch weiter vertiefen.


## Weiterführende Links

- [PowerShell Hash Table vs. PSCustomObject: Deep Dive & Comparison][hashtable_vs_customobject]
[hashtable_vs_customobject]: https://jeffbrown.tech/powershell-hash-table-pscustomobject/