using Model.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Dao
{
    public class KhuvucDao
    {
        BanHang db = null;
        public KhuvucDao()
        {
            db = new BanHang();
        }
        public List<Khuvuc> ListKV()
        {
            return db.Khuvucs.ToList();
        }
    }
}
