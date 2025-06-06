﻿//@CodeCopy
using SEMusicStoreAngularStatistics.MVVMApp.Models.Templates;

namespace SEMusicStoreAngularStatistics.MVVMApp.ViewModels.Templates
{
    public partial class ItemViewModel : GenericItemViewModel<ItemModel>
    {
        private string _name = string.Empty;

        public string Name
        {
            get { return _name; }
            set
            {
                _name = value;
                OnPropertyChanged();
            }
        }

    }
}
