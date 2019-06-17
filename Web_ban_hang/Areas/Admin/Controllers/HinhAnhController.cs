using Model.Dao;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Web_ban_hang.Areas.Admin.Controllers
{
    public class HinhAnhController : Controller
    {
        // GET: Admin/HinhAnh
        public ActionResult Index()
        {
            var hinhanh= new DataDao().hinhAnhs();
                return View(hinhanh);
        }
    }
}