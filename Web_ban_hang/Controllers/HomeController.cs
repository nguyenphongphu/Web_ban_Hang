using Model.Dao;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Web_ban_hang.Common;
using Web_ban_hang.Models;

namespace Web_ban_hang.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Silde = new SlidesDao().ListALL();
            ViewBag.SPnew = new NewDao().ListNew();
            ViewBag.Hot = new NewDao().ListHot();
            return View();
        }

        [ChildActionOnly]
        public ActionResult MainMenu()
        {
            var model = new MenuDao().ListByGroupId(2);
            return PartialView(model);
        }
        [ChildActionOnly]
        public ActionResult TopMenu()
        {
            var model = new MenuDao().ListByGroupId(1);
            return PartialView(model);
        }
        [ChildActionOnly]
        public ActionResult MenuSanPham()
        {
            var model = new MenuDao().ListByGroupId(3);
            return PartialView(model);
        }
        [ChildActionOnly]
        public PartialViewResult Cart()
        {
            var cart = Session[CommonConstants.CartSession];
            var list = new List<CartItem>();
            if (cart != null)
            {
                list = (List<CartItem>)cart;
            }

            return PartialView(list);
        }
        [ChildActionOnly]
        public ActionResult Footer()
        {
            //var model = new FooterDao().GetFooter();
            return PartialView();
        }
    }
}