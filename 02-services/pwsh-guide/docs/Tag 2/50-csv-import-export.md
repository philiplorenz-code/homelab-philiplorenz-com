---
id: csv-import-export
title: CSV-Import & Export
sidebar_position: 50
---

# CSV-Import & Export in PowerShell

CSV (Comma-Separated Values) Dateien sind ein weit verbreitetes Format zur Speicherung und Übertragung tabellarischer Daten. PowerShell bietet leistungsfähige Cmdlets wie **Import-Csv** und **Export-Csv**, um CSV-Daten einfach in PowerShell zu importieren, zu verarbeiten und wieder zu exportieren.

> **Tipp zur Visualisierung:**  
> Eine begleitende Grafik könnte den typischen Datenfluss veranschaulichen:  
> - Eine CSV-Datei wird eingelesen und in PowerShell-Objekte umgewandelt.  
> - Die Objekte werden weiterverarbeitet (z. B. gefiltert, sortiert).  
> - Anschließend werden die Objekte wieder als CSV exportiert.

## 1. CSV-Import mit Import-Csv

Das Cmdlet **Import-Csv** liest eine CSV-Datei und wandelt jede Zeile in ein PowerShell-Objekt um. Dabei werden die Spaltenüberschriften der CSV zu den Eigenschaften der Objekte.

### 1.1 Beispiel: CSV-Datei importieren

Angenommen, du hast eine Datei `Mitarbeiter.csv` mit folgendem Inhalt:

```
Name,Abteilung,Alter 
Alena,IT,30 
Bob,HR,35 
Charlie,Finanzen,28
```


Du kannst diese Datei wie folgt importieren:

```powershell
$mitarbeiter = Import-Csv -Path "C:\Daten\Mitarbeiter.csv"
Write-Output $mitarbeiter
```

Jedes Objekt im Array `$mitarbeiter` besitzt die Eigenschaften `Name`, `Abteilung` und `Alter`.

### 1.2 Verarbeitung der importierten Daten

Du kannst die importierten Daten beispielsweise filtern oder sortieren:

```powershell
# Filter: Zeige alle Mitarbeiter in der IT-Abteilung
$itMitarbeiter = $mitarbeiter | Where-Object { $_.Abteilung -eq "IT" }
Write-Output $itMitarbeiter

# Sortierung: Sortiere Mitarbeiter nach Alter
$sortierteMitarbeiter = $mitarbeiter | Sort-Object Alter
Write-Output $sortierteMitarbeiter
```

## 2. CSV-Export mit Export-Csv

Das Cmdlet **Export-Csv** schreibt PowerShell-Objekte in eine CSV-Datei. Du kannst dabei festlegen, welche Eigenschaften exportiert werden sollen, und ob Typinformationen (Kopfzeilen) enthalten sein sollen.

### 2.1 Beispiel: Objekte in eine CSV-Datei exportieren

Angenommen, du hast eine Sammlung von Produktobjekten, die du als CSV speichern möchtest:

```powershell
$produkte = @(
    [PSCustomObject]@{ Name = "Laptop"; Preis = 1200; Lager = 10 },
    [PSCustomObject]@{ Name = "Tablet"; Preis = 600; Lager = 25 },
    [PSCustomObject]@{ Name = "Smartphone"; Preis = 800; Lager = 15 }
)
$produkte | Export-Csv -Path "C:\Daten\Produkte.csv" -NoTypeInformation
```

### 2.2 Weitere Optionen und Best Practices

- **Delimiter anpassen:**  
  Standardmäßig wird ein Komma als Trennzeichen verwendet. Mit dem Parameter `-Delimiter` kannst du ein alternatives Trennzeichen (z. B. Semikolon) festlegen.

```powershell
$produkte | Export-Csv -Path "C:\Daten\Produkte_semicolon.csv" -Delimiter ";" -NoTypeInformation
```

- **Encoding festlegen:**  
  Um Sonderzeichen korrekt zu exportieren, kannst du den Parameter `-Encoding` verwenden.

```powershell
$produkte | Export-Csv -Path "C:\Daten\Produkte_utf8.csv" -Encoding UTF8 -NoTypeInformation
```

## 3. Zusammenfassung

- **Import-Csv:**  
  Wandelt CSV-Dateien in PowerShell-Objekte um, sodass du die Daten leicht weiterverarbeiten kannst.
  
- **Export-Csv:**  
  Schreibt PowerShell-Objekte in eine CSV-Datei und bietet Optionen zur Anpassung des Trennzeichens, der Codierung und zur Unterdrückung von Typinformationen.
  
- **Best Practices:**  
  - Verwende `-NoTypeInformation`, um unerwünschte Metadaten zu vermeiden.  
  - Passe das Trennzeichen mit `-Delimiter` an, wenn erforderlich.  
  - Achte auf die richtige Codierung (z. B. UTF8), um Probleme mit Sonderzeichen zu vermeiden.

Diese Befehle ermöglichen es dir, CSV-Daten in PowerShell effizient zu importieren, zu bearbeiten und wieder zu exportieren – ideal für Automatisierungsaufgaben, Berichte und Datenanalysen.
