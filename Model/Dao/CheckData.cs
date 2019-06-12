using Model.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Dao
{
   public class CheckData
    {
        BanHang db = null;
        public CheckData()
        {
            db = new BanHang();
        }
        public bool BoNho(int id)
        {
            var check = db.SanPhams.Where(x => x.ID_BN == id).ToList();
            if (check != null)
            {
                return false;
            }
            else
            {
                return true;
            }
            
        }
        public bool BoXL(int id)
        {
            var check = db.SanPhams.Where(x => x.ID_BXL == id).ToList();
            if (check != null)
            {
                return false;
            }
            else
            {
                return true;
            }

        }
        public bool Camera(int id)
        {
            var check = db.SanPhams.Where(x => x.ID_Camera == id).ToList();
            if (check != null)
            {
                return false;
            }
            else
            {
                return true;
            }

        }
        public bool Card(int id)
        {
            var check = db.SanPhams.Where(x => x.ID_Card == id).ToList();
            if (check != null)
            {
                return false;
            }
            else
            {
                return true;
            }

        }
        public bool Case(int id)
        {
            var check = db.SanPhams.Where(x => x.ID_Case == id).ToList();
            if (check != null)
            {
                return false;
            }
            else
            {
                return true;
            }

        }
        public bool Chatlieu(int id)
        {
            var check = db.SanPhams.Where(x => x.ID_CL == id).ToList();
            if (check != null)
            {
                return false;
            }
            else
            {
                return true;
            }

        }
        public bool ChoNgoi(int id)
        {
            var check = db.SanPhams.Where(x => x.ID_CN == id).ToList();
            if (check != null)
            {
                return false;
            }
            else
            {
                return true;
            }

        }
        public bool DoiSX(int id)
        {
            var check = db.SanPhams.Where(x => x.ID_Doi == id).ToList();
            if (check != null)
            {
                return false;
            }
            else
            {
                return true;
            }

        }
        public bool DoPhanGia(int id)
        {
            var check = db.SanPhams.Where(x => x.ID_DPG == id).ToList();
            if (check != null)
            {
                return false;
            }
            else
            {
                return true;
            }

        }
        public bool Hang(int id)
        {
            var check = db.SanPhams.Where(x => x.IDHang == id).ToList();
            if (check != null)
            {
                return false;
            }
            else
            {
                return true;
            }

        }
        public bool HDH(int id)
        {
            var check = db.SanPhams.Where(x => x.ID_HDH == id).ToList();
            if (check != null)
            {
                return false;
            }
            else
            {
                return true;
            }

        }
        public bool Hopso(int id)
        {
            var check = db.SanPhams.Where(x => x.ID_HS == id).ToList();
            if (check != null)
            {
                return false;
            }
            else
            {
                return true;
            }

        }
        public bool KichThuoc(int id)
        {
            var check = db.SanPhams.Where(x => x.ID_KT == id).ToList();
            if (check != null)
            {
                return false;
            }
            else
            {
                return true;
            }

        }
        public bool KieuDang(int id)
        {
            var check = db.SanPhams.Where(x => x.ID_KD== id).ToList();
            if (check != null)
            {
                return false;
            }
            else
            {
                return true;
            }

        }
        public bool LoaiSP(int id)
        {
            var check = db.SanPhams.Where(x => x.MaLSP == id).ToList();
            if (check != null)
            {
                return false;
            }
            else
            {
                return true;
            }

        }
        public bool LoaiTR(int id)
        {
            var check = db.SanPhams.Where(x => x.ID_LTR== id).ToList();
            if (check != null)
            {
                return false;
            }
            else
            {
                return true;
            }

        }
        public bool MauSac(int id)
        {
            var check = db.SanPhams.Where(x => x.ID_MS == id).ToList();
            if (check != null)
            {
                return false;
            }
            else
            {
                return true;
            }

        }
        public bool Model(int id)
        {
            var check = db.SanPhams.Where(x => x.ID_Model == id).ToList();
            if (check != null)
            {
                return false;
            }
            else
            {
                return true;
            }

        }
        public bool Mua(int id)
        {
            var check = db.SanPhams.Where(x => x.ID_M == id).ToList();
            if (check != null)
            {
                return false;
            }
            else
            {
                return true;
            }

        }
        public bool PhienBan(int id)
        {
            var check = db.SanPhams.Where(x => x.ID_PB == id).ToList();
            if (check != null)
            {
                return false;
            }
            else
            {
                return true;
            }

        }
        public bool Phukien(int id)
        {
            var check = db.SanPhams.Where(x => x.ID_PK == id).ToList();
            if (check != null)
            {
                return false;
            }
            else
            {
                return true;
            }

        }
        public bool Pin(int id)
        {
            var check = db.SanPhams.Where(x => x.ID_Pin == id).ToList();
            if (check != null)
            {
                return false;
            }
            else
            {
                return true;
            }

        }
        public bool QuangDuong(int id)
        {
            var check = db.SanPhams.Where(x => x.ID_QD== id).ToList();
            if (check != null)
            {
                return false;
            }
            else
            {
                return true;
            }

        }
        public bool Ram(int id)
        {
            var check = db.SanPhams.Where(x => x.ID_R == id).ToList();
            if (check != null)
            {
                return false;
            }
            else
            {
                return true;
            }

        }
    }
}
