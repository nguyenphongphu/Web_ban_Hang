namespace Model.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("SanPhan")]
    public partial class SanPhan
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public SanPhan()
        {
            DangBTs = new HashSet<DangBT>();
        }

        [Key]
        public int MaSP { get; set; }

        [StringLength(50)]
        [Display(Name = "Tên sản phẩn:")]
        public string TenSP { get; set; }

        [Display(Name = "Mô Tả:")]
        public string Mota { get; set; }

        [Display(Name = "Số lượng:")]
        public int? SoLuong { get; set; }

        [Display(Name = "Giá Bán:")]
        public int? GiaBan { get; set; }

        [StringLength(50)]
        [Display(Name = "Hình Ảnh:")]
        public string Hinhanh { get; set; }

        public int? MaLSP { get; set; }

        [StringLength(50)]
        [Display(Name = "Thông tin Liên hệ:")]
        public string TTLienHe { get; set; }

        [Column(TypeName = "date")]
        public DateTime? Date { get; set; }

        [Display(Name = "Số điện thoại:")]
        public int? Phone { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DangBT> DangBTs { get; set; }

        public virtual LoaiSanPhan LoaiSanPhan { get; set; }
    }
}
