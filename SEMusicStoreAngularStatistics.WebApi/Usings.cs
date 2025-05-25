//@CodeCopy

#if IDINT_ON
global using IdType = System.Int32;
#elif IDLONG_ON
global using IdType = System.Int64;
#elif IDGUID_ON
global using IdType = System.Guid;
#else
global using IdType = System.Int32;
#endif
global using Common = SEMusicStoreAngularStatistics.Common;
global using CommonContracts = SEMusicStoreAngularStatistics.Common.Contracts;
global using CommonModels = SEMusicStoreAngularStatistics.Common.Models;
global using CommonModules = SEMusicStoreAngularStatistics.Common.Modules;
global using SEMusicStoreAngularStatistics.Common.Extensions;
