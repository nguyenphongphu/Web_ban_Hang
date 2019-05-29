using Model.Dao;
using Model.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Web_ban_hang.Controllers
{
    public class DangTinController : Controller
    {
        // GET: DangTin
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public ActionResult Dangtin()
        {
            var session = (UserLogin)Session[Web_ban_hang.Common.CommonConstants.USER_SESSION];
            if (session != null)
            {
                ViewBag.tinh = new KhuvucDao().ListKV();
                data(3);
                return View();
                
            }
            else
            {

                return Redirect("/dang-nhap");
            }

        }
        [HttpPost]
        public ActionResult Dangtin(DangBT dangBT)
        {
            if (ModelState.IsValid)
            {
                var session = (UserLogin)Session[Web_ban_hang.Common.CommonConstants.USER_SESSION];
                if (session != null)
                {
                    var newdao = new NewDao();
                    dangBT.UserID = session.UserID;
                    dangBT.SanPham.Date = DateTime.Now;
                    dangBT.SanPham.AnhTDe = "~/ assets / client / images /" + dangBT.SanPham.LoaiSanPham.TenLSP + "/";
                    newdao.Them(dangBT);
                }
            }

            return View("Index");
        } 
        public void data(int malsp)
        {
            var dao = new DangtinDao();
                ViewBag.IDHang = new SelectList(dao.hang(malsp), "IDHang", "TenHang","");
                ViewBag.ID_BN = new SelectList(dao.bonho(malsp), "ID_BN", "DungLuong","");
                ViewBag.ID_BXL = new SelectList(dao.boxuly(malsp), "ID_BXL", "Ten_BXL","");
                ViewBag.ID_Camera = new SelectList(dao.camera(malsp), "ID_Camera", "Ten_Camera","");
                ViewBag.ID_Card = new SelectList(dao.card(malsp), "ID_Card", "Ten","");
                ViewBag.ID_Case = new SelectList(dao.Case(malsp), "ID_Case", "Ten_Case","");
                ViewBag.ID_CL = new SelectList(dao.Chatlieu(malsp), "ID_CL", "Ten","");
                ViewBag.ID_CN = new SelectList(dao.chongoi(malsp), "ID_CN", "So","");
                ViewBag.ID_Doi= new SelectList(dao.doisanxuat(malsp), "ID_Doi", "Nam", "");
                ViewBag.ID_DPG = new SelectList(dao.dophangia(malsp), "ID_DPG", "Ten", "");
                ViewBag.ID_HDH = new SelectList(dao.hedieuhanh(malsp), "ID_HDH", "Ten_HDH", "");
                ViewBag.ID_HS = new SelectList(dao.hopso(malsp), "ID_HS", "Ten_HS", "");
                ViewBag.ID_KT = new SelectList(dao.kichthuoc(malsp), "ID_KT", "Ten", "");
                ViewBag.ID_KD = new SelectList(dao.kieudang(malsp), "ID_KD", "Ten_KD", "");
                ViewBag.ID_LTR = new SelectList(dao.loaiTR(malsp), "ID_LTR", "Ten", "");
                ViewBag.ID_MS = new SelectList(dao.mausac(malsp), "ID_MS", "Ten_MS", "");
                ViewBag.ID_M = new SelectList(dao.Mua(malsp), "ID_M", "Ten_M", "");
                ViewBag.ID_PB = new SelectList(dao.phienban(malsp), "ID_PB", "Ten_PB", "");
                ViewBag.ID_PK = new SelectList(dao.phukien(malsp), "ID_PK", "Ten", "");
                ViewBag.ID_Pin = new SelectList(dao.pin(malsp), "ID_Pin", "DungLuong", "");
                ViewBag.ID_QD = new SelectList(dao.quangduong(malsp), "ID_QD", "So", "");
                ViewBag.ID_R = new SelectList(dao.ram(malsp), "ID_R", "Ten_R", "");
                ViewBag.ID_Model = new SelectList(dao.models(malsp), "ID_Model", "Ten_Model", "");
            
        }
    }
}