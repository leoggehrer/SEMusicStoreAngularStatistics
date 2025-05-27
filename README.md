# MusicStoreAngularStatistics

**Inhaltsverzeichnis:**

- [MusicStoreAngularStatistics](#musicstoreangularstatistics)
  - [Einleitung](#einleitung)
  - [Aufgabenstellung](#aufgabenstellung)
  - [Umsetzung der Aufgabe](#umsetzung-der-aufgabe)
    - [Schritt 1: Repository klonen](#schritt-1-repository-klonen)
    - [Schritt 2: `SEMusicStoreAngular` mit der IDE öffnen](#schritt-2-semusicstoreangular-mit-der-ide-öffnen)
    - [Schritt 3: Starten der Anwendung `TemplateTools.ConApp`](#schritt-3-starten-der-anwendung-templatetoolsconapp)
    - [Schritt 4: `SEMusicStoreAngular` kopieren =\> `SEMusicStoreAngularStatistics`](#schritt-4-semusicstoreangular-kopieren--semusicstoreangularstatistics)
    - [Schritt 5: `SEMusicStoreAngularStatistics` mit der IDE öffnen](#schritt-5-semusicstoreangularstatistics-mit-der-ide-öffnen)
    - [Schritt 6: Starten der Anwendung `TemplateTools.ConApp`](#schritt-6-starten-der-anwendung-templatetoolsconapp)
    - [Schritt 7: `Preprocessor` einstellen](#schritt-7-preprocessor-einstellen)
    - [Schritt 8: Starten der `CodeGenerierung`](#schritt-8-starten-der-codegenerierung)
    - [Schritt 9: Starten der Anwendung `SEMusicStoreAngularStatistics.ConApp`](#schritt-9-starten-der-anwendung-semusicstoreangularstatisticsconapp)
      - [Testen des Imports](#testen-des-imports)
    - [Schritt 10: Starten der Anwendung `SEMusicStoreAngularStatistics.WebApi`](#schritt-10-starten-der-anwendung-semusicstoreangularstatisticswebapi)
    - [Schritt 11: `SEMusicStoreAngularStatistics.AngularApp` mit **VSCode** öffnen](#schritt-11-semusicstoreangularstatisticsangularapp-mit-vscode-öffnen)
    - [Schritt 12: Einstellung zur `REST-Api` prüfen](#schritt-12-einstellung-zur-rest-api-prüfen)
    - [Schritt 13: Starten der `AngularApp` Anwendung](#schritt-13-starten-der-angularapp-anwendung)
    - [Schritt 14: Testen der `AngularApp` Anwendung](#schritt-14-testen-der-angularapp-anwendung)
    - [Schritt 15: Erstellen der View `MusicStoreInfos`](#schritt-15-erstellen-der-view-musicstoreinfos)
    - [Schritt 16: Auswertung `Artist und Album`](#schritt-16-auswertung-artist-und-album)
      - [Schritt 16.1: Ausgabeformular für `Artist und Album` erstellen](#schritt-161-ausgabeformular-für-artist-und-album-erstellen)
      - [Schritt 16.2: Anpassen der Übersicht-Komponente für `ArtistAlbum`](#schritt-162-anpassen-der-übersicht-komponente-für-artistalbum)
    - [Schritt 17: Auswertung `Artist und Songs`](#schritt-17-auswertung-artist-und-songs)
    - [Schritt 18: Auswertung `Artist und Statistik`](#schritt-18-auswertung-artist-und-statistik)
    - [Schritt 19: Auswertung `Album und Titeln`](#schritt-19-auswertung-album-und-titeln)
    - [Schritt 20: Auswertung `Album und Statistik`](#schritt-20-auswertung-album-und-statistik)
    - [Schritt 21: Auswertung `Genre und Songs`](#schritt-21-auswertung-genre-und-songs)
    - [Schritt 22: Auswertung `Genre und Statistik`](#schritt-22-auswertung-genre-und-statistik)

---

## Einleitung

Dieses Projekt ist der **dritte** Teil aus einer mehrteiligen Reihe, die sich mit der Erstellung eines Software-Systems beschäftigt. Als Startvorlage für eine schnelle Entwicklung wird [SEMusicStoreAngular](https://github.com/leoggehrer/SEMusicStoreAngular) verwendet. Diese Vorlage orientiert sich an der Umsetzung der [SEArchitecture](https://github.com/leoggehrer/SEArchitecture) und bietet bereits eine Vielzahl von Komponenten.

Hauptthema dieser Reihe ist die Anzeige von Statistik-Daten mit **Views** in Tabellen. Die Tabellen werden mit dem **Angular**-Framework umgesetzt. Als **Styling**-Framework wird **Bootstrap** verwendet. 

## Aufgabenstellung

Eine detailierte Aufgabenstellung mit dem Titel **MusicStore** finden [hier](https://github.com/leoggehrer/MusicStore).

---

## Umsetzung der Aufgabe

Mit dem `SEMusicStoreAngular` können Sie die Aufgabenstellung in wenigen Schritten umsetzen.

**Umsetzungstabelle:**

| Schritt | Beschreibung                                                         |
|---------|----------------------------------------------------------------------|
| 1       | `SEMusicStoreAngular` klonen                                         |
| 2       | `SEMusicStoreAngular` mit der IDE öffnen                             |
| 3       | Starten der Anwendung `TemplateTools.ConApp`                         |
| 4       | `SEMusicStoreAngular` kopieren => `SEMusicStoreAngularStatistics`    |
| 5       | `SEMusicStoreAngularStatistics` mit der IDE öffnen                   |
| 6       | Starten der Anwendung `TemplateTools.ConApp`                         |
| 7       | `Preprocessor` einstellen                                            |
| 8       | Starten der `CodeGenerierung`                                        |
| 9       | Starten der Anwendung `SEMusicStoreAngularStatistics.ConApp`         |
| 10      | Starten der Anwendung `SEMusicStoreAngularStatistics.WebApi`         |
| 11      | `SEMusicStoreAngularStatistics.AngularApp` mit **VSCode** öffnen     |
| 12      | Einstellung zur `REST-Api` prüfen                                    |
| 13      | Starten der `AngularApp` Anwendung                                   |
| 14      | Testen der `AngularApp` Anwendung                                    |
| 15      | Erstellen der View `MusicStoreInfos`                                 |
| 16      | Auswertung `Artist und Album`                                        |
| 16.1    | Ausgabeformular für `Artist und Album` erstellen                     |
| 16.2    | Anpassen der Übersicht-Komponente für `ArtistAlbum`                  |
| 17      | Auswertung `Artist und Songs`                                        |
| 17.1    | Siehe Schritt 16.1                                                   |
| 17.2    | Siehe Schritt 16.2                                                   |
| 18      | Auswertung `Artist und Statistik`                                    |
| 18.1    | Siehe Schritt 17.1                                                   |
| 18.2    | Siehe Schritt 17.2                                                   |
| 19      | Auswertung `Album und Titeln`                                        |
| 19.1    | Siehe Schritt 18.1                                                   |
| 19.2    | Siehe Schritt 18.2                                                   |
| 20      | Auswertung `Album und Statistik`                                     |
| 20.1    | Siehe Schritt 19.1                                                   |
| 20.2    | Siehe Schritt 19.2                                                   |
| 21      | Auswertung `Genre und Songs`                                         |
| 21.1    | Siehe Schritt 20.1                                                   |
| 21.2    | Siehe Schritt 20.2                                                   |
| 22      | Auswertung `Genre und Statistik`                                     |
| 22.1    | Siehe Schritt 21.1                                                   |
| 22.2    | Siehe Schritt 21.2                                                   |

### Schritt 1: Repository klonen

```bash
git clone https://github.com/leoggehrer/SEMusicStoreAngular.git
cd SEMusicStoreAngular
```

---

### Schritt 2: `SEMusicStoreAngular` mit der IDE öffnen

Öffnen Sie das `SEMusicStoreAngular` mit der IDE (Visual Studio 2022, Rider oder Visual Studio Code).

### Schritt 3: Starten der Anwendung `TemplateTools.ConApp`

Nach dem Start von `TemplateTools.ConApp` wird folgendes Menü angezeigt:

```bash
==============
Template Tools
==============

Solution path: ...\SEMusicStoreAngular

[ ----] -----------------------------------------------------------------
[    1] Path................Change solution path
[ ----] -----------------------------------------------------------------
[    2] Copier..............Copy this solution to a domain solution
[    3] Preprocessor........Setting defines for project options
[    4] CodeGenerator.......Generate code for this solution
[    5] Synchronization.....Matches a project with the template
[    6] Cleanup.............Deletes the temporary directories
[-----] -----------------------------------------------------------------
[  x|X] Exit................Exits the application

Choose [n|n,n|a...all|x|X]:
```

> **HINWEIS:** Eine ausführliche Bedienungsanleitung für das Programm **TemplateTools** finden Sie [hier](https://github.com/leoggehrer/SETemplate).

---

### Schritt 4: `SEMusicStoreAngular` kopieren => `SEMusicStoreAngularStatistics`

Wählen Sie die **Menü-Option:** 2 - `Copier` aus. Anschließend wird das folgende Menü angezeigt:

```bash
===============
Template Copier
===============

'SETemplate' from:   ...\SEMusicStoreAngular
  -> copy ->
'TargetSolution' to: ...\TargetSolution

[  ---] -----------------------------------------------------------------
[    1] 1...................Change max sub path depth
[    2] Source path.........Change the source solution path
[    3] Target path.........Change the target solution path
[    4] Target name.........Change the target solution name
[  ---] -----------------------------------------------------------------
[    5] Start...............Start copy process
[-----] -----------------------------------------------------------------
[  x|X] Exit................Exits the application

Choose [n|n,n|a...all|x|X]:
```

Wählen Sie die **Menü-Option:** 3 - `Target path` aus und geben Sie den Zielpfad an, in dem das Projekt erstellt werden soll. Zum Beispiel: `C:\Users\...\source\repos`.

Wählen Sie die **Menü-Option:** 4 - `Target name` aus und geben Sie den Namen `SEMusicStoreAngularStatistics` an. Das Ergebnis sollte wie folgt aussehen:

```bash
===============
Template Copier
===============

'SETemplate' from: ...\SEMusicStoreAngular
  -> copy ->
'SEMusicStoreAngularStatistics' to:  C:\Users\...\source\repos\SEMusicStoreAngularStatistics

[  ---] -----------------------------------------------------------------
[    1] 1...................Change max sub path depth
[    2] Source path.........Change the source solution path
[    3] Target path.........Change the target solution path
[    4] Target name.........Change the target solution name
[  ---] -----------------------------------------------------------------
[    5] Start...............Start copy process
[-----] -----------------------------------------------------------------
[  x|X] Exit................Exits the application

Choose [n|n,n|a...all|x|X]:
```

Wählen Sie die **Menü-Option:** 5 - `Start` aus. Das System kopiert nun die Projektmappe und ersetzt die entsprechenden Projektnamen mit `SEMusicStoreAngularStatistics`. Wenn sie ein Windows-System verwenden, wird automatisch der Datei-Explorer mit dem Pfad 'C:\Users\...\source\repos\SEMusicStoreAngularStatistics' geöffnet.

> **HINWEIS:** Sie können nun die **TemplateTools** von **SEMusicStoreAngular** beenden.

---

### Schritt 5: `SEMusicStoreAngularStatistics` mit der IDE öffnen

Im nächsten Schritt öffnen Sie nun die Projektmappe `SEMusicStoreAngularStatistics` mit der IDE (Visual Studio, VSCode oder Rider). Nun haben Sie eine Projektstruktur die der Projektstruktur von `SEMusicStoreAngular` ähnelt. Der einzige Unterschied besteht darin, dass der der Projektname 'SEMusicStoreAngular' durch den Namen `SEMusicStoreAngularStatistics` ersetzt wurde.

Die bereits definierten Entitäten `Genre`, `Artist`, `Album` und `Track` sind in der Projektmappe `SEMusicStoreAngularStatistics.Logic` enthalten.

```bash
-|- SEMusicStoreAngularStatistics
  |- ...
  |- SEMusicStoreAngularStatistics.Logic
   |- Contracts
   |- Enums
   |- DataContext
   |- Entities
    |- Album.cs
    |- Artist.cs
    |- Genre.cs
    |- Track.cs
    |- ...
  |- README.md
  |- ...
```

> **HINWEIS:** Die **csv-Daten** sind nicht übertragen worden. Diese müssen manuell in die Projektmappe `SEMusicStoreAngularStatistics.ConApp` kopiert werden. Die csv-Daten finden Sie in der Projektmappe `SEMusicStoreAngular.ConApp` im Verzeichnis `data`. Kopieren Sie die csv-Daten in das Verzeichnis `SEMusicStoreAngularStatistics.ConApp\data`.

### Schritt 6: Starten der Anwendung `TemplateTools.ConApp`

Nach dem Start von `TemplateTools.ConApp` wird folgendes Menü angezeigt:

```bash
==============
Template Tools
==============

Solution path: C:\Users\...\repos\SEMusicStoreAngularStatistics

[ ----] -----------------------------------------------------------------
[    1] Path................Change solution path
[ ----] -----------------------------------------------------------------
[    2] Copier..............Copy this solution to a domain solution
[    3] Preprocessor........Setting defines for project options
[    4] CodeGenerator.......Generate code for this solution
[    5] Synchronization.....Matches a project with the template
[    6] Cleanup.............Deletes the temporary directories
[-----] -----------------------------------------------------------------
[  x|X] Exit................Exits the application

Choose [n|n,n|a...all|x|X]:
```

---

### Schritt 7: `Preprocessor` einstellen

Wählen Sie die **Menü-Option:** 3 - `Preprocessor` aus. Anschließend wird das folgende Menü angezeigt:

```bash
========================
Template Setting Defines
========================

Solution path: C:\Users\...\source\repos\SEMusicStoreAngularStatistics

[  ---] -----------------------------------------------------------------
[    1] Path................Change preprocessor solution path
[  ---] -----------------------------------------------------------------
[    2] Set definition ACCOUNT_OFF               ==> ACCOUNT_ON
[  ---] -----------------------------------------------------------------
[    3] Set definition IDINT_ON                  ==> IDINT_OFF
[    4] Set definition IDLONG_OFF                ==> IDLONG_ON
[    5] Set definition IDGUID_OFF                ==> IDGUID_ON
[  ---] -----------------------------------------------------------------
[    6] Set definition ROWVERSION_OFF            ==> ROWVERSION_ON
[    7] Set definition EXTERNALGUID_OFF          ==> EXTERNALGUID_ON
[  ---] -----------------------------------------------------------------
[    8] Set definition POSTGRES_OFF              ==> POSTGRES_ON
[    9] Set definition SQLSERVER_OFF             ==> SQLSERVER_ON
[   10] Set definition SQLITE_ON                 ==> SQLITE_OFF
[  ---] -----------------------------------------------------------------
[   11] Set definition DOCKER_OFF                ==> DOCKER_ON
[   12] Set definition DEVELOP_ON                ==> DEVELOP_OFF
[   13] Set definition DBOPERATION_ON            ==> DBOPERATION_OFF
[   14] Set definition GENERATEDCODE_ON          ==> GENERATEDCODE_OFF
[  ---] -----------------------------------------------------------------
[   15] Start...............Start assignment process
[-----] -----------------------------------------------------------------
[  x|X] Exit................Exits the application

Choose [n|n,n|a...all|x|X]:
```

Mit diesem Menü können die Projektparameter eingestellt werden.

> **HINWEIS**: Wenn die Einstellung `SQLITE_ON` gesetzt ist, dann sind folgende Einstellungen in Abhängigkeit des OS in den `AppSettings` zu berücksichtigen:

**OS-Windows:** appsettings.Development.json in der Projektmappe `SEMusicStoreAngularStatistics.ConApp`:

```json
{
  ...
  "ConnectionStrings": {
    "SqliteConnectionString": "Data Source=..\\..\\..\\..\\SEMusicStoreAngularStatisticsDb.db",
    ...
  }
}
```

**OS-Windows:** appsettings.Development.json in der Projektmappe `SEMusicStoreAngularStatistics.WebApi`:

```json
{
  ...
  "ConnectionStrings": {
    "SqliteConnectionString": "Data Source=..\\SEMusicStoreAngularStatisticsDb.db",
    ...
  }
}
```

**OS-Mac:** appsettings.Development.json in der Projektmappe `SEMusicStoreAngularStatistics.ConApp`:

```json
{
  ...
  "ConnectionStrings": {
    "SqliteConnectionString": "Data Source=SEMusicStoreAngularStatisticsDb.db",
    ...
  }
}
```

**OS-Mac:** appsettings.Development.json in der Projektmappe `SEMusicStoreAngularStatistics.WebApi`:

```json
{
  ...
  "ConnectionStrings": {
    "SqliteConnectionString": "Data Source=SEMusicStoreAngularStatisticsDb.db",
    ...
  }
}
```

---

### Schritt 8: Starten der `CodeGenerierung`

Bevor mit der Code-Generierung begonnen werden kann, müssen die folgenden Schritte durchgeführt werden:

- Die Entität-`Genre` ist erstellt und alle Prüfschritte haben das Ergebniss 'Ja'.
- Die Entität-`Artist` ist erstellt und alle Prüfschritte haben das Ergebniss 'Ja'.
- Die Entität-`Album` ist erstellt und alle Prüfschritte haben das Ergebniss 'Ja'.
- Die Entität-`Track` ist erstellt und alle Prüfschritte haben das Ergebniss 'Ja'.
- Die Projektmappe `SEMusicStoreAngularStatistics` kann fehlerfrei erstellt werden.

Starten das Programm `TemplateTools.ConApp` und wählen Sie die **Menü-Option:** 4 - `CodeGenerator` aus. Anschließend wird das folgende Menü angezeigt:

```bash
=======================
Template Code Generator
=======================

Solution path:                    C:\Users\...\repos\SEMusicStoreAngularStatistics
---------------------------------
Write generated source into:      Single files
Write info header into source:    True
Delete empty folders in the path: True
Exclude generated files from GIT: True

[-----] -----------------------------------------------------------------
[    1] Generation file.....Change generation file option
[    2] Add info header.....Change add info header option
[    3] Delete folders......Change delete empty folders option
[    4] Exclude files.......Change the exclusion of generated files from GIT
[    5] Source path.........Change the source solution path
[-----] -----------------------------------------------------------------
[    6] Compile.............Compile logic project
[    7] Delete files........Delete generated files
[    8] Delete folders......Delete empty folders in the path
[    9] Start...............Start code generation
[-----] -----------------------------------------------------------------
[  x|X] Exit................Exits the application

Choose [n|n,n|a...all|x|X]:
```

Bevor Sie mit der `CodeGenerierung` beginnen, können einige Einstellungen vorgenommen werden. Sie finden die Beschreibung in der Dokumentation für [Menü: CodeGenerator](https://github.com/leoggehrer/SETemplate?tab=readme-ov-file#men%C3%BC-codegenerator).

Nachdem die Einstellung vorgenommen wurde, wählen Sie die **Menü-option:** 9 - `Start` aus. Die `CodeGenerierung` startet und generiert die entsprechenden Code-Teile. Eine detailierte Übersicht erhalten Sie [hier](https://github.com/leoggehrer/SEMusicStoreBase/blob/master/README.md#schritt-12-starten-der-codegenerierung).

### Schritt 9: Starten der Anwendung `SEMusicStoreAngularStatistics.ConApp`

Starten Sie das Programm `SEMusicStoreAngularStatistics.ConApp` und führen Sie die Auswahl: **InitDatabase...1** aus - die Erstellung der Datenbank und der Import startet. In der Konsole werden eventuelle Fehler des Imports ausgegeben:

```bash
SEMusicStoreAngularStatistics
==========================================
InitDatabase             ....1

Exit...............x
```

> **HINWEIS:** Haben Sie die **csv-Daten** in das Verzeichnis `SEMusicStoreAngularStatistics.ConApp\data` kopiert? Wenn nicht, dann kopieren Sie die **csv-Daten** in das Verzeichnis `SEMusicStoreAngularStatistics.ConApp\data`.

#### Testen des Imports

Sie können den Import Testen. Starten Sie dazu die `WebApi`-Anwendung `SEMusicStoreAngularStatistics.WebApi` und rufen Sie die URL `https://localhost:7074/api/Genres` auf. Es sollte eine Liste mit den Genres angezeigt werden.

```json
[{"name":"Rock","id":1},{"name":"Jazz","id":2},{"name":"Metal","id":3},{"name":"Alternative & Punk","id":4},{"name":"Rock And Roll","id":5},{"name":"Blues","id":6},{"name":"Latin","id":7},{"name":"Reggae","id":8},{"name":"Pop","id":9},{"name":"Soundtrack","id":10},{"name":"Bossa Nova","id":11},{"name":"Easy Listening","id":12},{"name":"Heavy Metal","id":13},{"name":"R&B/Soul","id":14},{"name":"Electronica/Dance","id":15},{"name":"World","id":16},{"name":"Hip Hop/Rap","id":17},{"name":"Science Fiction","id":18},{"name":"TV Shows","id":19},{"name":"Sci Fi & Fantasy","id":20},{"name":"Drama","id":21},{"name":"Comedy","id":22},{"name":"Alternative","id":23},{"name":"Classical","id":24},{"name":"Opera","id":25}]
```

---

### Schritt 10: Starten der Anwendung `SEMusicStoreAngularStatistics.WebApi`

Starten Sie nun die Anwendung `SEMusicStoreAngularStatistics.WebApi`. Diese Anwendung stellt die Web-API zur Verfügung. Sie können die Web-API mit dem Tool [Postman](https://www.postman.com/) testen.

Die Web-API ist unter der URL `https://localhost:7074/api/` erreichbar. Sie können die Web-API mit dem Tool [Postman](https://www.postman.com/) testen.

> **INFO:** Die Adresse der Web-API ist in der Datei `launchSettings.json` in der Projektmappe `SEMusicStoreAngularStatistics.WebApi` hinterlegt. Diese Datei finden Sie im Verzeichnis `Properties`. Die URL ist wie folgt aufgebaut: `https://localhost:7074/api/`.

---

### Schritt 11: `SEMusicStoreAngularStatistics.AngularApp` mit **VSCode** öffnen

Überprüfen Sie im Explorer ob das Verzeichnis `SEMusicStoreAngularStatistics.AngularApp` vorhanden ist. Wenn nicht, dann öffnen Sie den Ordner `SEMusicStoreAngularStatistics` mit dem **VSCode**-Editor. Im nächsten Schritt prüfen Sie, ob der Ordner `node_modules` vorhanden ist. Wenn nicht, führen Sie folgendes Kommando im Terminal von **VSCode** aus:

```bash
npm install
```

Nachdem dieser Schritt abgeschlossen ist, sollten der Ordner `node_modules` vorhanden sein. Sollte das nicht der Fall sein, dann führen Sie folgendes Kommando im Terminal von **VSCode** aus:  

```bash
npm install --force
```

> **HINWEIS:** Wenn Sie den Ordner `node_modules` nicht finden, dann ist das kein Problem. Sie können die Anwendung auch ohne diesen Ordner starten. Der Ordner wird automatisch erstellt, wenn Sie die Anwendung starten.

### Schritt 12: Einstellung zur `REST-Api` prüfen

Öffnen Sie die Datei `environment.ts` im Verzeichnis `SEMusicStoreAngularStatistics.AngularApp\src\environments`. Überprüfen Sie die Einstellung zur `REST-Api`. Diese sollte wie folgt aussehen:

```typescript
export const environment = {
  ...
  apiUrl: 'https://localhost:7074/api/',
  ...
};
```

Falls die Einstellung nicht vorhanden ist, dann fügen Sie diese manuell hinzu. Diese Einstellung ist wichtig, damit die Anwendung mit der `WebApi` kommunizieren kann.

---

### Schritt 13: Starten der `AngularApp` Anwendung

Starten Sie nun die Anwendung `SEMusicStoreAngularStatistics.AngularApp`. Im **VSCode** ist bereits ein `Task` definiert, der die Anwendung startet. Sie können die Anwendung mit dem Befehl `npm start` starten. Alternativ können Sie auch den Befehl `ng serve` oder die Schaltfäche |> verwenden.

> **HINWEIS:** Nach dem Start der Anwendung wird ein Browser-Fenster geöffnet. Wenn das nicht der Fall ist, dann öffnen Sie den Browser und geben Sie die URL `http://localhost:54091` ein.

Überprüfen Sie auch, ob die Anwendung unter der URL `http://localhost:54091` erreichbar ist. Wenn das nicht der Fall ist, dann überprüfen Sie die Einstellungen in der Datei `launchSettings.json` in der Projektmappe `SEMusicStoreAngularStatistics.AngularApp`. Falls Sie einen anderen Port verwenden, dann müssen Sie in der `WebApi` die Cors-Policy anpassen. Diese finden Sie in der Datei `Program.cs` in der Projektmappe `SEMusicStoreAngularStatistics.WebApi`. Ändern Sie die Cors-Policy, dann muss der Server neu gestartet werden.

---

### Schritt 14: Testen der `AngularApp` Anwendung

Die Anwendung `SEMusicStoreAngularStatistics.AngularApp` ist nun gestartet und Sie können die Anwendung im Browser testen. Die Anwendung zeigt eine Übersicht aller Entitäten an. Die Eingabeformulare für die Entitäten sind aus dem vorherigen Projekt `SEMusicStoreAngular` übernommen worden.

Nachdem die Anwendung getestet wurde, beenden Sie die Anwendung mit der Tastenkombination `Strg + C` im Terminal von **VSCode**. Beenden Sie auch den Server `SEMusicStoreAngularStatistics.WebApi` in der IDE.

### Schritt 15: Erstellen der View `MusicStoreInfos`

Wie aus der [Aufgabenstellung](https://github.com/leoggehrer/MusicStore?tab=readme-ov-file#kennzahlen) hervorgeht, sollen aus dem Datenbestand von `MusicStore` Kennzahlen ermittelt werden. Für die Ermittlung dieser Kennzahlen wird eine Basisview `MusicStoreInfos` erstellt. Im Anschluss werden für die Berechnung der konkreten Kennzahlen weiter `Views` erstellt, welche die View `MusicStoreInfos` als Quelle verwenden.

```sql
CREATE VIEW MusicStoreInfos
AS
SELECT ar.Id AS ArtistId, 
       ar.Name AS ArtistName, 
       al.Id AS AlbumId, 
       al.Title AS AlbumTitle, 
       t.Id AS TrackId, 
       t.Title AS TrackTitle, 
       t.Milliseconds, 
       g.Id AS GenreId, 
       g.Name AS GenreName
FROM Albums AS al INNER JOIN
     Tracks AS t ON al.Id = t.AlbumId INNER JOIN
     Artists AS ar ON al.ArtistId = ar.Id LEFT OUTER JOIN
     Genres AS g ON t.GenreId = g.Id;
```

### Schritt 16: Auswertung `Artist und Album`

In dieser Aufgabe werden die Entitäten `Artist` und `Album` ausgewertet. Die Auswertung erfolgt über die View `MusicStoreInfos`. Eine weitere View `ArtistAlbums` wird erstellt, die die View `MusicStoreInfos` als Quelle verwendet. Diese View wird später für die Anzeige der Auswertung verwendet.

```sql
CREATE VIEW ArtistAlbums
AS
SELECT DISTINCT
       ArtistId,
       ArtistName,
       AlbumId,
       AlbumTitle
FROM   MusicStoreInfos;
```

Damit die View `ArtistAlbums` im Backend verwendet werden kann, müssen die entsprechenden Entität hinzugefügt werden. Wir erstellen im Ordner `Entities` einen Unterordner `Views`. Anschließend erstellen wir folgende Entität mit dem Namen `ArtistAlbum`:

```csharp
namespace SEMusicStoreAngularStatistics.Logic.Entities.Views
{
    [View("ArtistAlbums")]
    public partial class ArtistAlbum : ViewObject
    {
        /// <summary>
        /// Gets or sets the unique identifier of the artist.
        /// </summary>
        public IdType ArtistId { get; set; }

        /// <summary>
        /// Gets or sets the unique identifier of the album.
        /// </summary>
        public IdType AlbumId { get; set; }

        /// <summary>
        /// Gets or sets the name of the artist.
        /// </summary>
        public string ArtistName { get; set; } = string.Empty;

        /// <summary>
        /// Gets or sets the title of the album.
        /// </summary>
        public string AlbumTitle { get; set; } = string.Empty;
    }
}
```

Die Entität muss mit dem Attribut `[View("ArtistAlbums")]` versehen werden. Dieses Attribut gibt an, dass es sich um eine View handelt und die View `ArtistAlbums` als Quelle verwendet wird. Die Entität `ArtistAlbum` erbt von der Klasse `ViewObject`, die in der Projektmappe `SEMusicStoreAngularStatistics.Logic` definiert ist.

Starten Sie nun die `CodeGenerierung` wie im Schritt 8 beschrieben. Die `CodeGenerierung` erstellt die entsprechenden Dateien für die View `ArtistAlbum`.

Testen Sie nun die View `ArtistAlbum` in der Web-API. Starten Sie dazu die Anwendung `SEMusicStoreAngularStatistics.WebApi` und rufen Sie die URL `https://localhost:7074/api/ArtistAlbums` auf. Es sollte eine Liste mit den Künstlern und ihren Alben angezeigt werden.

```json
[
  {"artistId":1,"albumId":1,"artistName":"AC/DC","albumTitle":"For Those About To Rock We Salute You"},
  {"artistId":1,"albumId":2,"artistName":"AC/DC","albumTitle":"Let There Be Rock"},
  {"artistId":2,"albumId":3,"artistName":"Accept","albumTitle":"Restless and Wild"},
  ...
]
```

> **Congratulations:** Sie haben erfolgreich die View `ArtistAlbums` erstellt und getestet. Im nächsten Schritt erstellen wir ein Ausgabeformular für die Entity-`ArtistAlbum`.

#### Schritt 16.1: Ausgabeformular für `Artist und Album` erstellen

In diesem Schritt erstellen wir das Ausgabeformular für die Entity-`ArtistAlbum`. Die Vorgehensweise unterscheidet sich von der Eingabeformularen nur in wenigen Details.

Zuerst erstellen wir die Übersichtskomponente für die Entity-`ArtistAlbum`. Geben Sie nun den folgenden **Befehl** im Terminal von **VSCode** ein:

```bash
ng g c pages/artistalbums/ArtistAlbumList --standalone
```

Dieser Befehl erstellt eine neue Komponente mit dem Namen `ArtistAlbumList` im Verzeichnis `pages/artistalbums`. Diese Komponente ist eine **Standalone**-Komponente. Das bedeutet, dass die Komponente keine Abhängigkeiten zu anderen Modulen hat.

Die Komponente `ArtistAlbumList` muss in das `routing` eingetragen werden. Dazu fügen Sie folgenden Eintrag in `app-routing.module.ts` hinzu:

```typescript
import { ArtistAlbumListComponent } from './pages/artistalbums/artist-album-list/artist-album-list.component';

const routes: Routes = [
  ...
  { path: 'artistalbums', component: ArtistAlbumListComponent },
  ...
]
...
```

Als nächstes tragen wir den Aufruf der Komponente in das `Dashboard` ein:

Öffnen Sie die Datei `dashboart.component.ts` und fügen Sie folgenden Eintrag hinzu:

```typescript
...
  public statisticCards: DashboardCard[] = [
    { title: 'Artist mit Alben', text: 'Statistik: Artist und deren Alben', type: '/artistalbums', bg: 'bg-info text-white' },
  ];
...
```

Öffnen Sie die Datei `dashboard.component.html` und fügen Sie folgenden Eintrag hinzu:

```html
...
<!-- Statistik Karten -->
<h1>Statistiken</h1>
<div class="row">
  <div class="col-md-3 mb-4" *ngFor="let card of statisticCards">
    <a [routerLink]="[card.type]" class="text-decoration-none">
      <div class="card shadow-sm h-100" [ngClass]="card.bg">
        <div class="card-body">
          <h5 class="card-title">{{ card.title }}</h5>
          <p class="card-text">{{ card.text }}</p>
        </div>
      </div>
    </a>
  </div>
</div>
...      
```

Nachdem der Eintrag eingetragen worden ist, kann die Komponente `ArtistAlbumList` im `Dashboard` aufgerufen werden. Aktivieren Sie im `Dashboard` die Karte `Artist mit Album`. Nun wird eine Seite mit der Ausgabe `artist-album-list works!` angezeigt.

#### Schritt 16.2: Anpassen der Übersicht-Komponente für `ArtistAlbum`

Nun muss die Komponente entsprechend angepasst werden. Kopieren Sie das Programm aus der Datei `sampleItemViewList.ts` im Ordner **SolutionItems** und fügen Sie dieses Programm in die Datei `artist-album-list.component.ts` ein. Passen Sie die Datei `artist-album-list.component.ts` wie folgt an:

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IArtistAlbum } from '@app/models/entities/views/i-artist-album';
import { ArtistAlbumService } from '@app/services/http/entities/views/artist-album-service';
import { MessageBoxService } from '@app/services/message-box-service.service';
import { GenericViewListComponent } from '@app/components/base/generic-view-list.component';

/* Ersetzen Sie hier 'IViewEntity' durch den gewuenschten 'Type' (z.B.: 'IAlbum') */
interface IItem extends IArtistAlbum {

}
/* Ersetzen Sie in Component 'item-view' durch den gewuenschten Namen (z.B.: genre-statistics) */
@Component({
    selector: 'app-artist-album-list',
    imports: [CommonModule, FormsModule],
    templateUrl: './artist-album-list.component.html',
    styleUrl: './artist-album-list.component.css'
})
export class ArtistAlbumListComponent extends GenericViewListComponent<IItem> implements OnInit {

    constructor(
        protected override modal: NgbModal,
        protected dataAccessService: ArtistAlbumService,
        protected override messageBoxService: MessageBoxService) {
        super(modal, dataAccessService, messageBoxService);
    }

    ngOnInit(): void {
        // Passen Sie hier den Filter entsprechend an
        this._queryParams.filter = 'artistName.ToLower().Contains(@0)';
        this.reloadData();
    }

    /* 
    *  Passen Sie hier den Titel fuer die Ueberschtsseite an.
    *  Default: Items
    */
    public override get pageTitle(): string {
        return 'Artist mit Alben';
    }

    /* 
    *  Passen Sie hier den Titel fuer die Loeschbestaetigung an.
    *  Default: id
    */
    public override getItemTitel(item: IItem): string {
        return super.getItemTitel(item);
    }

    /* 
    *  Hier k�nnen Sie die Sortierung der Anzeige anpassen
    *  z.B.: return items.sort((a, b) => a.name.localeCompare(b.name));
    *  Default: keine Sortierung
    */
    protected override sortData(items: IItem[]): IItem[] {
        return items.sort((a, b) => (a.artistName + a.albumTitle).localeCompare(b.artistName + b.albumTitle));
    }
}

```

Der eingefügte Code ist eine angepasste Version der `GenericViewListComponent`, die speziell für die Entity-`ArtistAlbum` erstellt wurde. Diese Komponente zeigt eine Liste von Künstler mit den zugehörigen Alben an. Diese Ansicht unterstützt die `Filter`- und `Reload`-Operation. Die `CUD`-Operationen sind deaktiviert.

Die Datei `artist-album-list.component.html` muss ebenfalls angepasst werden. Kopieren Sie den Inhalt der Datei `sampleItemViewList.html` im Ordner **SolutionItems** und fügen Sie diesen in die Datei `artist-album-list.component.html` ein. Passen Sie die Datei `artist-album-list.component.html` wie folgt an:

```html
<div class="container mt-4">
    <h3 class="mb-4">{{pageTitle}}</h3>

    <div class="d-flex mb-3">
        <!-- Aktion: Neues Element hinzufuegen -->
        <button *ngIf="canAdd"
                class="btn btn-primary me-2"
                (click)="addCommand()">
            <i class="bi bi-plus"></i>
        </button>
        <!-- Suchtext -->
        <input *ngIf="canSearch"
               type="text"
               class="form-control me-2"
               [(ngModel)]="searchTerm"
               placeholder="🔍 Suche nach..." />
        <!-- Aktion: Daten neu Laden -->
        <button *ngIf="canRefresh"
                class="btn btn-success me-2"
                (click)="reloadData()">
            <i class="bi bi-arrow-clockwise"></i>
        </button>
    </div>

    <table class="table table-striped table-bordered table-hover">
        <thead class="table-dark">
            <tr>
                <!-- Hier werden die Spalten-Bezeichner konfiguriert -->
                <th>Artist</th>
                <th>Album</th>
                <th *ngIf="canEdit || canDelete"
                    style="white-space: nowrap; width: 1%;">
                    Aktion
                </th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let item of dataItems">
                <!-- Hier werden die Spalten-Werte konfiguriert -->
                <td><strong>{{ item.artistName }}</strong></td>
                <td>{{ item.albumTitle }}</td>
                <!-- Aktion-Spalte: Bearbeiten und Loeschen -->
                <td *ngIf="canEdit || canDelete">
                    <div class="d-flex gap-1">
                        <button *ngIf="canEdit"
                                class="btn btn-sm btn-outline-secondary me-2"
                                (click)="editCommand(item)">
                            <i class="bi bi-pencil"></i>
                        </button>
                        <button *ngIf="canDelete"
                                class="btn btn-sm btn-outline-danger"
                                (click)="deleteCommand(item)">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
```

> **HINWEIS:** Bevor Sie mit dem nächsten Schritt fortfahren, beenden Sie nun die Anwendung `SEMusicStoreAngularStatistics.AngularApp` mit der Tastenkombination `Strg + C` im Terminal von **VSCode** und die Anwendung `SEMusicStoreAngularStatistics.WebApi` in der IDE.

### Schritt 17: Auswertung `Artist und Songs`

In dieser Aufgabe werden die Entitäten `Artist` und `Track` ausgewertet. Die Auswertung erfolgt über die View `MusicStoreInfos`. Eine weitere View `ArtistTracks` wird erstellt, die die View `MusicStoreInfos` als Quelle verwendet. Diese View wird später für die Anzeige der Auswertung verwendet.

```sql
CREATE VIEW ArtistTracks
AS
SELECT DISTINCT
       ArtistId,
       ArtistName,
       TrackId,
       TrackTitle,
       GenreId,
       GenreName
FROM   MusicStoreInfos;
```

Damit die View `ArtistTracks` im Backend verwendet werden kann, müssen die entsprechenden Entität hinzugefügt werden. Anschließend erstellen wir folgende Entität mit dem Namen `ArtistAlbum`:

```csharp
namespace SEMusicStoreAngularStatistics.Logic.Entities.Views
{
    [View("ArtistTracks")]
    public partial class ArtistTrack : ViewObject
    {
        /// <summary>
        /// Gets or sets the unique identifier of the artist.
        /// </summary>
        public IdType ArtistId { get; set; }

        /// <summary>
        /// Gets or sets the unique identifier of the track.
        /// </summary>
        public IdType TrackId { get; set; }

        /// <summary>
        /// Gets or sets the unique identifier of the track.
        /// </summary>
        public IdType GenreId { get; set; }

        /// <summary>
        /// Gets or sets the name of the artist.
        /// </summary>
        public string ArtistName { get; set; } = string.Empty;

        /// <summary>
        /// Gets or sets the title of the track.
        /// </summary>
        public string TrackTitle { get; set; } = string.Empty;

        /// <summary>
        /// Gets or sets the name of the genre.
        /// </summary>
        public string GenreName { get; set; } = string.Empty;
    }
}
```

Die Entität muss mit dem Attribut `[View("ArtistTracks")]` versehen werden. Dieses Attribut gibt an, dass es sich um eine View handelt und die View `ArtistTracks` als Quelle verwendet wird. Die Entität `ArtistTrack` erbt von der Klasse `ViewObject`, die in der Projektmappe `SEMusicStoreAngularStatistics.Logic` definiert ist.

Starten Sie nun die `CodeGenerierung` wie im Schritt 8 beschrieben. Die `CodeGenerierung` erstellt die entsprechenden Dateien für die View `ArtistTrack`.

Testen Sie nun die View `ArtistTrack` in der Web-API. Starten Sie dazu die Anwendung `SEMusicStoreAngularStatistics.WebApi` und rufen Sie die URL `https://localhost:7074/api/ArtistTracks` auf. Es sollte eine Liste mit den Künstlern und ihren Alben angezeigt werden.

```json
[
  {"artistId":1,"trackId":1,"artistName":"AC/DC","trackTitle":"For Those About To Rock (We Salute You)","genreId":13,"genreName":"Heavy Metal"},
  {"artistId":1,"trackId":2,"artistName":"AC/DC","trackTitle":"Let There Be Rock","genreId":13,"genreName":"Heavy Metal"},
  {"artistId":2,"trackId":3,"artistName":"Accept","trackTitle":"Restless and Wild","genreId":13,"genreName":"Heavy Metal"},
  ...
]
```

> **HINWEIS:** Die nächsten Schritte sind identisch zu den Schritten 16.1 und 16.2. Sie erstellen eine Ausgabe-Komponente für die Entity-`ArtistTrack`.

### Schritt 18: Auswertung `Artist und Statistik`

Führe die Schritte in Anlehnung an die Schritte 17 aus, um die Auswertung `Artist und Statistik` zu erstellen. Die View `ArtistStatistics` wird erstellt, die die View `MusicStoreInfos` als Quelle verwendet. Diese View wird später für die Anzeige der Auswertung verwendet.

```sql
CREATE VIEW AlbumStatistics
AS
SELECT 
  AlbumId,
  AlbumTitle,
  COUNT(TrackId) AS NumberSongs,
  SUM(Milliseconds) / 1000 AS TotalSongTimeSeconds,
  AVG(Milliseconds / 1000) AS AverageSongTimeSeconds
FROM MusicStoreInfos
GROUP BY AlbumId, AlbumTitle;
```

Damit die View `AlbumStatistics` im Backend verwendet werden kann, müssen die entsprechenden Entität hinzugefügt werden. Anschließend erstellen wir folgende Entität mit dem Namen `AlbumStatistic`:

```csharp
namespace SEMusicStoreAngularStatistics.Logic.Entities.Views
{
    /// <summary>
    /// Represents statistical information about an artist, including the number of songs,
    /// total duration, and average song duration.
    /// </summary>
    [View("AlbumStatistics")]
    public partial class AlbumStatistic : ViewObject
    {
        /// <summary>
        /// Gets or sets the unique identifier of the album.
        /// </summary>
        public IdType AlbumId { get; set; }

        /// <summary>
        /// Gets or sets the title of the album.
        /// </summary>
        public string AlbumTitle { get; set; } = string.Empty;

        /// <summary>
        /// Gets or sets the number of songs by the album.
        /// </summary>
        public int NumberSongs { get; set; }
        /// <summary>
        /// Gets or sets the total duration of all songs by the album, in seconds.
        /// </summary>
        public System.Int64 TotalSongTimeSeconds { get; set; }
        /// <summary>
        /// Gets or sets the average duration of the album's songs, in seconds.
        /// </summary>
        public System.Int64 AverageSongTimeSeconds { get; set; }
    }
}
```

Ergänzen Sie die weiteren Schritte in Analogie zu den Schritten 17, 16.1 und 16.2, um die Ausgabe-Komponente für die Entity-`AlbumStatistic` zu erstellen.

### Schritt 19: Auswertung `Album und Titeln`

Führe die Schritte in Anlehnung an die Schritte 18 aus, um die Auswertung `Album und Titeln` zu erstellen.

### Schritt 20: Auswertung `Album und Statistik`

Führe die Schritte in Anlehnung an die Schritte 19 aus, um die Auswertung `Album und Statistik` zu erstellen.

### Schritt 21: Auswertung `Genre und Songs`

Führe die Schritte in Anlehnung an die Schritte 20 aus, um die Auswertung `Genre und Songs` zu erstellen.

### Schritt 22: Auswertung `Genre und Statistik`

Führe die Schritte in Anlehnung an die Schritte 21 aus, um die Auswertung `Genre und Statistik` zu erstellen.

**Viel Erfolg beim Umsetzen!**
