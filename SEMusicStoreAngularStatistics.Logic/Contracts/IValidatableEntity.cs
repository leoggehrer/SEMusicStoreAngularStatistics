//@CodeCopy
namespace SEMusicStoreAngularStatistics.Logic.Contracts
{
    public partial interface IValidatableEntity
    {
        void Validate(IContext context, EntityState entityState);
    }
}
