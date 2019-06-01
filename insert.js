var cnt = 0

$(document).ready(function() {
    $('#decoline').removeClass('hide')
    $('#side_nav_btn').removeClass('hide')
    $('#decoline').addClass('start')
    $('#side_nav_btn').addClass('start')
    $('#side_nav_btn').on('animationend', function() {
        $(this).removeClass('start')
        $(this).off('animationend')
        cnt++
        if (cnt == 2) start()
    })
    $('#decoline').on('animationend', function() {
        $(this).removeClass('start')
        $(this).off('animationend')
        cnt++
        if (cnt == 2) start()
    })
})

function warning(s) {
    $('#warning').text(s)
}

function check_product(item) {
    $('#item').remove()
    var img = $('<img>').attr('src', item.image).attr('class', 'image'),
        name = $('<h3>').attr('class', 'name').text(item.name),
        price = $('<p>').attr('class', 'price').text('NT$ ' + item.price),
        div = $('<div>').attr('class', 'item').attr('id', 'item')
    $(div).append(img).append(name).append(price)
    $('#show_area').append(div)
    if (!$('#show_area').hasClass('in')) $('#show_area').attr('class', 'show_area in')
}

function clear_product() {
    $('#item').remove()
    $('#show_area').attr('class', 'show_area out')
    $('#show_area').on('animationend', function() {
        $(this).addClass('hide')
        $(this).off('animationend')
    })
}

function start() {
    $('#contentwrap').removeClass('hide')
    $('#input_area').addClass('start')
    $('#input_area').on('animationend', function() {
        $('#input_area').removeClass('start')
        $('#side_nav_btn').on('click', function(e) {
            if (e.which == 1) {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active')
                    $(this).addClass('deactive')
                    $('#contentwrap').addClass('close')
                    $('#contentwrap').removeClass('open')
                    $('#side_nav_menu').addClass('close')
                    $('#side_nav_menu').removeClass('open')
                } else {
                    $(this).removeClass('deactive')
                    $(this).addClass('active')
                    $('#contentwrap').addClass('open')
                    $('#contentwrap').removeClass('close')
                    $('#side_nav_menu').addClass('open')
                    $('#side_nav_menu').removeClass('close')
                }
            }
        })
        $('#insert').on('click', function(e) {
            if (e.which == 1) {
                var data = {
                    item: {
                        name: $('#name').val(),
                        price: $('#price').val(),
                        count: $('#count').val(),
                        image: $('#image').val()
                    }
                }
                if (data.item.name == "") warning("請輸入商品名稱!!")
                else if (data.item.price == "") warning("請輸入商品價格!!")
                else if (isNaN(Number(data.item.price)) || Number(data.item.price) <= 0) warning("商品價格須為正整數!!")
                else if (data.item.count == "") warning("請輸入商品數量!!")
                else if (isNaN(Number(data.item.count)) || Number(data.item.count) <= 0) warning("商品數量須為正整數!!")
                else if (data.item.image == "") warning("請輸入商品圖片網址!!")
                else {
                    data.item.price = Number(data.item.price)
                    data.item.count = Number(data.item.count)
                    check_product(data.item)
                    warning("")
                    $('#check').on('click', function(e) {
                        if (e.which == 1) {
                            $.post('https://js.kchen.club/B07102015/insert', data, function(response) {
                                if (response) {
                                    if (response.result) {
                                        $(this).off('click')
                                        clear_product()
                                        warning("商品新增成功")
                                    } else warning("新增失敗")
                                } else warning("伺服器出錯")
                            })
                        }
                    })
                }
            }
        })
    })
}