using Model.Dao;
using Model.EF;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Xml.Linq;
using Web_ban_hang.Common;
using Web_ban_hang.Models;

namespace Web_ban_hang.Controllers
{
    public class UserController : Controller
    {
        public ActionResult Index()
        {

            return View();
        }
        [HttpGet]
        public ActionResult DangKy()
        {
            return View();
        }
        [HttpGet]
        public ActionResult DangNhap()
        {
            return View();
        }
      
        public ActionResult Logout()
        {
            Session[CommonConstants.USER_SESSION] = null;
            return Redirect("/");
        }
        [HttpPost]
        public ActionResult DangKy(RegisterModel model)
        {
            if (ModelState.IsValid)
            {
                var dao = new UserDao();
                if (dao.CheckUserName(model.UserName))
                {
                    ModelState.AddModelError("", "Tên đăng nhập đã tồn tại");
                }
                else if (dao.CheckEmail(model.Email))
                {
                    ModelState.AddModelError("", "Email đã tồn tại");
                }
                else
                {
                    var user = new Taikhoan();
                    string diachi = null;
                    user.HovaTen = model.Name;
                    user.Password = Encryptor.MD5Hash(model.Password);
                    user.Phone = model.Phone;
                    user.Email = model.Email;
                    user.Username = model.UserName;
                    user.CreatedDate = DateTime.Now;

                    user.MaCV = 3;
                    user.Status = true;
                    if (!string.IsNullOrEmpty(model.ProvinceID))
                    {
                        diachi =  ProvinceModel1(Convert.ToInt32(model.ProvinceID));
                    }
                    if (!string.IsNullOrEmpty(model.DistrictID))
                    {
                        diachi = DistrictModel1(Convert.ToInt32(model.ProvinceID),Convert.ToInt32( model.DistrictID))+" "+diachi;
                    }
                    user.DiaChi = model.Address +" "+ diachi;
                    var result = dao.Insert(user);
                    if (result > 0)
                    {
                        ViewBag.Success = "Đăng ký thành công";
                        model = new RegisterModel();
                        return Redirect("/user");
                    }
                    else
                    {
                        ModelState.AddModelError("", "Đăng ký không thành công.");
                    }
                }
            }
            return View(model);
        }
        [HttpPost]
        public ActionResult DangNhap(LoginModel model)
        {
            if (ModelState.IsValid)
            {
                var dao = new UserDao();
                var result = dao.Login(model.UserName, Encryptor.MD5Hash(model.Password));
                if (result == 1)
                {
                    var user = dao.GetById(model.UserName);
                    var userSession = new UserLogin();
                    userSession.UserName = user.Username;
                    userSession.UserID = user.UserID;
                    Session.Add(CommonConstants.USER_SESSION, userSession);
                    return Redirect("/");
                }
                else if (result == 0)
                {
                    ModelState.AddModelError("", "Tài khoản không tồn tại.");
                }
                else if (result == -1)
                {
                    ModelState.AddModelError("", "Tài khoản đang bị khoá.");
                }
                else if (result == -2)
                {
                    ModelState.AddModelError("", "Mật khẩu không đúng.");
                }
                else
                {
                    ModelState.AddModelError("", "đăng nhập không đúng.");
                }
            }
            return View(model);
        }
       
        [ChildActionOnly]
        public ActionResult MenuSP()
        {
            var model = new MenuDao().ListByGroupId(3);
            return PartialView(model);
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
        public JsonResult LoadProvince()
        {
            var xmlDoc = XDocument.Load(Server.MapPath(@"~/assets/client/data/Provinces_Data.xml"));

            var xElements = xmlDoc.Element("Root").Elements("Item").Where(x => x.Attribute("type").Value == "province");
            var list = new List<ProvinceModel>();
            ProvinceModel province = null;
            foreach (var item in xElements)
            {
                province = new ProvinceModel();
                province.ID = int.Parse(item.Attribute("id").Value);
                province.Name = item.Attribute("value").Value;
                list.Add(province);

            }
            return Json(new
            {
                data = list,
                status = true
            });
        }
        public JsonResult LoadDistrict(int provinceID)
        {
            var xmlDoc = XDocument.Load(Server.MapPath(@"~/assets/client/data/Provinces_Data.xml"));

            var xElement = xmlDoc.Element("Root").Elements("Item")
                .Single(x => x.Attribute("type").Value == "province" && int.Parse(x.Attribute("id").Value) == provinceID);

            var list = new List<DistrictModel>();
            DistrictModel district = null;
            foreach (var item in xElement.Elements("Item").Where(x => x.Attribute("type").Value == "district"))
            {
                district = new DistrictModel();
                district.ID = int.Parse(item.Attribute("id").Value);
                district.Name = item.Attribute("value").Value;
                district.ProvinceID = int.Parse(xElement.Attribute("id").Value);
                list.Add(district);

            }
            return Json(new
            {
                data = list,
                status = true
            });
        }
        public string Temp(HttpPostedFileBase file)
        {
            try
            {
                var session = (UserLogin)Session[Web_ban_hang.Common.CommonConstants.USER_SESSION];
                if (file != null)
                {
                    if (!Directory.Exists(Server.MapPath("~/Upload/Temp/") + session.UserName))
                    {
                        Directory.CreateDirectory(Server.MapPath("~/Upload/Temp/") + session.UserName);
                    }
                    int fileSize = file.ContentLength;
                    string fileName = file.FileName;
                    var date = DateTime.Now.ToString("dd-MM-yyyy");

                    file.SaveAs(Path.Combine(Server.MapPath("~/Upload/Temp/" + session.UserName + "/"), date + "-" + fileName));                   
                    Image images = new Image();
                    images.image = "/Upload/Temp/" + session.UserName + "/" + date + "-" + fileName;
                    images.ten = session.UserID;
                    var hinh = Session[CommonConstants.IMAGE_SESSION];
                    if (hinh!=null)
                    {
                        var list = (List<Image>)hinh;
                        list.Add(images);
                        Session[CommonConstants.IMAGE_SESSION] = list;
                    }
                    else
                    {
                        List < Image > image = new List<Image>();
                        image.Add(images);
                        Session.Add(CommonConstants.IMAGE_SESSION, image);
                    }                    
                    return "/Upload/Temp/" + session.UserName + "/" + date + "-" + fileName;
                }
                else
                {
                    return "loi";
                }
            }
            catch (Exception)
            {

                return "loi";
            }
        }
        public bool deletefile(string image)
        {
            try
            {
                if (image != null)
                {
                    string fullPath = Request.MapPath("~" + image);
                    if (System.IO.File.Exists(fullPath))
                    {
                        System.IO.File.Delete(fullPath);
                    }
                    return true;
                }
                else
                {
                    return false;
                }

            }
            catch (Exception)
            {

                return false;
            }
        }

        public string ProvinceModel1(int id ) {
            var xmlDoc = XDocument.Load(Server.MapPath(@"~/assets/client/data/Provinces_Data.xml"));

            var xElement = xmlDoc.Element("Root").Elements("Item")
               .Single(x => x.Attribute("type").Value == "province" && int.Parse(x.Attribute("id").Value) == id);
            return xElement.Attribute("value").Value;           
        }
        public string DistrictModel1(int id,int id1)
        {
            var xmlDoc = XDocument.Load(Server.MapPath(@"~/assets/client/data/Provinces_Data.xml"));

            var xElement = xmlDoc.Element("Root").Elements("Item")
               .Single(x => x.Attribute("type").Value == "province" && int.Parse(x.Attribute("id").Value) == id);
           var ten= xElement.Elements("Item").Single(x => x.Attribute("type").Value == "district" && int.Parse(x.Attribute("id").Value) == id1);
            
            return ten.Attribute("value").Value;
        }
    }
}