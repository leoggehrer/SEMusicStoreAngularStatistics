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
