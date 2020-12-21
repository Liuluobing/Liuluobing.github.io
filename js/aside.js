let child = $('ul')[0]

child.addEventListener('click', function(e) {
    let h = e.target.innerText
    var j = e.target.firstElementChild
    let a = $('li')
        // 每个 li 里的 span 背景颜色和字体颜色恢复
    for (let i = 0; i < 4; i++) {
        var spa = a.eq(i)[0].childNodes[1];
        console.log(spa);
        $(spa).css({
            "backgroundColor": "#fff",
            "color": "#000000"
        })
    }
    // 点击当前li ，span 标签背景颜色和字体颜色变化
    if (h == '1') {
        var valOfScroll = $("#one").offset().top;
        $("html,body").animate({
            scrollTop: valOfScroll
        }, 600)
        $(j).css({
            "backgroundColor": "#aaa",
            "color": "#fff"
        })
        console.log(e.target.firstElementChild);
    } else if (h == '2') {
        var valOfScroll = $("#two").offset().top;

        $("html,body").animate({
            scrollTop: 3700
        }, 600)
        $(j).css({
            "backgroundColor": "#aaa",
            "color": "#fff"
        })
    } else if (h == '3') {
        var valOfScroll = $("#three").offset().top;

        $("html,body").animate({
            scrollTop: 5950
        }, 600)
        $(j).css({
            "backgroundColor": "#aaa",
            "color": "#fff"
        })
    } else if (h == '4') {
        var valOfScroll = $("#four").offset().top;
        console.log(valOfScroll);
        $("html,body").animate({
            scrollTop: 13276
        }, 600)
        $(j).css({
            "backgroundColor": "#aaa",
            "color": "#fff"
        })
    }
}, false)

// 点击切换侧边栏图表以及展开收缩效果
var count = 0
$('#open').click(() => {
    let b = $('#open i')[0];
    if (count % 2 != 0) {
        $('#aside').css('width', '0')
        $(b).attr('class', 'fa fa-reorder')
        console.log($('li>span'));
        for (let i = 0; i < 4; i++) {
            $('li>span').css({
                "right": "-40px",
            })
        }
    } else {
        $('#aside').css('width', '250px')
        $(b).attr('class', 'fa fa-times')
        for (let i = 0; i < 4; i++) {
            $('li>span').css({
                "right": "1px",
            })
        }
    }
    count++
})