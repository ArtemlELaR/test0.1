$(document).ready(function () {
    var timerId;
    $('.container input[type="checkbox"]').change(function(){
        if(this.checked){
            $('body button').css('opacity','0.5');
            if(typeof timerId !== 'undefined') {
                clearTimeout(timerId) 
            }
            timerId = setTimeout( function() {
                $('body button').removeAttr('style');
            },5000);
        }
    });
});