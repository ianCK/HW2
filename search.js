var cnt = 0,
    now = 0,
    total, items
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

function newItem(item, id) {
    var img = $('<img>').attr('src', item.image).attr('class', 'image'),
        name = $('<h3>').attr('class', 'name').text(item.name),
        price = $('<p>').attr('class', 'price').text('NT$ ' + item.price),
        div = $('<div>').attr('class', 'item show').attr('id', 'item' + id)
    $(div).append(img).append(name).append(price)
    if (id % 20 == 0) $('#items').append($('<div>').attr('class', 'page hide').attr('id', 'page' + Math.floor(id / 20)))
    $('#page' + Math.floor(id / 20)).append(div)
}

function clearItem() {
    $('#items').empty()
}

function next_page() {
    var last = $('#page' + now),
        nxt = $('#page' + (now + 1))
    $(last).attr('class', 'page')
    $(last).attr('class', 'page left_out')
    $(nxt).attr('class', 'page')
    $(nxt).attr('class', 'page left_in')
}

function prev_page() {
    var last = $('#page' + now),
        nxt = $('#page' + (now - 1))
    $(last).attr('class', 'page')
    $(last).attr('class', 'page right_out')
    $(nxt).attr('class', 'page')
    $(nxt).attr('class', 'page right_in')
}

function start() {
    $('#contentwrap').removeClass('hide')
    $('#input_area').addClass('start')
    $('#input_area').on('animationend', function() {
        $(this).removeClass('start')
        $(this).off('animationend')
        $('#side_nav_btn').on('click', function(e) {
            if (e.which == 1) {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active')
                    $(this).addClass('deactive')
                    $('#contentwrap').addClass('close')
                    $('#contentwrap').removeClass('open')
                    $('#side_nav_menu').addClass('close')
                    $('#side_nav_menu').removeClass('open')
                    $('#next_page_btn').addClass('close')
                    $('#next_page_btn').removeClass('open')
                    $('#prev_page_btn').addClass('close')
                    $('#prev_page_btn').removeClass('open')

                } else {
                    $(this).removeClass('deactive')
                    $(this).addClass('active')
                    $('#contentwrap').addClass('open')
                    $('#contentwrap').removeClass('close')
                    $('#side_nav_menu').addClass('open')
                    $('#side_nav_menu').removeClass('close')
                    $('#next_page_btn').addClass('open')
                    $('#next_page_btn').removeClass('close')
                    $('#prev_page_btn').addClass('open')
                    $('#prev_page_btn').removeClass('close')
                }
            }
        })
        $('#next_page_btn').on('click', function(e) {
            if (e.which == 1) {
                next_page()
                now++
                if (now != 0) $('#prev_page_btn').removeClass('hide')
                if (now == Math.floor(total / 20)) $('#next_page_btn').addClass('hide')
            }
        })
        $('#prev_page_btn').on('click', function(e) {
            if (e.which == 1) {
                prev_page()
                now--
                if (now == 0) $('#prev_page_btn').addClass('hide')
                if (now != Math.floor(total / 20)) $('#next_page_btn').removeClass('hide')
            }
        })
        $.get('https://js.kchen.club/B07102015/query', function(response) {
            if (response) {
                if (response.result) {
                    items = response.items
                    total = items.length
                }
            }
        }, "json")
    })
}