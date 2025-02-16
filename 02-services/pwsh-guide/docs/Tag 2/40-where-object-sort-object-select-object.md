---
id: where-object-sort-object-select-object
title: Where-Object, Sort-Object, Select-Object
sidebar_position: 40
---

# Where-Object, Sort-Object, Select-Object in PowerShell

PowerShell bietet mit **Where-Object**, **Sort-Object** und **Select-Object** drei leistungsfähige Cmdlets, die dir helfen, Daten in der Pipeline zu filtern, zu sortieren und gezielt auszuwählen. Diese Befehle sind essenziell, um große Datenmengen effizient zu verarbeiten und nur die relevanten Informationen anzuzeigen.


## 1. Where-Object

Mit **Where-Object** filterst du Objekte, indem du eine Bedingung im Skriptblock definierst. Jedes Objekt, das den Filter passiert, wird an die nächste Pipeline-Stufe weitergegeben.

### 1.1 Beispiel: Filterung von Prozessen nach CPU-Auslastung

```powershell
# Filtert alle Prozesse, die mehr als 100 MB Arbeitsspeicher verwenden
Get-Process | Where-Object { $_.WorkingSet -gt 100MB }
```

### 1.2 Beispiel: Filterung anhand eines Musters

```powershell
# Filtert alle Prozesse, deren Namen mit "P" beginnen
Get-Process | Where-Object { $_.Name -like "P*" }
```

## 2. Sort-Object

Mit **Sort-Object** sortierst du die Objekte in der Pipeline basierend auf einer oder mehreren Eigenschaften. Dabei kannst du optional die Sortierreihenfolge mit dem Parameter `-Descending` umkehren.

### 2.1 Beispiel: Sortierung von Prozessen nach CPU-Auslastung

```powershell
# Sortiert Prozesse in absteigender Reihenfolge nach der CPU-Auslastung
Get-Process | Sort-Object CPU -Descending
```

### 2.2 Mehrfache Sortierung

```powershell
# Sortiert zunächst nach CPU und dann nach dem Namen des Prozesses
Get-Process | Sort-Object CPU, Name
```

## 3. Select-Object

Mit **Select-Object** wählst du gezielt Eigenschaften aus den Objekten aus oder begrenzt die Anzahl der ausgegebenen Objekte. Dies hilft dabei, die Ausgabe übersichtlich zu gestalten.

### 3.1 Beispiel: Auswahl spezifischer Eigenschaften

```powershell
# Wählt nur die Eigenschaften Name, CPU und Id der Prozesse aus
Get-Process | Select-Object Name, CPU, Id
```

### 3.2 Beispiel: Begrenzen der Ausgabe

```powershell
# Gibt nur die ersten 5 Prozesse zurück
Get-Process | Select-Object -First 5
```

## 4. Kombinierte Anwendung in einer Pipeline

Die wahre Stärke dieser Cmdlets zeigt sich, wenn sie kombiniert werden, um komplexe Datenverarbeitungsaufgaben zu lösen:

```powershell
# Filtert Prozesse mit einer CPU-Auslastung > 50, sortiert sie absteigend
# und gibt die Top 5 mit den Eigenschaften Name, CPU und Id aus
Get-Process |
    Where-Object { $_.CPU -gt 50 } |
    Sort-Object CPU -Descending |
    Select-Object -First 5 -Property Name, CPU, Id
```

## 5. Best Practices

- **Frühzeitiges Filtern:**  
  Setze **Where-Object** möglichst früh in der Pipeline ein, um die Anzahl der zu verarbeitenden Objekte zu reduzieren.
  
- **Lesbare Pipelines:**  
  Zerlege komplexe Pipelines in mehrere Zeilen und kommentiere wichtige Schritte, um die Lesbarkeit zu erhöhen.

- **Gezielte Auswahl:**  
  Verwende **Select-Object**, um nur die relevanten Informationen zu extrahieren – das erleichtert die Weiterverarbeitung und Ausgabe.

## 6. Zusammenfassung

- **Where-Object:**  
  Ermöglicht das Filtern von Objekten basierend auf Bedingungen.
  
- **Sort-Object:**  
  Sortiert die Objekte in der Pipeline nach den gewünschten Eigenschaften.
  
- **Select-Object:**  
  Wählt spezifische Eigenschaften aus oder begrenzt die Anzahl der ausgegebenen Objekte.

Diese Cmdlets sind zentrale Werkzeuge in PowerShell, mit denen du komplexe Datenströme effizient bearbeiten und nur die für dich relevanten Informationen extrahieren kannst.

