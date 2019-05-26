using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Web_ban_hang
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {

            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
               name: "Register",
               url: "dang-ky",
               defaults: new { controller = "User", action = "DangKy", id = UrlParameter.Optional },
               namespaces: new[] { "Web_ban_hang.Controllers" }
            );
            routes.MapRoute(
               name: "user",
               url: "user",
               defaults: new { controller = "User", action = "Index", id = UrlParameter.Optional },
               namespaces: new[] { "Web_ban_hang.Controllers" }
            );
            routes.MapRoute(
                name: "Login",
                url: "dang-nhap",
                defaults: new { controller = "User", action = "DangNhap", id = UrlParameter.Optional },
                namespaces: new[] { "Web_ban_hang.Controllers" }
            );
            
            routes.MapRoute(
                name: "san-pham",
                url: "san-pham/{metatitle}-{cateId}",
                defaults: new { controller = "SanPham", action = "Index", id = UrlParameter.Optional },
                namespaces: new[] { "Web_ban_hang.Controllers" }
            );
            routes.MapRoute(
                name: "san-pham-hang",
                url: "san-pham/{metatitle}/{hang}-{cateId}",
                defaults: new { controller = "SanPham", action = "Sanpham_hang", id = UrlParameter.Optional },
                namespaces: new[] { "Web_ban_hang.Controllers" }
            );
            routes.MapRoute(
                name: "san-phamall",
                url: "san-pham",
                defaults: new { controller = "SanPham", action = "Sanpham_ALL", id = UrlParameter.Optional },
                namespaces: new[] { "Web_ban_hang.Controllers" }
            );
            routes.MapRoute(
                name: "san-pham-hot-new",
                url: "san-pham/{metatitle}",
                defaults: new { controller = "SanPham", action = "Sanpham", id = UrlParameter.Optional },
                namespaces: new[] { "Web_ban_hang.Controllers" }
            );
            routes.MapRoute(
                name: "Lien He",
                url: "lien-he",
                defaults: new { controller = "LienHe", action = "Index", id = UrlParameter.Optional },
                namespaces: new[] { "Web_ban_hang.Controllers" }
            );

            routes.MapRoute(
                name: "Tin tuc",
                url: "tin-tuc",
                defaults: new { controller = "TinTuc", action = "Index", id = UrlParameter.Optional },
                namespaces: new[] { "Web_ban_hang.Controllers" }
            );

            routes.MapRoute(
                name: "Gioi thieu",
                url: "gioi-thieu",
                defaults: new { controller = "Gioithieu", action = "Index", id = UrlParameter.Optional },
                namespaces: new[] { "Web_ban_hang.Controllers" }
            );

            routes.MapRoute(
                name: "chi tiet san pham",
                url: "chi-tiet/{metatitle}-{id}",
                defaults: new { controller = "ChitietSP", action = "Index", id = UrlParameter.Optional },
                namespaces: new[] { "Web_ban_hang.Controllers" }
            );
            routes.MapRoute(
                name: "gio hang",
                url: "gio-hang",
                defaults: new { controller = "GioHang", action = "Index", id = UrlParameter.Optional },
                namespaces: new[] { "Web_ban_hang.Controllers" }
            );

            routes.MapRoute(
                name: "dangtin",
                url: "dang-tin",
                defaults: new { controller = "User", action = "Dangtin", id = UrlParameter.Optional },
                namespaces: new[] { "Web_ban_hang.Controllers" }
            );
                  routes.MapRoute(
                 name: "Payment",
                 url: "thanh-toan",
                 defaults: new { controller = "GioHang", action = "Payment", id = UrlParameter.Optional },
                 namespaces: new[] { "Web_ban_hang.Controllers" }
             );
                    routes.MapRoute(
                    name: "Add Cart",
                    url: "them-gio-hang",
                    defaults: new { controller = "GioHang", action = "AddItem", id = UrlParameter.Optional },
                    namespaces: new[] { "Web_ban_hang.Controllers" }
                );
                    routes.MapRoute(
                  name: "Payment Success",
                  url: "hoan-thanh",
                  defaults: new { controller = "GioHang", action = "Success", id = UrlParameter.Optional },
                  namespaces: new[] { "Web_ban_hang.Controllers" }
              );
            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional },
                namespaces: new[] { "Web_ban_hang.Controllers" }
            );            
        }
    }
}
