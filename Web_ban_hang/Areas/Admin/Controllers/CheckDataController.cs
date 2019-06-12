using Model.Dao;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Web_ban_hang.Areas.Admin.Controllers
{
    public class CheckDataController : Controller
    {
        [HttpDelete]
        public ActionResult DeleteBoNho(int id)
        {
            var check = new CheckData().BoNho(id);
            if (check)
            {
                new DeleteData().DeleteBoNho(id);
                return RedirectToAction("BoNho");
            }
            else
            {
                return RedirectToAction("BoNho");
            }                        
        }
    }
}