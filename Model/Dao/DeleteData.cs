using Model.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Dao
{
    public class DeleteData
    {
        BanHang db = null;
        public DeleteData()
        {
            db = new BanHang();
        }
        public bool DeleteBoNho(int id)
        {
            try
            {
                var user = db.BoNhoes.Find(id);
                db.BoNhoes.Remove(user);
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool DeleteBoXL(int id)
        {
            try
            {
                var user = db.BoXLs.Find(id);
                db.BoXLs.Remove(user);
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool DeleteCamera(int id)
        {
            try
            {
                var user = db.Cameras.Find(id);
                db.Cameras.Remove(user);
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool DeleteCard(int id)
        {
            try
            {
                var user = db.Cards.Find(id);
                db.Cards.Remove(user);
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool DeleteCase(int id)
        {
            try
            {
                var user = db.Cases.Find(id);
                db.Cases.Remove(user);
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool DeleteChatLieu(int id)
        {
            try
            {
                var user = db.ChatLieux.Find(id);
                db.ChatLieux.Remove(user);
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool DeleteChoNgoi(int id)
        {
            try
            {
                var user = db.ChoNgois.Find(id);
                db.ChoNgois.Remove(user);
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool DeleteDoiSX(int id)
        {
            try
            {
                var user = db.DoiSXes.Find(id);
                db.DoiSXes.Remove(user);
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool DeleteDoPhanGia(int id)
        {
            try
            {
                var user = db.DoPhangias.Find(id);
                db.DoPhangias.Remove(user);
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool DeleteHang(int id)
        {
            try
            {
                var user = db.Hangs.Find(id);
                db.Hangs.Remove(user);
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool DeleteHDH(int id)
        {
            try
            {
                var user = db.HeDieuHanhs.Find(id);
                db.HeDieuHanhs.Remove(user);
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool DeleteHopSo(int id)
        {
            try
            {
                var user = db.HopSoes.Find(id);
                db.HopSoes.Remove(user);
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool DeleteKichTHuoc(int id)
        {
            try
            {
                var user = db.KichThuocs.Find(id);
                db.KichThuocs.Remove(user);
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool DeleteKieuDang(int id)
        {
            try
            {
                var user = db.KieuDangs.Find(id);
                db.KieuDangs.Remove(user);
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool DeleteLTR(int id)
        {
            try
            {
                var user = db.LoaiTRs.Find(id);
                db.LoaiTRs.Remove(user);
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool DeleteMauSac(int id)
        {
            try
            {
                var user = db.MauSacs.Find(id);
                db.MauSacs.Remove(user);
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool DeleteModel(int id)
        {
            try
            {
                var user = db.Models.Find(id);
                db.Models.Remove(user);
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool DeleteMua(int id)
        {
            try
            {
                var user = db.Muas.Find(id);
                db.Muas.Remove(user);
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool DeletePhienBan(int id)
        {
            try
            {
                var user = db.PhienBans.Find(id);
                db.PhienBans.Remove(user);
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool DeletePhuKien(int id)
        {
            try
            {
                var user = db.PhuKiens.Find(id);
                db.PhuKiens.Remove(user);
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool DeletePin(int id)
        {
            try
            {
                var user = db.Pins.Find(id);
                db.Pins.Remove(user);
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool DeleteQuangDuong(int id)
        {
            try
            {
                var user = db.Quangduongs.Find(id);
                db.Quangduongs.Remove(user);
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool DeleteRam(int id)
        {
            try
            {
                var user = db.Rams.Find(id);
                db.Rams.Remove(user);
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
