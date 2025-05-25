
using SEMusicStoreAngularStatistics.Common.Modules.Attributes;

namespace SEMusicStoreAngularStatistics.Logic.Entities.Views
{
    /// <summary>
    /// Represents a view object that combines album and artist information.
    /// </summary>
    [View("AlbumArtists")]
    public partial class AlbumArtist : ViewObject
    {
        /// <summary>
        /// Gets or sets the unique identifier of the album.
        /// </summary>
        public IdType AlbumId { get; set; }

        /// <summary>
        /// Gets or sets the unique identifier of the artist.
        /// </summary>
        public IdType ArtistId { get; set; }

        /// <summary>
        /// Gets or sets the title of the album.
        /// </summary>
        public string AlbumTitle { get; set; } = string.Empty;

        /// <summary>
        /// Gets or sets the name of the artist.
        /// </summary>
        public string ArtistName { get; set; } = string.Empty;
    }
}
