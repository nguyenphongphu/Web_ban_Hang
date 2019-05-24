namespace Model.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Slide")]
    public partial class Slide
    {
        public int ID { get; set; }

        public int MaSP { get; set; }

        [StringLength(10)]
        public string GiamGia { get; set; }

        [StringLength(50)]
        public string link { get; set; }

        public bool? Status { get; set; }

        public int? STTStatus { get; set; }

        [StringLength(50)]
        public string UserName { get; set; }

        [StringLength(50)]
        public string LinkAnh { get; set; }

        [StringLength(10)]
        public string slidetype { get; set; }

        public virtual SanPham SanPham { get; set; }
    }
}
