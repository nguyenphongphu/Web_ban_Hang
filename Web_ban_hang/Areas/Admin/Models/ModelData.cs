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
        public string Ten { get; set; }

        public int? MaLSP { get; set; }

        public int? IDHang { get; set; }

    }
}