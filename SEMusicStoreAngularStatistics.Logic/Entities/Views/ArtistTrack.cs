using SEMusicStoreAngularStatistics.Common.Modules.Attributes;

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
