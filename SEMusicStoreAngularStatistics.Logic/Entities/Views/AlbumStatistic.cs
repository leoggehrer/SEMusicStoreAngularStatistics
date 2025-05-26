using SEMusicStoreAngularStatistics.Common.Modules.Attributes;

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
