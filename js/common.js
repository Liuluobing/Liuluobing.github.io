/**
 * 
 * @param {*传入需要慢慢显现的节点数组} arr 
 */
function rollingLoad(arr) {
    arr.forEach(item => {
        console.log(item.getBoundingClientRect().top);
        if (item.getBoundingClientRect().top <= window.innerHeight / 2) {
            $(item).addClass('animated fadeIn');
            $(item).css({
                'color': '#ffffff'
            })
        }
    })
}
/**
 * 
 * @param {*传入需要慢慢显现的节点数组} arr 
 */
function fadeIn(arr) {
    arr.forEach(item => {
        // console.log(item.getBoundingClientRect().top);
        let top = item.getBoundingClientRect().top;
        let windowY = window.innerHeight;
        if (top <= windowY) {
            if (top <= windowY / 10 * 8 && top >= windowY / 10 * 7) {
                $(item).css({
                    'opacity': '0.25',

                })
            } else if (top <= windowY / 10 * 7 && top >= windowY / 10 * 6) {
                $(item).css({
                    'opacity': '0.5'
                })
            } else if (top <= windowY / 10 * 6 && top >= windowY / 10 * 5) {
                $(item).css({
                    'opacity': '0.85'
                })
            } else if (top <= windowY / 10 * 5 && top >= windowY / 10 * 2) {
                $(item).css({
                    'opacity': '1'
                })
            }
        }
    })
}
/**
 * 
 * @param {*传入需要慢慢显现的节点数组} arr 
 */
function fadeInTwo(arr) {
    arr.forEach(item => {
        let top = item.getBoundingClientRect().top;
        let windowY = window.innerHeight;
        if (top <= windowY / 10 * 8) {
            if (top <= windowY / 10 * 8 && top >= windowY / 10 * 7) {
                $(item).css({
                    'opacity': '0.3'
                })
            } else if (top <= windowY / 10 * 7 && top >= windowY / 10 * 6) {
                $(item).css({
                    'opacity': '0.6'
                })
            } else if (top <= windowY / 10 * 6 && top >= windowY / 10 * 2) {
                $(item).css({
                    'opacity': '1'
                })
            }
        } else {
            $(item).css({
                'opacity': '0'
            })
        }
    })
}
/**
 * 
 * @param {*传入固定目标的上一层的盒子} elem 
 * @param {*传入遮幕的类名的字符串} zeimu 
 */
//遮幕方法  
function veilScroll(elem, zeimu) {
    let windowY = window.innerHeight;
    //如果第一个盒子距离顶部的高度小于窗口，则慢慢把遮幕的透明度调低。
    let bottom = elem.getBoundingClientRect().bottom;
    if (bottom <= windowY) {
        if (bottom <= windowY / 10 * 9 && bottom >= windowY / 10 * 8) {
            $(`.${zeimu}`).css({
                'opacity': '0.9',
                'display': 'block'

            })
        } else if (bottom <= windowY / 10 * 8 && bottom >= windowY / 10 * 7) {
            $(`.${zeimu}`).css({
                'opacity': '0.8'
            })
        } else if (bottom <= windowY / 10 * 6 && bottom >= windowY / 10 * 5) {
            $(`.${zeimu}`).css({
                'opacity': '0.7'
            })

        } else if (bottom <= windowY / 10 * 5 && bottom >= windowY / 10 * 4) {
            $(`.${zeimu}`).css({
                'opacity': '0.5'
            })
        }
        else if (bottom <= windowY / 10 * 3 && bottom >= windowY / 10 * 2) {
            $(`.${zeimu}`).css({
                'opacity': '0.25'
            })
        }
        else if (bottom <= windowY / 10 * 2 & bottom >= windowY / 10 * 1) {
            $(`.${zeimu}`).css({
                'opacity': '0',
                'display': 'none'
            })
        }

    }
}
/**
 * 
 * @param {*传入固定目标的上一层的盒子} elem  
 * @param {*传入目标盒子的类名字符串，用于设置固定定位和绝对定位} mubiao 
 */
//滚动固定盒子
function fixedScroll(elem, mubiao, boxh, index) {
    let windowY = window.innerHeight;
    let bottom = elem.getBoundingClientRect().bottom;
    if (bottom <= 0) {
        $(`.${mubiao}`).css({
            'position': 'absolute',
            'top': `${boxh}px`,
            'z-index': '0'
        })
    } else {
        $(`.${mubiao}`).css({
            'position': 'fixed',
            'top': '0px',
            'z-index': `${index}`
        })
    }
}

//第二种方式
function fixedScrollTwo(elem, mubiao, index, marignBox) {
    let windowY = window.innerHeight;
    let bottom = elem.getBoundingClientRect().bottom;
    if (bottom <= 0) {
        $(`.${mubiao}`).css({
            'position': 'fixed',
            //'height':'30vh',
            "display": 'block',
            'z-index': `-4`
        })
        $(`.${marignBox}`).css({
            "margin-top": '0',
        })
    } else {
        $(`.${mubiao}`).css({
            'position': 'fixed',
            'top': '0px',
            'z-index': `${index}`
        })
        $(`.${marignBox}`).css({
            "margin-top": '40vh',
        })
    }
}