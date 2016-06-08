$(function() {
    $(".banner li").eq(0).show();
    $(".num li").mouseover(function () {
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        $(".banner li").eq(index).show().siblings().hide();
        //控制底部小圆点部分
    })
        var i = 0;
        function moveRight() {
            i++;
            if (i == 4) {
                i = 0;
            }
            $(".num li").eq(i).addClass("active").show().siblings().removeClass("active");
            $(".banner li").eq(i).fadeIn(100).siblings().fadeOut(100);
        }

        function moveLeft() {
            i--;
            if (i == -1) {
                i = 3;
            }
            $(".num li").eq(i).addClass("active").show().siblings().removeClass("active");
            $(".banner li").eq(i).fadeIn(100).siblings().fadeOut(100);
        }

        $(".main-top .next").click(function () {
            moveRight();
        })
        $(".main-top .pre").click(function () {
            moveLeft();
        })
        //控制左右点击事件

    })