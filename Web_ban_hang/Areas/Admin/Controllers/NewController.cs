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
        public ActionResult Index()
        {
            var dao = new NewDao();
            var model = dao.ListAllPaging();           
            return View(model);
        }
        
        public ActionResult Details(int ID)
        {
            var user = new NewDao().ViewDetail(ID);
            return View(user);
        }

        public ActionResult ALLSP()
        {
            var data = new NewDao().listAll();
            return View(data);
        }

        [HttpDelete]
        public ActionResult Delete(int id)
        {
            new UserDao().Delete(id);

            return RedirectToAction("Index");
        }

    }
}