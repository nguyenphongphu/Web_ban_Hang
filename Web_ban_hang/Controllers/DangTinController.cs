using Model.Dao;
using Model.EF;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Web_ban_hang.Common;
using Web_ban_hang.Models;

namespace Web_ban_hang.Controllers
{
    public class DangTinController : Controller
    {
        // GET: DangTin
        [HttpGet]
        public ActionResult Dangtin()
        {
            var session = (UserLogin)Session[Web_ban_hang.Common.CommonConstants.USER_SESSION];
            if (session != null)
            {
                ViewBag.user = new UserDao().GetById(session.UserName);
                ViewBag.tinh = new KhuvucDao().ListKV();               
                return View();
                
            }
            else
            {

                return Redirect("/dang-nhap");
            }

        }
        [HttpPost]
        public ActionResult Dangtin(NewModel dangtin_m)
        {
            if (ModelState.IsValid)
            {
                var session = (UserLogin)Session[Web_ban_hang.Common.CommonConstants.USER_SESSION];
                var image = (List<Image>)Session[CommonConstants.IMAGE_SESSION];
                if (session != null)
                {
                    var newdao = new NewDao();
                    var dangBT = new DangBT();
                    dangBT.UserID = session.UserID;
                    dangBT.SanPham.Date = DateTime.Now.Date ;
                    dangBT.SanPham.TieuDe = dangtin_m.TieuDe;
                    dangBT.SanPham.TenSP = dangtin_m.TieuDe;
                    dangBT.SanPham.Mota = dangtin_m.Mota;
                    dangBT.MaKV = dangtin_m.MaKV;
                    if (image != null)
                    {
                        foreach (var item in image)
                        {

                        }
                    }
                    dangBT.SanPham.AnhTDe = "/Upload/Temp/" + dangBT.SanPham.LoaiSanPham.TenLSP + "/";

                    dangBT.SanPham.IDHang = dangtin_m.IDHang;
                    dangBT.SanPham.ID_BN = dangtin_m.ID_BN;
                    dangBT.SanPham.ID_BXL = dangtin_m.ID_BXL;
                    dangBT.SanPham.ID_Camera = dangtin_m.ID_Camera;
                    dangBT.SanPham.ID_Card = dangtin_m.ID_Card;
                    dangBT.SanPham.ID_Case = dangtin_m.ID_Case;
                    dangBT.SanPham.ID_CL = dangtin_m.ID_CL;
                    dangBT.SanPham.ID_CN = dangtin_m.ID_CN;
                    dangBT.SanPham.ID_Doi = dangtin_m.ID_Doi;
                    dangBT.SanPham.ID_DPG = dangtin_m.ID_DPG;
                    dangBT.SanPham.ID_HDH = dangtin_m.ID_HDH;
                    dangBT.SanPham.ID_HS = dangtin_m.ID_HS;
                    dangBT.SanPham.ID_KD = dangtin_m.ID_KD;
                    dangBT.SanPham.ID_KT = dangtin_m.ID_KT;
                    dangBT.SanPham.ID_LTR = dangtin_m.ID_LTR;
                    dangBT.SanPham.ID_M = dangtin_m.ID_M;
                    dangBT.SanPham.ID_Model = dangtin_m.ID_Model;
                    dangBT.SanPham.ID_MS = dangtin_m.ID_MS;
                    dangBT.SanPham.ID_PB = dangtin_m.ID_PB;
                    dangBT.SanPham.ID_Pin = dangtin_m.ID_Pin;
                    dangBT.SanPham.ID_PK = dangtin_m.ID_PK;
                    dangBT.SanPham.ID_QD = dangtin_m.ID_QD;
                    dangBT.SanPham.ID_R = dangtin_m.ID_R;
                    newdao.Them(dangBT);
                }
            }

            return Redirect("/");
        } 
        public JsonResult data(int malsp)
        {
             var dao = new DangtinDao();
            var hangs = new List<ProvinceModel>();
            var bonhos = new List<ProvinceModel>();
            var boxulys = new List<ProvinceModel>();
            var cameras = new List<ProvinceModel>();
            var cards = new List<ProvinceModel>();
            var Cases = new List<ProvinceModel>();
            var Chatlieus = new List<ProvinceModel>();
            var chongois = new List<ProvinceModel>();
            var doisanxuats = new List<ProvinceModel>();
            var dophangias = new List<ProvinceModel>();
            var hedieuhanhs = new List<ProvinceModel>();
            var hopsos = new List<ProvinceModel>();
            var kichthuocs = new List<ProvinceModel>();
            var kieudangs = new List<ProvinceModel>();
            var loaiTRs = new List<ProvinceModel>();
            var mausacs = new List<ProvinceModel>();
            var Muas = new List<ProvinceModel>();
            var phienbans = new List<ProvinceModel>();
            var phukiens = new List<ProvinceModel>();
            var pins = new List<ProvinceModel>();
            var quangduongs = new List<ProvinceModel>();
            var rams = new List<ProvinceModel>();
            var modelss = new List<ProvinceModel>();
            if (dao.hang(malsp) != null)
            {
                ProvinceModel province = null;
                foreach (var item in dao.hang(malsp))
                {
                    province = new ProvinceModel();
                    province.ID = item.IDHang;
                    province.Name = item.Ten;
                    hangs.Add(province);
                }
            }
            if (dao.bonho(malsp) != null)
            {
                ProvinceModel province = null;
                foreach (var item in dao.bonho(malsp))
                {
                    province = new ProvinceModel();
                    province.ID = item.ID_BN;
                    province.Name = item.Ten;
                    bonhos.Add(province);
                }
            }
            if (dao.boxuly(malsp) != null)
            {
                ProvinceModel province = null;
                foreach (var item in dao.boxuly(malsp))
                {
                    province = new ProvinceModel();
                    province.ID = item.ID_BXL;
                    province.Name = item.Ten;
                    boxulys.Add(province);
                }
            }
            if (dao.camera(malsp) != null)
            {
                ProvinceModel province = null;
                foreach (var item in dao.camera(malsp))
                {
                    province = new ProvinceModel();
                    province.ID = item.ID_Camera;
                    province.Name = item.Ten;
                    cameras.Add(province);
                }
            }
            if (dao.card(malsp) != null)
            {
                ProvinceModel province = null;
                foreach (var item in dao.card(malsp))
                {
                    province = new ProvinceModel();
                    province.ID = item.ID_Card;
                    province.Name = item.Ten;
                    cards.Add(province);
                }
            }
            if (dao.Case(malsp) != null)
            {
                ProvinceModel province = null;
                foreach (var item in dao.Case(malsp))
                {
                    province = new ProvinceModel();
                    province.ID = item.ID_Case;
                    province.Name = item.Ten;
                    cameras.Add(province);
                }
            }
            if (dao.Chatlieu(malsp) != null)
            {
                ProvinceModel province = null;
                foreach (var item in dao.Chatlieu(malsp))
                {
                    province = new ProvinceModel();
                    province.ID = item.ID_CL;
                    province.Name = item.Ten;
                    Chatlieus.Add(province);
                }
            }
            if (dao.chongoi(malsp) != null)
            {
                ProvinceModel province = null;
                foreach (var item in dao.chongoi(malsp))
                {
                    province = new ProvinceModel();
                    province.ID = item.ID_CN;
                    province.Name = item.Ten;
                    chongois.Add(province);
                }
            }
            if (dao.doisanxuat(malsp) != null)
            {
                ProvinceModel province = null;
                foreach (var item in dao.doisanxuat(malsp))
                {
                    province = new ProvinceModel();
                    province.ID = item.ID_Doi;
                    province.Name = item.Ten;
                    doisanxuats.Add(province);
                }
            }
            if (dao.dophangia(malsp) != null)
            {
                ProvinceModel province = null;
                foreach (var item in dao.dophangia(malsp))
                {
                    province = new ProvinceModel();
                    province.ID = item.ID_DPG;
                    province.Name = item.Ten;
                    dophangias.Add(province);
                }
            }
            if (dao.hedieuhanh(malsp) != null)
            {
                ProvinceModel province = null;
                foreach (var item in dao.hedieuhanh(malsp))
                {
                    province = new ProvinceModel();
                    province.ID = item.ID_HDH;
                    province.Name = item.Ten;
                    hedieuhanhs.Add(province);
                }
            }
            if (dao.hopso(malsp) != null)
            {
                ProvinceModel province = null;
                foreach (var item in dao.hopso(malsp))
                {
                    province = new ProvinceModel();
                    province.ID = item.ID_HS;
                    province.Name = item.Ten;
                    hopsos.Add(province);
                }
            }
            if (dao.kichthuoc(malsp) != null)
            {
                ProvinceModel province = null;
                foreach (var item in dao.kichthuoc(malsp))
                {
                    province = new ProvinceModel();
                    province.ID = item.ID_KT;
                    province.Name = item.Ten;
                    kichthuocs.Add(province);
                }
            }
            if (dao.kieudang(malsp) != null)
            {
                ProvinceModel province = null;
                foreach (var item in dao.kieudang(malsp))
                {
                    province = new ProvinceModel();
                    province.ID = item.ID_KD;
                    province.Name = item.Ten;
                    kieudangs.Add(province);
                }
            }
            if (dao.loaiTR(malsp) != null)
            {
                ProvinceModel province = null;
                foreach (var item in dao.loaiTR(malsp))
                {
                    province = new ProvinceModel();
                    province.ID = item.ID_LTR;
                    province.Name = item.Ten;
                    loaiTRs.Add(province);
                }
            }
            if (dao.mausac(malsp) != null)
            {
                ProvinceModel province = null;
                foreach (var item in dao.mausac(malsp))
                {
                    province = new ProvinceModel();
                    province.ID = item.ID_MS;
                    province.Name = item.Ten;
                    mausacs.Add(province);
                }
            }
            if (dao.Mua(malsp) != null)
            {
                ProvinceModel province = null;
                foreach (var item in dao.Mua(malsp))
                {
                    province = new ProvinceModel();
                    province.ID = item.ID_M;
                    province.Name = item.Ten;
                    Muas.Add(province);
                }
            }
            if (dao.phienban(malsp) != null)
            {
                ProvinceModel province = null;
                foreach (var item in dao.phienban(malsp))
                {
                    province = new ProvinceModel();
                    province.ID = item.ID_PB;
                    province.Name = item.Ten;
                    phienbans.Add(province);
                }
            }
            if (dao.phukien(malsp) != null)
            {
                ProvinceModel province = null;
                foreach (var item in dao.phukien(malsp))
                {
                    province = new ProvinceModel();
                    province.ID = item.ID_PK;
                    province.Name = item.Ten;
                    phukiens.Add(province);
                }
            }
            if (dao.pin(malsp) != null)
            {
                ProvinceModel province = null;
                foreach (var item in dao.pin(malsp))
                {
                    province = new ProvinceModel();
                    province.ID = item.ID_Pin;
                    province.Name = item.Ten;
                    pins.Add(province);
                }
            }
            if (dao.quangduong(malsp) != null)
            {
                ProvinceModel province = null;
                foreach (var item in dao.quangduong(malsp))
                {
                    province = new ProvinceModel();
                    province.ID = item.ID_QD;
                    province.Name = item.Ten;
                    quangduongs.Add(province);
                }
            }
            if (dao.ram(malsp) != null)
            {
                ProvinceModel province = null;
                foreach (var item in dao.ram(malsp))
                {
                    province = new ProvinceModel();
                    province.ID = item.ID_R;
                    province.Name = item.Ten;
                    rams.Add(province);
                }
            }
            if (dao.models(malsp) != null)
            {
                ProvinceModel province = null;
                foreach (var item in dao.models(malsp))
                {
                    province = new ProvinceModel();
                    province.ID = item.ID_Mdel;
                    province.Name = item.Ten;
                    hangs.Add(province);
                }
            }           
            return Json(new
            {
                hang = hangs,
                bonho=bonhos,
                boxuly = boxulys,
                camera = cameras,
                card = cards,
                Case = Cases,
                Chatlieu =Chatlieus,
                chongoi = chongois,
                doisanxuat = doisanxuats,
                dophangia = dophangias,
                hedieuhanh = hedieuhanhs,
                hopso = hopsos,
                kichthuoc = kichthuocs,
                kieudang = kieudangs,
                loaiTR = loaiTRs,
                mausac = mausacs,
                Mua = Muas,
                phienban = phienbans,
                phukien = phukiens,
                pin = pins,
                quangduong = quangduongs,
                ram = rams,
                models = modelss,
                status = true
            });
        }
    }
}