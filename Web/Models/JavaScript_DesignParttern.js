//http://www.cnblogs.com/TomXu/archive/2011/12/15/2288411.html
//http://www.alloyteam.com/2012/10/common-javascript-design-patterns/
//开始 http://www.cnblogs.com/TomXu/archive/2012/01/12/2308594.html
//JS基本测试
(function()
{
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
    
    var foo = 
        {
            x: 2,
            add: function ()
            {
                return this.x + this.y;
            }
        }
    var a =
        {
            x : 10,
            y: 3,
            __proto__:foo
        }
    var b =
        {
            y: 3,
            __proto__: foo
        }

    function fun()
    { }

    var f = new fun();
    console.log(f.__proto__ === fun.prototype);


}());

//设计模式
(function()
{
    //1.单例模式
    var CreateMark =function()
    {
        var mark;
        //单例模式如下代码
        return function()
        { 
            mark || 
            (mark = document.body.appendChild(document.createElement("div")));
        };
    }
    CreateMark()();
    CreateMark()();

    var Singleton = function(fn)
    {
        var result ;
        return function()
        {
            result || 
            (result = fn.apply(this,arguments)) ;
        };
    }
    Singleton(function()
    {
        return document.body.appendChild(document.createElement("div"));
    });
    Singleton(function()
    {
        return document.body.appendChild(document.createElement("div"));
    });
    var length = document.getElementsByTagName("div").length;
    
}
)();