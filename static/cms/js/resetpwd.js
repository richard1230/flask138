
// jQuery();<===>$();这两者等价



$(function () {
//通过id方式获取需要用#号
    $("#submit").click(function (event) {
        //阻止按钮提交默认表单
        event.preventDefault()
         var oldpwdE =$("input[name=oldpwd]");//获取名字为oldpwd的标签
    var newpwdE =$("input[name=newpwd]");
    var newpwd2E =$("input[name=newpwd2]");
    //获取标签里面的值
        var oldpwd = oldpwdE.val()
        var newpwd = newpwdE.val()
        var newpwd2 = newpwd2E.val()


         // 1. 要在模版的meta标签中渲染一个csrf-token
        // 2. 在ajax请求的头部中设置X-CSRFtoken
        zlajax.post({
            'url': '/cms/resetpwd/',
            'data': {
                'oldpwd': oldpwd,
                'newpwd': newpwd,
                'newpwd2': newpwd2
            },
            'success': function (data) {
                console.log(data);
            },
            'fail': function (error) {
                console.log(error);
            }
        });


    });


});