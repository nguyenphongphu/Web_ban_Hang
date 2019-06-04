using Model.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PagedList;
using Common;

namespace Model.Dao
{
    public class UserDao
    {
        BanHang db = null;
        public UserDao()
        {
            db = new BanHang();
        }

        public int Insert(Taikhoan entity)
        {

            var user = db.Taikhoans.SingleOrDefault(x => x.Username == entity.Username);
            if (user == null)
            {
                db.Taikhoans.Add(entity);
                db.SaveChanges();
                return 1;
            }
            else if(user.Username==entity.Username)
            {
                return -1;
            }
            else if (user.Email == entity.Email)
            {
                return -2;
            }
            else
            {
                return 0;
            }
           
        }
        public int Login(string userName, string passWord, bool isLoginAdmin = false)
        {
            var result = db.Taikhoans.SingleOrDefault(x => x.Username == userName);
            if (result == null)
            {
                return 0;
            }
            else
            {
                if (isLoginAdmin == true)
                {
                    if (result.ChucVu.TenCV == CommonConstants.ADMIN_GROUP || result.ChucVu.TenCV == CommonConstants.MOD_GROUP)
                    {
                        if (result.Status == false)
                        {
                            return -1;
                        }
                        else
                        {
                            if (result.Password == passWord)
                                
                            return 1;
                            else
                            
                            return -2;
                        }
                    }
                    else
                    {
                        return -3;
                    }
                }
                else
                {
                    if (result.Status == false)
                    {
                        return -1;
                    }
                    else
                    {
                        if (result.Password == passWord)
                            return 1;
                        else
                            return -2;
                    }
                }
            }
        }

        public bool Update(Taikhoan entity)
        {
            try
            {
                var user = db.Taikhoans.Find(entity.UserID);
                if (string.IsNullOrEmpty(entity.Password))
                {
                    user.Password = entity.Password;
                }
                user.DiaChi = entity.DiaChi;
                user.HovaTen = entity.HovaTen;
                
                user.Email = entity.Email;
                user.Phone = entity.Phone;
                user.Status = entity.Status;
                user.CreatedDate = DateTime.Now.Date;
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                
                //logging
                return false;
            }

        }

        public Taikhoan GetById(string userName)
        {
            return db.Taikhoans.SingleOrDefault(x => x.Username == userName);
        }

        public bool Delete(int id)
        {
            try
            {
                var user = db.Taikhoans.Find(id);
                db.Taikhoans.Remove(user);
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public Taikhoan ViewDetail(int id)
        {
            return db.Taikhoans.Find(id);
        }

        public object ChangeStatus(long id)
        {
            var user = db.Taikhoans.Find(id);
            user.Status = !user.Status;
            db.SaveChanges();
            return user.Status;
        }
        
        public IEnumerable<Taikhoan> ListAllPaging(string searchString, int page, int pageSize)
        {
            IQueryable<Taikhoan> model = db.Taikhoans;
            if (!string.IsNullOrEmpty(searchString))
            {
                model = model.Where(x => x.Username.Contains(searchString) || x.HovaTen.Contains(searchString));
            }

            return model.OrderByDescending(x => x.CreatedDate).ToPagedList(page, pageSize);
        }

        public bool CheckUserName(string userName)
        {
            return db.Taikhoans.Count(x => x.Username == userName) > 0;
        }
        public bool CheckEmail(string email)
        {
            return db.Taikhoans.Count(x => x.Email == email) > 0;
        }
        public List<ChucVu> chucVus()
        {
            return db.ChucVus.ToList();
        }
    }
}
