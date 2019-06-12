using Model.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Dao
{
   public class UpdateData
    {

        BanHang db = null;
        public UpdateData()
        {
            db = new BanHang();
        }
        public bool Ram(Ram ram)
        {
            try
            {
                var data = db.Rams.Find(ram.ID_R);
                data.Ten = ram.Ten;
                data.MaLSP = ram.MaLSP;
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
                var data = db.BoNhoes.Find(boNho.ID_BN);
                data.Ten = boNho.Ten;
                data.MaLSP = boNho.MaLSP;
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
                var data = db.BoXLs.Find(boXL.ID_BXL);
                data.Ten = boXL.Ten;
                data.MaLSP = boXL.MaLSP;
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
                var data = db.Cameras.Find(camera.ID_Camera);
                data.Ten = camera.Ten;
                data.MaLSP = camera.MaLSP;
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
                var data = db.Cards.Find(card.ID_Card);
                data.Ten = card.Ten;
                data.MaLSP = card.MaLSP;
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
                var data = db.Cases.Find(cases.ID_Case);
                data.Ten = cases.Ten;
                data.MaLSP = cases.MaLSP;
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
                var data = db.ChatLieux.Find(chatLieu.ID_CL);
                data.Ten = chatLieu.Ten;
                data.MaLSP = chatLieu.MaLSP;
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
                var data = db.ChoNgois.Find(choNgoi.ID_CN);
                data.Ten = choNgoi.Ten;
                data.MaLSP = choNgoi.MaLSP;
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
                var data = db.DoiSXes.Find(doiSX.ID_Doi);
                data.Ten = doiSX.Ten;
                data.MaLSP = doiSX.MaLSP;
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
                var data = db.DoPhangias.Find(doPhangia.ID_DPG);
                data.Ten = doPhangia.Ten;
                data.MaLSP = doPhangia.MaLSP;
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
                var data = db.Hangs.Find(hang.IDHang);
                data.Ten = hang.Ten;
                data.MaLSP = hang.MaLSP;
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
                var data = db.HeDieuHanhs.Find(heDieuHanh.ID_HDH);
                data.Ten = heDieuHanh.Ten;
                data.MaLSP = heDieuHanh.MaLSP;
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
                var data = db.Rams.Find(hopSo.ID_HS);
                data.Ten = hopSo.Ten;
                data.MaLSP = hopSo.MaLSP;
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
                var data = db.Rams.Find(kichThuoc.ID_KT);
                data.Ten = kichThuoc.Ten;
                data.MaLSP = kichThuoc.MaLSP;
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
                var data = db.KieuDangs.Find(kieuDang.ID_KD);
                data.Ten = kieuDang.Ten;
                data.MaLSP = kieuDang.MaLSP;
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
                var data = db.LoaiTRs.Find(loaiTR.ID_LTR);
                data.Ten = loaiTR.Ten;
                data.MaLSP = loaiTR.MaLSP;
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
                var data = db.MauSacs.Find(mauSac.ID_MS);
                data.Ten = mauSac.Ten;
                data.MaLSP = mauSac.MaLSP;
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
                var data = db.Models.Find(model.ID_Mdel);
                data.Ten = model.Ten;
                data.IDHang = model.IDHang;
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
                var data = db.Muas.Find(mua.ID_M);
                data.Ten = mua.Ten;
                data.MaLSP = mua.MaLSP;
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
                var data = db.PhienBans.Find(phienBan.ID_PB);
                data.Ten = phienBan.Ten;
                data.MaLSP = phienBan.MaLSP;
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
                var data = db.PhuKiens.Find(phuKien.ID_PK);
                data.Ten = phuKien.Ten;
                data.MaLSP = phuKien.MaLSP; ;
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
                var data = db.Pins.Find(pin.ID_Pin);
                data.Ten = pin.Ten;
                data.MaLSP = pin.MaLSP;
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
                var data = db.Quangduongs.Find(quangduong.ID_QD);
                data.Ten = quangduong.Ten;
                data.MaLSP = quangduong.MaLSP;
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
