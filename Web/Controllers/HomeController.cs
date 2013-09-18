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

        delegate double del();

        public double delT()
        {
            return 2;
        }

    }
}
