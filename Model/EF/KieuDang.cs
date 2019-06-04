namespace Model.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("KieuDang")]
    public partial class KieuDang
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public KieuDang()
        {
            SanPhams = new HashSet<SanPham>();
        }

        [Key]
        [Display(Name = "Kiểu dáng")]
        public int ID_KD { get; set; }

        [StringLength(50)]
        public string Ten_KD { get; set; }

        public int? MaLSP { get; set; }

        public virtual LoaiSanPham LoaiSanPham { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<SanPham> SanPhams { get; set; }
    }
}
