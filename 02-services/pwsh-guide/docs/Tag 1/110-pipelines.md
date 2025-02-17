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
**Output:**
```powershell

 NPM(K)    PM(M)      WS(M)     CPU(s)      Id  SI ProcessName
 ------    -----      -----     ------      --  -- -----------
      0     0.00     146.28      27.63    1128   1 AppleSpell
      0     0.00     110.58   7,206.60    3889 …89 com.apple.Virtu
      0     0.00     310.02   2,341.85    1082   1 Google Chrome
      0     0.00     114.31     474.45    1656   1 Google Chrome H
      0     0.00     130.14     512.64    3120   1 Google Chrome H
      0     0.00     204.14     577.22   12379   1 Google Chrome H
      0     0.00     199.73     747.71   13733   1 Google Chrome H
      0     0.00     146.67     247.26   14129   1 Google Chrome H
      0     0.00     142.83     242.76   15066   1 Google Chrome H
      0     0.00     175.58     916.73   15892   1 Google Chrome H
      0     0.00     101.83     261.60   16108   1 Google Chrome H
      0     0.00     177.89     396.33   39650   1 Google Chrome H
      0     0.00     111.50      51.33   39797   1 Google Chrome H
      0     0.00     131.48      48.45   40918   1 Google Chrome H
      0     0.00     348.38      53.25   45523   1 Google Chrome H
      0     0.00     164.89      67.90   45613   1 Google Chrome H
```

## 2. Get-Member: Objekte untersuchen

Das Cmdlet `Get-Member` ist ein zentrales Werkzeug, um die Struktur der in der Pipeline fließenden Objekte zu analysieren. Es listet alle Eigenschaften und Methoden eines Objekts auf, sodass du genau erkennen kannst, welche Daten dir zur Verfügung stehen.

### 2.1 Grundlagen von Get-Member

Um beispielsweise die Mitglieder der von `Get-Process` zurückgegebenen Objekte anzuzeigen, verwendest du:

```powershell
Get-Process | Get-Member
```
**Output:**
```powershell
   TypeName: System.Diagnostics.Process

Name                       MemberType     Definition
----                       ----------     ----------
Handles                    AliasProperty  Handles = Handlecount
Name                       AliasProperty  Name = ProcessName
NPM                        AliasProperty  NPM = NonpagedSystemMemorySize64
PM                         AliasProperty  PM = PagedMemorySize64
SI                         AliasProperty  SI = SessionId
VM                         AliasProperty  VM = VirtualMemorySize64
WS                         AliasProperty  WS = WorkingSet64
Parent                     CodeProperty   System.Object Parent{get=GetParentProcess;}
Disposed                   Event          System.EventHandler Disposed(System.Object, System.EventArgs)
ErrorDataReceived          Event          System.Diagnostics.DataReceivedEventHandler ErrorDataReceived(System.Object, System.Diagnostics.DataReceivedEventArgs)
Exited                     Event          System.EventHandler Exited(System.Object, System.EventArgs)
OutputDataReceived         Event          System.Diagnostics.DataReceivedEventHandler OutputDataReceived(System.Object, System.Diagnostics.DataReceivedEventArgs)
BeginErrorReadLine         Method         void BeginErrorReadLine()
BeginOutputReadLine        Method         void BeginOutputReadLine()
CancelErrorRead            Method         void CancelErrorRead()
CancelOutputRead           Method         void CancelOutputRead()
Close                      Method         void Close()
CloseMainWindow            Method         bool CloseMainWindow()
Dispose                    Method         void Dispose(), void IDisposable.Dispose()
Equals                     Method         bool Equals(System.Object obj)
GetHashCode                Method         int GetHashCode()
GetLifetimeService         Method         System.Object GetLifetimeService()
...
```


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
**Output:**
```powershell
NPM(K) PM(M)  WS(M)   CPU(s)    Id    SI ProcessName
------ -----  -----   ------    --    -- -----------
     0  0.00 142.94 7,221.99  3889  3889 com.apple.Virtu
     0  0.00  53.80 6,729.31   839     1 MSTeams
     0  0.00  29.30 3,533.89   684     1 NotificationCen
     0  0.00   4.14 2,546.37 12128 12128 VTDecoderXPCSer
     0  0.00 261.08 2,351.44  1082     1 Google Chrome
```

## 4. Group-Object: Objekte gruppieren

Mit **Group-Object** kannst du Objekte in der Pipeline nach bestimmten Kriterien gruppieren. Dies ist besonders nützlich, um Zusammenfassungen zu erstellen oder Häufigkeiten zu ermitteln.

### 4.1 Beispiel: Zahlen in "Odd" und "Even" gruppieren

```powershell
$numbers = 1..10
$grouped = $numbers | Group-Object { if ($_ % 2 -eq 0) { "Even" } else { "Odd" } }
$grouped
```

**Output:**
```powershell
Count Name                      Group
----- ----                      -----
    5 Even                      {2, 4, 6, 8…}
    5 Odd                       {1, 3, 5, 7…}
```


## 5. Measure-Object: Statistische Auswertungen

Mit **Measure-Object** kannst du statistische Berechnungen an einer Sammlung von Werten durchführen, wie z.B. Summe, Durchschnitt, Minimum und Maximum.

### 5.1 Beispiel: Statistiken über ein Zahlenarray

```powershell
$numbers = 1..10
$stats = $numbers | Measure-Object -Average -Sum -Minimum -Maximum
$stats
```

**Output:**
```powershell
Count             : 10
Average           : 5.5
Sum               : 55
Maximum           : 10
Minimum           : 1
StandardDeviation :
Property          :
```
<!-- Beispieloutput:
Count    : 10
Average  : 5.5
Sum      : 55
Maximum  : 10
Minimum  : 1
-->

### 5.2 Beispiel: CPU-Auslastung von Prozessen messen

```powershell
# Filtert Prozesse mit einem definierten CPU-Wert und berechnet den Durchschnitt und die Summe
$cpuStats = Get-Process | Where-Object { $_.CPU -ne $null } | Measure-Object -Property CPU -Average -Sum
$cpuStats
```
**Output:**
```powershell
Count             : 464
Average           : 135.190963640302
Sum               : 62728.6071291
Maximum           :
Minimum           :
StandardDeviation :
Property          : CPU
```

## 6. Anwendungsfälle und Tipps

- **Pipeline-Debugging:**  
  Führe `Get-Member` zwischen Pipeline-Teilschritten aus, um zu prüfen, welche Eigenschaften und Methoden an die nächste Stufe übergeben werden. Das hilft, Fehler frühzeitig zu erkennen.
- **Modulare Skripte:**  
  Zerlege komplexe Aufgaben in kleine, verständliche Pipeline-Segmente. So kannst du jeden Schritt isoliert testen und bei Bedarf anpassen.
- **Visualisierung:**  
  Eine Grafik, die den Ablauf der Pipeline darstellt, könnte den Fluss von Objekten und die Übergabe zwischen den einzelnen Cmdlets veranschaulichen. Dies ist besonders hilfreich für visuelle Lerner.

## 7. Zusammenfassung

- **Objektbasierte Pipeline:**  
  PowerShell übergibt keine reinen Texte, sondern ganze Objekte, wodurch du direkt mit deren Eigenschaften und Methoden arbeiten kannst.
- **Effiziente Verkettung:**  
  Mit dem Pipe-Zeichen `|` kannst du mehrere Cmdlets in einer logischen Kette verbinden, die jeweils einen Teil der Aufgabe übernehmen.
- **Analysewerkzeuge:**  
  Mit `Get-Member` kannst du die Struktur der Objekte untersuchen, während **Group-Object** und **Measure-Object** dir helfen, Daten zu gruppieren und zu analysieren.

Dieses fortgeschrittene Konzept der Pipeline in PowerShell ermöglicht es dir, leistungsstarke, modulare und leicht wartbare Skripte zu schreiben. Mit Hilfe von Analysewerkzeugen wie `Get-Member`, `Group-Object` und `Measure-Object` kannst du den Datenfluss transparent nachvollziehen und deine Befehle optimal anpassen.

