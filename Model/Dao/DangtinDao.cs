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
            return db.Hangs.Where(x => x.MaLSP == malsp).ToList();
        }
        public List<Pin> pin(int malsp)
        {
            return db.Pins.Where(x => x.MaLSP == malsp).ToList();
        }
        public List<BoXL> boxuly(int malsp)
        {
            return db.BoXLs.Where(x => x.MaLSP == malsp).ToList();
        }
        public List<HeDieuHanh> hedieuhanh(int malsp)
        {
            return db.HeDieuHanhs.Where(x => x.MaLSP == malsp).ToList();
        }
        public List<KichThuoc> kichthuoc(int malsp)
        {
            return db.KichThuocs.Where(x => x.MaLSP == malsp).ToList();

        }
        public List<Ram> ram(int malsp)
        {
            return db.Rams.Where(x => x.MaLSP == malsp).ToList();
        }
        public List<Camera> camera(int malsp)
        {
            return db.Cameras.Where(x => x.MaLSP == malsp).ToList();
        }
        public List<ChoNgoi> chongoi(int malsp)
        {
            return db.ChoNgois.Where(x => x.MaLSP == malsp).ToList();
        }

        public List<KieuDang> kieudang(int malsp)
        {
            return db.KieuDangs.Where(x => x.MaLSP == malsp).ToList();
        }
        public List<PhuKien> phukien(int malsp)
        {
            return db.PhuKiens.Where(x => x.MaLSP == malsp).ToList();
        }
        public List<Quangduong> quangduong(int malsp)
        {
            return db.Quangduongs.Where(x => x.MaLSP == malsp).ToList();
        }
        public List<LoaiTR> loaiTR(int malsp)
        {
            return db.LoaiTRs.Where(x => x.MaLSP == malsp).ToList();
        }
        public List<DoiSX> doisanxuat(int malsp)
        {
            return db.DoiSXs.Where(x => x.MaLSP == malsp).ToList();
        }
        public List<Card> card(int malsp)
        {
            return db.Cards.Where(x => x.MaLSP == malsp).ToList();
        }
        public List<Mua> Mua(int malsp)
        {
            return db.Muas.Where(x => x.MaLSP == malsp).ToList();
        }
        public List<ChatLieu> Chatlieu(int malsp)
        {
            return db.ChatLieus.Where(x => x.MaLSP == malsp).ToList();
        }
        public List<PhienBan> phienban(int malsp)
        {
            return db.PhienBans.Where(x => x.MaLSP == malsp).ToList();
        }
        public List<DoPhangia> dophangia(int malsp)
        {
            return db.DoPhangias.Where(x => x.MaLSP == malsp).ToList();
        }
        public List<MauSac> mausac(int malsp)
        {
            return db.MauSacs.Where(x => x.MaLSP == malsp).ToList();
        }
        public List<Case> Case(int malsp)
        {
            return db.Cases.Where(x => x.MaLSP == malsp).ToList();
        }
        public List<BoNho> bonho(int malsp)
        {
            return db.BoNhos.Where(x => x.MaLSP == malsp).ToList();
        }
        public List<HopSo> hopso(int malsp)
        {
            return db.HopSoes.Where(x => x.MaLSP == malsp).ToList();
        }
        public List<Model.EF.Model> models(int id)
        {
            return db.Models.Where(x => x.IDHang == id).ToList();
        }
    }
}
