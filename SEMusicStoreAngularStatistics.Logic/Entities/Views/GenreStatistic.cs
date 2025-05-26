using SEMusicStoreAngularStatistics.Common.Modules.Attributes;

namespace SEMusicStoreAngularStatistics.Logic.Entities.Views
{
    /// <summary>
    /// Represents statistical information about an artist, including the number of songs,
    /// total duration, and average song duration.
    /// </summary>
    [View("GenreStatistics")]
    public partial class GenreStatistic : ViewObject
    {
        /// <summary>
        /// Gets or sets the unique identifier of the genre.
        /// </summary>
        public IdType GenreId { get; set; }

        /// <summary>
        /// Gets or sets the name of the genre.
        /// </summary>
        public string GenreName { get; set; } = string.Empty;

        /// <summary>
        /// Gets or sets the number of songs by the genre.
        /// </summary>
        public int NumberSongs { get; set; }
        /// <summary>
        /// Gets or sets the total duration of all songs by the genre, in seconds.
        /// </summary>
        public System.Int64 TotalSongTimeSeconds { get; set; }
        /// <summary>
        /// Gets or sets the average duration of the genre's songs, in seconds.
        /// </summary>
        public System.Int64 AverageSongTimeSeconds { get; set; }
    }
}
