# MusicStoreAngular

**Inhaltsverzeichnis:**

- [MusicStoreAngular](#musicstoreangular)
  - [Einleitung](#einleitung)
  - [Aufgabenstellung](#aufgabenstellung)
  - [Umsetzung der Aufgabe mit dem SEMusicStoreBase](#umsetzung-der-aufgabe-mit-dem-semusicstorebase)
    - [Schritt 1: Repository klonen](#schritt-1-repository-klonen)
    - [Schritt 2: `SEMusicStoreBase` mit der IDE öffnen](#schritt-2-semusicstorebase-mit-der-ide-öffnen)
    - [Schritt 3: Starten der Anwendung `TemplateTools.ConApp`](#schritt-3-starten-der-anwendung-templatetoolsconapp)
    - [Schritt 4: `SEMusicStoreBase` kopieren =\> `SEMusicStoreAngularStatistics`](#schritt-4-semusicstorebase-kopieren--SEMusicStoreAngularStatistics)
    - [Schritt 5: `SEMusicStoreAngularStatistics` mit der IDE öffnen](#schritt-5-SEMusicStoreAngularStatistics-mit-der-ide-öffnen)
    - [Schritt 6: Starten der Anwendung `TemplateTools.ConApp`](#schritt-6-starten-der-anwendung-templatetoolsconapp)
    - [Schritt 7: `Preprocessor` einstellen](#schritt-7-preprocessor-einstellen)
    - [Schritt 8: Starten der `CodeGenerierung`](#schritt-8-starten-der-codegenerierung)
    - [Schritt 9: Starten der Anwendung `SEMusicStoreAngularStatistics.ConApp`](#schritt-9-starten-der-anwendung-SEMusicStoreAngularStatisticsconapp)
      - [Testen des Imports](#testen-des-imports)
    - [Schritt 10: Starten der Anwendung `SEMusicStoreAngularStatistics.WebApi`](#schritt-10-starten-der-anwendung-SEMusicStoreAngularStatisticswebapi)
    - [Schritt 11: `SEMusicStoreAngularStatistics.AngularApp` mit **VSCode** öffnen](#schritt-11-SEMusicStoreAngularStatisticsangularapp-mit-vscode-öffnen)
    - [Schritt 12: Einstellung zur `REST-Api` prüfen](#schritt-12-einstellung-zur-rest-api-prüfen)
    - [Schritt 13: Starten der `AngularApp` Anwendung](#schritt-13-starten-der-angularapp-anwendung)
    - [Schritt 14: Eingabeformular für die Entity-`Genre` erstellen](#schritt-14-eingabeformular-für-die-entity-genre-erstellen)
      - [Schritt 14.A: Erstellen der Übersicht-Komponente für `Genre`](#schritt-14a-erstellen-der-übersicht-komponente-für-genre)
      - [Schritt 14.B: Erstellen der Bearbeitung-Komponente für `Genre`](#schritt-14b-erstellen-der-bearbeitung-komponente-für-genre)
      - [Schritt 14.C: Anpassen der Übersicht-Komponente für `Genre`](#schritt-14c-anpassen-der-übersicht-komponente-für-genre)
      - [Schritt 14.D: Anpassen der Bearbeitung-Komponente für `Genre`](#schritt-14d-anpassen-der-bearbeitung-komponente-für-genre)
    - [Schritt 15: Eingabeformular für die Entity-`Artist` erstellen](#schritt-15-eingabeformular-für-die-entity-artist-erstellen)
    - [Schritt 16: Eingabeformular für die Entity-`Album` erstellen](#schritt-16-eingabeformular-für-die-entity-album-erstellen)
      - [Schritt 16.A: Option 1: Auflösung der `ManyToOne`-Beziehung in der `Logic`-Schicht](#schritt-16a-option-1-auflösung-der-manytoone-beziehung-in-der-logic-schicht)
      - [Schritt 16.B: Option 2: Auflösung der `ManyToOne`-Beziehung mit einer `View`](#schritt-16b-option-2-auflösung-der-manytoone-beziehung-mit-einer-view)
        - [Schritt 16.B.1: Starten der `CodeGenerierung`](#schritt-16b1-starten-der-codegenerierung)
        - [Schritt 16.B.2: Eingabeformular für die Entity-`AlbumArtist` erstellen](#schritt-16b2-eingabeformular-für-die-entity-albumartist-erstellen)
        - [Schritt 16.B.3: Anpassen der Übersicht-Komponente für `AlbumArtist`](#schritt-16b3-anpassen-der-übersicht-komponente-für-albumartist)
    - [Schritt 17: Eingabeformular für die Entity-`Track` erstellen](#schritt-17-eingabeformular-für-die-entity-track-erstellen)

---

## Einleitung

Dieses Projekt ist der **zweite** Teil aus einer mehrteiligen Reihe, die sich mit der Erstellung eines Software-Systems beschäftigt. Als Startvorlage für eine schnelle Entwicklung wird [SEMusicStoreBase](https://github.com/leoggehrer/SEMusicStoreBase) verwendet. Diese Vorlage orientiert sich an der Umsetzung der [SEArchitecture](https://github.com/leoggehrer/SEArchitecture) und bietet bereits eine Vielzahl von Komponenten.

Hauptthema dieser Reihe ist die Erstellung von Eingabeformularen für die **Entitäten** `Genre`, `Artist`, `Album` und `Track`. Die Formulare werden mit dem **Angular**-Framework umgesetzt.

## Aufgabenstellung

Eine detailierte Aufgabenstellung mit dem Titel **MusicStore** finden [hier](https://github.com/leoggehrer/MusicStore).

---

## Umsetzung der Aufgabe mit dem SEMusicStoreBase

Mit dem `SEMusicStoreBase` können Sie die Aufgabenstellung in wenigen Schritten umsetzen.

**Umsetzungstabelle:**

| Schritt | Beschreibung                                                         |
|---------|----------------------------------------------------------------------|
| 1       | `SEMusicStoreBase` klonen                                            |
| 2       | `SEMusicStoreBase` mit der IDE öffnen                                |
| 3       | Starten der Anwendung `TemplateTools.ConApp`                         |
| 4       | `SEMusicStoreBase` kopieren => `SEMusicStoreAngularStatistics`                 |
| 5       | `SEMusicStoreAngularStatistics` mit der IDE öffnen                             |
| 6       | Starten der Anwendung `TemplateTools.ConApp`                         |
| 7       | `Preprocessor` einstellen                                            |
| 8       | Starten der `CodeGenerierung`                                        |
| 9       | Starten der Anwendung `SEMusicStoreAngularStatistics.ConApp`                   |
| 10      | Starten der Anwendung `SEMusicStoreAngularStatistics.WebApi`                   |
| 11      | `SEMusicStoreAngularStatistics.AngularApp` mit **VSCode** öffnen               |
| 12      | Einstellung zur `REST-Api` prüfen                                    |
| 13      | Starten der `AngularApp` Anwendung                                   |
| 14      | Eingabeformular für die Entity-`Genre` erstellen                     |
| 14.A    | Erstellen der Übersicht-Komponente für `Genre`                       |
| 14.B    | Erstellen der Bearbeitung-Komponente für `Genre`                     |
| 14.C    | Anpassen der Übersicht-Komponente für `Genre`                        |
| 14.D    | Anpassen der Bearbeitung-Komponente für `Genre`                      |
| 15      | Eingabeformular für die Entity-`Artist` erstellen                    |
| 16      | Eingabeformular für die Entity-`Album` erstellen                     |
| 16.A    | Option 1: Auflösung der `ManyToOne`-Beziehung in der `Logic`-Schicht |
| 16.B    | Option 2: Auflösung der `ManyToOne`-Beziehung mit einer `View`       |
| 16.B.1  | Starten der `CodeGenerierung`                                        |
| 16.B.2  | Eingabeformular für die Entity-`AlbumArtist` erstellen               |
| 16.B.3  | Anpassen der Übersicht-Komponente für `AlbumArtist`                  |
| 17      | Eingabeformular für die Entity-`Track` erstellen                     |

### Schritt 1: Repository klonen

```bash
git clone https://github.com/leoggehrer/SEMusicStoreBase.git
cd SEMusicStoreBase
```

---

### Schritt 2: `SEMusicStoreBase` mit der IDE öffnen

Öffnen Sie das `SEMusicStoreBase` mit der IDE (Visual Studio 2022, Rider oder Visual Studio Code).

### Schritt 3: Starten der Anwendung `TemplateTools.ConApp`

Nach dem Start von `TemplateTools.ConApp` wird folgendes Menü angezeigt:

```bash
==============
Template Tools
==============

Solution path: ...\SEMusicStoreBase

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

### Schritt 4: `SEMusicStoreBase` kopieren => `SEMusicStoreAngularStatistics`

Wählen Sie die **Menü-Option:** 2 - `Copier` aus. Anschließend wird das folgende Menü angezeigt:

```bash
===============
Template Copier
===============

'SETemplate' from:   ...\SEMusicStoreBase
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

'SETemplate' from: ...\SEMusicStoreBase
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

> **HINWEIS:** Sie können nun die **TemplateTools** von **SEMusicStoreBase** beenden.

---

### Schritt 5: `SEMusicStoreAngularStatistics` mit der IDE öffnen

Im nächsten Schritt öffnen Sie nun die Projektmappe `SEMusicStoreAngularStatistics` mit der IDE (Visual Studio, VSCode oder Rider). Nun haben Sie eine Projektstruktur die der Projektstruktur von `SEMusicStoreBase` ähnelt. Der einzige Unterschied besteht darin, dass der der Projektname 'SEMusicStoreBase' durch den Namen `SEMusicStoreAngularStatistics` ersetzt wurde. 

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

> **HINWEIS:** Die **csv-Daten** sind nicht übertragen worden. Diese müssen manuell in die Projektmappe `SEMusicStoreAngularStatistics.ConApp` kopiert werden. Die csv-Daten finden Sie in der Projektmappe `SEMusicStoreBase.ConApp` im Verzeichnis `data`. Kopieren Sie die csv-Daten in das Verzeichnis `SEMusicStoreAngularStatistics.ConApp\data`.

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

Nachdem die Einstellung vorgenommen wurde, wählen Sie die **Menü-option:** 9 - `Start` aus. Die `CodeGenerierung` startet und genriert die entsprechenden Code-Teile. Eine detailierte Übersicht erhalten Sie [hier](https://github.com/leoggehrer/SEMusicStoreBase/blob/master/README.md#schritt-12-starten-der-codegenerierung).

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

### Schritt 14: Eingabeformular für die Entity-`Genre` erstellen

Nun erstellen Sie ein Eingabeformular für die Entity-`Genre`. Das Formular unterstützt die `CRUD`-Operationen und folgt dem folgendem Formular-Muster:

**PageTitle:**

| ➕  | 🔍.........................| 🔄 |
|-----|-----------------------------|-----|

| Spalte A | Spalte B | ...      | Aktion   |
| ---------|----------|----------|----------|
| Wert     | Wert     | ...      | ✏️ / ❌ |
| Wert     | Wert     | ...      | ✏️ / ❌ |
| Wert     | Wert     | ...      | ✏️ / ❌ |

**Erklärung:**

|Aktion|Beschreibung|
|------|------------|
| ➕ | Öffnet ein Dialog-Fenster mit dem Eingabeformular für das entsprechende Entity. In diesem Dialog-Fenster können Sie die Daten der Entität erfassen. |
| 🔍 |...Hier können Sie nach Daten der Entität suchen. |
| 🔄 | Aktualisiert die Daten der Entität. Die Daten werden von der Datenbank geladen. |
| ✏️ | Öffnet ein Dialog-Fenster mit dem Eingabeformular für das Bearbeiten der Daten. |
| ❌ | Öffnet ein Dialog-Fenster mit dem einer Bestätigungsabfrage ob die Entität gelöscht werden soll. |

#### Schritt 14.A: Erstellen der Übersicht-Komponente für `Genre`

Zuerst benötigen wir eine Übersichtsseite für die Entity-`Genre`. Diese Seite zeigt alle Daten der Entität an. Geben Sie nun den folgenden **Befehl** im Terminal von **VSCode** ein:

```bash
ng g c pages/genres/GenreList --standalone
```

Dieser Befehl erstellt eine neue Komponente mit dem Namen `GenreList` im Verzeichnis `pages/genres`. Diese Komponente ist eine **Standalone**-Komponente. Das bedeutet, dass die Komponente keine Abhängigkeiten zu anderen Modulen hat.

Die Komponente `GenreList` muss in das `routing` eingetragen werden. Dazu fügen Sie folgenden Eintrag in `app-routing.module.ts` hinzu:

```typescript
import { GenreListComponent } from './pages/genres/genre-list/genre-list.component';

const routes: Routes = [
  ...
  { path: 'genres', component: GenreListComponent },
  ...
]
...
```

Als nächstes tragen wir den Aufruf der Komponente in das `Dashboard` ein:

Öffnen Sie die Datei `dashboart.component.ts` und fügen Sie folgenden Eintrag hinzu:

```typescript
...
  public publicCards = [
    { title: 'Genre', text: 'Alle Genres im Musikladen', type: '/genres', bg: 'bg-primary text-white' },
    { title: 'Item2', text: 'Ein Text für das Item2', type: '/items2', bg: 'bg-success text-white' },
  ];
...
```

Nachdem der Eintrag eingetragen worden ist, kann die Komponente `GenreList` im `Dashboard` aufgerufen werden. Aktivieren Sie im `Dashboard` die Karte `Genre`. Nun wird eine Seite mit der Ausgabe `genre-list works!` angezeigt.

#### Schritt 14.B: Erstellen der Bearbeitung-Komponente für `Genre`

Als nächstes benötigen wir eine Komponente zum Erfassen bzw. Bearbeiten der Daten der Entität-`Genre`. Geben Sie nun den folgenden **Befehl** im Terminal von **VSCode** ein:

```bash
ng g c components/GenreEdit --standalone
```

#### Schritt 14.C: Anpassen der Übersicht-Komponente für `Genre`

Nun muss die Komponente entsprechend angepasst werden. Kopieren Sie das Programm aus der Datei `sampleItemEntityList.ts` im Ordner **SolutionItems** und fügen Sie dieses Programm in die Datei `genre-list.component.ts` ein. Passen Sie die Datei `genre-list.component.ts` wie folgt an:

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageBoxService } from '@app/services/message-box-service.service';
import { GenericEntityListComponent } from '@app/components/base/generic-entity-list.component';
import { IGenre } from '@app/models/entities/i-genre';
import { GenreService } from '@app/services/http/entities/genre-service';
import { GenreEditComponent } from '@app/components/genre-edit/genre-edit.component';

/* Ersetzen Sie hier 'IKey' durch den gewuenschten 'Type' (z.B.: 'IGenre') */
interface IItem extends IGenre {

}
/* Ersetzen Sie in Component 'item' durch den gewuenschten Namen (z.B.: genre) */
@Component({
    selector: 'app-genre-list',
    imports: [CommonModule, FormsModule],
    templateUrl: './genre-list.component.html',
    styleUrl: './genre-list.component.css'
})
export class GenreListComponent extends GenericEntityListComponent<IItem> implements OnInit {

    constructor(
        protected override modal: NgbModal,
        protected dataAccessService: GenreService,
        protected override messageBoxService: MessageBoxService) {
        super(modal, dataAccessService, messageBoxService);
    }

    ngOnInit(): void {
        // Passen Sie hier den Filter entsprechend an
        this._queryParams.filter = 'name.Contains(@0)';
        this.reloadData();
    }

    /* 
    *  Passen Sie hier den Titel fuer die Ueberschtsseite an.
    *  Default: Items
    */
    public override get pageTitle(): string {
        return 'Genres';
    }

    /* 
    *  Passen Sie hier den Titel fuer die Loeschbestaetigung an.
    *  Default: id
    */
    public override getItemTitel(item: IItem): string {
        return item.name;
    }

    /* 
    *  Hier koennen Sie die Sortierung der Anzeige anpassen
    *  z.B.: return items.sort((a, b) => a.name.localeCompare(b.name));
    *  Default: keine Sortierung
    */
    protected override sortData(items: IItem[]): IItem[] {
        return items.sort((a, b) => a.name.localeCompare(b.name));
    }

    /*
    *  Geben Sie hier die Komponente fuer das Bearbeiten eines Eintrages an.
    *  (z.B.: GenreEditComponent)
    *  Default: keine Komponente
    */
    protected override getEditComponent() {
        return GenreEditComponent;
    }
}
```

Die Datei `genre-list.component.html` muss ebenfalls angepasst werden. Kopieren Sie den Inhalt der Datei `sampleItemEntityList.html` im Ordner **SolutionItems** und fügen Sie diesen in die Datei `genre-list.component.html` ein. Passen Sie die Datei `genre-list.component.html` wie folgt an:

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
                <th>Name</th>
                <th *ngIf="canEdit || canDelete"
                    style="white-space: nowrap; width: 1%;">
                    Aktion
                </th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let item of dataItems">
                <!-- Hier werden die Spalten-Werte konfiguriert -->
                <td><strong>{{ item.name }}</strong></td>
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

#### Schritt 14.D: Anpassen der Bearbeitung-Komponente für `Genre`

Nun muss die Komponente `GenreEdit` angepasst werden. Kopieren Sie den Inhalt der Datei `sampleItemEdit.ts` im Ordner **SolutionItems** und fügen Sie diesen in die Datei `genre-edit.component.ts` ein. Passen Sie die Datei `genre-edit.component.ts` wie folgt an:

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IGenre } from '@app/models/entities/i-genre';
import { GenericEditComponent } from '@app/components/base/generic-edit.component';

/* Ersetzen Sie hier 'IKey' durch den gewuenschten 'Type' (z.B.: 'IAlbum') */
interface IItem extends IGenre {

}
/* Ersetzen Sie in Component 'item' durch den gewuenschten Namen (z.B.: album) */
@Component({
    selector: 'app-genre-edit',
    imports: [CommonModule, FormsModule],
    templateUrl: './genre-edit.component.html',
    styleUrl: './genre-edit.component.css'
})
// Ersetzen Sie hier Item durch den gewuenschten Namen (z.B.: Item -> Album)
export class GenreEditComponent extends GenericEditComponent<IItem> {

    constructor(
        public override activeModal: NgbActiveModal) {
        super(activeModal);
    }

    /*
    *  Passen Sie hier den Titel fuer die Ueberschtsseite an.
    *  Default: Item Hinzuf�gen oder Item Berbeiten
    */
    public override get title(): string {
        return 'Genre ' + super.title;
    }
}
```

Die Datei `genre-edit.component.html` muss ebenfalls angepasst werden. Kopieren Sie den Inhalt der Datei `sampleItemEdit.html` im Ordner **SolutionItems** und fügen Sie diesen in die Datei `genre-edit.component.html` ein. Passen Sie die Datei `genre-edit.component.html` wie folgt an:

```html
<div *ngIf="dataItem" class="card mt-4">
    <div class="card-header d-flex justify-content-between align-items-center">
        <h3>{{ title }}</h3>
        <button type="button"
                class="btn btn-sm btn-danger"
                aria-label="Schliessen"
                (click)="dismiss()">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="card-body">
        <form (ngSubmit)="submitForm()" #editForm="ngForm">
            <div class="mb-3">
                <label class="form-label">Name</label>
                <input class="form-control" [(ngModel)]="dataItem.name" name="name" required />
            </div>

            <button class="btn btn-success" type="submit">Speichern</button>
            <button class="btn btn-secondary ms-2" type="button" (click)="cancelForm()">Abbrechen</button>
        </form>
    </div>
</div>
```

> **Congratulations** on your first form in Angular !

### Schritt 15: Eingabeformular für die Entity-`Artist` erstellen

Nun erstellen Sie ein Eingabeformular für die Entity-`Artist`. Die Vorgehensweise ist die gleiche wie bei der Entity-`Genre`. Sie müssen lediglich die Namen der Dateien und die Namen der Klassen anpassen. Die Dateien `artist-list.component.ts`, `artist-list.component.html`, `artist-edit.component.ts` und `artist-edit.component.html` sind analog zu den Dateien `genre-list.component.ts`, `genre-list.component.html`, `genre-edit.component.ts` und `genre-edit.component.html` aufgebaut.

### Schritt 16: Eingabeformular für die Entity-`Album` erstellen

Nun erstellen wir das Eingabeformular für die Entity-`Album`. Der Unterschied zu den vorherigen Formularen besteht darin, dass die Entity-`Album` eine `ManyToOne`-Beziehung zur Entity-`Artist` hat. Das bedeutet, dass wir in der Komponente `AlbumEditComponent` eine Auswahl für den `Artist` benötigen. Diese Auswahl wird mit einem `Select`-Element realisiert. Zudem soll in der Übersicht der `Artist` angezeigt werden. Das bedeutet, dass wir in der Komponente `AlbumListComponent` eine auf die Daten von `Artist` benötigen.  Es gibt zwei Möglichkeiten, dies zu realisieren:

- **Option 1:** Beim Laden der Entität-`Album` wird die `ManyToOne`-Beziehung aufgelöst.
- **Option 2:** Für die Übersichtsseite wird eine **View** erstellt, welche aller erforderlichen Eigenschaften (wie den
Artist-Namen) bereitstellt.

#### Schritt 16.A: Option 1: Auflösung der `ManyToOne`-Beziehung in der `Logic`-Schicht

Für die Auflösung der `ManyToOne`-Beziehung muss die Klasse `AlbumSet` erweitert werden. Diese Klasse befindet sich im `Logic`-Projekt im Ordner `DataContext`. Die Erweiterung der Klasse erfolgt mit einer `partial class AlbumSet`. Dazu erstellen wir eine neue Datei `AlbumSetEx.cs` im Ordner `DataContext`. Diese Datei hat folgenden Inhalt:

```csharp
#if GENERATEDCODE_ON
using SEMusicStoreAngularStatistics.Logic.Entities;

namespace SEMusicStoreAngularStatistics.Logic.DataContext
{
    partial class AlbumSet
    {
        internal override IQueryable<Album> ExecuteAsQuerySet()
        {
            return base.ExecuteAsQuerySet().Include(e => e.Artist);
        }
    }
}
#endif
```

> **HINWEIS:** Diese Klasse wird von der `CodeGenerierung` automatisch erstellt. Daher muss das `Define`GENERATEDCODE_ON geprüft werden. Fall das nicht gesetzt ist, wird beim Löschen der generierten Dateien ein Kompilierfehler ausgeworfen.

Die Auflösung der `ManyToOne`-Beziehung erfolgt bei der Abfrage des `QuerySet`. Dazu muss die Methode `ExecuteAsQuerySet` überschrieben werden. Abfragen auf die Entity-`Album` erfolgen immer über dieses `Set` und daher wird die `ManyToOne`-Beziehung über die `Include`-Anweisung im **EntityFramework** aufgelöst.

Im nächsten Schritt muss das `Album`-Model im `WebApi`-Projekt im Ordner `Models` angepasst werden. Dazu erstellen wir ebenfalls eine `partial class Album`. Dazu erstellen wir eine neue Datei `AlbumEx.cs` im Ordner `Models`. Diese Datei hat folgenden Inhalt:

```csharp
#if GENERATEDCODE_ON
namespace SEMusicStoreAngularStatistics.WebApi.Models
{
    partial class Album
    {
        public Artist? Artist { get; set; }
    }
}
#endif
```

Diese Erweiterung ist notwendig, damit die Daten des `Artist` in der `WebApi`-Anwendung zur Verfügung stehen. Diese Erweiterung wird ebenfalls von der `CodeGenerierung` automatisch erstellt. Daher muss das `Define`GENERATEDCODE_ON geprüft werden.

Der letzte Schritt besteht darin, die Klasse `AlbumsController` im `WebApi`-Projekt anzupassen. Die `Artist`-Daten werden bereits vom `Logic`-Projekt bereitgestellt. Nun müssen diese Daten über die `REST-Api`übertragen werden. Die Anpassung des `AlbumsController` erfolgt ebenfalls in einer `partial class AlbumsController`. Dazu erstellen wir eine neue Datei `AlbumsControllerEx.cs` im Ordner `Controllers`. Diese Datei hat folgenden Inhalt:

```csharp
#if GENERATEDCODE_ON
namespace SEMusicStoreAngularStatistics.WebApi.Controllers
{
    partial class AlbumsController
    {
        partial void AfterToModel(Logic.Entities.Album entity, Models.Album model)
        {
            if (entity.Artist != null)
            {
                model.Artist = new();

                ((CommonContracts.IArtist)model.Artist).CopyProperties(entity.Artist);
            }
        }
    }
}
#endif
```

Falls die `ManyToOne`-Beziehung aufgelöst werden soll, dann muss die Methode `AfterToModel` überschrieben werden. Diese Methode wird von der `CodeGenerierung` automatisch erstellt. Daher muss das `Define`GENERATEDCODE_ON geprüft werden.
Ist das `Artist`-Objekt definert, dann wird das `Artist`-Objekt in das `Model`-Objekt kopiert. Diese Methode wird aufgerufen, wenn die Daten von der `Logic`-Schicht in die `WebApi`-Schicht übertragen werden.

**Test:** Starten Sie die Anwendung `SEMusicStoreAngularStatistics.WebApi` und rufen Sie die URL `https://localhost:7074/api/Albums` auf. Es sollte eine Liste mit den Alben angezeigt werden. Diese Liste enthält auch die Daten des `Artist`:

```json
[
  {
    "id": 1,
    "title": "For Those About To Rock We Salute You",
    "artist": {
      "id": 1,
      "name": "AC/DC"
    },
    ...
  },
  ...
]
```

> **HINWEIS:** Falls die `ManyToOne`-Beziehung nicht aufgelöst ist, überprüfen Sie bitte nochmals die angeführten Schritte.

Nun erstellen Sie ein Eingabeformular für das Entity-`Album`. Die Vorgehensweise ist die gleiche wie bei der Entity-`Genre`. Sie müssen lediglich die Namen der Dateien und die Namen der Klassen anpassen. Die Dateien `album-list.component.ts`, `album-list.component.html`, `album-edit.component.ts` und `album-edit.component.html` sind analog zu den Dateien `genre-list.component.ts`, `genre-list.component.html`, `genre-edit.component.ts` und `genre-edit.component.html` aufgebaut.

Es gibt jedoch eine Ausnahme. In der Datei `album-edit.component.ts` muss die `ManyToOne`-Beziehung aufgelöst werden. Dazu muss die Methode `getArtistList` implementiert werden. Diese Methode wird aufgerufen, wenn die Komponente `AlbumEditComponent` gestartet wird. Der Inhalt der Datei `album-edit.component.ts` sieht wie folgt aus:

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IAlbum } from '@app/models/entities/i-album';
import { IArtist } from '@app/models/entities/i-artist';
import { ArtistService } from '@app/services/http/entities/artist-service';
import { GenericEditComponent } from '@app/components/base/generic-edit.component';

@Component({
  selector: 'app-album-edit',
  imports: [CommonModule, FormsModule],
  templateUrl: './album-edit.component.html',
  styleUrl: './album-edit.component.css'
})
export class AlbumEditComponent extends GenericEditComponent<IAlbum> implements OnInit {

  public artists: IArtist[] = [];
  constructor(
    public override activeModal: NgbActiveModal,
    private artistService: ArtistService) {
    super(activeModal);
  }

  public get getArtistList(): IArtist[] {
    return this.artists;
  }

  ngOnInit(): void {
    this.artistService
      .getAll()
      .subscribe((artists: IArtist[]) => {
        this.artists = artists.sort((a, b) => a.name.localeCompare(b.name));

        if ((this.dataItem.artistId === null ||
          this.dataItem.artistId === undefined) &&
          this.artists.length > 0) {
          this.dataItem.artistId = this.artists[0].id;
        }
      });
  }

  public override get title(): string {
    return 'Album ' + super.title;
  }
}
```

Für das Laden der `Artist`-Daten wird der `ArtistService` verwendet. Dieser Service ist zusätzlich im Konstruktor aufgeführt und innerhalb der Komponente verfügbar. Zusätzlich verwenden wir die OnInit-Methode, um die `Artist`-Daten zu laden. Diese Methode wird aufgerufen, wenn die Komponente gestartet wird. Die `Artist`-Daten werden in der Methode `getArtistList` bereitgestellt. Diese Methode wird im Template verwendet, um die `Artist`-Daten anzuzeigen.

Die Datei `album-edit.component.html` muss ebenfalls angepasst werden. Kopieren Sie den Inhalt der Datei `sampleItemEdit.html` im Ordner **SolutionItems** und fügen Sie diesen in die Datei `album-edit.component.html` ein. Passen Sie die Datei `album-edit.component.html` wie folgt an:

```html
<div *ngIf="dataItem" class="card mt-4">
  <div class="card-header d-flex justify-content-between align-items-center">
    <h3>{{ title }}</h3>
    <button type="button" class="btn btn-sm btn-danger" aria-label="Schließen" (click)="dismiss()">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="card-body">
    <form (ngSubmit)="submitForm()" #editForm="ngForm">

      <div class="mb-3">
        <label for="artist" class="form-label">Artist</label>
        <select id="artist" name="artistId" class="form-select" [(ngModel)]="dataItem.artistId" #artistId="ngModel"
          required>
          <option *ngFor="let artist of getArtistList" [ngValue]="artist.id">
            {{ artist.name }}
          </option>
        </select>
        <div class="invalid-feedback" *ngIf="artistId.invalid && artistId.touched">
          Bitte wähle einen Artist.
        </div>
      </div>

      <div class="mb-3">
        <label class="form-label">Album</label>
        <input class="form-control" [(ngModel)]="dataItem.title" name="title" required />
      </div>

      <button class="btn btn-success" type="submit">Speichern</button>
      <button class="btn btn-secondary ms-2" type="button" (click)="cancelForm()">Abbrechen</button>
    </form>
  </div>
</div>
```

#### Schritt 16.B: Option 2: Auflösung der `ManyToOne`-Beziehung mit einer `View`

In dieser Variant lösen wir die `ManyToOne`-Beziehung mit einer `View` auf. Die Definition der `View` erfolgt in Abhängigkeit der verwendeten Datenbank. Nachfolgend ist die Definition der `View` für die Datenbank `SQLite` und `MSSQL`:

```sql
CREATE VIEW IF NOT EXISTS AlbumArtists AS
SELECT 
al.Id AS AlbumId,
al.Title AS AlbumTitle,
ar.Id AS ArtistId,
ar.Name AS ArtistName
FROM Albums AS al
LEFT JOIN Artists AS ar
ON al.ArtistId = ar.Id;
```

Als nächstes erstellen wir eine neue View-Entity-`AlbumArtist` im Ordner `Entities/Views` mit den entsprechenden Eigenschaften. Diese Entity ist mit einem `View`-Attribut definiert und zeigt folgendes Gerüst:

```csharp
using SEMusicStoreAngularStatistics.Common.Modules.Attributes;

namespace SEMusicStoreAngularStatistics.Logic.Entities.Views
{
    [View("AlbumArtists")]
    public partial class AlbumArtist : ViewObject
    {
        public IdType AlbumId { get; set; }
        public IdType ArtistId { get; set; }
        public string AlbumTitle { get; set; } = string.Empty;
        public string ArtistName { get; set; } = string.Empty;
    }
}
```

Nun starten Sie die `CodeGenerierung` und die `View`-Entity wird in das System integriert und mit der Datenbank `View` verbunden.

**Test:** Starten Sie die Anwendung `SEMusicStoreAngularStatistics.WebApi` und rufen Sie die URL `https://localhost:7074/api/AlbumArtists` auf. Es sollte eine Liste mit den Alben angezeigt werden. Diese Liste enthält auch die Daten des `Artist`:

```json
[
  {
    "albumId": 1,
    "artistId": 1,
    "albumTitle": "For Those About To Rock We Salute You",
    "artistName": "AC/DC"
  },
  ...
]
```

##### Schritt 16.B.1: Starten der `CodeGenerierung`

Nachdem die `View`-Entity erstellt wurde, müssen wir die `CodeGenerierung` erneut starten, um die Änderungen in das System zu integrieren. Starten Sie das Programm `TemplateTools.ConApp` und wählen Sie die **Menü-Option:** 4 - `CodeGenerator` aus. Anschließend wählen Sie die **Menü-option:** 9 - `Start` aus. Die `CodeGenerierung` startet und generiert die entsprechenden Code-Teile.

##### Schritt 16.B.2: Eingabeformular für die Entity-`AlbumArtist` erstellen

In diesem Schritt erstellen wir ein Eingabeformular für die Entity-`AlbumArtist`. Die Vorgehensweise unterscheidet sich von der Entity-`Genre`.

Zuerst erstellen wir die Übersichtskomponente für die Entity-`AlbumArtist`. Geben Sie nun den folgenden **Befehl** im Terminal von **VSCode** ein:

```bash
ng g c pages/albumartists/AlbumArtistList --standalone
```

Dieser Befehl erstellt eine neue Komponente mit dem Namen `AlbumArtistList` im Verzeichnis `pages/albumartits`. Diese Komponente ist eine **Standalone**-Komponente. Das bedeutet, dass die Komponente keine Abhängigkeiten zu anderen Modulen hat.

Die Komponente `AlbumArtistList` muss in das `routing` eingetragen werden. Dazu fügen Sie folgenden Eintrag in `app-routing.module.ts` hinzu:

```typescript
import { AlbumArtistListComponent } from './pages/albumartists/album-artist-list/album-artist-list.component';

const routes: Routes = [
  ...
  { path: 'albumartists', component: AlbumArtistListComponent },
  ...
]
...
```

Als nächstes tragen wir den Aufruf der Komponente in das `Dashboard` ein:

Öffnen Sie die Datei `dashboart.component.ts` und fügen Sie folgenden Eintrag hinzu:

```typescript
...
  public publicCards = [
    ...,
    { title: 'Album mit Artist', text: 'Alle Alben mit den zugehörigen Künstlern', type: '/albumartists', bg: 'bg-info text-white' },
  ];
...
```

Nachdem der Eintrag eingetragen worden ist, kann die Komponente `AlbumArtistList` im `Dashboard` aufgerufen werden. Aktivieren Sie im `Dashboard` die Karte `Album mit Artist`. Nun wird eine Seite mit der Ausgabe `album-artist-list works!` angezeigt.

##### Schritt 16.B.3: Anpassen der Übersicht-Komponente für `AlbumArtist`

Nun muss die Komponente entsprechend angepasst werden. Kopieren Sie das Programm aus der Datei `sampleItemViewList.ts` im Ordner **SolutionItems** und fügen Sie dieses Programm in die Datei `album-artist-list.component.ts` ein. Passen Sie die Datei `album-artist-list.component.ts` wie folgt an:

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageBoxService } from '@app/services/message-box-service.service';
import { IdType } from '@app/models/i-key-model';
import { IAlbumArtist } from '@app/models/entities/views/i-album-artist';
import { AlbumArtistService } from '@app/services/http/entities/views/album-artist-service';
import { GenericViewListComponent } from '@app/components/base/generic-view-list.component';
import { AlbumService } from '@app/services/http/entities/album-service';
import { AlbumEditComponent } from '@app/components/album-edit/album-edit.component';
import { Observable } from 'rxjs';

/* Ersetzen Sie hier 'IViewEntity' durch den gewuenschten 'Type' (z.B.: 'IAlbum') */
interface IItem extends IAlbumArtist {

}
/* Ersetzen Sie in Component 'item-view' durch den gewuenschten Namen (z.B.: genre-statistics) */
@Component({
  selector: 'app-album-artist-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './album-artist-list.component.html',
  styleUrl: './album-artist-list.component.css'
})
export class AlbumArtistListComponent extends GenericViewListComponent<IItem> implements OnInit {

  constructor(
    protected override modal: NgbModal,
    protected dataAccessService: AlbumArtistService,
    protected override messageBoxService: MessageBoxService,
    private albumService: AlbumService) {
    super(modal, dataAccessService, messageBoxService);
  }

  ngOnInit(): void {
    // Passen Sie hier den Filter entsprechend an
    this._queryParams.filter = 'albumTitle.Contains(@0)';
    this.reloadData();
  }

  /* 
  *  Passen Sie hier den Titel fuer die Ueberschtsseite an.
  *  Default: Items
  */
  public override get pageTitle(): string {
    return 'Album mit Artist';
  }

  /* 
  *  Passen Sie hier den Titel fuer die Loeschbestaetigung an.
  *  Default: id
  */
  public override getItemTitel(item: IItem): string {
    return item.albumTitle;
  }

  /* 
  *  Hier koennen Sie die Sortierung der Anzeige anpassen
  *  z.B.: return items.sort((a, b) => a.name.localeCompare(b.name));
  *  Default: keine Sortierung
  */
  protected override sortData(items: IItem[]): IItem[] {
    return items.sort((a, b) => (a.artistName + a.albumTitle).localeCompare(b.artistName + b.albumTitle));
  }

  override get canAdd(): boolean {
    return true;
  }

  override get canEdit(): boolean {
    return true;
  }

  override get canDelete(): boolean {
    return true;
  }

  override get canRefresh(): boolean {
    return true;
  }

  protected override getItemKey(item: IItem): IdType {
    return item.albumId;
  }

  protected override queryItem(key: IdType): Observable<any> {
    return this.albumService.getById(key);
  }

  protected override addItem(item: any): Observable<any> {
    return this.albumService.create(item);
  }

  protected override updateItem(item: any): Observable<any> {
    return this.albumService.update(item);
  }

  protected override deleteItem(item: any): Observable<any> {
    return this.albumService.delete(item);
  }

  protected override getEditComponent() {
    return AlbumEditComponent;
  }
}
```

Der eingefügte Code ist eine angepasste Version der `GenericViewListComponent`, die speziell für die Entity-`AlbumArtist` erstellt wurde. Diese Komponente zeigt eine Liste von Alben mit den zugehörigen Künstlern an und ermöglicht die Durchführung von `CRUD`-Operationen. Damit die `CRUD`-Operationen funktionieren, müssen die entsprechendn Methoden überschrieben werden. Die Standard-Werte für `canAdd()`, `canEdit()`, `canDelete()` usw. sind abgeschaltet. Je nach Bedarf müssen die Operation eingaschaltet werden. Bei der Methode `protected override getEditComponent()` kann die bereits definierte Komponente `AlbumEditComponent` verwendet werden.

Die Datei `album-artist-list.component.html` muss ebenfalls angepasst werden. Kopieren Sie den Inhalt der Datei `sampleItemViewList.html` im Ordner **SolutionItems** und fügen Sie diesen in die Datei `album-artist-list.component.html` ein. Passen Sie die Datei `album-artist-list.component.html` wie folgt an:

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

### Schritt 17: Eingabeformular für die Entity-`Track` erstellen

Nun erstellen Sie ein Eingabeformular für die Entity-`Track`. Die Vorgehensweise ist die gleiche wie bei der Entity-`Album` **Option A**. Sie müssen lediglich die Namen der Dateien und die Namen der Klassen anpassen. Die Dateien `artist-list.component.ts`, `track-list.component.html`, `track-edit.component.ts` und `track-edit.component.html` sind analog zu den Dateien `album-list.component.ts`, `album-list.component.html`, `album-edit.component.ts` und `album-edit.component.html` aufgebaut.

**Viel Erfolg beim Umsetzen!**
