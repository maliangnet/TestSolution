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

<<<<<<< HEAD
        public ActionResult Test()
        {
            int a = Web.Models.Test.Test1();
            return Content(a.ToString());
        }
=======
        delegate double del();

        public double delT()
        {
            return 2;
        }

>>>>>>> 923ba169bccff540f79bc6c4ba86dd4aaa816a7c
    }
}
