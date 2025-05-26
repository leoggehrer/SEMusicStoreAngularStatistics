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

CREATE VIEW AlbumArtists 
AS
SELECT 
al.Id AS AlbumId,
al.Title AS AlbumTitle,
ar.Id AS ArtistId,
ar.Name AS ArtistName
FROM Albums AS al
LEFT JOIN Artists AS ar
ON al.ArtistId = ar.Id;

CREATE VIEW ArtistAlbums
AS
SELECT DISTINCT
       ArtistId,
       ArtistName,
       AlbumId,
       AlbumTitle
FROM   MusicStoreInfos;

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

CREATE VIEW ArtistStatistics
AS
SELECT
    ArtistId,
    ArtistName,
    COUNT(TrackId) AS NumberSongs,
    SUM(Milliseconds) / 1000 AS TotalSongTimeSeconds,
    AVG(Milliseconds) / 1000 AS AverageSongTimeSeconds
FROM 
    MusicStoreInfos
GROUP BY 
    ArtistId, ArtistName;

CREATE VIEW AlbumTracks
AS
SELECT 
	AlbumId,
	TrackId,
  AlbumTitle,
  TrackTitle
FROM MusicStoreInfos;

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

CREATE VIEW GenreTracks
AS
SELECT
	GenreId,
  GenreName,
  COUNT(TrackId) AS NumberSongs
FROM MusicStoreInfos
GROUP BY GenreId, GenreName;

CREATE VIEW GenreStatistics
AS
SELECT 
	GenreId,
  GenreName,
  COUNT(TrackId) AS NumberSongs,
  SUM(Milliseconds) / 1000 AS TotalSongTimeSeconds,
  AVG(Milliseconds / 1000) AS AverageSongTimeSeconds
FROM MusicStoreInfos
WHERE GenreName IS NOT NULL
GROUP BY GenreId, GenreName;