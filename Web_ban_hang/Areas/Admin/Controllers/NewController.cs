using Model.Dao;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Web_ban_hang.Areas.Admin.Controllers
{
    public class NewController : BaseController
    {
        // GET: Admin/New
        [HttpGet]
        public ActionResult Index(string searchString, int page = 1, int pageSize = 1)
        {
            var dao = new NewDao();
            var model = dao.ListAllPaging(searchString, page, pageSize);

            ViewBag.SearchString = searchString;

            return View(model);
        }
        
        public ActionResult Details(int ID)
        {
            var user = new NewDao().ViewDetail(ID);
            return View(user);
        }

        public ActionResult UploatSP()
        {
            return View();
        }

        [HttpDelete]
        public ActionResult Delete(int id)
        {
            new UserDao().Delete(id);

            return RedirectToAction("Index");
        }

    }
}