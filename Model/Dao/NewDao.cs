using Model.EF;
using PagedList;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Common;

namespace Model.Dao
{
    public class NewDao
    {
        BanHang db = null;
        public NewDao()
        {
            db = new BanHang();
        }
        public List<DangBT> ListAllPaging()
        {
            return db.DangBTs.ToList();
        }

        public bool Delete(int id)
        {
            try
            {
                var dangBt = db.DangBTs.Find(id);
                db.DangBTs.Remove(dangBt);
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public DangBT ViewDetail(int id)
        {
            return db.DangBTs.SingleOrDefault(x=>x.SanPham.MaSP==id);
        }
        public DangBT ViewBT(int id)
        {
            return db.DangBTs.Where(x => x.Status == true).SingleOrDefault(x => x.MaSP == id);
        }
        public long Tong()
        {
            var tong = db.SanPhams.LongCount();
            long a = tong;
            return a;
        }
        public List<SanPham> listAll()
        {
            var list = db.SanPhams.ToList(); ;
            foreach (var item in list)
            {
                string anh = item.AnhTDe;
                item.AnhTDe = anh.Replace(" ", "");
            }
            return list;
        }
        public List<DangBT> Interested()
        {
            if (db.DangBTs.LongCount() > 10)
            {
                return db.DangBTs.Where(x => x.Status == true).OrderByDescending(x => x.Xem).Skip(0).Take(10).ToList();
            }
            else
            {
                return db.DangBTs.Where(x => x.Status == true).OrderByDescending(x => x.Xem).Skip(0).Take(Convert.ToInt32(db.DangBTs.LongCount())).ToList();
            }
        }
        public List<DangBT> ListHot()
        {
            if (db.DangBTs.LongCount() > 10)
            {
                return db.DangBTs.Where(x => x.Status == true).OrderByDescending(x => x.Xem).Skip(0).Take(10).ToList();
            }
            else
            {

                return db.DangBTs.Where(x => x.Status == true).OrderByDescending(x => x.Xem).Skip(0).Take(Convert.ToInt32(db.DangBTs.LongCount())).ToList();
            }
        }
        public List<DangBT> ListNew()
        {
            int so = Convert.ToInt32(db.SanPhams.LongCount());
            if (db.SanPhams.LongCount() > 10)
            {
                var list = db.DangBTs.Where(x=> x.Status == true).OrderByDescending(x => x.SanPham.Date).Skip(0).Take(10).ToList();
                foreach (var item in list)
                {
                    string anh = item.SanPham.AnhTDe;
                    item.SanPham.AnhTDe = anh.Replace(" ", "");
                }
                return list;
            }
            else
            {
                var list = db.DangBTs.Where(x => x.Status == true).OrderByDescending(x => x.SanPham.Date).Skip(0).Take(so).ToList();
                foreach (var item in list)
                {
                    string anh = item.SanPham.AnhTDe;
                    item.SanPham.AnhTDe = anh.Replace(" ", "");
                }
                return list;
            }
        }
        public List<HinhAnh> ListAnh(int id)
        {
            var hinh = db.HinhAnhs.Where(x => x.MASP == id).ToList();
            foreach (var item in hinh)
            {
                string anh = item.Link;
                item.Link = anh.Replace(" ", "");
            }
            return hinh;
        }
        public List<DangBT> sanP_sp(int sp, ref int totalRecord3, int pageIndex , int pageSize )
        {
            var check = db.Menus.SingleOrDefault(x => x.ID == sp);
            totalRecord3 = db.DangBTs.Where(x => x.SanPham.LoaiSanPham.Link == check.Link && x.Status==true).Count();
            var sanpham = db.DangBTs.Where(x=>x.SanPham.LoaiSanPham.Link==check.Link &&x.Status==true).OrderByDescending(x => x.MaSP).Skip((pageIndex - 1) * pageSize).Take(pageSize).ToList();
            foreach (var item in sanpham)
            {
                string anh = item.SanPham.AnhTDe;
                item.SanPham.AnhTDe = anh.Replace(" ", "");
            }
            return sanpham;
        }
        public List<DangBT> sanPH_sp_hang(string sp, string hang, ref int totalRecord_hang, int pageIndex , int pageSize )
        {
            if (sp != null && hang != null)
            {
                totalRecord_hang = db.DangBTs.Where(x => x.SanPham.LoaiSanPham.Link == sp && x.SanPham.Hang.Ten == hang&&x.Status==true).Count();
                var sanpham = db.DangBTs.Where(x => x.SanPham.LoaiSanPham.Link == sp && x.SanPham.Hang.Ten == hang && x.Status == true).OrderByDescending(x => x.MaSP).Skip((pageIndex - 1) * pageSize).Take(pageSize).ToList();
                foreach (var item in sanpham)
                {
                    string anh = item.SanPham.AnhTDe;
                    item.SanPham.AnhTDe = anh.Replace(" ", "");
                }
                return sanpham;
            }
            else
            {
                totalRecord_hang = db.DangBTs.Where(x=>x.Status==true).Count();
                var list = db.DangBTs.Where(x => x.Status == true).OrderByDescending(x => x.MaSP).Skip((pageIndex - 1) * pageSize).Take(pageSize).ToList(); ;
                foreach (var item in list)
                {
                    string anh = item.SanPham.AnhTDe;
                    item.SanPham.AnhTDe = anh.Replace(" ", "");
                }
                return list;
            }

        }

        public List<DangBT> sanPhamHot( string ma, ref int totalRecord, int pageIndex = 1, int pageSize = 2)
        {
            if (ma == "hot")
            {
                totalRecord = db.DangBTs.Where(x => x.Status == true).Count();
                var sanpham = db.DangBTs.Where(x => x.Status == true).OrderByDescending(x => x.SanPham.Date).Skip((pageIndex - 1) * pageSize).Take(pageSize).ToList();
                foreach (var item in sanpham)
                {
                    string anh = item.SanPham.AnhTDe;
                    item.SanPham.AnhTDe = anh.Replace(" ", "");
                }
                return sanpham;
            }
            else
            {
                totalRecord = db.DangBTs.Where(x => x.Status == true).Count();
                var sanpham = db.DangBTs.Where(x => x.Status == true).OrderByDescending(x => x.Xem).Skip((pageIndex - 1) * pageSize).Take(pageSize).ToList();
                foreach (var item in sanpham)
                {
                    string anh = item.SanPham.AnhTDe;
                    item.SanPham.AnhTDe = anh.Replace(" ", "");
                }
                return sanpham;
            }
            
        }
        public int Them(DangBT dangBT)
        {
            try
            {
                db.DangBTs.Add(dangBT);
                db.SaveChanges();
                return dangBT.MaSP;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return 0;

            }
            
        }
        public bool Themhinh(HinhAnh hinhAnh)
        {
            try
            {
                db.HinhAnhs.Add(hinhAnh);
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;

            }

        }
        public List<DangBT> Search(string keyword, ref int totalRecord, int pageIndex = 1, int pageSize = 2)
        {
            totalRecord = db.SanPhams.Where(x => x.TenSP.Contains( keyword) ||
            x.Hang.Ten.Contains(keyword)  || x.Model.Ten.Contains(keyword)||
            x.LoaiSanPham.TenLSP.Contains(keyword) ).Count();
            var sanpham = db.DangBTs.Where(
                x => x.SanPham.TenSP.Contains(keyword)&&x.Status==true ||
                x.SanPham.Hang.Ten.Contains(keyword) && x.Status == true||
                x.SanPham.Model.Ten.Contains(keyword) && x.Status == true ||
                x.SanPham.LoaiSanPham.TenLSP.Contains(keyword) && x.Status == true
            ).OrderByDescending(x=>x.MaSP).Skip((pageIndex - 1) * pageSize).Take(pageSize).ToList();
            foreach (var item in sanpham)
            {
                string anh = item.SanPham.AnhTDe;
                item.SanPham.AnhTDe = anh.Replace(" ", "");
            }
            return sanpham;

        }
        public List<string> ListName(string keyword)
        {
            return db.DangBTs.Where(x => x.SanPham.TenSP.Contains(keyword)&&x.Status==true).Select(x => x.SanPham.TenSP).ToList();
        }
        public bool update(int id)
        {
            try
            {
                var dangBt = db.DangBTs.Find(id);
                int so = dangBt.Xem;
                dangBt.Xem = so + 1;
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public object ChangeStatus(long id)
        {
            var user = db.DangBTs.Find(id);
            user.Status = !user.Status;
            db.SaveChanges();
            return user.Status;
        }
        public bool updateSL(int Ma,int so)
        {
            var user = db.DangBTs.Single(x=>x.SanPham.MaSP==Ma);
            if(user.SanPham.soluong - so >= 0)
            {
                user.SanPham.soluong = user.SanPham.soluong - so;
            }
            else
            {
                if (user.SanPham.soluong == 0)
                {
                    user.Status = false;
                }                 
            }            
            db.SaveChanges();
            return user.Status;
        }
    }
}
