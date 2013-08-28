//http://www.cnblogs.com/TomXu/archive/2011/12/15/2288411.html
//http://www.alloyteam.com/2012/10/common-javascript-design-patterns/
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
    console.log(length);
}
)();