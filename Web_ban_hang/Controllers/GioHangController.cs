using Common;
using Model.Dao;
using Model.EF;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using Web_ban_hang.Models;

namespace Web_ban_hang.Controllers
{
    public class GioHangController : Controller
    {
        private const string CartSession = "CartSession";
        // GET: Cart
        public ActionResult Index()
        {
            var cart = Session[CartSession];
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
                        var danhsach = (List<CartItem>)Session[CartSession];
                        foreach (var item in cartserver)
                        {
                            var cartiem = new CartItem();                            
                            cartiem.sanpham = item.SanPham;
                            cartiem.Quantity = item.soluong;
                            cartiem.check = false;
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
                        Session[CartSession] = list;                       
                    }
                }
            }            
            return View(list);
        }

        public JsonResult DeleteAll()
        {
            Session[CartSession] = null;
            return Json(new
            {
                status = true
            });
        }

        public JsonResult Delete(long id)
        {
            var sessionCart = (List<CartItem>)Session[CartSession];
            sessionCart.RemoveAll(x => x.sanpham.MaSP == id);
            Session[CartSession] = sessionCart;
            return Json(new
            {
                status = true
            });
        }
        public JsonResult Update(string cartModel)
        {
            var jsonCart = new JavaScriptSerializer().Deserialize<List<CartItem>>(cartModel);
            var sessionCart = (List<CartItem>)Session[CartSession];

            foreach (var item in sessionCart)
            {
                var jsonItem = jsonCart.SingleOrDefault(x => x.sanpham.MaSP == item.sanpham.MaSP);
                if (jsonItem != null)
                {
                    item.Quantity = jsonItem.Quantity;
                }
            }
            Session[CartSession] = sessionCart;
            return Json(new
            {
                status = true
            });
        }
        public ActionResult AddItem(int productId, int quantity)
        {
            var product = new NewDao().ViewDetail(productId);
            var cart = Session[CartSession];
            if (cart != null)
            {
                var list = (List<CartItem>)cart;
                if (list.Exists(x => x.sanpham.MaSP == productId))
                {

                    foreach (var item in list)
                    {
                        if (item.sanpham.MaSP == productId)
                        {
                            item.Quantity += quantity;
                        }
                    }
                }
                else
                {
                    //tạo mới đối tượng cart item
                    var item = new CartItem();
                    item.sanpham = product;
                    item.Quantity = quantity;
                    item.check = false;
                    list.Add(item);
                }
                //Gán vào session
                Session[CartSession] = list;
            }
            else
            {
                //tạo mới đối tượng cart item
                var item = new CartItem();
                item.sanpham = product;
                item.Quantity = quantity;
                item.check = false;
                var list = new List<CartItem>();
                list.Add(item);
                //Gán vào session
                Session[CartSession] = list;
            }
            return RedirectToAction("Index");
        }
        [HttpGet]
        public ActionResult Payment()
        {
            var cart = Session[CartSession];
            var list = new List<CartItem>();
            var session = (UserLogin)Session[Web_ban_hang.Common.CommonConstants.USER_SESSION];
            ViewBag.user = new UserDao().GetById(session.UserName);
            if (cart != null)
            {
                foreach (var item in (List<CartItem>)cart)
                {
                    if (item.check)
                    {
                        var item1 = new CartItem();
                        item1.sanpham = item.sanpham;
                        item1.Quantity =item.Quantity;
                        item1.check = true;
                        list.Add(item1);
                    }
                }
                

            }
            return View(list);
        }

        [HttpPost]
        public ActionResult Payment(string shipName, string mobile, string address, string email)
        {
            var session = (UserLogin)Session[Web_ban_hang.Common.CommonConstants.USER_SESSION];
            try
            {                
                var cart = (List<CartItem>)Session[CartSession];                              
                decimal total = 0;
                foreach (var item in cart)
                {
                    if (item.check)
                    {
                        var gioHang = new GioHang();
                        gioHang.MaSP = item.sanpham.MaSP;
                        gioHang.date = DateTime.Now;
                        gioHang.Gia = item.sanpham.GiaBan;
                        gioHang.soluong = item.Quantity;
                        gioHang.UserID = session.UserID;
                        var chek = new NewDao().ViewDetail(item.sanpham.MaSP);
                        if (chek != null)
                        {
                            new GioHangDao().update(chek.MaSP);
                        }
                        else
                        {
                            new GioHangDao().insert(gioHang);
                        }
                        total += (item.sanpham.GiaBan.GetValueOrDefault(0) * item.Quantity);
                    }

                }
                string content = null;
                foreach (var item in cart)
                {
                    total += (item.sanpham.GiaBan.GetValueOrDefault(0) * item.Quantity);
                    content = content + "<tr>" +
                             "<td>" + item.sanpham.MaSP + "</td>" +
                             "<td>" + item.sanpham.TenSP + "</td>" +
                             "<td><img src='https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/MinhHieu/huong-dan-cach-tao-link-download-truc-tiep-tu-google-driver-1.png' width='100' /></td>" +
                    "<td>" + item.Quantity + "</td>" +
                             "<td>" + total + "</td>" +
                         "</tr>";
                }
                string body = "<!DOCTYPE html>" +
                            "<html>" +
                            "<head>" +
                               "<meta name='viewport' content='width = device - width' />" +
                                "<title>Thông tin đơn hàng mới từ khách hàng:" + shipName + "</title>" +
                            "</head>" +
                            "<body>" +
                                "Thông tin đơn hàng mới từ khách hàng: " + shipName + "<br />" +
                                "Điện thoại: " + mobile + " <br />" +
                                "Email: " + email + "<br />" +
                                "Địa chỉ: " + address + "<br />" +
                                "<div class='content'>" +
                                "<div class='section group'>" +
                                    "<table class='table'>" +
                                            "<thead>" +
                                                "<tr>" +
                                                    "<td>Số Thứ Tự</td>" +
                                                    "<td>Tên Sản Phẩm</td>" +
                                                    "<td>Ảnh Sản Phẩm</td>" +
                                                    "<td>Số lượng</td>" +
                                                    "<td>Thành tiền</td>" +
                                                "</tr>" +
                                            "</thead>" +
                                            "<tbody>" +
                                            content +
                                            "</tbody>" +
                                     "</table>" +

                                  "</div>" +
                                "</div>" +
                           "</body>" +
                       "</html>";
                var toEmail = ConfigurationManager.AppSettings["ToEmailAddress"].ToString();

                new MailHelper().SendMail(email, "Đơn hàng mới từ Shop Bán Đồ Củ", body);
                new MailHelper().SendMail(toEmail, "Đơn hàng mới từ Shop Bán Đồ Củ", body);
            }
            catch (Exception)
            {
                //ghi log
                return Redirect("/loi-thanh-toan");
            }
            return Redirect("/hoan-thanh");
        }

        public ActionResult Success()
        {
            return View();
        }
        public bool Check(int id)
        {
            var cart = Session[CartSession];
            var list = new List<CartItem>();
            if (cart != null)
            {
                list = (List<CartItem>)cart;
                foreach (var item in list)
                {
                    if (item.sanpham.MaSP == id)
                    {
                        item.check = true;
                    }                   
                }
                Session[CartSession] = list;
                return true;
            }
            return false;
            
        }
        public void upload()
        {
            var session = (UserLogin)Session[Web_ban_hang.Common.CommonConstants.USER_SESSION];
            var cart = (List<CartItem>)Session[CartSession];
            if (cart != null)
            {
                foreach (var item in cart)
                {                  
                        var gioHang = new GioHang();
                        gioHang.MaSP = item.sanpham.MaSP;
                        gioHang.date = DateTime.Now;
                        gioHang.Gia = item.sanpham.GiaBan;
                        gioHang.soluong = item.Quantity;
                        gioHang.UserID = session.UserID;
                        var chek = new NewDao().ViewDetail(item.sanpham.MaSP);
                        if (chek != null)
                        {
                            new GioHangDao().updategh(chek.MaSP, item.Quantity);
                        }
                        else
                        {
                            new GioHangDao().insert(gioHang);
                        }                                      
                }
            }
            
        }
    }
}