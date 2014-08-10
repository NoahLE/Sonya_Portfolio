$(this).on('hidden.bs.modal', function() {
    //removes and readds link to close video when modal is closed
    var $frame = $('iframe');
    var vidsrc = $frame.attr('src');
    $frame.attr('src','');
    $frame.attr('src', vidsrc);
});