namespace Model.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("GioHang")]
    public partial class GioHang
    {
        [Key]
        [Column(Order = 0)]
        public int ID_GH { get; set; }

        [Key]
        [Column(Order = 1)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int MaSP { get; set; }

        public int? UserID { get; set; }

        [Column(TypeName = "date")]
        public DateTime? date { get; set; }

        public decimal? Gia { get; set; }

        [Key]
        [Column(Order = 2)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int soluong { get; set; }

        public int? MaKV { get; set; }

        public virtual Khuvuc Khuvuc { get; set; }

        public virtual SanPham SanPham { get; set; }

        public virtual Taikhoan Taikhoan { get; set; }
    }
}
