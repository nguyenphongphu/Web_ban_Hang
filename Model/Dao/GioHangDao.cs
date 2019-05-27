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
        public bool deleteid(int id)
        {
            try
            {
                var sanphan= db.GioHangs.Find(id);
                db.GioHangs.Remove(sanphan);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;

            }
        }
        public bool deleteall()
        {
            try
            {
                var sanphan = db.GioHangs.ToList();
                foreach (var item in sanphan)
                {
                    db.GioHangs.Remove(item);                   
                }
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
            return db.GioHangs.Where(x => x.Taikhoan.Username==name&&x.thanhtoan==false).ToList();
        }
        public bool update(int giohang)
        {
            try
            {
                var gh = db.GioHangs.SingleOrDefault(x=>x.MaSP==giohang);
                gh.thanhtoan = true;                
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;

            }
        }
    }
}
