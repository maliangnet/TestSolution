//http://www.cnblogs.com/TomXu/archive/2011/12/15/2288411.html
//http://www.alloyteam.com/2012/10/common-javascript-design-patterns/
//开始 http://www.cnblogs.com/TomXu/archive/2012/02/14/2330137.html
//设计模式 http://www.cnblogs.com/TomXu/archive/2012/02/20/2352817.html
//JS基本测试
(function()
{
    //----------------------  
    //console.log("JS Test 1..............");
    //var a = document.getElementsByTagName("a");
    //for(var i=0,max = a.length;i<max;i++)
    //{
    //    (function(i)
    //    {
    //        a[i].addEventListener("click", function (e)
    //        {           
    //            e.preventDefault();
    //            console.log("click " + i);
            
    //        }, false);
    //    }(i));
    //}
     //----------------------  
    //console.log("JS Test 2..............");
    //var x = 10;
    //function foo()
    //{
    //    var y = 20;
    //    function bar(){
    //        console.log(x + y);
    //    }
    //    return bar;
    //}
    //foo()();
     //----------------------  
    //console.log("JS Test 3..............");
    //var y = 5;
    //function f3()
    //{
    //    console.log(y);
    //}
    //(function(){
    //    var y = 8;
    //    f3();
    //})();
     //---------------------- 
    //console.log("JS Test 4..............");
    //var x4 = 3;
    //function F4()
    //{
    //    x4 = 10;        
    //}
    //F4();
    //console.log(x4);

    //var x4_1 = 10;
    //(function(){x4_1=20})();    
    //console.log(x4_1);

    //function F4_1(x)
    //{
    //    console.log(x);
    //}(2);
     //---------------------- 
    //console.log("JS Test 5..............");
    //function explameFun(funArg)
    //{
    //    funArg();
    //}
    //explameFun(function()
    //{
    //    console.log("explameFun");
    //});

    //(function functionValued()
    //{
    //    return function()
    //    {
    //        console.log("functionValued");
    //    }
    //})()();

    //(function selfApplicative(funArg)
    //{
    //    if(funArg && funArg === selfApplicative)
    //    {
    //        console.log("selfApplicative");
    //        return;
    //    }
    //    selfApplicative(selfApplicative);

    //})();

    //function model(e)
    //{
    //    console.log(e);
    //    return model;
    //}
    //model(1)(2)(3);

    //function testFun()
    //{
    //    var localVar = 10;
    //    function innerFn(funArg)
    //    {
    //        console.log(localVar + funArg);
    //    }
    //    return innerFn;
    //}

    //var tf = new testFun();
    //tf(20);

    //var z = 10;
    //function foo()
    //{
    //    console.log(z);
    //}
    //foo();

    //(function()
    //{
    //    var z = 20;
    //    foo();
    //})();

    //if(!(a in window))
    //    var a =30;
    //console.log(a);

    var a = 1;
    var b = function a(x){console.log(a);}
    console.log(a);


   
}
 )();

//设计模式
(function()
{
    //1.单例模式：就是一个类只有一个实例，如果实例存在就直接返回，如果不存在就创建
    //console.log("Singleton 1 ..............");
    //var mySingleton1 = 
    //    {
    //        prototype: "someting",
    //        method: function () { console.log("method");}
    //    }
    //mySingleton1.method();    
    //----------------------   
    //console.log("Singleton 3 ..............");
    //var mySingleton3 = (function ()
    //{
    //    var insta;
    //    function init()
    //    {
    //        return {
    //            method: function ()
    //            {
    //                console.log("mySingleton 3 ");
    //            }
    //        }
    //    }

    //    return {
    //        Init: function ()
    //        {
    //            return insta || (insta =init())
    //        }
    //    }
    //})();
    //mySingleton3.Init().method();
    //mySingleton3.Init().method();
    //---------------------- 
    //console.log("Singleton 4 ..............");
    //var mySingleton4 = (function ()
    //{
    //    function singleton(args)
    //    {
    //        var args = args || {};
    //        this.name = "singleton 4";
    //        this.x = args.x || 6;
    //        this.y = args.y || 10;
    //    }

    //    var _singleton;
    //    return {
    //        init: function (args)
    //        {
    //            return _singleton || (_singleton = new singleton(args));
    //        }
    //    }

    //})();
    //console.log(mySingleton4.init({ x: 3 }).x);
    //---------------------- 
    //console.log("Singleton 5 ..............");
    //function mySingleton5()
    //{
    //    if (typeof mySingleton5.instance === "object")
    //        return mySingleton5.instance;
    //    this.x = 3;
    //    mySingleton5.instance = this;
    //}
    //var mySingleton5_1 = new mySingleton5();
    //var mySingleton5_2 = new mySingleton5();
    //console.log(mySingleton5_1 === mySingleton5_2);
    //---------------------- 
    //console.log("Singleton 6 ..............");
    //var userInfo = (function ()
    //{
    //    var name = "名称", code = "代码";
    //    return {
    //        name: name,
    //        code : code
    //    };
    //})();
    //console.log(userInfo.name);

}
)();