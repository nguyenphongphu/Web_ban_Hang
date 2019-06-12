using Model.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Dao
{
   public class DonHDao
    {
        BanHang db = null;
        public DonHDao()
        {
            db = new BanHang();
        }
        //public List<DonHang> donHang_TH()
        //{
        //    return db.DonHangs.Where(x => x.Status == true).ToList();
        //}
        //public List<DonHang> donHang_CTH()
        //{
        //    return db.DonHangs.Where(x => x.Status == false).OrderByDescending(y => y.date).ToList();
        //}
        public bool Delete(int id)
        {
            try
            {
                var data = db.DonHangs.Find(id);
                db.DonHangs.Remove(data);
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool GuiHang(int id)
        {
            try
            {
                var data = db.DonHangs.Find(id);
                data.Status = true;
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
