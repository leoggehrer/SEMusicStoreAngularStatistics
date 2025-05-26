
using SEMusicStoreAngularStatistics.Common.Modules.Attributes;

namespace SEMusicStoreAngularStatistics.Logic.Entities.Views
{
    /// <summary>
    /// Represents a view object that combines album and artist information.
    /// </summary>
    [View("AlbumTracks")]
    public partial class AlbumTrack : ViewObject
    {
        /// <summary>
        /// Gets or sets the unique identifier of the album.
        /// </summary>
        public IdType AlbumId { get; set; }

        /// <summary>
        /// Gets or sets the unique identifier of the track.
        /// </summary>
        public IdType TrackId { get; set; }

        /// <summary>
        /// Gets or sets the title of the album.
        /// </summary>
        public string AlbumTitle { get; set; } = string.Empty;

        /// <summary>
        /// Gets or sets the title of the track.
        /// </summary>
        public string TrackTitle { get; set; } = string.Empty;
    }
}
