using Model.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Dao
{
   public class DataDao
    {
        BanHang db = null;
        public DataDao()
        {
            db = new BanHang();
        }
        public List<LoaiSanPham> loaiSanPhamall()
        {
            return db.LoaiSanPhams.ToList();
        }
        //public List<LoaiSanPham> loaiSanPhams()
        //{
        //    return db.LoaiSanPhams.Where(x=>x.LSPParentID==null).ToList();
        //}
        //public List<LoaiSanPham> loaiSanPhamsiem(int id)
        //{
        //    return db.LoaiSanPhams.Where(x => x.LSPParentID == id).ToList();
        //}
        public bool LoaiSanPham(LoaiSanPham loaiSanPham)
        {
            try
            {
                db.LoaiSanPhams.Add(loaiSanPham);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public bool Ram(Ram  ram)
        {
            try
            {
                db.Rams.Add(ram);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public bool BoNho(BoNho boNho)
        {
            try
            {
                db.BoNhoes.Add(boNho);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public bool BoXL(BoXL boXL)
        {
            try
            {
                db.BoXLs.Add(boXL);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public bool Camera(Camera camera)
        {
            try
            {
                db.Cameras.Add(camera);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public bool Card(Card card)
        {
            try
            {
                db.Cards.Add(card);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public bool Case(Case cases)
        {
            try
            {
                db.Cases.Add(cases);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public bool Chatlieu(ChatLieu chatLieu)
        {
            try
            {
                db.ChatLieux.Add(chatLieu);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public bool ChoNgoi(ChoNgoi choNgoi)
        {
            try
            {
                db.ChoNgois.Add(choNgoi);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public bool DoiSX(DoiSX doiSX)
        {
            try
            {
                db.DoiSXes.Add(doiSX);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public bool Dophangia(DoPhangia doPhangia)
        {
            try
            {
                db.DoPhangias.Add(doPhangia);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public bool Hang(Hang hang)
        {
            try
            {
                db.Hangs.Add(hang);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public bool Hedieuhanh(HeDieuHanh heDieuHanh)
        {
            try
            {
                db.HeDieuHanhs.Add(heDieuHanh);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public bool Hopso(HopSo hopSo)
        {
            try
            {
                db.HopSoes.Add(hopSo);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public bool KichThuoc(KichThuoc kichThuoc)
        {
            try
            {
                db.KichThuocs.Add(kichThuoc);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public bool KieuDang(KieuDang kieuDang)
        {
            try
            {
                db.KieuDangs.Add(kieuDang);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public bool LoaiTR(LoaiTR loaiTR)
        {
            try
            {
                db.LoaiTRs.Add(loaiTR);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public bool MauSac(MauSac mauSac)
        {
            try
            {
                db.MauSacs.Add(mauSac);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public bool Models(EF.Model model)
        {
            try
            {
                db.Models.Add(model);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public bool Mua(Mua mua)
        {
            try
            {
                db.Muas.Add(mua);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public bool Phienban(PhienBan phienBan)
        {
            try
            {
                db.PhienBans.Add(phienBan);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public bool Phukien(PhuKien phuKien)
        {
            try
            {
                db.PhuKiens.Add(phuKien);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public bool Pin(Pin pin)
        {
            try
            {
                db.Pins.Add(pin);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public bool QuangDuong(Quangduong quangduong)
        {
            try
            {
                db.Quangduongs.Add(quangduong);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public List<Ram> Ramlist()
        {
            return db.Rams.ToList();
        }
        public List<BoNho> BoNholist()
        {
            return db.BoNhoes.ToList();
        }
        public List<BoXL> BoXLlist()
        {
            return db.BoXLs.ToList();
        }
        public List<Camera> Cameralsit()
        {
            return db.Cameras.ToList();
        }
        public List<Card> Cardlist()
        {
            return db.Cards.ToList();
        }
        public List<Case> Caselist()
        {
            return db.Cases.ToList();   
        }
        public List<ChatLieu> Chatlieulist()
        {
            return db.ChatLieux.ToList();
        }
        public List<ChoNgoi> ChoNgoilsit()
        {
            return db.ChoNgois.ToList();
        }
        public List<DoiSX> DoiSXlist()
        {
            return db.DoiSXes.ToList();
        }
        public List<DoPhangia> Dophangialist()
        {
            return db.DoPhangias.ToList();
        }
        public List<Hang> Hanglsit()
        {
            return db.Hangs.ToList();
        }
        public List<HeDieuHanh> Hedieuhanhlist()
        {
            return db.HeDieuHanhs.ToList();
        }
        public List<HopSo> Hopsolsit()
        {
            return db.HopSoes.ToList();
            
        }
        public List<KichThuoc> KichThuoclist()
        {
            return db.KichThuocs.ToList();
        }
        public List<KieuDang> KieuDanglist()
        {
            return db.KieuDangs.ToList();
        }
        public List<LoaiTR> LoaiTRlist()
        {
            return db.LoaiTRs.ToList();
        }
        public List<MauSac> MauSaclist()
        {
            return db.MauSacs.ToList();
        }
        public List<Model.EF.Model> Modelslist()
        {
            return db.Models.ToList();
        }
        public List<Mua> Mualist()
        {
            return db.Muas.ToList();
        }
        public List<PhienBan> Phienbanlist()
        {
            return db.PhienBans.ToList();
        }
        public List<PhuKien> Phukienlist()
        {
            return db.PhuKiens.ToList();
        }
        public List<Pin> Pinlist()
        {
            return db.Pins.ToList()
;        }
        public List<Quangduong> QuangDuonglist()
        {
            return db.Quangduongs.ToList();
        }
        public List<Hang> HangLSP(int id)
        {
            return db.Hangs.Where(x => x.MaLSP == id).ToList();
        }

        public List<HinhAnh> hinhAnhs()
        {
            return db.HinhAnhs.ToList();
        }
    }
}
