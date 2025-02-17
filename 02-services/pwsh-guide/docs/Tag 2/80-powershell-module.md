---
id: powershell-module
title: PowerShell-Module
sidebar_position: 80
---

# PowerShell-Module

PowerShell-Module sind Sammlungen von Funktionen, Cmdlets, Variablen und anderen Ressourcen, die in einer oder mehreren Dateien organisiert und als Einheit bereitgestellt werden. Module ermöglichen es dir, wiederverwendbaren Code zu strukturieren und zu verteilen – sei es als interne Lösung oder als öffentlich verfügbare Erweiterung.


## 1. Woher kommen Module?

### 1.1 PowerShell Gallery (PSGallery)

Die **PowerShell Gallery** ist das zentrale Repository für PowerShell-Module. Dort findest du eine Vielzahl von Modulen, die von Microsoft, Drittanbietern oder der Community erstellt wurden.  
Um ein Modul aus der PSGallery zu installieren, kannst du z. B. folgende Cmdlets verwenden:

```powershell
# Sucht nach einem Modul in der PowerShell Gallery
Find-Module -Name <ModulName>

# Installiert ein Modul aus der PowerShell Gallery
Install-Module -Name <ModulName>
```

Beachte dabei:
- **Vertrauenswürdigkeit:** Achte auf den Herausgeber und die Bewertungen der Module.
- **Abhängigkeiten:** Einige Module erfordern andere Module oder bestimmte Versionen von PowerShell.
- **Updates:** Halte deine Module aktuell, indem du regelmäßig nach Updates suchst.

### 1.2 Weitere Quellen

Neben der PSGallery können Module auch von internen Repositories, GitHub oder anderen Quellen bezogen werden. In Unternehmensumgebungen werden oft eigene, zertifizierte Module bereitgestellt, um den Sicherheitsanforderungen zu genügen.

## 2. Was ist bei der Verwendung von Modulen zu beachten?

- **Sicherheit:**  
  Stelle sicher, dass Module aus vertrauenswürdigen Quellen stammen. Verwende Signaturen oder interne Prüfmechanismen, um sicherzugehen, dass der Code nicht manipuliert wurde.

- **Versionskontrolle:**  
  Achte auf Versionsnummern und Kompatibilitäten. Module sollten eindeutig versioniert werden, sodass du bei Updates und Fehlerbehebungen nachvollziehen kannst, welche Version im Einsatz ist.

- **Abhängigkeiten:**  
  Prüfe, ob das Modul weitere Module oder spezielle PowerShell-Versionen benötigt. Abhängigkeiten sollten im Manifest dokumentiert sein.

- **Ladeverhalten:**  
  Module werden erst geladen, wenn ihre Funktionen oder Ressourcen benötigt werden. Verwende `Import-Module` explizit, wenn du ein Modul im Voraus laden möchtest.

## 3. Eigene Module erstellen

Das Erstellen eigener Module ermöglicht es dir, deinen wiederverwendbaren Code zu strukturieren und zu verteilen.

### 3.1 Modulstruktur

Ein typisches Modul besteht aus:
- Einer **.psm1-Datei**, die den Code (Funktionen, Variablen etc.) enthält.
- Einer **Modulmanifest-Datei (.psd1)**, die Metadaten über das Modul (Name, Version, Abhängigkeiten, Autor etc.) enthält. Das Manifest ist optional, wird aber für größere Module empfohlen.

**Beispiel für einen Modulordner:**
```
MyModule
  ├── MyModule.psm1 
  └── MyModule.psd1
```

### 3.2 Erstellen der .psm1-Datei

In der **MyModule.psm1** definierst du deine Funktionen. Beispiel:

```powershell
function Get-Greeting {
    param(
        [string]$Name = "Welt"
    )
    return "Hallo, $Name!"
}

# Exportiere die Funktion, damit sie beim Laden des Moduls verfügbar ist
Export-ModuleMember -Function Get-Greeting
```

### 3.3 Erstellen des Modulmanifests

Ein Modulmanifest enthält wichtige Informationen über dein Modul. Erstelle ein Manifest mit `New-ModuleManifest`:

```powershell
New-ModuleManifest -Path "C:\Pfad\zu\MyModule\MyModule.psd1" `
    -ModuleVersion "1.0.0" `
    -Author "Dein Name" `
    -Description "Dieses Modul enthält Funktionen für Begrüßungen." `
    -FunctionsToExport "Get-Greeting"
```

Das Manifest hilft dabei, Abhängigkeiten, Kompatibilitäten und weitere Metadaten festzulegen.

### 3.4 Modul laden und verwenden

Nachdem du dein Modul erstellt hast, kannst du es mit `Import-Module` in deine Sitzung laden:

```powershell
Import-Module -Name "C:\Pfad\zu\MyModule"
Write-Output (Get-Greeting -Name "Max")
```

## 4. Zusammenfassung

- **Bezug von Modulen:**  
  Die PowerShell Gallery (PSGallery) ist die zentrale Anlaufstelle, aber Module können auch aus anderen Quellen stammen.
- **Sicherheits- und Versionsaspekte:**  
  Achte darauf, dass Module vertrauenswürdig und kompatibel sind. Dokumentiere Abhängigkeiten und Versionsnummern.
- **Eigene Module:**  
  Erstelle eigene Module, indem du deinen Code in einer .psm1-Datei organisierst und optional ein Manifest (.psd1) erstellst. Dies fördert die Wiederverwendbarkeit und die Wartbarkeit deines Codes.

Diese Best Practices und Techniken helfen dir, den vollen Nutzen aus PowerShell-Modulen zu ziehen – sei es beim Einsatz von Drittanbieter-Modulen oder bei der Entwicklung eigener Lösungen.

