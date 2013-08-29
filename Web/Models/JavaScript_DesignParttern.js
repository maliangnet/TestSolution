//http://www.cnblogs.com/TomXu/archive/2011/12/15/2288411.html
//http://www.alloyteam.com/2012/10/common-javascript-design-patterns/

//JS基本测试
(function()
{
   //var calculator = function(eq)
   //    {
   //         var eqCtl = document.getElementById(eq);
   //         return{
   //                     add : function(x,y)
   //                     {
   //                         var  val = x + y;
   //                         eqCtl.innerHTML = val;
   //                     }
   //                 };
   //    }("div").add(5,5);
    //var calc = new calculator("div");
    //calculator("div").add(1,2);
    //calc.add(10,20);
});

(function()
{
    var blogModel = (function(my)
    {
        var my = {}, privateName = "博客园";
        
        function privateAddTopic(data){return data;};
       
        my.name = privateName;
        my.addTopic = function(data){ return privateAddTopic(data);}

        return my;

    }(blogModel || {}));

    //私有属性多个文件共享
    (function(my)
    {
        var _private = my.private = my.private||{},
            _sales = my.sales = my.sales || function()
            {
                delete my.private;
                delete my.sales;
            },
            _unsale = my.unsale = my.unsale || function()
            {
                my.private = _private;
                my.sales = _sales;
            };
    }(blogModel||{}));
    
    console.log(blogModel.name);

    var blogModel = blogModel || {};
    (function(old)
    {
        var my ={},key;

        for(key in old)
            if(old.hasOwnProperty(key))
                my[key] = old[key];

        var oldAddPhoto = old.addPhoto;
        old.addPhoto = function()
        {
            console.log("添加addPhoto方法");
        };
    }(blogModel || {}));

    console.log(blogModel.addTopic(1));

    blogModel.addPhoto();

}());

(function()
{
    //console.log(a);
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