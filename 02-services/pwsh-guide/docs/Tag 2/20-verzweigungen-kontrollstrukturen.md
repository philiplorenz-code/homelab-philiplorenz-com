---
id: verzweigungen-kontrollstrukturen
title: Verzweigungen (if/else) & Kontrollstrukturen (switch)
sidebar_position: 20
---

# Verzweigungen (if/else) & Kontrollstrukturen (switch) in PowerShell

In PowerShell kannst du durch Verzweigungen und Kontrollstrukturen den Ablauf deiner Skripte steuern. Die am häufigsten genutzten Strukturen sind **if/else**-Anweisungen für einfache Bedingungen und **switch**-Anweisungen für komplexe Vergleiche und Mehrfachentscheidungen. Diese Mechanismen ermöglichen es dir, Entscheidungen zu treffen, basierend auf den Werten von Variablen oder Ergebnissen von Befehlen.


## 1. Verzweigungen mit if/else

Mit **if/else**-Anweisungen führst du bedingte Prüfungen durch. Der grundlegende Aufbau sieht so aus:

```powershell
if (<Bedingung>) {
    # Code, der ausgeführt wird, wenn die Bedingung wahr ist.
} elseif (<andere Bedingung>) {
    # Code, der ausgeführt wird, wenn die erste Bedingung falsch, die zweite aber wahr ist.
} else {
    # Code, der ausgeführt wird, wenn keine der obigen Bedingungen zutrifft.
}
```

### 1.1 Einfache if/else-Beispiele

#### Beispiel 1: Numerischer Vergleich

```powershell
$zahl = 7

if ($zahl -gt 10) {
    Write-Output "Die Zahl ist größer als 10."
} elseif ($zahl -eq 10) {
    Write-Output "Die Zahl ist gleich 10."
} else {
    Write-Output "Die Zahl ist kleiner als 10."
}
```

#### Beispiel 2: String-Vergleich

```powershell
$name = "Alice"

if ($name -eq "Bob") {
    Write-Output "Hallo Bob!"
} else {
    Write-Output "Du bist nicht Bob, sondern $name."
}
```

### 1.2 Best Practices für if/else

- **Klar strukturieren:**  
  Nutze Einrückungen und Kommentare, um den Code lesbar zu gestalten.
- **Bedingungen präzise formulieren:**  
  Verwende aussagekräftige Vergleiche (z. B. `-eq`, `-lt`, `-gt`), um Missverständnisse zu vermeiden.
- **Vermeide zu tiefe Verschachtelungen:**  
  Extrahiere komplexe Bedingungen in eigene Variablen oder Funktionen, um die Lesbarkeit zu erhöhen.

## 2. Kontrollstrukturen mit switch

Die **switch**-Anweisung ist ideal, wenn du einen Wert gegen mehrere mögliche Fälle überprüfen möchtest. PowerShells switch unterstützt auch reguläre Ausdrücke und Wildcard-Vergleiche.

### 2.1 Grundstruktur von switch

```powershell
switch (<Ausdruck>) {
    <Wert1> {
        # Code, wenn <Ausdruck> gleich <Wert1> ist.
        break
    }
    <Wert2> {
        # Code, wenn <Ausdruck> gleich <Wert2> ist.
        break
    }
    default {
        # Code, wenn keiner der oben genannten Fälle zutrifft.
    }
}
```

### 2.2 Beispiele für switch

#### Beispiel 1: Einfache switch-Anweisung

```powershell
$tag = "Dienstag"

switch ($tag) {
    "Montag" {
        Write-Output "Start in die Woche."
        break
    }
    "Dienstag" {
        Write-Output "Zweiter Tag der Woche."
        break
    }
    "Freitag" {
        Write-Output "Fast Wochenende!"
        break
    }
    default {
        Write-Output "Ein anderer Tag der Woche."
    }
}
```

#### Beispiel 2: switch mit Wildcards und regulären Ausdrücken

Mit dem Parameter `-Wildcard` oder `-Regex` kannst du flexiblere Vergleiche durchführen:

```powershell
$filename = "report_2025.txt"

switch -Wildcard ($filename) {
    "*.txt" {
        Write-Output "Es handelt sich um eine Textdatei."
        break
    }
    "*.csv" {
        Write-Output "Es handelt sich um eine CSV-Datei."
        break
    }
    default {
        Write-Output "Unbekannter Dateityp."
    }
}
```

### 2.3 Best Practices für switch

- **Verwende den default-Zweig:**  
  Stelle sicher, dass für Fälle, die nicht explizit behandelt werden, ein Standardcode ausgeführt wird.
- **Nutze break:**  
  Verwende `break`, um zu verhindern, dass nachfolgende Blöcke unnötig ausgeführt werden.
- **Spezifiziere den Vergleichstyp:**  
  Nutze bei Bedarf `-Wildcard` oder `-Regex`, um den Vergleich an deine Anforderungen anzupassen.

## 3. Zusammenfassung

- **if/else:**  
  Ermöglichen die Auswertung einzelner Bedingungen und das Durchführen von unterschiedlichen Codepfaden basierend auf den Ergebnissen.  
- **switch:**  
  Erlaubt die Überprüfung eines Ausdrucks gegen mehrere Fälle und unterstützt dabei flexible Vergleiche mit Wildcards und regulären Ausdrücken.
- **Best Practices:**  
  Strukturierter Code, klare Bedingungen und der Einsatz von Standardzweigen (default) machen deine Verzweigungslogik robust und wartbar.

Diese Kontrollstrukturen sind fundamentale Bausteine in PowerShell, die dir helfen, den Programmfluss dynamisch zu steuern und auf unterschiedliche Situationen zu reagieren.