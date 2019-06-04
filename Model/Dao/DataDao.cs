using Model.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Dao
{
   public class DataDao
    {
        BanHang db = null;
        public DataDao()
        {
            db = new BanHang();
        }
         public List<LoaiSanPham> loaiSanPhams()
        {
            return db.LoaiSanPhams.Where(x=>x.LSPParentID==null).ToList();
        }
        public List<LoaiSanPham> loaiSanPhamsiem(int id)
        {
            return db.LoaiSanPhams.Where(x => x.LSPParentID == id).ToList();
        }
    }
}
