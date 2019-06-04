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
        [OutputCache(Duration = 3600 * 24)]
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
        [OutputCache(Duration = 3600 * 24)]
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
            var user = (UserLogin)Session[Web_ban_hang.Common.CommonConstants.USER_SESSION];           
            if (cart != null)
            {
                list = (List<CartItem>)cart;                
            }
            else
            {
                if (user != null)
                {
                    var cartserver = new GioHangDao().Listall(user.UserName);
                    if (cartserver.Count > 0)
                    {
                        var danhsach = (List<CartItem>)Session[CommonConstants.CartSession];
                        foreach (var item in cartserver)
                        {
                            var cartiem = new CartItem();
                            cartiem.sanpham = item.SanPham;
                            cartiem.Quantity = item.soluong;
                            if (danhsach!=null)
                            {
                                foreach (var item1 in danhsach)
                                {
                                    if (item1.sanpham.MaSP != item.MaSP)
                                    {
                                        list.Add(cartiem);
                                    }
                                }
                            }
                            else
                            {
                                list.Add(cartiem);
                            }
                        }
                        Session[CommonConstants.CartSession] = list;
                    }
                }
            }

            return PartialView(list);
        }
        [ChildActionOnly]
        [OutputCache(Duration = 3600 * 24)]
        public ActionResult Footer()
        {
            //var model = new FooterDao().GetFooter();
            return PartialView();
        }
        public ActionResult timkiem(string keyword, int page = 1, int pageSize = 1)
        {
            int totalRecord = 0;
            var model = new NewDao().Search(keyword, ref totalRecord, page, pageSize);

            ViewBag.Total = totalRecord;
            ViewBag.Page = page;
            ViewBag.Keyword = keyword;
            int maxPage = 5;
            int totalPage = 0;

            totalPage = (int)Math.Ceiling((double)(totalRecord / pageSize));
            ViewBag.TotalPage = totalPage;
            ViewBag.MaxPage = maxPage;
            ViewBag.First = 1;
            ViewBag.Last = totalPage;
            ViewBag.Next = page + 1;
            ViewBag.Prev = page - 1;

            return View(model);
        }
        public JsonResult ListName(string q)
        {
            var data = new NewDao().ListName(q);
            return Json(new
            {
                data = data,
                status = true
            }, JsonRequestBehavior.AllowGet);
        }
    }
}