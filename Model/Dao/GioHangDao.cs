using Model.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Dao
{
    public class GioHangDao
    {
        BanHang db = null;
        public GioHangDao()
        {
            db = new BanHang();
        }
        public bool insert(GioHang giohang)
        {
            try
            {
                db.GioHangs.Add(giohang);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;

            }
        }
        public List<GioHang> Listall( string name)
        {
            return db.GioHangs.Where(x => x.Taikhoan.Username==name).ToList();
        }
    }
}
