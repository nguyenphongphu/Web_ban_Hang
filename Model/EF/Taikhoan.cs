namespace Model.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Taikhoan")]
    public partial class Taikhoan
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Taikhoan()
        {
            DangBTs = new HashSet<DangBT>();
            DonHangs = new HashSet<DonHang>();
            GioHangs = new HashSet<GioHang>();
        }

        [Key]
        public int UserID { get; set; }

        [Display(Name = "Tài khoản:")]
        [Required(ErrorMessage = "Bạn chưa nhập tên tài khoản")]
        public string Username { get; set; }

        [StringLength(32, MinimumLength = 8, ErrorMessage = "Bạn phải nhập có độ dài 8-32 ký tự")]
        [Display(Name = "Mật khẩu:")]
        [Required(ErrorMessage = "Bạn chưa nhập mật Khẩu")]
        [RegularExpression(@"^[a-zA-Z0-9]+$", ErrorMessage = "Bạn phải nhập có số, chữ thường, hoa")]
        public string Password { get; set; }

        [StringLength(50)]
        [Display(Name = "Họ và tên:")]
        public string HovaTen { get; set; }

        [StringLength(100)]
        [Display(Name = "Địa chỉ:")]
        public string DiaChi { get; set; }

        [StringLength(50)]
        [Display(Name = "Email:")]
        [Required(ErrorMessage = "Bạn chưa nhập địa chỉ email")]
        [RegularExpression(@"^[\w-\._\+%]+@(?:[\w-]+\.)+[\w]{2,6}$", ErrorMessage = "Bạn nhâp sai email")]
        public string Email { get; set; }

        [Display(Name = "Điện thoại:")]
        [StringLength(10, MinimumLength = 10, ErrorMessage = "Bạn phải nhập đúng 10")]
        [RegularExpression("(\\+84|0)\\d{9}", ErrorMessage = "Bạn phải nhập đúng số")]
        public string Phone { get; set; }

        [Display(Name = "Status:")]
        public bool Status { get; set; }

        [Display(Name = "Mã Chức Vụ:")]
        [Required(ErrorMessage = "Bạn chưa nhập Mã chúc vụ")]
        public int MaCV { get; set; }

        [Column(TypeName = "date")]
        public DateTime? CreatedDate { get; set; }

        public virtual ChucVu ChucVu { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DangBT> DangBTs { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DonHang> DonHangs { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<GioHang> GioHangs { get; set; }
    }
}
