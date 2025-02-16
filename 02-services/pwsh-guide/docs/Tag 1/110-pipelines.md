---
id: pipeline-prinzip
title: Das Pipeline-Prinzip
sidebar_position: 110
---

# Das Pipeline-Prinzip

Das Pipeline-Prinzip ist eines der mächtigsten Konzepte in PowerShell. Anders als in herkömmlichen Shells, in denen ausschließlich Text zwischen Befehlen übergeben wird, fließen in PowerShell ganze Objekte in der Pipeline. Dadurch können nachfolgende Cmdlets direkt mit den Eigenschaften und Methoden dieser Objekte arbeiten.

![Pipeline](/img/01_cmdlets-and-PowerShell-pipeline.webp)  

## 1. Funktionsweise der Pipeline

### 1.1 Objektbasierter Datenfluss

- **Objekte statt Text:**  
  Jedes Cmdlet gibt in PowerShell nicht nur einfachen Text, sondern strukturierte Objekte zurück. Diese Objekte enthalten sowohl Daten als auch Methoden, die später im Pipeline-Fluss genutzt werden können.

- **Ketten von Cmdlets:**  
  Mit dem Pipe-Zeichen `|` verknüpfst du Cmdlets, sodass der Output eines Befehls automatisch als Input für den nächsten Befehl dient. Dies ermöglicht es, komplexe Aufgaben in kleine, modulare Schritte zu zerlegen.

### 1.2 Beispiel: Einfache Pipeline

In diesem Beispiel werden alle Prozesse ermittelt, gefiltert und anschließend weiterverarbeitet:

```powershell
# Alle Prozesse, die mehr als 100 MB Arbeitsspeicher verwenden, werden angezeigt.
Get-Process | Where-Object { $_.WorkingSet -gt 100MB }
```

Hier:
- Erzeugt `Get-Process` eine Liste von Prozessobjekten.
- `Where-Object` filtert diese Objekte basierend auf der Eigenschaft `WorkingSet`.

## 2. Get-Member: Objekte untersuchen

Das Cmdlet `Get-Member` ist ein zentrales Werkzeug, um die Struktur der in der Pipeline fließenden Objekte zu analysieren. Es listet alle Eigenschaften und Methoden eines Objekts auf, sodass du genau erkennen kannst, welche Daten dir zur Verfügung stehen.

### 2.1 Grundlagen von Get-Member

Um beispielsweise die Mitglieder der von `Get-Process` zurückgegebenen Objekte anzuzeigen, verwendest du:

```powershell
Get-Process | Get-Member
```

Dies liefert dir eine detaillierte Auflistung der Eigenschaften (z. B. `Name`, `Id`, `WorkingSet`) und Methoden (z. B. `CloseMainWindow()`) der Prozessobjekte.

### 2.2 Spezifische Filter mit Get-Member

Du kannst `Get-Member` auch so konfigurieren, dass es nur bestimmte Typen von Mitgliedern anzeigt:

```powershell
# Zeigt nur die Eigenschaften der Prozessobjekte an.
Get-Process | Get-Member -MemberType Property

# Zeigt nur die Methoden der Prozessobjekte an.
Get-Process | Get-Member -MemberType Method
```

## 3. Praktische Anwendung des Pipeline-Prinzips

Um die Leistungsfähigkeit der Pipeline zu demonstrieren, folgt ein komplexeres Beispiel:

```powershell
# Liste alle Prozesse auf, filtere jene, die einen CPU-Wert besitzen,
# sortiere sie nach der CPU-Zeit in absteigender Reihenfolge,
# wähle die obersten 5 und formatiere das Ergebnis als Tabelle.
Get-Process |
    Where-Object { $_.CPU -ne $null } |
    Sort-Object CPU -Descending |
    Select-Object -First 5 |
    Format-Table -AutoSize
```

Dieses Beispiel zeigt, wie mehrere Cmdlets zusammenarbeiten:
- `Get-Process` liefert die Ausgangsdaten.
- `Where-Object` filtert die Daten.
- `Sort-Object` ordnet die Prozesse.
- `Select-Object` wählt die Top 5 aus.
- `Format-Table` sorgt für eine ansprechende Darstellung.

## 4. Anwendungsfälle und Tipps

- **Pipeline-Debugging:**  
  Führe `Get-Member` zwischen Pipeline-Teilschritten aus, um zu prüfen, welche Eigenschaften und Methoden an die nächste Stufe übergeben werden. Das hilft, Fehler frühzeitig zu erkennen.

- **Modulare Skripte:**  
  Zerlege komplexe Aufgaben in kleine, verständliche Pipeline-Segmente. So kannst du jeden Schritt isoliert testen und bei Bedarf anpassen.

- **Visualisierung:**  
  Eine Grafik, die den Ablauf der Pipeline darstellt, könnte den Fluss von Objekten und die Übergabe zwischen den einzelnen Cmdlets veranschaulichen. Dies ist besonders hilfreich für visuelle Lerner.

## 5. Zusammenfassung

- **Objektbasierte Pipeline:**  
  PowerShell übergibt keine reinen Texte, sondern ganze Objekte, wodurch du direkt mit deren Eigenschaften und Methoden arbeiten kannst.

- **Effiziente Verkettung:**  
  Mit dem Pipe-Zeichen `|` kannst du mehrere Cmdlets in einer logischen Kette verbinden, die jeweils einen Teil der Aufgabe übernehmen.

- **Get-Member als Analysewerkzeug:**  
  Mit `Get-Member` kannst du die Struktur der Objekte untersuchen und so besser verstehen, welche Daten dir zur Weiterverarbeitung zur Verfügung stehen.

Dieses fortgeschrittene Konzept der Pipeline in PowerShell ermöglicht es dir, leistungsstarke, modulare und leicht wartbare Skripte zu schreiben. Mit Hilfe von `Get-Member` kannst du den Datenfluss transparent nachvollziehen und deine Befehle optimal anpassen.

