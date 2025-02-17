---
id: variablen-umgebungsvariablen
title: Variablen und Umgebungsvariablen
sidebar_position: 60
---

# Variablen und Umgebungsvariablen in PowerShell

In diesem Dokument erfährst du, wie du in PowerShell mit Variablen arbeitest – von der einfachen Zuweisung bis hin zur Nutzung von speziellen Umgebungsvariablen. Variablen sind essenzielle Bausteine für Skripte und helfen dir, Daten dynamisch zu speichern und zu verarbeiten.

## 1. Variablen in PowerShell

In PowerShell werden Variablen mit dem Dollarzeichen (`$`) deklariert und du musst den Typ nicht explizit angeben, da PowerShell eine dynamische Typisierung verwendet.

### 1.1 Erstellen und Zuweisen von Variablen

Du kannst einer Variablen einfach einen Wert zuweisen:

```powershell
$name = "Max"
$age = 30
Write-Output "Name: $name, Alter: $age"
```

### 1.2 Variablen mit verschiedenen Datentypen

Variablen können unterschiedliche Datentypen enthalten, wie Strings, Zahlen, Arrays oder Hashtables:

```powershell
# String
$greeting = "Hallo Welt"

# Zahl
$number = 42

# Array
$colors = @("rot", "grün", "blau")
Write-Output "Farben: $($colors -join ', ')"

# Hashtable (ähnlich wie Dictionaries)
$person = @{
    Name = "Max"
    Alter = 30
}
Write-Output "Person: $($person.Name) ist $($person.Alter) Jahre alt."
```



## 2. Umgebungsvariablen

Umgebungsvariablen sind spezielle Variablen, die vom Betriebssystem bereitgestellt werden und Informationen über die aktuelle Umgebung enthalten. In PowerShell greifst du auf sie über den `$env:`-Präfix zu.

### 2.1 Zugriff auf Umgebungsvariablen

Beispielsweise kannst du den TEMP-Ordner oder den PATH abfragen:

```powershell
Write-Output "Der TEMP-Ordner ist: $env:TEMP"
Write-Output "Der PATH ist: $env:PATH"
```

### 2.2 Ändern und Setzen von Umgebungsvariablen

Du kannst Umgebungsvariablen auch innerhalb deiner PowerShell-Sitzung ändern oder neue erstellen. Beachte, dass diese Änderungen nur für die aktuelle Sitzung gelten:

```powershell
# Setzen einer neuen Umgebungsvariablen
$env:MyVar = "TestWert"
Write-Output "MyVar ist gesetzt auf: $env:MyVar"
```

### 2.3 Auflisten aller Umgebungsvariablen

Um eine Übersicht über alle aktuell gesetzten Umgebungsvariablen zu erhalten, kannst du den folgenden Befehl verwenden:

```powershell
Get-ChildItem Env:
```

## 3. Unterschiede und Best Practices

- **Normale Variablen** werden in deinem Skript verwendet und können in verschiedenen Scopes existieren.  
- **Umgebungsvariablen** stammen aus der Systemumgebung und werden mit `$env:` angesprochen. Sie sind oft schreibgeschützt für das Skript (d.h. Änderungen gelten nur in der aktuellen Sitzung) und werden an untergeordnete Prozesse vererbt.

**Best Practices:**
- Verwende aussagekräftige Namen für deine Variablen.
- Achte auf den Scope der Variablen, um ungewollte Nebeneffekte zu vermeiden.
- Greife auf Umgebungsvariablen nur dann zu, wenn du Informationen über die Systemumgebung benötigst oder externe Parameter verarbeiten möchtest.

## 4. Zusammenfassung

- **Variablen**: Mit dem `$`-Zeichen deklarierte Container zur Speicherung von Daten – flexibel einsetzbar in Skripten.
- **Umgebungsvariablen**: Spezielle Variablen, die durch das Betriebssystem bereitgestellt werden und über den `$env:`-Präfix angesprochen werden.
- **Praktische Anwendung**: 
    - Mit `Get-ChildItem Env:` kannst du alle Umgebungsvariablen auflisten, während du normale Variablen zur dynamischen Datenverarbeitung in deinen Skripten nutzt.
    - Mit `Get-Variable` kannst du alle Variablen auflisten.
Diese Grundlagen helfen dir, in PowerShell effizient mit Daten zu arbeiten und sowohl lokale als auch systemweite Parameter zu nutzen.

