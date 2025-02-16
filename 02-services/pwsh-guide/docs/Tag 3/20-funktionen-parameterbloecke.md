---
id: funktionen-parameterbloecke
title: Funktionen & Parameterblöcke in PowerShell
sidebar_position: 20
---

# Funktionen & Parameterblöcke in PowerShell

Funktionen sind ein wesentlicher Bestandteil von PowerShell, da sie es dir ermöglichen, wiederverwendbaren und modularen Code zu schreiben. Eine Funktion wird mit dem Schlüsselwort `function` definiert, gefolgt von einem Funktionsnamen und einem Codeblock. Parameterblöcke, die mit `param()` definiert werden, erlauben es dir, Eingabeparameter zu spezifizieren, deren Datentypen festzulegen und zusätzliche Attribute wie Pflichtparameter oder Validierung zu nutzen.

> **Tipp zur Visualisierung:**  
> Eine begleitende Grafik könnte den Aufbau einer Funktion veranschaulichen. Zum Beispiel:
> - Den Funktionskopf mit dem Namen und Parameterblock.
> - Den Hauptcodeblock, in dem die Logik implementiert ist.
> - Hinweise zur Fehlerbehandlung (z. B. Try/Catch-Blöcke) innerhalb der Funktion.

## 1. Grundlagen von Funktionen

### 1.1 Einfache Funktion ohne Parameter

Eine Funktion ohne Parameter ist sehr einfach aufgebaut:

```powershell
function Say-Hello {
    "Hello, World!"
}
```

Aufruf:

```powershell
Say-Hello
```

### 1.2 Funktion mit einem Parameterblock

Durch den Einsatz eines Parameterblocks kannst du deiner Funktion Eingaben übergeben:

```powershell
function Get-Greeting {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Name,
        
        [int]$Age = 0  # Optionaler Parameter mit Standardwert 0
    )
    "Hello, $Name! You are $Age years old."
}
```

Aufruf:

```powershell
Get-Greeting -Name "Max" -Age 30
```

## 2. Erweiterte Parameterblöcke und Validierung

Du kannst Parameter zusätzlich validieren und deren Werte einschränken. Dies erhöht die Zuverlässigkeit deiner Funktionen.

### 2.1 Beispiel mit Validierung und Switch-Parameter

```powershell
function Set-Configuration {
    param(
        [Parameter(Mandatory = $true)]
        [ValidateSet("Low", "Medium", "High")]
        [string]$Priority,
        
        [switch]$VerboseOutput
    )
    if ($VerboseOutput) {
        Write-Output "Setting configuration with high verbosity."
    }
    else {
        Write-Output "Setting configuration with priority: $Priority."
    }
}
```

Aufruf:

```powershell
Set-Configuration -Priority "High" -VerboseOutput
```

### 2.2 Parameter als Objekte

Manchmal ist es hilfreich, komplexe Parameter als Objekte zu übergeben, um strukturierte Daten zu verarbeiten:

```powershell
function Process-UserData {
    param(
        [Parameter(Mandatory = $true)]
        [PSCustomObject]$UserInfo
    )
    "User Name: $($UserInfo.Name)"
    "User Age: $($UserInfo.Age)"
}
```

Aufruf:

```powershell
$user = [PSCustomObject]@{
    Name = "Alice"
    Age  = 28
}
Process-UserData -UserInfo $user
```

## 3. Best Practices für Funktionen

- **Modularität:**  
  Teile komplexe Aufgaben in mehrere kleine Funktionen auf, die jeweils eine spezifische Aufgabe erledigen.
  
- **Parameterüberprüfung:**  
  Nutze Parameterattribute wie `[Parameter(Mandatory = $true)]` und Validierungsattribute wie `[ValidateSet()]` oder `[ValidateRange()]`, um sicherzustellen, dass deine Funktion korrekte Eingaben erhält.
  
- **Dokumentation:**  
  Kommentiere deine Funktionen mit Hilfe von Kommentarblöcken (Help Comments), um den Zweck, Parameter und Beispiele für den Aufruf zu dokumentieren.
  
- **Fehlerbehandlung:**  
  Integriere Try/Catch-Blöcke innerhalb deiner Funktionen, um Fehler abzufangen und sinnvolle Fehlermeldungen auszugeben.

## 4. Zusammenfassung

- **Definition:**  
  Funktionen werden in PowerShell mit dem `function`-Schlüsselwort definiert und ermöglichen es dir, Code in wiederverwendbare Blöcke zu unterteilen.
  
- **Parameterblöcke:**  
  Der Einsatz von `param()` erlaubt es dir, Eingabewerte zu definieren, Datentypen festzulegen und die Validierung der Parameter zu erzwingen.
  
- **Best Practices:**  
  Durch Modularität, klare Namensgebung, umfangreiche Dokumentation und Fehlerbehandlung wird dein Code robuster und leichter wartbar.

Diese Techniken helfen dir, deine PowerShell-Skripte strukturiert und effizient aufzubauen und die Wiederverwendbarkeit sowie Wartbarkeit deines Codes zu verbessern.

