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
        public GioHang getID(int id)
        {
            return db.GioHangs.SingleOrDefault(x => x.MaSP == id);
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
            return db.GioHangs.ToList();
        }
        public bool insertdonhang(GioHang giohang, string shipName, string mobile, string address, string email)
        {
            try
            {
                var donhang = new DonHang();
                donhang.MaSP = giohang.MaSP;
                donhang.date = DateTime.Now;
                donhang.Diachi = address;
                donhang.Name = shipName;
                donhang.Phone = mobile;
                donhang.email = email;
                donhang.MaKV = giohang.MaKV;
                donhang.soluong = giohang.soluong;
                donhang.Gia = giohang.Gia;
                db.DonHangs.Add(donhang);
                db.GioHangs.Remove(giohang);                                                             
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;

            }
        }
        public bool updategh(int giohang,int soluong)
        {
            try
            {
                var gh = db.GioHangs.SingleOrDefault(x => x.MaSP == giohang);
                gh.soluong=soluong;
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
