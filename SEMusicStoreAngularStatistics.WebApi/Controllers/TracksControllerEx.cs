#if GENERATEDCODE_ON
namespace SEMusicStoreAngularStatistics.WebApi.Controllers
{
    partial class TracksController
    {
        partial void AfterToModel(Logic.Entities.Track entity, Models.Track model)
        {
            if (entity.Album != null)
            {
                model.Album = new();
                ((CommonContracts.IAlbum)model.Album).CopyProperties(entity.Album);
            }
            if (entity.Genre != null)
            {
                model.Genre = new();
                ((CommonContracts.IGenre)model.Genre).CopyProperties(entity.Genre);
            }
        }
    }
}
#endif
