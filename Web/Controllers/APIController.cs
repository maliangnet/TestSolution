using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Web.Controllers
{
    public class API1Controller : Controller
    {
        
        public ActionResult NOCache()
        {
            //Response.Cache.SetCacheability(HttpCacheability.NoCache);
            Response.Cache.SetExpires(DateTime.Now.AddSeconds(5));
            return Content("Ajax");
        }

        public int Method()
        {
            return 1;
        }
    }
}
