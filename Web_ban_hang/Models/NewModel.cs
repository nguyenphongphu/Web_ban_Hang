using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Web_ban_hang.Models
{
    public class NewModel
    {
        [Key]
        public int ID { get; set; }

        [StringLength(100)]
        [Display(Name = "Tên tiêu đề:")]
        [Required(ErrorMessage = "Yêu cầu nhập tên tiêu đề")]
        public string TieuDe { get; set; }

        [Display(Name = "Mô Tả sản phẩm:")]
        [Required(ErrorMessage = "Yêu cầu nhập mô tả sản phẩm")]
        public string Mota { get; set; }

        [Display(Name = "Giá:")]
        [Required(ErrorMessage = "Bạn chưa nhập giá")]
        public decimal GiaBan { get; set; }

        [Display(Name = "Loại sản phẩm:")]
        [Required(ErrorMessage = "Yêu cầu chọn loại sản phẩm")]
        public int MaLSP { get; set; }

        [Required(ErrorMessage = "Yêu cầu chọn khu vục")]
        public int MaKV { get; set; }

        [Display(Name = "Hãng:")]
        [Required(ErrorMessage = "Yêu cầu chọn hãng")]
        public int IDHang { get; set; }

        [Display(Name = "Pin:")]
        public int? ID_Pin { get; set; }

        [Display(Name = "Bộ xử lý:")]
        public int? ID_BXL { get; set; }

        [Display(Name = "Hệ điều hành:")]
        public int? ID_HDH { get; set; }

        [Display(Name = "Kích thước:")]
        public int? ID_KT { get; set; }

        [Display(Name = "Ram:")]
        public int? ID_R { get; set; }

        [Display(Name = "Camera:")]
        public int? ID_Camera { get; set; }

        [Display(Name = "Chỗ ngồi:")]
        public int? ID_CN { get; set; }

        [Display(Name = "Kiểu dáng:")]
        public int? ID_KD { get; set; }

        [Display(Name = "Phụ kiện:")]
        public int? ID_PK { get; set; }

        [Display(Name = "Quảng đường:")]
        public int? ID_QD { get; set; }

        [Display(Name = "Loại thời trang:")]
        public int? ID_LTR { get; set; }

        [Display(Name = "Dời sản xuất:")]
        public int? ID_Doi { get; set; }

        [Display(Name = "Card:")]
        public int? ID_Card { get; set; }

        [Display(Name = "Mùa:")]
        public int? ID_M { get; set; }

        [Display(Name = "Chất liệu:")]
        public int? ID_CL { get; set; }

        [Display(Name = "Độ phân giả:")]
        public int? ID_DPG { get; set; }

        [Display(Name = "Màu sắc:")]
        public int? ID_MS { get; set; }

        [Display(Name = "Phiên bản:")]
        public int? ID_PB { get; set; }

        [Display(Name = "Case:")]
        public int? ID_Case { get; set; }

        [Display(Name = "Dung lượng bộ nhớ:")]
        public int? ID_BN { get; set; }

        [Display(Name = "Hộp số:")]
        public int? ID_HS { get; set; }

        [Display(Name = "Model:")]
        public int? ID_Model { get; set; }
    }
}