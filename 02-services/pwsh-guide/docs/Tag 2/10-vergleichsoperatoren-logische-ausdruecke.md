---
id: vergleichsoperatoren-logische-ausdruecke
title: Vergleichsoperatoren & logische Ausdrücke (eq, lt, gt)
sidebar_position: 10
---

# Vergleichsoperatoren & logische Ausdrücke in PowerShell

PowerShell bietet eine Vielzahl von Vergleichsoperatoren und logischen Operatoren, die dir dabei helfen, Bedingungen in Skripten präzise auszuwerten. In diesem Dokument stellen wir die wichtigsten Vergleichsoperatoren vor – von numerischen und textuellen Vergleichen (eq, lt, gt etc.) bis hin zu speziellen Operatoren wie `contains`, `like` und `match` – und erklären, wie logische Ausdrücke mit `-and`, `-or` und `-not` kombiniert werden.

![Vergleichsoperatoren](/img/powershell-comparison-operators.png)  

## 1. Vergleichsoperatoren

PowerShell verwendet verschiedene Operatoren, um Werte miteinander zu vergleichen. Hier sind die gängigen Operatoren:

### 1.1 Numerische und Textvergleiche

Im Folgenden findest du eine Tabelle, die die gängigen Vergleichsoperatoren in PowerShell zusammenfasst. Diese Operatoren werden sowohl für numerische als auch für textuelle Vergleiche genutzt.

| Operator | Beschreibung                                 | Beispiel-Code                                      | Beispiel-Output           |
|----------|----------------------------------------------|----------------------------------------------------|---------------------------|
| -eq      | Gleich (equal to)                            | `if (5 -eq 5) { "Equal" }`                          | Equal                     |
| -ne      | Ungleich (not equal to)                      | `if (5 -ne 3) { "Not Equal" }`                      | Not Equal                 |
| -lt      | Kleiner als (less than)                      | `if (3 -lt 5) { "Less" }`                           | Less                      |
| -le      | Kleiner oder gleich (less than or equal to)  | `if (5 -le 5) { "Less or Equal" }`                  | Less or Equal             |
| -gt      | Größer als (greater than)                    | `if (7 -gt 5) { "Greater" }`                        | Greater                   |
| -ge      | Größer oder gleich (greater than or equal to)| `if (5 -ge 5) { "Greater or Equal" }`               | Greater or Equal          |

### 1.2 Spezielle Vergleichsoperatoren für Strings und Collections

- **-like:** Vergleicht einen String anhand eines Musters (Wildcardvergleich)  
  Beispiel:  
  ```powershell
  $string = "PowerShell"
  if ($string -like "*Shell") { Write-Output "Passend!" }
  ```

- **-notlike:** Das Gegenteil von `-like`  
  Beispiel:  
  ```powershell
  if ($string -notlike "Power*") { Write-Output "Passt nicht!" }
  ```

- **-match:** Vergleicht einen String mit einem regulären Ausdruck  
  Beispiel:  
  ```powershell
  $string = "abc123"
  if ($string -match "\d+") { Write-Output "Enthält Zahlen" }
  ```

- **-notmatch:** Das Gegenteil von `-match`  
  Beispiel:  
  ```powershell
  if ($string -notmatch "^\d+$") { Write-Output "Besteht nicht ausschließlich aus Zahlen" }
  ```

- **-contains:** Prüft, ob eine Sammlung ein bestimmtes Element enthält  
  Beispiel:  
  ```powershell
  $array = @(1, 2, 3, 4, 5)
  if ($array -contains 3) { Write-Output "Array enthält 3" }
  ```

- **-notcontains:** Das Gegenteil von `-contains`  
  Beispiel:  
  ```powershell
  if ($array -notcontains 10) { Write-Output "Array enthält nicht 10" }
  ```

- **-in:** Prüft, ob ein Element in einer Sammlung enthalten ist (umgekehrte Logik zu `-contains`)  
  Beispiel:  
  ```powershell
  $item = 3
  if ($item -in $array) { Write-Output "Element ist im Array" }
  ```

- **-notin:** Das Gegenteil von `-in`  
  Beispiel:  
  ```powershell
  if ($item -notin $array) { Write-Output "Element ist nicht im Array" }
  ```

## 2. Logische Operatoren

Logische Operatoren helfen dir, mehrere Bedingungen miteinander zu verknüpfen:

- **-and:** Logisches UND – beide Bedingungen müssen wahr sein.  
  Beispiel:  
  ```powershell
  if ( ($a -gt 5) -and ($a -lt 10) ) {
      Write-Output "a liegt zwischen 6 und 9"
  }
  ```

- **-or:** Logisches ODER – mindestens eine Bedingung muss wahr sein.  
  Beispiel:  
  ```powershell
  if ( ($a -lt 5) -or ($a -gt 10) ) {
      Write-Output "a ist kleiner als 5 oder größer als 10"
  }
  ```

- **-not:** Negiert einen Ausdruck.  
  Beispiel:  
  ```powershell
  if (-not ($a -eq 7)) {
      Write-Output "a ist nicht gleich 7"
  }
  ```

## 3. Kombinierte Beispiele

Hier ein Beispiel, das mehrere Vergleichsoperatoren und logische Operatoren kombiniert:

```powershell
# Beispiel: Überprüfe, ob ein String ein bestimmtes Muster enthält und ob ein Element in einem Array vorhanden ist
$string = "PowerShell ist großartig"
$array = @("Scripting", "Automation", "PowerShell")

if (($string -like "*Shell*") -and ($array -contains "PowerShell")) {
    Write-Output "Der String enthält 'Shell' und das Array enthält 'PowerShell'."
}
```

Ein weiteres Beispiel, das reguläre Ausdrücke und logische Operatoren kombiniert:

```powershell
# Beispiel: Prüfe, ob ein String nicht nur aus Zahlen besteht oder einen bestimmten Ausdruck nicht enthält
$string = "abc123"
if (($string -notmatch "^\d+$") -and ($string -notlike "*Test*")) {
    Write-Output "Der String besteht nicht ausschließlich aus Zahlen und enthält nicht 'Test'."
}
```

## 4. Zusammenfassung

- **Vergleichsoperatoren** wie `-eq`, `-lt`, `-gt` und weitere erlauben präzise Vergleiche von Zahlen und Strings.
- **Spezialoperatoren** wie `-like`, `-match`, `-contains` und ihre Gegenstücke bieten erweiterte Vergleichsmöglichkeiten – ideal für Mustervergleiche und die Arbeit mit Sammlungen.
- **Logische Operatoren** (`-and`, `-or`, `-not`) ermöglichen das Verknüpfen mehrerer Bedingungen zu komplexen logischen Ausdrücken.

Mit diesen Operatoren kannst du Bedingungen in deinen PowerShell-Skripten flexibel und präzise abbilden und so deinen Code noch leistungsfähiger gestalten.
