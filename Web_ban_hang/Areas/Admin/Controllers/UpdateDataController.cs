using Model.Dao;
using Model.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Web_ban_hang.Areas.Admin.Controllers
{
    public class UpdateDataController : Controller
    {
        [HttpPost]
        public JsonResult UpdateBoNho(int id,string ten,string malsp,int stt)
        {
            var bonho = new BoNho();
            bonho.ID_BN = id;
            bonho.Ten = ten;
            bonho.STT = stt;
            bonho.MaLSP = Convert.ToInt32(malsp);
            var result = new UpdateData().BoNho(bonho);
            return Json(new
            {
                status = result
            });
        }
        [HttpPost]
        public JsonResult UpdateBoXL(int id, string ten, string malsp,int stt)
        {
            var bonho = new BoXL();
            bonho.ID_BXL = id;
            bonho.Ten = ten;
            bonho.STT = stt;
            bonho.MaLSP = Convert.ToInt32(malsp);
            var result = new UpdateData().BoXL(bonho);
            return Json(new
            {
                status = result
            });
        }
        [HttpPost]
        public JsonResult UpdateCamera(int id, string ten, string malsp, int stt)
        {
            var bonho = new Camera();
            bonho.ID_Camera = id;
            bonho.Ten = ten;
            bonho.STT = stt;
            bonho.MaLSP = Convert.ToInt32(malsp);
            var result = new UpdateData().Camera(bonho);
            return Json(new
            {
                status = result
            });
        }
        [HttpPost]
        public JsonResult UpdateCard(int id, string ten, string malsp, int stt)
        {
            var bonho = new Card();
            bonho.ID_Card = id;
            bonho.Ten = ten;
            bonho.STT = stt;
            bonho.MaLSP = Convert.ToInt32(malsp);
            var result = new UpdateData().Card(bonho);
            return Json(new
            {
                status = result
            });
        }
        [HttpPost]
        public JsonResult UpdateChatlieu(int id, string ten, string malsp, int stt)
        {
            var bonho = new ChatLieu();
            bonho.ID_CL = id;
            bonho.Ten = ten;
            bonho.STT = stt;
            bonho.MaLSP = Convert.ToInt32(malsp);
            var result = new UpdateData().Chatlieu(bonho);
            return Json(new
            {
                status = result
            });
        }
        [HttpPost]
        public JsonResult UpdateCaes(int id, string ten, string malsp, int stt)
        {
            var bonho = new Case();
            bonho.ID_Case = id;
            bonho.Ten = ten;
            bonho.STT = stt;
            bonho.MaLSP = Convert.ToInt32(malsp);
            var result = new UpdateData().Case(bonho);
            return Json(new
            {
                status = result
            });
        }
        [HttpPost]
        public JsonResult UpdateChoNgoi(int id, string ten, string malsp, int stt)
        {
            var bonho = new ChoNgoi();
            bonho.ID_CN = id;
            bonho.Ten = ten;
            bonho.STT = stt;
            bonho.MaLSP = Convert.ToInt32(malsp);
            var result = new UpdateData().ChoNgoi(bonho);
            return Json(new
            {
                status = result
            });
        }
        [HttpPost]
        public JsonResult UpdateDoiSX(int id, string ten, string malsp, int stt)
        {
            var bonho = new DoiSX();
            bonho.ID_Doi = id;
            bonho.Ten = ten;
            bonho.STT = stt;
            bonho.MaLSP = Convert.ToInt32(malsp);
            var result = new UpdateData().DoiSX(bonho);
            return Json(new
            {
                status = result
            });
        }
        [HttpPost]
        public JsonResult UpdateDophanGia(int id, string ten, string malsp, int stt)
        {
            var bonho = new DoPhangia();
            bonho.ID_DPG = id;
            bonho.Ten = ten;
            bonho.STT = stt;
            bonho.MaLSP = Convert.ToInt32(malsp);
            var result = new UpdateData().Dophangia(bonho);
            return Json(new
            {
                status = result
            });
        }
        [HttpPost]
        public JsonResult UpdateHang(int id, string ten, string malsp, int stt)
        {
            var bonho = new Hang();
            bonho.IDHang = id;
            bonho.Ten = ten;
            bonho.STT = stt;
            bonho.MaLSP = Convert.ToInt32(malsp);
            var result = new UpdateData().Hang(bonho);
            return Json(new
            {
                status = result
            });
        }
        [HttpPost]
        public JsonResult UpdateHDH(int id, string ten, string malsp, int stt)
        {
            var bonho = new HeDieuHanh();
            bonho.ID_HDH = id;
            bonho.Ten = ten;
            bonho.STT = stt;
            bonho.MaLSP = Convert.ToInt32(malsp);
            var result = new UpdateData().Hedieuhanh(bonho);
            return Json(new
            {
                status = result
            });
        }
        [HttpPost]
        public JsonResult UpdateHopSo(int id, string ten, string malsp, int stt)
        {
            var bonho = new HopSo();
            bonho.ID_HS = id;
            bonho.Ten = ten;
            bonho.STT = stt;
            bonho.MaLSP = Convert.ToInt32(malsp);
            var result = new UpdateData().Hopso(bonho);
            return Json(new
            {
                status = result
            });
        }
        [HttpPost]
        public JsonResult UpdateKichThuoc(int id, string ten, string malsp, int stt)
        {
            var bonho = new KichThuoc();
            bonho.ID_KT = id;
            bonho.Ten = ten;
            bonho.STT = stt;
            bonho.MaLSP = Convert.ToInt32(malsp);
            var result = new UpdateData().KichThuoc(bonho);
            return Json(new
            {
                status = result
            });
        }
        [HttpPost]
        public JsonResult UpdateKieuDang(int id, string ten, string malsp, int stt)
        {
            var bonho = new KieuDang();
            bonho.ID_KD = id;
            bonho.Ten = ten;
            bonho.STT = stt;
            bonho.MaLSP = Convert.ToInt32(malsp);
            var result = new UpdateData().KieuDang(bonho);
            return Json(new
            {
                status = result
            });
        }
        [HttpPost]
        public JsonResult UpdateLoaiTR(int id, string ten, string malsp, int stt)
        {
            var bonho = new LoaiTR();
            bonho.ID_LTR= id;
            bonho.Ten = ten;
            bonho.STT = stt;
            bonho.MaLSP = Convert.ToInt32(malsp);
            var result = new UpdateData().LoaiTR(bonho);
            return Json(new
            {
                status = result
            });
        }
        [HttpPost]
        public JsonResult UpdateMauSac(int id, string ten, string malsp, int stt)
        {
            var bonho = new MauSac();
            bonho.ID_MS = id;
            bonho.Ten = ten;
            bonho.STT = stt;
            bonho.MaLSP = Convert.ToInt32(malsp);
            var result = new UpdateData().MauSac(bonho);
            return Json(new
            {
                status = result
            });
        }
        [HttpPost]
        public JsonResult UpdateModel(int id, string ten, string hang, int stt)
        {
            var bonho = new Model.EF.Model();
            bonho.ID_Model = id;
            bonho.Ten = ten;
            bonho.STT = stt;
            bonho.IDHang = Convert.ToInt32(hang);
            var result = new UpdateData().Models(bonho);
            return Json(new
            {
                status = result
            });
        }
        [HttpPost]
        public JsonResult UpdateMua(int id, string ten, string malsp, int stt)
        {
            var bonho = new Mua();
            bonho.ID_M = id;
            bonho.Ten = ten;
            bonho.STT = stt;
            bonho.MaLSP = Convert.ToInt32(malsp);
            var result = new UpdateData().Mua(bonho);
            return Json(new
            {
                status = result
            });
        }

        [HttpPost]
        public JsonResult UpdatePhienBan(int id, string ten, string malsp, int stt)
        {
            var bonho = new PhienBan();
            bonho.ID_PB = id;
            bonho.Ten = ten;
            bonho.STT = stt;
            bonho.MaLSP = Convert.ToInt32(malsp);
            var result = new UpdateData().Phienban(bonho);
            return Json(new
            {
                status = result
            });
        }

        [HttpPost]
        public JsonResult UpdatePhukien(int id, string ten, string malsp, int stt)
        {
            var bonho = new PhuKien();
            bonho.ID_PK = id;
            bonho.Ten = ten;
            bonho.STT = stt;
            bonho.MaLSP = Convert.ToInt32(malsp);
            var result = new UpdateData().Phukien(bonho);
            return Json(new
            {
                status = result
            });
        }
        [HttpPost]
        public JsonResult UpdatePin(int id, string ten, string malsp, int stt)
        {
            var bonho = new Pin();
            bonho.ID_Pin = id;
            bonho.Ten = ten;
            bonho.STT = stt;
            bonho.MaLSP = Convert.ToInt32(malsp);
            var result = new UpdateData().Pin(bonho);
            return Json(new
            {
                status = result
            });
        }
        [HttpPost]
        public JsonResult UpdateQuangDuong(int id, string ten, string malsp, int stt)
        {
            var bonho = new Quangduong();
            bonho.ID_QD = id;
            bonho.Ten = ten;
            bonho.STT = stt;
            bonho.MaLSP = Convert.ToInt32(malsp);
            var result = new UpdateData().QuangDuong(bonho);
            return Json(new
            {
                status = result
            });
        }
        [HttpPost]
        public JsonResult UpdateRam(int id, string ten, string malsp, int stt)
        {
            var bonho = new Ram();
            bonho.ID_R = id;
            bonho.Ten = ten;
            bonho.STT = stt;
            bonho.MaLSP = Convert.ToInt32(malsp);
            var result = new UpdateData().Ram(bonho);
            return Json(new
            {
                status = result
            });
        }
       
    }
}