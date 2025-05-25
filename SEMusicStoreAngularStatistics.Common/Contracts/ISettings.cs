//@CodeCopy
namespace SEMusicStoreAngularStatistics.Common.Contracts
{
    public partial interface ISettings
    {
        string? this[string key] { get; }
    }
}
