
$(function(){
    $(document).on('click', '.sD', function(e) {
        e.preventDefault;
        var nome = $(this).closest('tr').find('td[data-nome]').data('nome');
        alert(nome);
    });
});