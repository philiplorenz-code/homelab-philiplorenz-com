---
id: mathematische-operationen
title: Mathematische Operationen
sidebar_position: 50
---

# Mathematische Operationen in PowerShell

In diesem Dokument erfährst du, wie du in PowerShell mathematische Operationen durchführst. PowerShell unterstützt alle gängigen arithmetischen Operatoren, die du in deinen Skripten für einfache bis komplexe Berechnungen nutzen kannst.

## 1. Grundlegende Operatoren

Die wichtigsten arithmetischen Operatoren in PowerShell sind:

- **Addition (`+`):** Addiert zwei Zahlen.
- **Subtraktion (`-`):** Subtrahiert eine Zahl von einer anderen.
- **Multiplikation (`*`):** Multipliziert zwei Zahlen.
- **Division (`/`):** Teilt eine Zahl durch eine andere.
- **Modulo (`%`):** Gibt den Rest einer Division zurück.

## 2. Vergleichstabelle der Operatoren

| **Operator** | **Beschreibung**                                | **Beispiel**             |
|--------------|-------------------------------------------------|--------------------------|
| `+`          | Addition                                        | `5 + 3` ergibt `8`       |
| `-`          | Subtraktion                                     | `5 - 3` ergibt `2`       |
| `*`          | Multiplikation                                  | `5 * 3` ergibt `15`      |
| `/`          | Division                                        | `6 / 3` ergibt `2`       |
| `%`          | Modulo (Restwert der Division)                  | `7 % 3` ergibt `1`       |

## 3. Code-Beispiele

### 3.1 Einfache Arithmetik

Das folgende Beispiel demonstriert die grundlegenden Operationen:

```powershell
# Addition
$summe = 5 + 3
Write-Output "5 + 3 = $summe"

# Subtraktion
$differenz = 5 - 3
Write-Output "5 - 3 = $differenz"

# Multiplikation
$produkt = 5 * 3
Write-Output "5 * 3 = $produkt"

# Division
$quotient = 6 / 3
Write-Output "6 / 3 = $quotient"

# Modulo
$rest = 7 % 3
Write-Output "7 % 3 = $rest"
```

### 3.2 Berechnungen mit Variablen

Mathematische Operationen lassen sich problemlos mit Variablen kombinieren. Im folgenden Beispiel wird die Fläche eines Rechtecks berechnet:

```powershell
$laenge = 10
$breite = 5
$flaeche = $laenge * $breite
Write-Output "Die Fläche des Rechtecks beträgt: $flaeche"
```

### 3.3 Komplexe Ausdrücke und Klammerung

Mit Klammern kannst du die Reihenfolge der Operationen steuern:

```powershell
# Ohne Klammern: Multiplikation hat Vorrang vor Addition
$ergebnis1 = 5 + 3 * 2  # ergibt 5 + 6 = 11
Write-Output "5 + 3 * 2 = $ergebnis1"

# Mit Klammern: Addition wird zuerst ausgeführt
$ergebnis2 = (5 + 3) * 2  # ergibt 8 * 2 = 16
Write-Output "(5 + 3) * 2 = $ergebnis2"
```

## 4. Erweiterte Berechnungen mit Speichereinheiten

PowerShell unterstützt numerische Suffixe wie `KB`, `MB` und `GB`, die dir helfen, mit Speichergrößen zu rechnen. Diese Literale wandeln die angegebenen Werte automatisch in Bytes um und ermöglichen so einfache Umrechnungen und Vergleiche.

Beispiele:

```powershell
# Definieren eines Wertes in Megabytes
$bytes = 10MB  # entspricht 10 Megabytes in Bytes

# Umrechnung in Kilobytes
$kilobytes = $bytes / 1KB
Write-Output "$bytes Bytes entsprechen $kilobytes KB"

# Umrechnung in Megabytes (direkt)
$megabytes = $bytes / 1MB
Write-Output "$bytes Bytes entsprechen $megabytes MB"

# Umrechnung in Gigabytes
$gigabytes = $bytes / 1GB
Write-Output "$bytes Bytes entsprechen $gigabytes GB"
```

## 5. Zusammenfassung

PowerShell bietet eine umfassende Unterstützung für mathematische Operationen:
- **Grundoperationen:** Addition, Subtraktion, Multiplikation, Division und Modulo.
- **Klammerung:** Zum Steuern der Auswertungsreihenfolge.
- **Erweiterte Berechnungen:** Mit numerischen Suffixen wie `KB`, `MB` und `GB` zur Handhabung von Speichergrößen.

Diese Operatoren und Tricks ermöglichen es dir, komplexe Berechnungen in deinen Skripten einfach und effizient umzusetzen.

