﻿//@CodeCopy
#if ACCOUNT_ON
using SEMusicStoreAngularStatistics.WebApi.Contracts;

namespace SEMusicStoreAngularStatistics.WebApi.Controllers
{
    partial class GenericEntityController<TModel, TEntity, TContract>
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
