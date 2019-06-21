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
        [Key]
        public int IDhinh { get; set; }

        public int? MASP { get; set; }

        [StringLength(100)]
        [Display(Name = "Hình ảnh:")]
        public string Link { get; set; }

        public bool? AnhFull { get; set; }

        public bool? AnhThumbnail { get; set; }

        public int? STTANH { get; set; }

        public virtual SanPham SanPham { get; set; }
    }
}
