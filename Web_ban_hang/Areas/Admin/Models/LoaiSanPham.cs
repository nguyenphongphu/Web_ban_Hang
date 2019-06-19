using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Web_ban_hang.Areas.Admin.Models
{
    public class LoaiSanPham
    {
        [Display(Name = "Mã sản phẩm: ")]
        public int MaLSP { get; set; }

        [Display(Name = "Loại sản phẩm: ")]
        public string Ten { get; set; }
    }
}