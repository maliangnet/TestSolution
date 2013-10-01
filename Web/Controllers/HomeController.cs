using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult JS()
        {
            
            return View();
        }

        public string Ajax()
        {
            string file = Request.Files.Count.ToString();
            return "OK-" + file + "-" + Math.Round(10000f).ToString();
        }

        public string Ajax1(HttpPostedFileBase postFile)
        {
            string file = Request.Files.Count.ToString();
            return "OK-" + file + "-" + Math.Round(10000f).ToString() + postFile.FileName;
        }

        public ActionResult Test()
        {
            List<int> list = new List<int>();
            list.Add(1);
            list.Add(10);
            list.FindAll(delegate(int s) { return s>10; });
            list.FindAll(pricate);
            list.FindAll(s => { return s > 2; });
            list.FindAll((int s) => { return s > 2; });
            list.FindAll((int a) => { return true; });
            return Content("");
        }
        public bool pricate(int s)
        {
            return true;
        }
        delegate double del();

        public double delT()
        {
            return 2;
        }

        public delegate int X1(int a,int b);

        public void X2(X1 x1)
        {

        }

        public void X2()
        {
            X2((x, y) => x * y);
        }

    }
}
