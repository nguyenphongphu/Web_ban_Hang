using Common;
using Model.EF;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Dao
{
   public class ContactDao
    {
        BanHang db = null;
        public ContactDao()
        {
            db = new BanHang();
        }
        public List<Feedback> feedbacks()
        {
            return db.Feedbacks.ToList();
        }
        public Feedback feedbackid(int id)
        {
            return db.Feedbacks.Find(id);
        }
        public int InsertFeedBack(Feedback fb)
        {
            db.Feedbacks.Add(fb);
            db.SaveChanges();
            return fb.FeedbackID;
        }

        public bool gui(Feedback feedback)
        {
            try
            {
                var data = db.Feedbacks.Find(feedback.FeedbackID);
                string body = "<!DOCTYPE html>" +
                                "<html>" +
                                "<head>" +
                                   "<meta name='viewport' content='width = device - width' />" +
                                    "<title>Thông tin từ khách hàng:" + feedback.Name + "</title>" +
                                "</head>" +
                                "<body>" +
                                     "Thông tin khách hàng: " + feedback.Name + "<br />" +
                                    "Điện thoại: " + feedback.Phone + " <br />" +
                                    "Email: " + feedback.Email + "<br />" +
                                    "Địa chỉ: " + feedback.Address + "<br />" +
                                    "Câu hỏi: " + feedback.Content + "<br />" +
                                    "<div class='content'>" +
                                    "<div class='section group'>" +
                                       feedback.Noidung +
                                      "</div>" +
                                    "</div>" +
                               "</body>" +
                           "</html>";
                var toEmail = ConfigurationManager.AppSettings["ToEmailAddress"].ToString();

                new MailHelper().SendMailTL(feedback.Email, "Trả lởi từ Shop Bán Đồ Củ", body);
                new MailHelper().SendMailTL(toEmail, "Trả lởi từ Shop Bán Đồ Củ", body);
                data.Noidung = feedback.Noidung;
                data.Status = true;
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {

                return false;
            }

            
        }
    }
}
