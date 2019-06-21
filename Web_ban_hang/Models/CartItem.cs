using Model.EF;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Web_ban_hang.Models
{
    [Serializable]
    public class CartItem
    {       
        [Key]
        public int ID { get; set; }
        public SanPham sanpham { set; get; }
        public int Quantity { set; get; }
        public bool check { get; set; }
        public int MaKV { get; set; }
    }
}