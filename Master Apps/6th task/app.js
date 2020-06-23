$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

$(window.document).on('shown.bs.modal', '#myModal', function() {
    window.setTimeout(function() {
        $('[autofocus]', this).focus();
    }.bind(this), 100);
});
