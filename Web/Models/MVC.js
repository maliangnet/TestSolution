(function(jquery)
{

    $("input[name=ajax]").click(function()
    {
        $.ajax(
            {
                url : "/API1/NOCache",
                method :"Get",
                cache : true,
                success : function(data)
                {
                    //console.log(data);
                }
            });
    });

})();