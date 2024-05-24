$(document).ready(function() {
    $('#button-form').click(function(e){
        e.preventDefault();
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(xx) xxxxx-xxxx'
    })
})