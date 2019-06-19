namespace Model.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("SanPham")]
    public partial class SanPham
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public SanPham()
        {
            DangBTs = new HashSet<DangBT>();
            DonHangs = new HashSet<DonHang>();
            GioHangs = new HashSet<GioHang>();
            Slides = new HashSet<Slide>();
        }

        [Key]
        public int MaSP { get; set; }

        [StringLength(50)]
        [Display(Name = "Tiêu đề:")]
        public string TieuDe { get; set; }

        [StringLength(50)]
        [Display(Name = "Tên sản phẩn:")]
        public string TenSP { get; set; }

        [Display(Name = "Mô Tả:")]
        public string Mota { get; set; }

        public int? soluong { get; set; }

        [Display(Name = "Giá Bán:")]
        public decimal? GiaBan { get; set; }

        [StringLength(50)]
        [Display(Name = "Hình Ảnh:")]
        public string AnhTDe { get; set; }

        public int? MaLSP { get; set; }

        [Column(TypeName = "date")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime Date { get; set; }

        [Display(Name = "Hãng sản xuất:")]
        public int? IDHang { get; set; }

        public int? IDhinh { get; set; }

        [Display(Name = "Pin:")]
        public int? ID_Pin { get; set; }

        [Display(Name = "Bộ xử lý:")]
        public int? ID_BXL { get; set; }

        [Display(Name = "Hệ Diều Hành:")]
        public int? ID_HDH { get; set; }

        [Display(Name = "Kích Thước:")]
        public int? ID_KT { get; set; }

        [Display(Name = " Ram: ")]
        public int? ID_R { get; set; }

        [Display(Name = "Camera:")]
        public int? ID_Camera { get; set; }

        [Display(Name = "Chổ ngồi:")]
        public int? ID_CN { get; set; }

        [Display(Name = "Kiểu dáng:")]
        public int? ID_KD { get; set; }

        [Display(Name = "Phụ kiện:")]
        public int? ID_PK { get; set; }

        [Display(Name = "Quảng đường:")]
        public int? ID_QD { get; set; }

        [Display(Name = "Loại thời trang:")]
        public int? ID_LTR { get; set; }

        [Display(Name = "Đời sản xuất:")]
        public int? ID_Doi { get; set; }

        [Display(Name = "Card:")]
        public int? ID_Card { get; set; }

        [Display(Name = "Mùa:")]
        public int? ID_M { get; set; }

        [Display(Name = "Chất liệu:")]
        public int? ID_CL { get; set; }

        [Display(Name = "Độ phân giả:")]
        public int? ID_DPG { get; set; }

        [Display(Name = "Màu Sắc:")]
        public int? ID_MS { get; set; }

        [Display(Name = "Phiên bản:")]
        public int? ID_PB { get; set; }

        [Display(Name = "Case:")]
        public int? ID_Case { get; set; }

        [Display(Name = " Bộ nhớ: ")]
        public int? ID_BN { get; set; }

        [Display(Name = "Hộp số:")]
        public int? ID_HS { get; set; }

        [Display(Name = "Model:")]
        public int? ID_Model { get; set; }

        public virtual BoNho BoNho { get; set; }

        public virtual BoXL BoXL { get; set; }

        public virtual Camera Camera { get; set; }

        public virtual Card Card { get; set; }

        public virtual Case Case { get; set; }

        public virtual ChatLieu ChatLieu { get; set; }

        public virtual ChoNgoi ChoNgoi { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DangBT> DangBTs { get; set; }

        public virtual DoiSX DoiSX { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DonHang> DonHangs { get; set; }

        public virtual DoPhangia DoPhangia { get; set; }

        public virtual Hang Hang { get; set; }

        public virtual HeDieuHanh HeDieuHanh { get; set; }

        public virtual HinhAnh HinhAnh { get; set; }

        public virtual HopSo HopSo { get; set; }

        public virtual KichThuoc KichThuoc { get; set; }

        public virtual KieuDang KieuDang { get; set; }

        public virtual LoaiSanPham LoaiSanPham { get; set; }

        public virtual LoaiTR LoaiTR { get; set; }

        public virtual MauSac MauSac { get; set; }

        public virtual Model Model { get; set; }

        public virtual Mua Mua { get; set; }

        public virtual PhienBan PhienBan { get; set; }

        public virtual PhuKien PhuKien { get; set; }

        public virtual Pin Pin { get; set; }

        public virtual Quangduong Quangduong { get; set; }

        public virtual Ram Ram { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<GioHang> GioHangs { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Slide> Slides { get; set; }
    }
}
