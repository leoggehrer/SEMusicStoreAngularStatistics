//@CodeCopy
#if ACCOUNT_ON
namespace SEMusicStoreAngularStatistics.WebApi.Contracts
{
    partial interface IContextAccessor
    {
        string SessionToken { set; }
    }
}
#endif
