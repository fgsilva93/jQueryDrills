$(document).ready(function() {
    $('#btnSubmit').on('click', function() {
        alert('a message has been clicked'); 
    })

    $('#anotherBtn').click(function() {
        let msg = $('#textType').val();
        alert(msg);
    })
})