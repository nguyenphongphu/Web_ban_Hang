using Model.Dao;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Web_ban_hang.Areas.Admin.Controllers
{
    public class DataController : Controller
    {
        public ActionResult Data()
        {
            SetViewBag();
            return View();
        }
        // GET: Admin/Data
        public ActionResult BoNho()
        {
            SetViewBag();
            return View();
        }
        public ActionResult BoXL()
        {
            SetViewBag();
            return View();
        }
        public ActionResult Camera()
        {
            SetViewBag();
            return View();
        }
        public ActionResult Card()
        {
            SetViewBag();
            return View();
        }
        public ActionResult Case()
        {
            SetViewBag();
            return View();
        }
        public ActionResult Chatlieu()
        {
            SetViewBag();
            return View();
        }
        public ActionResult ChoNgoi()
        {
            SetViewBag();
            return View();
        }
        public ActionResult DoiSx()
        {
            SetViewBag();
            return View();
        }
        public ActionResult DophanGia()
        {
            SetViewBag();
            return View();
        }
        public ActionResult Hang()
        {
            SetViewBag();
            return View();
        }
        public ActionResult HedieuHanh()
        {
            SetViewBag();
            return View();
        }
        public ActionResult HopSo()
        {
            SetViewBag();
            return View();
        }
        public ActionResult KichThuoc()
        {
            SetViewBag();
            return View();
        }
        public ActionResult KieuDang()
        {
            SetViewBag();
            return View();
        }
        public ActionResult loaiTR()
        {
            SetViewBag();
            return View();
        }
        public ActionResult Mausac()
        {
            SetViewBag();
            return View();
        }
        public ActionResult Mua()
        {
            SetViewBag();
            return View();
        }
        public ActionResult PhienBan()
        {
            SetViewBag();
            return View();
        }
        public ActionResult Model()
        {
            SetViewBag();
            return View();
        }
        public ActionResult PhuKien()
        {
            SetViewBag();
            return View();
        }
        public ActionResult Pin()
        {
            SetViewBag();
            return View();
        }
        public ActionResult QuangDuong()
        {
            SetViewBag();
            return View();
        }
        public ActionResult Ram()
        {
            ViewBag.MaLSP = new SelectList(new List<SelectListItem>
            {
                new SelectListItem { Value = "1", Text = "Monday" },
                 new SelectListItem { Value = "2", Text = "Tuesday" },
                 new SelectListItem { Value = "3", Text = "Wednesday" },
                 new SelectListItem { Value = "4", Text = "Thrusday" },
                 new SelectListItem { Value = "5", Text = "Friday" },
                 new SelectListItem { Value = "6", Text = "Saturday" },
                 new SelectListItem { Value = "7", Text = "Sunday" }
            },"Value", "Text");
            return View();
        }
        public void SetViewBag()
        {
            var dao = new DataDao();
            ViewBag.MaLSP = new SelectList(new DataDao().loaiSanPhams(), "MaLSP", "TenLSP", "");
            
        }
    }
}