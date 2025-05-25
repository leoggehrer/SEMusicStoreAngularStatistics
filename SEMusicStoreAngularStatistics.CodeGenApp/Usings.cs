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
global using CommonModules = SEMusicStoreAngularStatistics.Common.Modules;
global using SEMusicStoreAngularStatistics.Common.Extensions;
global using CommonStaticLiterals = SEMusicStoreAngularStatistics.Common.StaticLiterals;
global using TemplatePath = SEMusicStoreAngularStatistics.Common.Modules.Template.TemplatePath;
