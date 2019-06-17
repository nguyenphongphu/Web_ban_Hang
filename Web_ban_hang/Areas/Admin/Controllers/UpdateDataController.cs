using Model.Dao;
using Model.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Web_ban_hang.Areas.Admin.Controllers
{
    public class UpdateDataController : Controller
    {
        [HttpPost]
        public JsonResult UpdateBoNho(int id,string ten,string malsp)
        {
            var bonho = new BoNho();
            bonho.ID_BN = id;
            bonho.Ten = ten;
            bonho.MaLSP = Convert.ToInt32(malsp);
            var result = new UpdateData().BoNho(bonho);
            return Json(new
            {
                status = result
            });
        }
        [HttpPost]
        public JsonResult UpdateBoXL(int id, string ten, string malsp)
        {
            var bonho = new BoXL();
            bonho.ID_BXL = id;
            bonho.Ten = ten;
            bonho.MaLSP = Convert.ToInt32(malsp);
            var result = new UpdateData().BoXL(bonho);
            return Json(new
            {
                status = result
            });
        }
        //[HttpPost]
        //public JsonResult UpdateBoNho(int id, string ten, string malsp)
        //{
        //    var bonho = new BoNho();
        //    bonho.ID_BN = id;
        //    bonho.Ten = ten;
        //    bonho.MaLSP = Convert.ToInt32(malsp);
        //    var result = new UpdateData().BoNho(bonho);
        //    return Json(new
        //    {
        //        status = result
        //    });
        //}
        //[HttpPost]
        //public JsonResult UpdateBoNho(int id, string ten, string malsp)
        //{
        //    var bonho = new BoNho();
        //    bonho.ID_BN = id;
        //    bonho.Ten = ten;
        //    bonho.MaLSP = Convert.ToInt32(malsp);
        //    var result = new UpdateData().BoNho(bonho);
        //    return Json(new
        //    {
        //        status = result
        //    });
        //}
        //[HttpPost]
        //public JsonResult UpdateBoNho(int id, string ten, string malsp)
        //{
        //    var bonho = new BoNho();
        //    bonho.ID_BN = id;
        //    bonho.Ten = ten;
        //    bonho.MaLSP = Convert.ToInt32(malsp);
        //    var result = new UpdateData().BoNho(bonho);
        //    return Json(new
        //    {
        //        status = result
        //    });
        //}
        //[HttpPost]
        //public JsonResult UpdateBoNho(int id, string ten, string malsp)
        //{
        //    var bonho = new BoNho();
        //    bonho.ID_BN = id;
        //    bonho.Ten = ten;
        //    bonho.MaLSP = Convert.ToInt32(malsp);
        //    var result = new UpdateData().BoNho(bonho);
        //    return Json(new
        //    {
        //        status = result
        //    });
        //}
        //[HttpPost]
        //public JsonResult UpdateBoNho(int id, string ten, string malsp)
        //{
        //    var bonho = new BoNho();
        //    bonho.ID_BN = id;
        //    bonho.Ten = ten;
        //    bonho.MaLSP = Convert.ToInt32(malsp);
        //    var result = new UpdateData().BoNho(bonho);
        //    return Json(new
        //    {
        //        status = result
        //    });
        //}
        //[HttpPost]
        //public JsonResult UpdateBoNho(int id, string ten, string malsp)
        //{
        //    var bonho = new BoNho();
        //    bonho.ID_BN = id;
        //    bonho.Ten = ten;
        //    bonho.MaLSP = Convert.ToInt32(malsp);
        //    var result = new UpdateData().BoNho(bonho);
        //    return Json(new
        //    {
        //        status = result
        //    });
        //}
        //[HttpPost]
        //public JsonResult UpdateBoNho(int id, string ten, string malsp)
        //{
        //    var bonho = new BoNho();
        //    bonho.ID_BN = id;
        //    bonho.Ten = ten;
        //    bonho.MaLSP = Convert.ToInt32(malsp);
        //    var result = new UpdateData().BoNho(bonho);
        //    return Json(new
        //    {
        //        status = result
        //    });
        //}
        //[HttpPost]
        //public JsonResult UpdateBoNho(int id, string ten, string malsp)
        //{
        //    var bonho = new BoNho();
        //    bonho.ID_BN = id;
        //    bonho.Ten = ten;
        //    bonho.MaLSP = Convert.ToInt32(malsp);
        //    var result = new UpdateData().BoNho(bonho);
        //    return Json(new
        //    {
        //        status = result
        //    });
        //}
        //[HttpPost]
        //public JsonResult UpdateBoNho(int id, string ten, string malsp)
        //{
        //    var bonho = new BoNho();
        //    bonho.ID_BN = id;
        //    bonho.Ten = ten;
        //    bonho.MaLSP = Convert.ToInt32(malsp);
        //    var result = new UpdateData().BoNho(bonho);
        //    return Json(new
        //    {
        //        status = result
        //    });
        //}
        //[HttpPost]
        //public JsonResult UpdateBoNho(int id, string ten, string malsp)
        //{
        //    var bonho = new BoNho();
        //    bonho.ID_BN = id;
        //    bonho.Ten = ten;
        //    bonho.MaLSP = Convert.ToInt32(malsp);
        //    var result = new UpdateData().BoNho(bonho);
        //    return Json(new
        //    {
        //        status = result
        //    });
        //}
        //[HttpPost]
        //public JsonResult UpdateBoNho(int id, string ten, string malsp)
        //{
        //    var bonho = new BoNho();
        //    bonho.ID_BN = id;
        //    bonho.Ten = ten;
        //    bonho.MaLSP = Convert.ToInt32(malsp);
        //    var result = new UpdateData().BoNho(bonho);
        //    return Json(new
        //    {
        //        status = result
        //    });
        //}
        //[HttpPost]
        //public JsonResult UpdateBoNho(int id, string ten, string malsp)
        //{
        //    var bonho = new BoNho();
        //    bonho.ID_BN = id;
        //    bonho.Ten = ten;
        //    bonho.MaLSP = Convert.ToInt32(malsp);
        //    var result = new UpdateData().BoNho(bonho);
        //    return Json(new
        //    {
        //        status = result
        //    });
        //}
        //[HttpPost]
        //public JsonResult UpdateBoNho(int id, string ten, string malsp)
        //{
        //    var bonho = new BoNho();
        //    bonho.ID_BN = id;
        //    bonho.Ten = ten;
        //    bonho.MaLSP = Convert.ToInt32(malsp);
        //    var result = new UpdateData().BoNho(bonho);
        //    return Json(new
        //    {
        //        status = result
        //    });
        //}
        //[HttpPost]
        //public JsonResult UpdateBoNho(int id, string ten, string malsp)
        //{
        //    var bonho = new BoNho();
        //    bonho.ID_BN = id;
        //    bonho.Ten = ten;
        //    bonho.MaLSP = Convert.ToInt32(malsp);
        //    var result = new UpdateData().BoNho(bonho);
        //    return Json(new
        //    {
        //        status = result
        //    });
        //}
        //[HttpPost]
        //public JsonResult UpdateBoNho(int id, string ten, string malsp)
        //{
        //    var bonho = new BoNho();
        //    bonho.ID_BN = id;
        //    bonho.Ten = ten;
        //    bonho.MaLSP = Convert.ToInt32(malsp);
        //    var result = new UpdateData().BoNho(bonho);
        //    return Json(new
        //    {
        //        status = result
        //    });
        //}
        //[HttpPost]
        //public JsonResult UpdateBoNho(int id, string ten, string malsp)
        //{
        //    var bonho = new BoNho();
        //    bonho.ID_BN = id;
        //    bonho.Ten = ten;
        //    bonho.MaLSP = Convert.ToInt32(malsp);
        //    var result = new UpdateData().BoNho(bonho);
        //    return Json(new
        //    {
        //        status = result
        //    });
        //}
    }
}