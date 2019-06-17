using Model.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Dao
{
   public class DangtinDao
    {
        BanHang db = null;
        public DangtinDao()
        {
            db = new BanHang();
        }
        public List<Hang> hang(int malsp)
        {
            var menu = db.Menus.SingleOrDefault(x => x.ID == malsp && x.MenuParentID != null);
            if (menu != null)
            {
                return db.Hangs.Where(x => x.MaLSP == menu.ID).ToList();
            }
            else
            {
                return db.Hangs.Where(x => x.MaLSP == malsp).ToList();
            }           
        }
        public List<Pin> pin(int malsp)
        {
            var menu = db.Menus.SingleOrDefault(x => x.ID == malsp && x.MenuParentID != null);
            if (menu != null)
            {
                return db.Pins.Where(x => x.MaLSP == menu.ID).ToList();
            }
            else
            {
                return db.Pins.Where(x => x.MaLSP == malsp).ToList();
            }           
        }
        public List<BoXL> boxuly(int malsp)
        {
            var menu = db.Menus.SingleOrDefault(x => x.ID == malsp && x.MenuParentID != null);
            if (menu != null)
            {
                return db.BoXLs.Where(x => x.MaLSP == menu.ID).ToList();
            }
            else
            {
                return db.BoXLs.Where(x => x.MaLSP == malsp).ToList();
            }
           
        }
        public List<HeDieuHanh> hedieuhanh(int malsp)
        {
            var menu = db.Menus.SingleOrDefault(x => x.ID == malsp && x.MenuParentID != null);
            if (menu != null)
            {
                return db.HeDieuHanhs.Where(x => x.MaLSP == menu.ID).ToList();
            }
            else
            {
                return db.HeDieuHanhs.Where(x => x.MaLSP == malsp).ToList();
            }
           
        }
        public List<KichThuoc> kichthuoc(int malsp)
        {
            var menu = db.Menus.SingleOrDefault(x => x.ID == malsp && x.MenuParentID != null);
            if (menu != null)
            {
                return db.KichThuocs.Where(x => x.MaLSP == menu.ID).ToList();
            }
            else
            {
                return db.KichThuocs.Where(x => x.MaLSP == malsp).ToList();
            }
        }
        public List<Ram> ram(int malsp)
        {
            var menu = db.Menus.SingleOrDefault(x => x.ID == malsp && x.MenuParentID != null);
            if (menu != null)
            {
                return db.Rams.Where(x => x.MaLSP == menu.ID).ToList();
            }
            else
            {
                return db.Rams.Where(x => x.MaLSP == malsp).ToList();
            }
        }
        public List<Camera> camera(int malsp)
        {
            var menu = db.Menus.SingleOrDefault(x => x.ID == malsp && x.MenuParentID != null);
            if (menu != null)
            {
                return db.Cameras.Where(x => x.MaLSP == menu.ID).ToList();
            }
            else
            {
                return db.Cameras.Where(x => x.MaLSP == malsp).ToList();
            }
        }
        public List<ChoNgoi> chongoi(int malsp)
        {
            var menu = db.Menus.SingleOrDefault(x => x.ID == malsp && x.MenuParentID != null);
            if (menu != null)
            {
                return db.ChoNgois.Where(x => x.MaLSP == menu.ID).ToList();
            }
            else
            {
                return db.ChoNgois.Where(x => x.MaLSP == malsp).ToList();
            }
        }

        public List<KieuDang> kieudang(int malsp)
        {
            var menu = db.Menus.SingleOrDefault(x => x.ID == malsp && x.MenuParentID != null);
            if (menu != null)
            {
                return db.KieuDangs.Where(x => x.MaLSP == menu.ID).ToList();
            }
            else
            {
                return db.KieuDangs.Where(x => x.MaLSP == malsp).ToList();
            }
        }
        public List<PhuKien> phukien(int malsp)
        {
            var menu = db.Menus.SingleOrDefault(x => x.ID == malsp && x.MenuParentID != null);
            if (menu != null)
            {
                return db.PhuKiens.Where(x => x.MaLSP == menu.ID).ToList();
            }
            else
            {
                return db.PhuKiens.Where(x => x.MaLSP == malsp).ToList();
            }
        }
        public List<Quangduong> quangduong(int malsp)
        {
            var menu = db.Menus.SingleOrDefault(x => x.ID == malsp && x.MenuParentID != null);
            if (menu != null)
            {
                return db.Quangduongs.Where(x => x.MaLSP == menu.ID).ToList();
            }
            else
            {
                return db.Quangduongs.Where(x => x.MaLSP == malsp).ToList();
            }
        }
        public List<LoaiTR> loaiTR(int malsp)
        {
            var menu = db.Menus.SingleOrDefault(x => x.ID == malsp && x.MenuParentID != null);
            if (menu != null)
            {
                return db.LoaiTRs.Where(x => x.MaLSP == menu.ID).ToList();
            }
            else
            {
                return db.LoaiTRs.Where(x => x.MaLSP == malsp).ToList();
            }
        }
        public List<DoiSX> doisanxuat(int malsp)
        {
            var menu = db.Menus.SingleOrDefault(x => x.ID == malsp && x.MenuParentID != null);
            if (menu != null)
            {
                return db.DoiSXes.Where(x => x.MaLSP == menu.ID).ToList();
            }
            else
            {
                return db.DoiSXes.Where(x => x.MaLSP == malsp).ToList();
            }
        }
        public List<Card> card(int malsp)
        {
            var menu = db.Menus.SingleOrDefault(x => x.ID == malsp && x.MenuParentID != null);
            if (menu != null)
            {
                return db.Cards.Where(x => x.MaLSP == menu.ID).ToList();
            }
            else
            {
                return db.Cards.Where(x => x.MaLSP == malsp).ToList();
            }
        }
        public List<Mua> Mua(int malsp)
        {
            var menu = db.Menus.SingleOrDefault(x => x.ID == malsp && x.MenuParentID != null);
            if (menu != null)
            {
                return db.Muas.Where(x => x.MaLSP == menu.ID).ToList();
            }
            else
            {
                return db.Muas.Where(x => x.MaLSP == malsp).ToList();
            }
        }
        public List<ChatLieu> Chatlieu(int malsp)
        {
            var menu = db.Menus.SingleOrDefault(x => x.ID == malsp && x.MenuParentID != null);
            if (menu != null)
            {
                return db.ChatLieux.Where(x => x.MaLSP == menu.ID).ToList();
            }
            else
            {
                return db.ChatLieux.Where(x => x.MaLSP == malsp).ToList();
            }
        }
        public List<PhienBan> phienban(int malsp)
        {
            var menu = db.Menus.SingleOrDefault(x => x.ID == malsp && x.MenuParentID != null);
            if (menu != null)
            {
                return db.PhienBans.Where(x => x.MaLSP == menu.ID).ToList();
            }
            else
            {
                return db.PhienBans.Where(x => x.MaLSP == malsp).ToList();
            }
        }
        public List<DoPhangia> dophangia(int malsp)
        {
            var menu = db.Menus.SingleOrDefault(x => x.ID == malsp && x.MenuParentID != null);
            if (menu != null)
            {
                return db.DoPhangias.Where(x => x.MaLSP == menu.ID).ToList();
            }
            else
            {
                return db.DoPhangias.Where(x => x.MaLSP == malsp).ToList();
            }
        }
        public List<MauSac> mausac(int malsp)
        {
            var menu = db.Menus.SingleOrDefault(x => x.ID == malsp && x.MenuParentID != null);
            if (menu != null)
            {
                return db.MauSacs.Where(x => x.MaLSP == menu.ID).ToList();
            }
            else
            {
                return db.MauSacs.Where(x => x.MaLSP == malsp).ToList();
            }
        }
        public List<Case> Case(int malsp)
        {
            var menu = db.Menus.SingleOrDefault(x => x.ID == malsp && x.MenuParentID != null);
            if (menu != null)
            {
                return db.Cases.Where(x => x.MaLSP == menu.ID).ToList();
            }
            else
            {
                return db.Cases.Where(x => x.MaLSP == malsp).ToList();
            }
        }
        public List<BoNho> bonho(int malsp)
        {
            var menu = db.Menus.SingleOrDefault(x => x.ID == malsp && x.MenuParentID != null);
            if (menu != null)
            {
                return db.BoNhoes.Where(x => x.MaLSP == menu.ID).ToList();
            }
            else
            {
                return db.BoNhoes.Where(x => x.MaLSP == malsp).ToList();
            }
        }
        public List<HopSo> hopso(int malsp)
        {
            var menu = db.Menus.SingleOrDefault(x => x.ID == malsp && x.MenuParentID != null);
            if (menu != null)
            {
                return db.HopSoes.Where(x => x.MaLSP == menu.ID).ToList();
            }
            else
            {
                return db.HopSoes.Where(x => x.MaLSP == malsp).ToList();
            }
        }
        public List<Model.EF.Model> models(int id)
        {            
            return db.Models.Where(x => x.IDHang == id).ToList();
        }
    }
}
