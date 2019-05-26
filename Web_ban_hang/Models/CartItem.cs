using Model.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Web_ban_hang.Models
{
    [Serializable]
    public class CartItem
    {
        private int? soluong;

       
        public SanPham sanpham { set; get; }
        public int Quantity { set; get; }
    }
}