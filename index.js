$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky")
        }else{
            $('.navbar').removeClass("sticky")
        }
    });


    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
})

    var runredirect = function () {
        var redirectw1 = window.open('https://drive.google.com/file/d/1u7cHpMqjixwtlPBPmBeA5uZ-vFFhquUT/view?usp=share_link');
        redirectw1.location;
    }
