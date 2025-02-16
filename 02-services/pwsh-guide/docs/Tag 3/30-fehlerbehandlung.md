---
id: fehlerbehandlung
title: Fehlerbehandlung (try/catch, $ErrorActionPreference)
sidebar_position: 30
---

# Fehlerbehandlung in PowerShell

Fehlerbehandlung ist ein wesentlicher Bestandteil robuster PowerShell-Skripte. Sie ermöglicht es, Fehler frühzeitig zu erkennen, kontrolliert darauf zu reagieren und gegebenenfalls Ressourcen freizugeben. In PowerShell erfolgt die Fehlerbehandlung in der Regel über **try/catch**-Blöcke. Zusätzlich kann die globale Variable **$ErrorActionPreference** genutzt werden, um das Verhalten von Fehlern in einem Skript zu steuern.

> **Tipp zur Visualisierung:**  
> Eine ergänzende Grafik könnte den Ablauf eines try/catch-Blocks veranschaulichen, inklusive der Abfolge:  
> - Ausführung des try-Blocks  
> - Auftreten eines Fehlers  
> - Übergang in den catch-Block  
> - Ausführung des finally-Blocks (falls vorhanden)

## 1. Grundlagen der Fehlerbehandlung mit try/catch

Der Grundaufbau eines try/catch-Blocks in PowerShell sieht folgendermaßen aus:

```powershell
try {
    # Code, der potenziell einen Fehler verursachen könnte
}
catch {
    # Fehlerbehandlungscode, der ausgeführt wird, wenn im try-Block ein Fehler auftritt
}
```

### 1.1 Beispiel: Einfache Fehlerbehandlung

Hier wird versucht, den Inhalt einer nicht existierenden Datei zu lesen. Im Fehlerfall wird eine Fehlermeldung ausgegeben:

```powershell
try {
    Write-Output "Versuche, die Datei zu lesen."
    $content = Get-Content -Path "C:\Pfad\zur\NichtExistierendenDatei.txt"
    Write-Output $content
}
catch {
    Write-Error "Ein Fehler ist aufgetreten: $_"
}
```

## 2. Steuerung des Fehlerverhaltens mit $ErrorActionPreference

Die Variable **$ErrorActionPreference** bestimmt, wie PowerShell mit auftretenden Fehlern umgeht. Standardmäßig ist dieser Wert auf `Continue` gesetzt, was bedeutet, dass Fehler gemeldet werden, aber das Skript fortgesetzt wird.

- **Stop:** Das Skript wird bei einem Fehler angehalten.
- **SilentlyContinue:** Fehler werden unterdrückt und das Skript läuft ohne Fehlermeldungen weiter.

### 2.1 Beispiel: Verwendung von $ErrorActionPreference

Im folgenden Beispiel wird das Fehlerverhalten so angepasst, dass das Skript bei einem Fehler sofort stoppt:

```powershell
$ErrorActionPreference = "Stop"

try {
    Write-Output "Versuche, eine nicht existierende Datei zu lesen."
    $content = Get-Content -Path "C:\Pfad\zur\NichtExistierendenDatei.txt"
    Write-Output $content
}
catch {
    Write-Error "Fehler abgefangen: $_"
}
```

## 3. Erweiterte Fehlerbehandlung

### 3.1 Mehrere catch-Blöcke

Du kannst mehrere catch-Blöcke verwenden, um unterschiedliche Fehlertypen spezifisch zu behandeln:

```powershell
try {
    Get-Item "C:\Pfad\zur\NichtExistierendenDatei.txt"
}
catch [System.IO.FileNotFoundException] {
    Write-Error "Datei nicht gefunden."
}
catch {
    Write-Error "Ein allgemeiner Fehler ist aufgetreten: $_"
}
```

### 3.2 Der finally-Block

Ein `finally`-Block wird immer ausgeführt, unabhängig davon, ob ein Fehler aufgetreten ist oder nicht. Er eignet sich hervorragend für Aufräumarbeiten.

```powershell
try {
    Write-Output "Führe einen kritischen Codeabschnitt aus."
    # Beispiel: Division durch Null verursacht einen Fehler
    $result = 1 / 0
}
catch {
    Write-Error "Fehler: $_"
}
finally {
    Write-Output "Dieser Block wird immer ausgeführt, um Ressourcen freizugeben."
}
```

## 4. Best Practices der Fehlerbehandlung

- **Gezielter Einsatz von $ErrorActionPreference:**  
  Setze `$ErrorActionPreference` nur in den relevanten Kontexten, um unerwartete Skriptabbrüche zu vermeiden.

- **Spezifische catch-Blöcke:**  
  Nutze mehrere catch-Blöcke, um verschiedene Fehlertypen gezielt zu behandeln.

- **Logging und Benachrichtigung:**  
  Implementiere Mechanismen zur Protokollierung von Fehlern und benachrichtige Administratoren bei kritischen Fehlern.

- **Ressourcenbereinigung:**  
  Nutze den `finally`-Block, um Ressourcen, wie geöffnete Dateien oder Netzwerkverbindungen, freizugeben.

## 5. Zusammenfassung

- **try/catch:**  
  Ermöglicht das Abfangen und gezielte Behandeln von Fehlern im Skript.
  
- **$ErrorActionPreference:**  
  Steuert global das Verhalten von Fehlern in PowerShell-Skripten.
  
- **Best Practices:**  
  Durch spezifische Fehlerbehandlungsstrategien, Logging und Ressourcenfreigabe wird dein Skript robuster und wartbarer.

Mit diesen Techniken kannst du sicherstellen, dass deine PowerShell-Skripte auch bei unerwarteten Fehlern kontrolliert reagieren und weiterarbeiten oder sauber abbrechen.
