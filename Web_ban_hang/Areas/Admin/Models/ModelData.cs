using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Web_ban_hang.Areas.Admin.Models
{
    public class ModelData
    {
        public int ID_Mdel { get; set; }

        [StringLength(50)]
        [Display(Name = "Tên Model: ")]
        public string Ten { get; set; }

        [Display(Name = "Loại sản phẩm: ")]
        public int? MaLSP { get; set; }

        [Display(Name = "Loại Hãng: ")]
        public int? IDHang { get; set; }

        public int? STT { get; set; }
    }
}