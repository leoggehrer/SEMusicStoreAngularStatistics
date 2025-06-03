//@CodeCopy
#if ACCOUNT_ON
using SEMusicStoreAngularStatistics.WebApi.Contracts;

namespace SEMusicStoreAngularStatistics.WebApi.Controllers
{
    partial class GenericViewController<TModel, TView, TContract>
    {
        #region partial methods
        partial void OnReadContextAccessor(IContextAccessor contextAccessor)
        {
            contextAccessor.SessionToken = SessionToken;
        }
        #endregion partial methods
    }
}
#endif
