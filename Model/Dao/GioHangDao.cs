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
        public bool deleteall( int id)
        {
            try
            {
                var sanphan = db.GioHangs.Where(x=>x.UserID==id).ToList();
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
                var donhang = new EF.DonHang();
                donhang.MaSP = giohang.MaSP;
                donhang.UserID = giohang.UserID;
                donhang.date = DateTime.Now;
                donhang.Gia = giohang.Gia;
                donhang.soluong = giohang.soluong;
                donhang.Thanhtien = giohang.soluong * giohang.Gia.GetValueOrDefault(0);
                donhang.Status = false;
                donhang.MaKV = giohang.MaKV;
                donhang.Diachi = address;
                donhang.Name = shipName;
                donhang.Phone = mobile;
                donhang.email = email;
                db.DonHangs.Add(donhang);
                var data = db.GioHangs.Where(x=>x.ID_GH==giohang.ID_GH).ToList();
                if (data.Count>0)
                {
                    db.GioHangs.Remove(data[0]);
                }                                                                             
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
