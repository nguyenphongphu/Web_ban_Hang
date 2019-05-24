using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common
{
   public class Link
    {
        public string linkanh(string a)
        {
            string c = "";
            for (int i = 0; i < a.Length - 1; i++)
            {
                if (!a[i].Equals(" "))
                {
                    c += a[i];
                }
            }
            return c;
        }
    }
}
