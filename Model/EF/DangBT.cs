namespace Model.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DangBT")]
    public partial class DangBT
    {
        [Key]
        public int STT { get; set; }

        public int UserID { get; set; }

        public int MaSP { get; set; }

        public int? MaKV { get; set; }

        [StringLength(50)]
        public string LinkBT { get; set; }

        public int? Xem { get; set; }

        public virtual Khuvuc Khuvuc { get; set; }

        public virtual SanPham SanPham { get; set; }

        public virtual Taikhoan Taikhoan { get; set; }
    }
}
