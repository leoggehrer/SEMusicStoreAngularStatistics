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
