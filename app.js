$(document).ready(function () {

});

function add() {
    alert($("#textType").val());
    $("body").append("<div><ul><li>" + $("#textType").val() + "</li></ul></div>");
    //$("body").append("<div><h2>" + $("#textType").val() + "</h2></div>");

}
// comment out for one of the steps: 

/*function add2 () {
    $('h2').mouseover(function () {
        $('h2').css({
            'background-color': 'red',
            'border-radius': '6px',
        });
    })
}*/

$('#anotherBtn').on("click", function (e) {
    add();
    //add2();
    e.preventDefault();

    $('li').click(function () {
        let colors = ['red', 'green', 'blue', 'orange', 'yellow', 'brown', 'purple'];
        let randomColor = colors[Math.floor(Math.random() * colors.length)]

        $(this).css('color', randomColor)
    })

    $('li').dblclick(function () {
        $('li').remove();
    });
});

//button is disabled by default
$('#anotherBtn').attr('disabled', true);

//enable button if input is typed into
$('#textType').keyup(function () {
    if ($('#textType').val() === '') {
        $('#anotherBtn').attr('disabled', true);
    }
    else {
        $('#anotherBtn').attr('disabled', false);
    }
});

$('li').dblclick(function () {
    $('li').remove();
});

// junk code: 

/*let colors = ['red', 'orange', 'yellow', 'blue', 'green', 'purple'];
function getRandomColors () {
    let random = colors[Math.floor(Math.random() * colors.length)];
    $('li').css('color', colors[random]);
};

function setRandomColors() {
    $('li').css('color', getRandomColors())
}*/

/*$('.li').on('click', function(e) {
    var random = Math.floor(Math.random() * colors.length);
    $('.li').css('color', colors[random]);
    e.preventDefault();
})*/