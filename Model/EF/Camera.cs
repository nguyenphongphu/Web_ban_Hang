namespace Model.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Camera")]
    public partial class Camera
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Camera()
        {
            SanPhams = new HashSet<SanPham>();
        }

        [Key]
        [Display(Name = "Camera:")]
        public int ID_Camera { get; set; }

        [StringLength(50)]
        public string Ten_Camera { get; set; }

        public int? MaLSP { get; set; }

        public virtual LoaiSanPham LoaiSanPham { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<SanPham> SanPhams { get; set; }
    }
}
