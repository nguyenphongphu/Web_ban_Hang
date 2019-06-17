using Common;
using Model.Dao;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Web_ban_hang.Areas.Admin.Controllers
{
    public class DonHController : BaseController
    {
        // GET: Admin/DonH
        public ActionResult Index()
        {
            var data = new DonHangDao().donHang_TH();
            return View();
        }
        public ActionResult ChoTH()
        {
            var data = new DonHangDao().donHang_CTH();
            return View();
        }
        [HttpDelete]
        public ActionResult Delete(int id)
        {
            new Model.Dao.DonHangDao().Delete(id);
            return RedirectToAction("Inhex");
        }
        
    }
}