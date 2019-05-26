using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Web_ban_hang
{
    [Serializable]
    public class UserLogin
    {
        public int UserID { set; get; }
        public string UserName { set; get; }
        public string ChucVu { set; get; }
    }
}