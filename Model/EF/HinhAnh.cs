namespace Model.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("HinhAnh")]
    public partial class HinhAnh
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public HinhAnh()
        {
            SanPhams = new HashSet<SanPham>();
        }

        [Key]
        public int IDhinh { get; set; }

        public int? MASP { get; set; }

        [StringLength(100)]
        public string Link { get; set; }

        public bool? AnhFull { get; set; }

        public bool? AnhThumbnail { get; set; }

        public int? STTANH { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<SanPham> SanPhams { get; set; }
    }
}
