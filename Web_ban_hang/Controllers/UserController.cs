using Model.Dao;
using Model.EF;
using System;
using System.Collections.Generic;
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
        [HttpGet]
        public ActionResult Dangtin()
        {
            var session = (UserLogin)Session[Web_ban_hang.Common.CommonConstants.USER_SESSION];
            if (session != null)
            {
                ViewBag.tinh = new KhuvucDao().ListKV();
                return View();
            }
            else
            {

                return Redirect("/dang-nhap");
            }

        }
        public ActionResult Logout()
        {
            Session[CommonConstants.USER_SESSION] = null;
            return Redirect("/");
        }
        public ActionResult GioHang()
        {
            return View();
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
                    //user.ChucVu.MaCV = CV[2].MaCV;
                    user.Status = true;
                    if (!string.IsNullOrEmpty(model.ProvinceID))
                    {
                        diachi = diachi + model.ProvinceID;
                    }
                    if (!string.IsNullOrEmpty(model.DistrictID))
                    {
                        diachi = diachi + model.DistrictID;
                    }
                    user.DiaChi = model.Address + diachi;
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
        [HttpPost]
        public ActionResult Dangtin(DangBT dangBT)
        {
            return View("Index");
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
        public JsonResult Upload()
        {
            var date = DateTime.Now.ToString("dd-MM-yyyy");
            for (int i = 0; i < Request.Files.Count; i++)
            {
                HttpPostedFileBase file = Request.Files[i]; //Uploaded file
                                                            //Use the following properties to get file's name, size and MIMEType
                int fileSize = file.ContentLength;
                string fileName = file.FileName;
                string mimeType = file.ContentType;
                System.IO.Stream fileContent = file.InputStream;
                //To save file, use SaveAs method

                file.SaveAs(Server.MapPath("~/assets/client/images/img/") + date + "-" + fileName); //File will be saved in application root
            }
            return Json("/assets/client/images/img/" + date + "-" + Request.Files[0].FileName);
        }
        public string Temp(HttpPostedFileBase file)
        {
            try
            {
                if (file != null)
                {

                    int fileSize = file.ContentLength;
                    string fileName = file.FileName;
                    string mimeType = file.ContentType;
                    System.IO.Stream fileContent = file.InputStream;
                    var date = DateTime.Now.ToString("dd-MM-yyyy");
                    file.SaveAs(Server.MapPath("~/assets/client/images/img/" ) + date + "-" + fileName);

                    return "/assets/client/images/img/" + date + "-" + fileName;
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
    }
}