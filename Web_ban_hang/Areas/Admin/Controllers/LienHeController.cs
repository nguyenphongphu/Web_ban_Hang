using Model.Dao;
using Model.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Web_ban_hang.Areas.Admin.Controllers
{
    public class LienHeController : BaseController
    {
        // GET: Admin/LienHe
        public ActionResult Index()
        {
            ViewBag.datafb = new ContactDao().feedbacks();
            return View();
        }
        [HttpPost]
        public ActionResult Lienhe(Feedback feedback)
        {
            if (ModelState.IsValid)
            {
                var data = new ContactDao().feedbackid(feedback.FeedbackID);
                data.Noidung = feedback.Noidung;
               var check= new ContactDao().gui(data);
                if (check)
                {
                    SetAlert("gửi thành công", "success");
                    return RedirectToAction("Index", "LienHe");
                }
                else
                {
                    SetAlert("gửi không thành công", "success");
                    return RedirectToAction("Index", "LienHe");
                }
                
            }
            return View("Index") ;
        }
        private void SetAlert(string message, string type)
        {

            TempData["AlertMessage"] = message;
            if (type == "success")
            {
                TempData["AlertType"] = "alert-success";
            }
            else if (type == "warning")
            {
                TempData["AlertType"] = "alert-warning";
            }
            else if (type == "error")
            {
                TempData["AlertType"] = "alert-danger";
            }

        }
    }
}