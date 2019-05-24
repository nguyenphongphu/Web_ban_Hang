using Model.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Dao
{
    public class SlidesDao
    {
        BanHang db = null;
        public SlidesDao()
        {
            db = new BanHang();
        }
        public List<Slide> ListALL()
        {
            var slidel = db.Slides.Where(x => x.Status == true).OrderBy(y => y.STTStatus).ToList();
            foreach (var item in slidel)
            {
                string anh = item.LinkAnh;
                item.LinkAnh = anh.Replace(" ", "");
            }
            return slidel;
        }
        public List<Slide> Listslide(string id)
        {
            var slidel = db.Slides.Where(x => x.Status == true && x.slidetype == id).OrderBy(y => y.STTStatus).ToList();
            foreach (var item in slidel)
            {
                string anh = item.LinkAnh;
                item.LinkAnh = anh.Replace(" ", "");
            }
            return slidel;
        }
    }
}
