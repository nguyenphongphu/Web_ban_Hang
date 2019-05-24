using Model.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Dao
{
    public class MenuDao
    {
        BanHang db = null;
        public MenuDao()
        {
            db = new BanHang();
        }
        public List<Menu> ListByGroupId(int Id)
        {
            return db.Menus.Where(x => x.Status == true && x.MenuTypeID == Id).OrderBy(x => x.STTID).ToList();
        }
        public List<Menu> header(int id)
        {
            if (db.Menus.Find(id).MenuParentID != null)
            {
                int so = db.Menus.Find(id).MenuParentID.Value;
                return db.Menus.Where(x => x.ID == id || (x.ID == so)).ToList();
            }
            else
            {
                return db.Menus.Where(x => x.ID == id).ToList();
            }

        }
        public List<Menu> header_hang(string Link, string hang)
        {
            int tieude = db.Menus.Where(x => x.Link == Link).ToList()[0].ID;
            return db.Menus.Where(x => x.Link == Link || (x.Link == hang && x.MenuParentID == tieude)).ToList();
        }

    }
}
