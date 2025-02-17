---
id: csv-import-export
title: CSV-Import & Export in PowerShell
sidebar_position: 50
---

# CSV-Import & Export in PowerShell

CSV (Comma-Separated Values) Dateien sind ein weit verbreitetes Format zur Speicherung und Übertragung tabellarischer Daten. PowerShell bietet leistungsfähige Cmdlets wie **Import-Csv** und **Export-Csv**, um CSV-Daten einfach in PowerShell zu importieren, zu bearbeiten und wieder zu exportieren. Dieses Dokument enthält eine komplette Anleitung, inklusive eines Beispiel-CSV-Inhalts, den du direkt kopieren und testen kannst, sowie Empfehlungen zur Verwendung hilfreicher VSCode-Erweiterungen.

> **Tipp zur Visualisierung:**  
> Wir empfehlen außerdem die VSCode Extension [Edit CSV](https://marketplace.visualstudio.com/items?itemName=janisdd.vscode-edit-csv), die es dir ermöglicht, CSV-Dateien direkt in Visual Studio Code zu bearbeiten und zu visualisieren.

## 1. Beispiel-CSV-Datei

Hier ein Beispiel für eine CSV-Datei, die Mitarbeiterdaten enthält. Du kannst den folgenden Inhalt in eine Datei namens `Mitarbeiter.csv` kopieren:

```csv
Name,Abteilung,Alter
Alena,IT,30
Bob,HR,35
Charlie,Finanzen,28
```

## 2. CSV-Import mit Import-Csv

Das Cmdlet **Import-Csv** liest die CSV-Datei ein und wandelt jede Zeile in ein PowerShell-Objekt um. Dabei werden die Spaltenüberschriften zu den Eigenschaften der Objekte.

### 2.1 Beispiel: CSV-Datei importieren

```powershell
$mitarbeiter = Import-Csv -Path "C:\Daten\Mitarbeiter.csv"
Write-Output $mitarbeiter
```


## 3. Verarbeitung der importierten Daten

Nach dem Import kannst du die Daten einfach filtern, sortieren oder anderweitig bearbeiten.

### 3.1 Filter: Mitarbeiter in der IT-Abteilung

```powershell
$itMitarbeiter = $mitarbeiter | Where-Object { $_.Abteilung -eq "IT" }
Write-Output $itMitarbeiter
```



### 3.2 Sortierung: Mitarbeiter nach Alter

```powershell
$sortierteMitarbeiter = $mitarbeiter | Sort-Object Alter
Write-Output $sortierteMitarbeiter
```


## 4. CSV-Export mit Export-Csv

Das Cmdlet **Export-Csv** schreibt PowerShell-Objekte in eine CSV-Datei. Du kannst dabei auswählen, welche Eigenschaften exportiert werden sollen und ob Typinformationen mit ausgegeben werden sollen.

### 4.1 Beispiel: Objekte in eine CSV-Datei exportieren

Angenommen, du hast eine Sammlung von Produktobjekten:

```powershell
$produkte = @(
    [PSCustomObject]@{ Name = "Laptop"; Preis = 1200; Lager = 10 },
    [PSCustomObject]@{ Name = "Tablet"; Preis = 600; Lager = 25 },
    [PSCustomObject]@{ Name = "Smartphone"; Preis = 800; Lager = 15 }
)
$produkte | Export-Csv -Path "C:\Daten\Produkte.csv" -NoTypeInformation
```

*Beispielinhalt der exportierten CSV (`Produkte.csv`):*

```csv
"Name","Preis","Lager"
"Laptop",1200,10
"Tablet",600,25
"Smartphone",800,15
```

### 4.2 Weitere Optionen und Best Practices

- **Delimiter anpassen:**  
  Standardmäßig wird ein Komma als Trennzeichen verwendet. Mit dem Parameter `-Delimiter` kannst du ein alternatives Trennzeichen festlegen (z. B. Semikolon):

  ```powershell
  $produkte | Export-Csv -Path "C:\Daten\Produkte_semicolon.csv" -Delimiter ";" -NoTypeInformation
  ```

- **Encoding festlegen:**  
  Um sicherzustellen, dass Sonderzeichen korrekt exportiert werden, kannst du den Parameter `-Encoding` verwenden:

  ```powershell
  $produkte | Export-Csv -Path "C:\Daten\Produkte_utf8.csv" -Encoding UTF8 -NoTypeInformation
  ```

## 5. Zusammenfassung

- **Import-Csv:**  
  Wandelt CSV-Dateien in PowerShell-Objekte um, sodass du die Daten einfach weiterverarbeiten kannst.
- **Export-Csv:**  
  Schreibt PowerShell-Objekte in eine CSV-Datei und bietet Optionen zur Anpassung des Trennzeichens, der Codierung und zur Unterdrückung von Typinformationen.
- **Best Practices:**  
  - Verwende `-NoTypeInformation`, um unerwünschte Metadaten zu vermeiden.  
  - Passe das Trennzeichen mit `-Delimiter` an, wenn erforderlich.  
  - Achte auf die richtige Codierung (z. B. UTF8), um Probleme mit Sonderzeichen zu vermeiden.
- **VSCode Empfehlung:**  
  Nutze die [Edit CSV Extension](https://marketplace.visualstudio.com/items?itemName=janisdd.vscode-edit-csv) in Visual Studio Code, um CSV-Dateien bequem zu bearbeiten und zu visualisieren.

Diese Befehle ermöglichen es dir, CSV-Daten in PowerShell effizient zu importieren, zu bearbeiten und wieder zu exportieren – ideal für Automatisierungsaufgaben, Berichte und Datenanalysen.



