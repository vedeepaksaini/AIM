//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace FinServDataModel
{
    using System;
    using System.Collections.Generic;
    
    public partial class tblAssetType
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public tblAssetType()
        {
            this.tblAssets = new HashSet<tblAsset>();
        }
    
        public int AutoID { get; set; }
        public System.Guid AssetTypeID { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tblAsset> tblAssets { get; set; }
    }
}
