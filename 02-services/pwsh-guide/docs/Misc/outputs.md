---
id: outputs
title: PowerShell Output & Return - So verhinderst du ungewollte Rückgaben
---

In PowerShell können Rückgabewerte aus Funktionen über verschiedene Mechanismen entstehen – selbst dann, wenn man es vielleicht gar nicht beabsichtigt. Ein häufiger Stolperstein ist der Unterschied zwischen Write-Output und return, sowie den verschiedenen Output Streams (z.B. Output, Error, Verbose, Debug und Information).

PowerShell verfügt über mehrere Ausgabekanäle (Streams). Die wichtigsten ind:

Output Stream (Nummer 1): Alles, was über Write-Output geschickt wird, landet hier.
Error Stream (Nummer 2): Fehlermeldungen (Write-Error).
Verbose Stream (Nummer 4): Ausgaben für ausführliche Informationen (Write-Verbose).
Debug Stream (Nummer 5): Debug-Ausgaben (Write-Debug).
Information Stream (Nummer 6): Neue Ausgaben ab PowerShell 5 (Write-Information).
Standardmäßig werden alle Ausgaben aus dem Output Stream an den Aufrufer zurückgegeben – und damit in eine Variable geschrieben, wenn du z.B. $a = Example-Function verwendest.

## Write-Output vs. return
Write-Output: Sendet Daten in den Output Stream. Alles, was in diesem Stream steht, wird zurückgegeben und kann in $a landen.
return: Beendet die Funktion sofort und gibt den angegebenen Wert zurück. Doch wenn vor dem return bereits ein Write-Output stattgefunden hat, gelangen diese Werte dennoch in den Output Stream – und können somit auch in $a landen.

Beispiel: Unerwartete Mehrfach-Rückgabe
```powershell
Bearbeiten
function Example-Function {
    Write-Output "Hallo"
    return "Welt"
}
```
Ruft man Example-Function auf und speichert das Ergebnis in $a, dann enthält $a ein Array mit zwei Elementen: ["Hallo","Welt"].
Grund: PowerShell fügt erst den Output aus Write-Output hinzu und dann den Rückgabewert aus return.

## Wie unterdrückt man ungewollte Ausgaben?
Wenn du absolut sicherstellen willst, dass nichts in der aufrufenden Variable landet, stehen dir mehrere Möglichkeiten zur Verfügung:

### Out-Null

Alles, was du an Out-Null übergibst, wird verworfen. Beispiel:
```powershell
Write-Output "Hallo" | Out-Null
```
So werden die Ausgaben zwar erzeugt, aber umgehend verworfen.

### void

Wenn du z.B. eine Funktion oder einen Befehl ausführst und dessen Rückgabe nicht weitergeben möchtest, kannst du sie mit [void](...) “wegwerfen”:
```powershell
[void](Write-Output "Hallo")
```
Dadurch wird kein Wert in den Output Stream geschrieben.

### Verzicht auf Write-Output

Möchtest du wirklich nichts zurückgeben, dann verzichte auf das Write-Output (oder Write-Host) und nutze beispielsweise Write-Verbose, wenn du es nur zu Debug- oder Info-Zwecken brauchst.
Write-Verbose landet im Verbose Stream und wird nur angezeigt, wenn -Verbose verwendet oder $VerbosePreference auf Continue gesetzt ist.


## Fazit
Write-Output erzeugt einen Eintrag im Output Stream und wird in vielen Fällen in die Rückgabe aufgenommen.
return beendet die Funktion und gibt den angegebenen Wert zurück – aber bereits vorher erzeugte Ausgaben bleiben im Stream.
Mithilfe von Out-Null, [void] oder anderen Streams (wie Write-Verbose) kannst du verhindern, dass unerwünschte Daten in deine Return-Werte gelangen.
Grundsätzlich ist es sinnvoll, genau zu planen, was eine Funktion zurückgeben soll und was nur zur Laufzeit (etwa als Log) ausgegeben werden soll.
Damit behältst du die Kontrolle über deine Rückgabewerte und vermeidest Verwirrung bei Kollegen (oder dir selbst), die später mit deinem Skript arbeiten!