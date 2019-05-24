using Model.Dao;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Web_ban_hang.Controllers
{
    public class ChitietSPController : Controller
    {
        // GET: ChitietSP
        public ActionResult Index(int id)
        {
            var newdao = new NewDao();
            var Ctiet = newdao.ViewDetail(id);
            ViewBag.AnhCT = newdao.ListAnh(id);
            //ViewBag.SPLQ= newdao.
            return View(Ctiet);
        }
    }
}