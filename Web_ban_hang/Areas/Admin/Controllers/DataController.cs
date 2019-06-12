using Model.Dao;
using Model.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Web_ban_hang.Areas.Admin.Controllers
{
    public class DataController : BaseController
    {
        // GET: Admin/Data
        public ActionResult LoaiSanPham()
        {
            var dao = new DataDao();
            ViewBag.LSP = dao.loaiSanPhamall();            
            return View();
        }
        public ActionResult BoNho()
        {
            var dao = new DataDao();
            ViewBag.Bonho = dao.BoNholist();           
            ViewBag.MaLSP = new SelectList(new List<SelectListItem>
            {
                new SelectListItem { Value = "1", Text = "Điện Thoại" },
                 new SelectListItem { Value = "2", Text = "Máy Tính Để Bàn" },
                 new SelectListItem { Value = "3", Text = "Laptop" },
                 new SelectListItem { Value = "10", Text = "Âm thanh" },
                 new SelectListItem { Value = "11", Text = "Khác" },
            }, "Value", "Text");
            return View();
        }
        public ActionResult BoXL()
        {
            var dao = new DataDao();
            ViewBag.boxl = dao.BoXLlist();            
            ViewBag.MaLSP = new SelectList(new List<SelectListItem>
            {
                new SelectListItem { Value = "1", Text = "Điện Thoại" },
                 new SelectListItem { Value = "2", Text = "Máy Tính Để Bàn" },
                 new SelectListItem { Value = "3", Text = "Laptop" },
                 new SelectListItem { Value = "9", Text = "Tivi" },
                 new SelectListItem { Value = "10", Text = "Âm thanh" },
                 new SelectListItem { Value = "11", Text = "Khác" },
            }, "Value", "Text");
            return View();
        }
        public ActionResult Camera()
        {
            var dao = new DataDao();
            ViewBag.camera = dao.Cameralsit();
            ViewBag.MaLSP = new SelectList(new List<SelectListItem>
            {
                new SelectListItem { Value = "1", Text = "Điện Thoại" },
                 new SelectListItem { Value = "3", Text = "Laptop" },
                 new SelectListItem { Value = "11", Text = "Khác" },
            }, "Value", "Text");
            return View();
        }
        public ActionResult Card()
        {
            var dao = new DataDao();
            ViewBag.card = dao.Cardlist();
            ViewBag.MaLSP = new SelectList(new List<SelectListItem>
            {
                new SelectListItem { Value = "1", Text = "Điện Thoại" },
                 new SelectListItem { Value = "2", Text = "Máy Tính Để Bàn" },
                 new SelectListItem { Value = "3", Text = "Laptop" },
            }, "Value", "Text");
            return View();
        }
        public ActionResult Case()
        {
            var dao = new DataDao();
            ViewBag.cases = dao.Caselist();
            ViewBag.MaLSP = new SelectList(new List<SelectListItem>
            {
                 new SelectListItem { Value = "2", Text = "Máy Tính Để Bàn" },
            }, "Value", "Text");
            return View();
        }
        public ActionResult Chatlieu()
        {
            var dao = new DataDao();
            ViewBag.chatlieu = dao.Chatlieulist();         
            ViewBag.MaLSP = new SelectList(new List<SelectListItem>
            {
                new SelectListItem { Value = "1", Text = "Điện Thoại" },
                 new SelectListItem { Value = "2", Text = "Máy Tính Để Bàn" },
                 new SelectListItem { Value = "3", Text = "Laptop" },
                 new SelectListItem { Value = "4", Text = "Xe Cộ" },
                 new SelectListItem { Value = "5", Text = "Thể Thao" },
                 new SelectListItem { Value = "6", Text = "Thời Trang" },
                 new SelectListItem { Value = "7", Text = "Đồ Nội Thất" },
                 new SelectListItem { Value = "8", Text = "Sách Báo, Nghệ Thuật" },
                 new SelectListItem { Value = "9", Text = "Tivi" },
                 new SelectListItem { Value = "10", Text = "Âm thanh" },
                 new SelectListItem { Value = "11", Text = "Khác" },
            }, "Value", "Text");
            return View();
        }
        public ActionResult ChoNgoi()
        {
            var dao = new DataDao();
            ViewBag.chongoi = dao.ChoNgoilsit();
            ViewBag.MaLSP = new SelectList(new List<SelectListItem>
            {
                 new SelectListItem { Value = "4", Text = "Xe Cộ" },
            }, "Value", "Text");
            return View();
        }
        public ActionResult DoiSx()
        {
            var dao = new DataDao();
            ViewBag.doisx = dao.DoiSXlist();
            ViewBag.MaLSP = new SelectList(new List<SelectListItem>
            {
                new SelectListItem { Value = "1", Text = "Điện Thoại" },
                 new SelectListItem { Value = "2", Text = "Máy Tính Để Bàn" },
                 new SelectListItem { Value = "3", Text = "Laptop" },
                 new SelectListItem { Value = "4", Text = "Xe Cộ" },
                 new SelectListItem { Value = "5", Text = "Thể Thao" },
                 new SelectListItem { Value = "6", Text = "Thời Trang" },
                 new SelectListItem { Value = "7", Text = "Đồ Nội Thất" },
                 new SelectListItem { Value = "8", Text = "Sách Báo, Nghệ Thuật" },
                 new SelectListItem { Value = "9", Text = "Tivi" },
                 new SelectListItem { Value = "10", Text = "Âm thanh" },
                 new SelectListItem { Value = "11", Text = "Khác" },
            }, "Value", "Text");
            return View();
        }
        public ActionResult DophanGia()
        {
            var dao = new DataDao();          
            ViewBag.dophangia = dao.Dophangialist();          
            ViewBag.MaLSP = new SelectList(new List<SelectListItem>
            {
                new SelectListItem { Value = "1", Text = "Điện Thoại" },
                 new SelectListItem { Value = "2", Text = "Máy Tính Để Bàn" },
                 new SelectListItem { Value = "3", Text = "Laptop" },
                 new SelectListItem { Value = "9", Text = "Tivi" },
                 new SelectListItem { Value = "11", Text = "Khác" },
            }, "Value", "Text");
            return View();
        }
        public ActionResult Hang()
        {
            var dao = new DataDao();
            ViewBag.hang = dao.Hanglsit();           
            ViewBag.MaLSP = new SelectList(new List<SelectListItem>
            {
                new SelectListItem { Value = "1", Text = "Điện Thoại" },
                 new SelectListItem { Value = "2", Text = "Máy Tính Để Bàn" },
                 new SelectListItem { Value = "3", Text = "Laptop" },
                 new SelectListItem { Value = "4", Text = "Xe Cộ" },
                 new SelectListItem { Value = "5", Text = "Thể Thao" },
                 new SelectListItem { Value = "6", Text = "Thời Trang" },
                 new SelectListItem { Value = "7", Text = "Đồ Nội Thất" },
                 new SelectListItem { Value = "8", Text = "Sách Báo, Nghệ Thuật" },
                 new SelectListItem { Value = "9", Text = "Tivi" },
                 new SelectListItem { Value = "10", Text = "Âm thanh" },
                 new SelectListItem { Value = "11", Text = "Khác" },
            }, "Value", "Text");
            return View();
        }
        public ActionResult HedieuHanh()
        {
            var dao = new DataDao();
            ViewBag.hedieuhanh = dao.Hedieuhanhlist();          
            ViewBag.MaLSP = new SelectList(new List<SelectListItem>
            {
                new SelectListItem { Value = "1", Text = "Điện Thoại" },
                 new SelectListItem { Value = "2", Text = "Máy Tính Để Bàn" },
                 new SelectListItem { Value = "3", Text = "Laptop" },
                 new SelectListItem { Value = "11", Text = "Khác" },
            }, "Value", "Text");
            return View();
        }
        public ActionResult HopSo()
        {
            var dao = new DataDao();      
            ViewBag.hopso = dao.Hopsolsit();           
            ViewBag.MaLSP = new SelectList(new List<SelectListItem>
            {
                 new SelectListItem { Value = "4", Text = "Xe Cộ" },
            }, "Value", "Text");
            return View();
        }
        public ActionResult KichThuoc()
        {
            var dao = new DataDao();          
            ViewBag.kichthuoc = dao.KichThuoclist();           
            ViewBag.MaLSP = new SelectList(new List<SelectListItem>
            {
                new SelectListItem { Value = "1", Text = "Điện Thoại" },
                 new SelectListItem { Value = "2", Text = "Máy Tính Để Bàn" },
                 new SelectListItem { Value = "3", Text = "Laptop" },
                 new SelectListItem { Value = "4", Text = "Xe Cộ" },
                 new SelectListItem { Value = "5", Text = "Thể Thao" },
                 new SelectListItem { Value = "6", Text = "Thời Trang" },
                 new SelectListItem { Value = "7", Text = "Đồ Nội Thất" },
                 new SelectListItem { Value = "8", Text = "Sách Báo, Nghệ Thuật" },
                 new SelectListItem { Value = "9", Text = "Tivi" },
                 new SelectListItem { Value = "10", Text = "Âm thanh" },
                 new SelectListItem { Value = "11", Text = "Khác" },
            }, "Value", "Text");
            return View();
        }
        public ActionResult KieuDang()
        {
            var dao = new DataDao();         
            ViewBag.kieudang = dao.KieuDanglist();           
            ViewBag.MaLSP = new SelectList(new List<SelectListItem>
            {
                new SelectListItem { Value = "1", Text = "Điện Thoại" },
                 new SelectListItem { Value = "2", Text = "Máy Tính Để Bàn" },
                 new SelectListItem { Value = "3", Text = "Laptop" },
                 new SelectListItem { Value = "4", Text = "Xe Cộ" },
                 new SelectListItem { Value = "5", Text = "Thể Thao" },
                 new SelectListItem { Value = "6", Text = "Thời Trang" },
                 new SelectListItem { Value = "7", Text = "Đồ Nội Thất" },
                 new SelectListItem { Value = "8", Text = "Sách Báo, Nghệ Thuật" },
                 new SelectListItem { Value = "9", Text = "Tivi" },
                 new SelectListItem { Value = "10", Text = "Âm thanh" },
                 new SelectListItem { Value = "11", Text = "Khác" },
            }, "Value", "Text");
            return View();
        }
        public ActionResult loaiTR()
        {
            var dao = new DataDao();
            ViewBag.loaiTR = dao.LoaiTRlist();           
            ViewBag.MaLSP = new SelectList(new List<SelectListItem>
            {
                 new SelectListItem { Value = "5", Text = "Thể Thao" },
                 new SelectListItem { Value = "6", Text = "Thời Trang" },
            }, "Value", "Text");
            return View();
        }
        public ActionResult Mausac()
        {
            var dao = new DataDao();
            ViewBag.Mausac = dao.MauSaclist();          
            ViewBag.MaLSP = new SelectList(new List<SelectListItem>
            {
                new SelectListItem { Value = "1", Text = "Điện Thoại" },
                 new SelectListItem { Value = "2", Text = "Máy Tính Để Bàn" },
                 new SelectListItem { Value = "3", Text = "Laptop" },
                 new SelectListItem { Value = "4", Text = "Xe Cộ" },
                 new SelectListItem { Value = "5", Text = "Thể Thao" },
                 new SelectListItem { Value = "6", Text = "Thời Trang" },
                 new SelectListItem { Value = "7", Text = "Đồ Nội Thất" },
                 new SelectListItem { Value = "8", Text = "Sách Báo, Nghệ Thuật" },
                 new SelectListItem { Value = "9", Text = "Tivi" },
                 new SelectListItem { Value = "10", Text = "Âm thanh" },
                 new SelectListItem { Value = "11", Text = "Khác" },
            }, "Value", "Text");
            return View();
        }
        public ActionResult Mua()
        {
            var dao = new DataDao();
            ViewBag.mua = dao.Mualist();
            ViewBag.MaLSP = new SelectList(new List<SelectListItem>
            {
                 new SelectListItem { Value = "5", Text = "Thể Thao" },
                 new SelectListItem { Value = "6", Text = "Thời Trang" },
            }, "Value", "Text");
            return View();
        }
        public ActionResult PhienBan()
        {
            var dao = new DataDao();
            ViewBag.phienban = dao.Phienbanlist();
            ViewBag.MaLSP = new SelectList(new List<SelectListItem>
            {
                new SelectListItem { Value = "1", Text = "Điện Thoại" },
new SelectListItem { Value = "2", Text = "Máy Tính Để Bàn" },
                 new SelectListItem { Value = "3", Text = "Laptop" },
                 new SelectListItem { Value = "4", Text = "Xe Cộ" },
                 new SelectListItem { Value = "5", Text = "Thể Thao" },
                 new SelectListItem { Value = "6", Text = "Thời Trang" },
                 new SelectListItem { Value = "7", Text = "Đồ Nội Thất" },
                 new SelectListItem { Value = "8", Text = "Sách Báo, Nghệ Thuật" },
                 new SelectListItem { Value = "9", Text = "Tivi" },
                 new SelectListItem { Value = "10", Text = "Âm thanh" },
                 new SelectListItem { Value = "11", Text = "Khác" },
            }, "Value", "Text");
            return View();
        }
        public ActionResult Model()
        {
            var dao = new DataDao();
            ViewBag.modeles = dao.Modelslist();                    
            return View();
        }
        public ActionResult PhuKien()
        {
            var dao = new DataDao();
            ViewBag.phukien = dao.Phukienlist();
            ViewBag.MaLSP = new SelectList(new List<SelectListItem>
            {
                new SelectListItem { Value = "1", Text = "Điện Thoại" },
                 new SelectListItem { Value = "2", Text = "Máy Tính Để Bàn" },
                 new SelectListItem { Value = "3", Text = "Laptop" },
                 new SelectListItem { Value = "4", Text = "Xe Cộ" },
                 new SelectListItem { Value = "5", Text = "Thể Thao" },
                 new SelectListItem { Value = "10", Text = "Âm thanh" },
            }, "Value", "Text");
            return View();
        }
        public ActionResult Pin()
        {
            var dao = new DataDao();
            ViewBag.pin = dao.Pinlist();
            ViewBag.MaLSP = new SelectList(new List<SelectListItem>
            {
                new SelectListItem { Value = "1", Text = "Điện Thoại" },
                 new SelectListItem { Value = "3", Text = "Laptop" },
            }, "Value", "Text");
            return View();
        }
        public ActionResult QuangDuong()
        {
            var dao = new DataDao();
            ViewBag.quangduong = dao.QuangDuonglist();
            ViewBag.MaLSP = new SelectList(new List<SelectListItem>
            {
                new SelectListItem { Value = "4", Text = "Xe Cộ" },
            }, "Value", "Text");
            return View();
        }
        public ActionResult Ram()
        {
            var dao = new DataDao();
            ViewBag.Ram = dao.Ramlist();
            ViewBag.MaLSP = new SelectList(new List<SelectListItem>
            {
                new SelectListItem { Value = "1", Text = "Điện Thoại" },
                 new SelectListItem { Value = "2", Text = "Máy Tính Để Bàn" },
                 new SelectListItem { Value = "3", Text = "Laptop" },
            }, "Value", "Text");
            return View();
        }
        [HttpPost]
        public ActionResult BoNho(BoNho boNho)
        {
            if (ModelState.IsValid)
            {
                bool check = new DataDao().BoNho(boNho);
                if (check)
                {
                    SetAlert("thêm thành công", "success");
                    return RedirectToAction("BoNho", "Data");
                }
                else
                {
                    ModelState.AddModelError("", "Thêm không thành công");
                }
            }
            return View("BoNho");
        }
        [HttpPost]
        public ActionResult BoXL(BoXL boXL)
        {
            if (ModelState.IsValid)
            {
                bool check = new DataDao().BoXL(boXL);
                if (check)
                {
                    SetAlert("thêm thành công", "success");
                    return RedirectToAction("BoXL", "Data");
                }
                else
                {
                    ModelState.AddModelError("", "Thêm không thành công");
                }
            }
            return View("BoXL");
        }
        [HttpPost]
        public ActionResult Camera(Camera camera)
        {
            if (ModelState.IsValid)
            {
                bool check = new DataDao().Camera(camera);
                if (check)
                {
                    SetAlert("thêm thành công", "success");
                    return RedirectToAction("Camera", "Data");
                }
                else
                {
                    ModelState.AddModelError("", "Thêm không thành công");
                }
            }
            return View("Camera");
        }
        [HttpPost]
        public ActionResult Card(Card card)
        {
            if (ModelState.IsValid)
            {
                bool check = new DataDao().Card(card);
                if (check)
                {
                    SetAlert("thêm thành công", "success");
                    return RedirectToAction("Card", "Data");
                }
                else
                {
                    ModelState.AddModelError("", "Thêm không thành công");
                }
            }
            return View("Card");
        }
        [HttpPost]
        public ActionResult Case(Case cases)
        {
            if (ModelState.IsValid)
            {
                bool check = new DataDao().Case(cases);
                if (check)
                {
                    SetAlert("thêm thành công", "success");
                    return RedirectToAction("Case", "Data");
                }
                else
                {
                    ModelState.AddModelError("", "Thêm không thành công");
                }
            }
            return View("Case");
        }
        [HttpPost]
        public ActionResult Chatlieu( ChatLieu chatLieu)
        {
            if (ModelState.IsValid)
            {
                bool check = new DataDao().Chatlieu(chatLieu);
                if (check)
                {
                    SetAlert("thêm thành công", "success");
                    return RedirectToAction("Chatlieu", "Data");
                }
                else
                {
                    ModelState.AddModelError("", "Thêm không thành công");
                }
            }
            return View("Chatlieu");
        }
        [HttpPost]
        public ActionResult ChoNgoi(ChoNgoi choNgoi)
        {
            if (ModelState.IsValid)
            {
                bool check = new DataDao().ChoNgoi(choNgoi);
                if (check)
                {
                    SetAlert("thêm thành công", "success");
                    return RedirectToAction("ChoNgoi", "Data");
                }
                else
                {
                    ModelState.AddModelError("", "Thêm không thành công");
                }
            }
            return View("ChoNgoi");
        }
        [HttpPost]
        public ActionResult DoiSx(DoiSX doiSX)
        {
            if (ModelState.IsValid)
            {
                bool check = new DataDao().DoiSX(doiSX);
                if (check)
                {
                    SetAlert("thêm thành công", "success");
                    return RedirectToAction("DoiSx", "Data");
                }
                else
                {
                    ModelState.AddModelError("", "Thêm không thành công");
                }
            }
            return View("DoiSx");
        }
        [HttpPost]
        public ActionResult DophanGia(DoPhangia doPhangia)
        {
            if (ModelState.IsValid)
            {
                bool check = new DataDao().Dophangia(doPhangia);
                if (check)
                {
                    SetAlert("thêm thành công", "success");
                    return RedirectToAction("DophanGia", "Data");
                }
                else
                {
                    ModelState.AddModelError("", "Thêm không thành công");
                }
            }
            return View("DophanGia");
        }
        [HttpPost]
        public ActionResult Hang(Hang hang)
        {
            if (ModelState.IsValid)
            {
                bool check = new DataDao().Hang(hang);
                if (check)
                {
                    SetAlert("thêm thành công", "success");
                    return RedirectToAction("Hang", "Data");
                }
                else
                {
                    ModelState.AddModelError("", "Thêm không thành công");
                }
            }
            return View("Hang");
        }
        [HttpPost]
        public ActionResult HedieuHanh(HeDieuHanh heDieuHanh)
        {
            if (ModelState.IsValid)
            {
                bool check = new DataDao().Hedieuhanh(heDieuHanh);
                if (check)
                {
                    SetAlert("thêm thành công", "success");
                    return RedirectToAction("HedieuHanh", "Data");
                }
                else
                {
                    ModelState.AddModelError("", "Thêm không thành công");
                }
            }
            return View("HedieuHanh");
        }
        [HttpPost]
        public ActionResult HopSo(HopSo hopSo)
        {
            if (ModelState.IsValid)
            {
                bool check = new DataDao().Hopso(hopSo);
                if (check)
                {
                    SetAlert("thêm thành công", "success");
                    return RedirectToAction("HopSo", "Data");
                }
                else
                {
                    ModelState.AddModelError("", "Thêm không thành công");
                }
            }
            return View("HopSo");
        }
        [HttpPost]
        public ActionResult KichThuoc(KichThuoc kichThuoc)
        {
            if (ModelState.IsValid)
            {
                bool check = new DataDao().KichThuoc(kichThuoc);
                if (check)
                {
                    SetAlert("thêm thành công", "success");
                    return RedirectToAction("KichThuoc", "Data");
                }
                else
                {
                    ModelState.AddModelError("", "Thêm không thành công");
                }
            }
            return View("KichThuoc");
        }
        [HttpPost]
        public ActionResult KieuDang(KieuDang kieuDang)
        {
            if (ModelState.IsValid)
            {
                bool check = new DataDao().KieuDang(kieuDang);
                if (check)
                {
                    SetAlert("thêm thành công", "success");
                    return RedirectToAction("KieuDang", "Data");
                }
                else
                {
                    ModelState.AddModelError("", "Thêm không thành công");
                }
            }
            return View("KieuDang");
        }
        [HttpPost]
        public ActionResult loaiTR(LoaiTR loaiTR)
        {
            if (ModelState.IsValid)
            {
                bool check = new DataDao().LoaiTR(loaiTR);
                if (check)
                {
                    SetAlert("thêm thành công", "success");
                    return RedirectToAction("loaiTR", "Data");
                }
                else
                {
                    ModelState.AddModelError("", "Thêm không thành công");
                }
            }
            return View("LoaiTR");
        }
        [HttpPost]
        public ActionResult Mausac(MauSac mauSac)
        {
            if (ModelState.IsValid)
            {
                bool check = new DataDao().MauSac(mauSac);
                if (check)
                {
                    SetAlert("thêm thành công", "success");
                    return RedirectToAction("Mausac", "Data");
                }
                else
                {
                    ModelState.AddModelError("", "Thêm không thành công");
                }
            }
            return View("Mausac");
        }
        [HttpPost]
        public ActionResult Mua(Mua mua)
        {
            if (ModelState.IsValid)
            {
                bool check = new DataDao().Mua(mua);
                if (check)
                {
                    SetAlert("thêm thành công", "success");
                    return RedirectToAction("Mua", "Data");
                }
                else
                {
                    ModelState.AddModelError("", "Thêm không thành công");
                }
            }
            return View("Mua");
        }
        [HttpPost]
        public ActionResult PhienBan(PhienBan phienBan)
        {
            if (ModelState.IsValid)
            {
                bool check = new DataDao().Phienban(phienBan);
                if (check)
                {
                    SetAlert("thêm thành công", "success");
                    return RedirectToAction("PhienBan", "Data");
                }
                else
                {
                    ModelState.AddModelError("", "Thêm không thành công");
                }
            }
            return View("PhienBan");
        }
        [HttpPost]
        public ActionResult Model(Admin.Models.ModelData model)
        {
            if (ModelState.IsValid)
            {
                var data = new Model.EF.Model();
                data.Ten = model.Ten;
                data.IDHang = model.IDHang;
                bool check = new DataDao().Models(data);
                if (check)
                {
                    SetAlert("thêm thành công", "success");
                    return RedirectToAction("Model", "Data");
                }
                else
                {
                    ModelState.AddModelError("", "Thêm không thành công");
                }
            }
            return View("Model");
        }
        [HttpPost]
        public ActionResult PhuKien(PhuKien phuKien)
        {
            if (ModelState.IsValid)
            {
                bool check = new DataDao().Phukien(phuKien);
                if (check)
                {
                    SetAlert("thêm thành công", "success");
                    return RedirectToAction("PhuKien", "Data");
                }
                else
                {
                    ModelState.AddModelError("", "Thêm không thành công");
                }
            }
            return View("PhuKien");
        }
        [HttpPost]
        public ActionResult Pin(Pin pin)
        {
            if (ModelState.IsValid)
            {
                bool check = new DataDao().Pin(pin);
                if (check)
                {
                    SetAlert("thêm thành công", "success");
                    return RedirectToAction("Pin", "Data");
                }
                else
                {
                    ModelState.AddModelError("", "Thêm không thành công");
                }
            }
            return View("Pin");
        }
        [HttpPost]
        public ActionResult QuangDuong(Quangduong quangduong)
        {
            if (ModelState.IsValid)
            {
                bool check = new DataDao().QuangDuong(quangduong);
                if (check)
                {
                    SetAlert("thêm thành công", "success");
                    return RedirectToAction("QuangDuong", "Data");
                }
                else
                {
                    ModelState.AddModelError("", "Thêm không thành công");
                }
            }
            return View("QuangDuong");
        }
        [HttpPost]
        public ActionResult Ram(Ram ram)
        {
            if (ModelState.IsValid)
            {
                bool check = new DataDao().Ram(ram);
                if (check)
                {
                    SetAlert("thêm thành công", "success");
                    return RedirectToAction("Ram", "Data");
                }
                else
                {
                    ModelState.AddModelError("", "Thêm không thành công");
                }
            }
            return View("Ram");
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
        public JsonResult LoadLSP()
        {
            var LSP = new DataDao().loaiSanPhamall();
            var danhsach = new List<Models.LoaiSanPham>();
            Models.LoaiSanPham loaiSanPham = null;
            foreach (var item in LSP)
            {
                loaiSanPham = new Models.LoaiSanPham();
                loaiSanPham.MaLSP = item.MaLSP;
                loaiSanPham.Ten = item.TenLSP;
                danhsach.Add(loaiSanPham);
            }
            return Json(new
            {
                data = danhsach,
                status = true
            });
        }
        public JsonResult LoadHang(int MaLSP)
        {
            var Hang = new DataDao().HangLSP(MaLSP);
            var danhsach = new List<Models.Hang>();
            Models.Hang hang = null;
            foreach (var item in Hang)
            {
                hang = new Models.Hang();
                hang.IDHang = item.IDHang;
                hang.Ten = item.Ten;
                danhsach.Add(hang);
            }
            return Json(new
            {
                data = danhsach,
                status = true
            });
        }
        [HttpPost]
        public ActionResult LoaiSanPham(LoaiSanPham loaiSanPham )
        {
            if (ModelState.IsValid)
            {
                bool check = new DataDao().LoaiSanPham(loaiSanPham);
                if (check)
                {
                    SetAlert("thêm thành công", "success");
                    return RedirectToAction("LoaiSanPham", "Data");
                }
                else
                {
                    ModelState.AddModelError("", "Thêm không thành công");
                }
            }
            return View("LoaiSanPham");
        }
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