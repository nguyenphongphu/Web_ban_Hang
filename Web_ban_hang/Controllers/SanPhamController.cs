using Model.Dao;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Web_ban_hang.Controllers
{
    public class SanPhamController : Controller
    {
        // GET: SanPham
        public ActionResult Index(int cateId, int page = 1, int pageSize = 9)
        {
            var newdao = new NewDao();
            var menu = new MenuDao();

            ViewBag.header = menu.header(cateId);
            int totalRecord3 = 0;
            var ListALL = newdao.sanP_sp(cateId, ref totalRecord3, page, pageSize);

            ViewBag.Total = totalRecord3;
            ViewBag.Page = page;

            int maxPage = 5;
            int totalPage = 0;

            totalPage = (int)Math.Ceiling((double)(totalRecord3/ pageSize));
            ViewBag.TotalPage = totalPage;
            ViewBag.MaxPage = maxPage;
            ViewBag.First = 1;
            ViewBag.Last = totalPage;
            ViewBag.Next = page + 1;
            ViewBag.Prev = page - 1;
            return View(ListALL);
        }
        public ActionResult Sanpham_hang(string metatitle, string hang, int page = 1, int pageSize = 9)
        {
            var newdao = new NewDao();
            var menu = new MenuDao();
            ViewBag.header = menu.header_hang(metatitle, hang);
            int totalRecord_hang = 0;
            var ListALL = newdao.sanPH_sp_hang(metatitle, hang, ref totalRecord_hang, page, pageSize);

            ViewBag.Total = totalRecord_hang;
            ViewBag.Page = page;

            int maxPage = 5;
            int totalPage = 0;

            totalPage = (int)Math.Ceiling((double)(totalRecord_hang / pageSize));
            ViewBag.TotalPage = totalPage;
            ViewBag.MaxPage = maxPage;
            ViewBag.First = 1;
            ViewBag.Last = totalPage;
            ViewBag.Next = page + 1;
            ViewBag.Prev = page - 1;
            return View(ListALL);
        }
        public ActionResult Sanpham_ALL( int page = 1, int pageSize = 9)
        {
            var newdao = new NewDao();            
            int totalRecord_hang = 0;
            var ListALL = newdao.sanPH_sp_hang(null, null, ref totalRecord_hang, page, pageSize);

            ViewBag.Total = totalRecord_hang;
            ViewBag.Page = page;

            int maxPage = 5;
            int totalPage = 0;

            totalPage = (int)Math.Ceiling((double)(totalRecord_hang / pageSize));
            ViewBag.TotalPage = totalPage;
            ViewBag.MaxPage = maxPage;
            ViewBag.First = 1;
            ViewBag.Last = totalPage;
            ViewBag.Next = page + 1;
            ViewBag.Prev = page - 1;
            return View(ListALL);
        }
        public ActionResult SanphamHot_New( string metatitle, int page = 1, int pageSize = 10)
        {
                var newdao = new NewDao();
                ViewBag.header = metatitle;
                int totalRecord = 0;
                var ListALL = newdao.sanPhamHot(metatitle, ref totalRecord, page, pageSize);

                ViewBag.Total = totalRecord;
                ViewBag.Page = page;

                int maxPage = 5;
                int totalPage = 0;

                totalPage = (int)Math.Ceiling((double)(totalRecord / pageSize));
                ViewBag.TotalPage = totalPage;
                ViewBag.MaxPage = maxPage;
                ViewBag.First = 1;
                ViewBag.Last = totalPage;
                ViewBag.Next = page + 1;
                ViewBag.Prev = page - 1;
                return View(ListALL);                  
        }
    }
}