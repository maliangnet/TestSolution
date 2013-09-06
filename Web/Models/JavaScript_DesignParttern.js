﻿//http://www.cnblogs.com/TomXu/archive/2011/12/15/2288411.html
//http://www.alloyteam.com/2012/10/common-javascript-design-patterns/
//开始 http://www.cnblogs.com/TomXu/archive/2012/01/16/2309728.html
//设计模式 http://www.cnblogs.com/TomXu/archive/2012/02/20/2352817.html
//JS基本测试
(function()
{
    var a = document.getElementsByTagName("a");
    for(var i=0,max = a.length;i<max;i++)
    {
        (function(i)
        {
            a[i].addEventListener("click", function (e)
            {           
                e.preventDefault();
                console.log("click " + i);
            
            }, false);
        }(i));
    }
}
 )();

//设计模式
(function()
{
    //1.单例模式：就是一个类只有一个实例，如果实例存在就直接返回，如果不存在就创建
    console.log("Singleton 1 ..............");
    var mySingleton1 = 
        {
            prototype: "someting",
            method: function () { console.log("method");}
        }
    mySingleton1.method();    
    //----------------------   
    console.log("Singleton 3 ..............");
    var mySingleton3 = (function ()
    {
        var insta;
        function init()
        {
            return {
                method: function ()
                {
                    console.log("mySingleton 3 ");
                }
            }
        }

        return {
            Init: function ()
            {
                return insta || (insta =init())
            }
        }
    })();
    mySingleton3.Init().method();
    mySingleton3.Init().method();
    //---------------------- 
    console.log("Singleton 4 ..............");
    var mySingleton4 = (function ()
    {
        function singleton(args)
        {
            var args = args || {};
            this.name = "singleton 4";
            this.x = args.x || 6;
            this.y = args.y || 10;
        }

        var _singleton;
        return {
            init: function (args)
            {
                return _singleton || (_singleton = new singleton(args));
            }
        }

    })();
    console.log(mySingleton4.init({ x: 3 }).x);
    //---------------------- 
    console.log("Singleton 5 ..............");
    function mySingleton5()
    {
        if (typeof mySingleton5.instance === "object")
            return mySingleton5.instance;
        this.x = 3;
        mySingleton5.instance = this;
    }
    var mySingleton5_1 = new mySingleton5();
    var mySingleton5_2 = new mySingleton5();
    console.log(mySingleton5_1 === mySingleton5_2);
}
)();