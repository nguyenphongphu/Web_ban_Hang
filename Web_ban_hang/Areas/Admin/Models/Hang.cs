using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Web_ban_hang.Areas.Admin.Models
{
    public class Hang
    {
        [Display(Name = "Mã hãng: ")]
        public int IDHang { get; set; }

        [Display(Name = "Tên hãng: ")]
        public string Ten { get; set; }
    }
}