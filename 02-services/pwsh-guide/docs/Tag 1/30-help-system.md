---
id: hilfesystem
title: PowerShell Hilfesystem
sidebar_position: 30
---

# Hilfesystem verstehen & nutzen

Die PowerShell bietet ein umfangreiches, integriertes Hilfesystem, das dir dabei hilft, Befehle, Skripte und Konzepte besser zu verstehen. In diesem Dokument lernst du, wie du das Hilfesystem optimal nutzen kannst – von `Get-Help` über die **about_-Themen** bis hin zur Online-Dokumentation.

## 1. Überblick über das Hilfesystem

PowerShells Hilfesystem besteht aus mehreren Komponenten:

- **Lokale Hilfe:**  
  Bereits auf deinem System installiert, bietet sie schnelle Informationen zu Cmdlets und Konzepten.

- **Get-Help:**  
  Das zentrale Cmdlet, um Hilfe zu Befehlen, Parametern und Beispielen abzurufen.

- **about_-Themen:**  
  Detaillierte Artikel zu PowerShell-Konzepten (z. B. `about_Scripts`, `about_Aliases`), die dir einen tieferen Einblick in die Funktionsweise der Shell geben.

- **Online-Dokumentation:**  
  Die stets aktuelle, webbasierte Dokumentation, die alle Aspekte von PowerShell abdeckt.

## 2. Get-Help: Das zentrale Hilfscmdlet

Mit `Get-Help` kannst du Hilfe zu nahezu jedem Cmdlet abrufen. Hier einige praktische Beispiele:

### 2.1 Grundlegende Hilfe anzeigen

Um Informationen zu einem spezifischen Cmdlet abzurufen, gib einfach den Cmdlet-Namen ein:

```powershell
Get-Help Get-Process
```

### 2.2 Detaillierte Hilfe

Für eine ausführlichere Beschreibung, inklusive Syntax, Parameter und Beispielen, verwende den Parameter `-Detailed`:

```powershell
Get-Help Get-Service -Detailed
```

### 2.3 Nur Beispiele anzeigen

Interessierst du dich vor allem für praxisnahe Anwendungsbeispiele? Dann nutze:

```powershell
Get-Help Get-Item -Examples
```

### 2.4 Hilfe online abrufen

Mit dem Parameter `-Online` öffnest du die aktuellste Version der Hilfe im Browser:

```powershell
Get-Help Get-Process -Online
```

## 3. about_-Themen

Die **about_-Themen** bieten tiefergehende Informationen zu grundlegenden PowerShell-Konzepten und -Funktionen. Beispiele für nützliche about-Themen sind:

- **about_Scripts:**  
  Grundlagen und Best Practices für das Schreiben von Skripten.

- **about_Aliases:**  
  Informationen darüber, wie Aliase funktionieren und wann sie eingesetzt werden sollten.

- **about_Operators:**  
  Eine Übersicht über die verschiedenen Operatoren in PowerShell.

Um ein bestimmtes about-Thema anzuzeigen, verwende:

```powershell
Get-Help about_Security
```

Möchtest du alle verfügbaren about-Themen auflisten, führe folgenden Befehl aus:

```powershell
Get-Help about_*
```

## 4. Online-Dokumentation

Neben der lokalen Hilfe bietet Microsoft eine umfassende Online-Dokumentation:

- **Offizielle PowerShell-Dokumentation:**  
  [https://docs.microsoft.com/de-de/powershell/](https://docs.microsoft.com/de-de/powershell/)

- **Community und Blogs:**  
  Hier findest du aktuelle Updates, Best Practices und weiterführende Artikel rund um PowerShell.

## 5. Aktualisieren der lokalen Hilfe

Da die lokale Hilfe gelegentlich veraltet sein kann, solltest du regelmäßig `Update-Help` ausführen, um die neuesten Hilfedateien herunterzuladen:

```powershell
Update-Help -Force
```

*Hinweis:* Dieser Befehl erfordert Administratorrechte und einen aktiven Internetzugang.

## 6. Zusammenfassung

Das Hilfesystem in PowerShell ist ein mächtiges Werkzeug, das dir dabei hilft, schnell Antworten auf Fragen zu Cmdlets, Parametern und allgemeinen Konzepten zu finden. Nutze:

- **`Get-Help`:**  
  Für schnellen Zugriff auf Hilfeinformationen zu Cmdlets und Funktionen.

- **about_-Themen:**  
  Um tiefer in die Konzepte und Best Practices von PowerShell einzutauchen.

- **Online-Dokumentation:**  
  Für stets aktuelle und umfassende Informationen.

Mit der regelmäßigen Nutzung des Hilfesystems wirst du deine Kenntnisse vertiefen und deine Skripting-Fähigkeiten deutlich verbessern.

![Meme: Der Wechsel von CMD zu PowerShell](/img/psmeme_help.webp)  