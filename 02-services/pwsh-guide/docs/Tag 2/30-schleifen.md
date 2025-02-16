---
id: schleifen
title: Schleifen (foreach, for, while)
sidebar_position: 30
---

# Schleifen in PowerShell

Schleifen sind fundamentale Kontrollstrukturen in PowerShell, mit denen du wiederkehrende Aufgaben automatisieren kannst. In diesem Dokument werden die wichtigsten Schleifenkonstrukte erläutert: **foreach**, **for** und **while** (sowie do-while). Jede Schleife hat ihren eigenen Anwendungsfall, und die Wahl des richtigen Konstrukts kann deinen Code effizienter und lesbarer machen.


## 1. Die foreach-Schleife

Die `foreach`-Schleife wird verwendet, um durch alle Elemente einer Sammlung oder eines Arrays zu iterieren. Sie ist ideal, wenn du jeden Eintrag einer Liste verarbeiten möchtest.

### 1.1 Beispiel: Iteration durch ein Array

```powershell
# Erstellen eines Arrays
$zahlen = @(1, 2, 3, 4, 5)

# Iteration durch das Array mit foreach
foreach ($zahl in $zahlen) {
    Write-Output "Aktuelle Zahl: $zahl"
}
```

### 1.2 foreach in der Pipeline

Die `ForEach-Object`-Cmdlet-Variante wird häufig in der Pipeline verwendet:

```powershell
# Iteriere durch alle Prozesse und gib deren Namen aus
Get-Process | ForEach-Object {
    Write-Output "Prozess: $($_.Name)"
}
```

## 2. Die for-Schleife

Die `for`-Schleife eignet sich, wenn du den Schleifenindex benötigst oder die Anzahl der Iterationen im Voraus kennst.

### 2.1 Beispiel: Zählerschleife

```powershell
# Eine Schleife, die 5-mal durchläuft
for ($i = 0; $i -lt 5; $i++) {
    Write-Output "Iteration: $i"
}
```

### 2.2 Beispiel: Iteration mit Indexzugriff

```powershell
# Iteriere durch ein Array mit Zugriff auf den Index
$namen = @("Alice", "Bob", "Charlie")
for ($i = 0; $i -lt $namen.Count; $i++) {
    Write-Output "Name an Index $i: $($namen[$i])"
}
```

## 3. Die while-Schleife

Die `while`-Schleife führt ihren Codeblock solange aus, wie eine bestimmte Bedingung wahr ist. Sie eignet sich, wenn die Anzahl der Wiederholungen nicht im Voraus bekannt ist.

### 3.1 Beispiel: while-Schleife

```powershell
# Zähle, bis eine Bedingung nicht mehr erfüllt ist
$count = 0
while ($count -lt 5) {
    Write-Output "Count ist: $count"
    $count++
}
```

### 3.2 Beispiel: do-while-Schleife

Die `do-while`-Schleife garantiert, dass der Codeblock mindestens einmal ausgeführt wird, bevor die Bedingung geprüft wird.

```powershell
$count = 0
do {
    Write-Output "Do-While Count ist: $count"
    $count++
} while ($count -lt 5)
```

## 4. Best Practices für Schleifen

- **Vermeide endlose Schleifen:**  
  Achte darauf, dass in Schleifen wie `while` die Bedingung irgendwann falsch wird, um endlose Schleifen zu vermeiden.
- **Nutze foreach, wenn möglich:**  
  Wenn du durch Sammlungen iterierst, ist `foreach` oft lesbarer und einfacher zu verwenden.
- **Verwende break und continue:**  
  Mit `break` kannst du eine Schleife vorzeitig beenden, und `continue` lässt dich zur nächsten Iteration springen.
- **Saubere Struktur und Kommentare:**  
  Kommentiere komplexe Schleifen, um den Code nachvollziehbar und wartbar zu halten.

## 5. Zusammenfassung

- **foreach:**  
  Ideal zur Iteration durch Sammlungen und Arrays, besonders in Verbindung mit der Pipeline.
- **for:**  
  Nützlich, wenn du den Schleifenindex benötigst oder eine feste Anzahl von Iterationen hast.
- **while / do-while:**  
  Eignet sich, wenn die Anzahl der Wiederholungen von einer Bedingung abhängt.

Diese Schleifenstrukturen sind essenzielle Bausteine in PowerShell, die dir helfen, wiederkehrende Aufgaben zu automatisieren und deinen Code effizient und modular zu gestalten.