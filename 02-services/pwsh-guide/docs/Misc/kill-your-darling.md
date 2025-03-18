---
id: kill-your-darling
title: Kill your Darling - Wo die PowerShell versagt
---

# PowerShell Synopsis – Strukturierte Dokumentation für Funktionen

Eine gut strukturierte **Dokumentation** ist der Schlüssel zu wartbaren und verständlichen PowerShell-Skripten. Besonders in **größeren Projekten** oder **Teams** ist es wichtig, dass jeder schnell nachvollziehen kann, **was eine Funktion tut, welche Parameter sie benötigt und welche Werte sie zurückgibt**.

Mit einer **Synopsis** kannst du diese Informationen standardisiert direkt in dein Skript integrieren, sodass sie mit **Get-Help** abrufbar sind. In diesem Artikel erfährst du, wie du **eine professionelle Synopsis** für deine PowerShell-Funktionen erstellst.

---

## 1. Warum ist eine PowerShell Synopsis wichtig?

Eine **Synopsis** ist die **Kurzbeschreibung einer Funktion** und dient als Grundlage für die automatische Hilfe-Ausgabe in PowerShell.

✔ **Erleichtert die Wartung und Weiterentwicklung**  
✔ **Hilft Kollegen, Funktionen schneller zu verstehen**  
✔ **Macht Funktionen für `Get-Help` nutzbar**  
✔ **Erhöht die Code-Qualität in größeren Teams**  

> **Tipp:** Wenn du ein Skript in einem Unternehmen nutzt, ist eine gut dokumentierte Funktion oft genauso wichtig wie der Code selbst!

---

## 2. Aufbau einer PowerShell Synopsis

Eine **vollständige Dokumentation** für eine Funktion enthält folgende Abschnitte:

| **Abschnitt** | **Beschreibung** |
|--------------|------------------|
| `.SYNOPSIS`  | **Kurzbeschreibung der Funktion** |
| `.DESCRIPTION` | **Detailliertere Beschreibung der Funktion** |
| `.PARAMETER <Name>` | **Erläuterung der einzelnen Parameter** |
| `.EXAMPLE` | **Ein konkretes Anwendungsbeispiel** |
| `.NOTES` | **Zusätzliche Hinweise oder Metainformationen** |
| `.OUTPUTS` | **Erwartete Rückgabewerte** |

---

## 3. Beispiel für eine vollständige PowerShell Synopsis

Hier ein Beispiel für eine PowerShell-Funktion, die einen Benutzer in Active Directory sucht:

```powershell
function Get-ADUserDetails {
    <#
    .SYNOPSIS
    Ruft detaillierte Informationen zu einem Active Directory-Benutzer ab.

    .DESCRIPTION
    Diese Funktion sucht in Active Directory nach einem Benutzer basierend auf seinem SamAccountName 
    und gibt eine Zusammenfassung der wichtigsten Benutzerdaten zurück.

    .PARAMETER UserName
    Der SamAccountName des Benutzers, nach dem gesucht wird.

    .EXAMPLE
    Get-ADUserDetails -UserName "jdoe"
    Gibt Informationen über den Benutzer mit dem SamAccountName "jdoe" zurück.

    .OUTPUTS
    Gibt ein PSObject mit Benutzerdetails zurück.

    .NOTES
    Autor: Dein Name
    Version: 1.0
    Erstelldatum: 2024-01-10
    #>

    param (
        [Parameter(Mandatory = $true)]
        [string]$UserName
    )

    try {
        Get-ADUser -Filter {SamAccountName -eq $UserName} -Properties DisplayName, EmailAddress, Title
    }
    catch {
        Write-Error "Fehler beim Abrufen des Benutzers: $_"
    }
}
```

---

## 4. So rufst du die Dokumentation mit `Get-Help` ab

Nachdem du die Funktion in PowerShell geladen hast, kannst du die Dokumentation mit **Get-Help** abrufen:

```powershell
Get-Help Get-ADUserDetails
```

➡ **Ergebnis:** Eine kurze Synopsis mit Beschreibung, Parametern und Beispielen wird angezeigt.

Du kannst auch eine detaillierte Ansicht anfordern:

```powershell
Get-Help Get-ADUserDetails -Full
```

➡ Zeigt **alle Informationen**, inklusive Beispielen und Notizen.

---

## 5. Best Practices für PowerShell-Dokumentation

**✔ Halte die `.SYNOPSIS` kurz und prägnant**  
**✔ Ergänze `.EXAMPLE` mit praktischen Anwendungsfällen**  
**✔ Verwende `.NOTES` für wichtige Zusatzinformationen**  
**✔ Aktualisiere die Dokumentation regelmäßig**  

> **Tipp:** In Unternehmen ist es oft eine **Best Practice**, dass jede Funktion eine vollständige Synopsis haben muss.

---

## 6. Fazit

Eine gut dokumentierte PowerShell-Funktion spart Zeit und vermeidet Missverständnisse. Mit einer **strukturierten Synopsis** machst du deine Skripte **nachvollziehbarer, wartbarer und professioneller**.

✅ **Nutze `.SYNOPSIS`, `.PARAMETER`, `.EXAMPLE` und `.NOTES` für eine vollständige Dokumentation**  
✅ **Mach Funktionen mit `Get-Help` nutzbar**  
✅ **Halte dich an eine konsistente Struktur, um Code besser lesbar zu machen**  
