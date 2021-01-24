//mobile - 모바일기기장치에서 접속시 모바일주소(http://mjkim68888.dothome.co.kr)이동
$(document).ready(function(){
    var mobile_keys = new Array('iPhone','iPad','Android','BlackBerry','Windows Phone','Windows CE','LG','MOT','SAMSUNG','SonyEricsson','Nokia');
    
    if(document.URL.match('move_pc_screen')){
        $('.mobile_btn').fadeIn(0);
        mobile_keys = null; 
    }

    for(var i in mobile_keys){
        if(navigator.userAgent.match(mobile_keys[i]) != null){ 
            location.href = 'http://mjkim68888.dothome.co.kr';
        }
    }
});

//popup
$(document).ready(function(){
    
    function setCookie(name, value, expiredays){
        var todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + expiredays);
        document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';';
    }
    
    var popup = '.popup';
    var chkbox = '#chkBox';
   
    $(popup).find('form a').click(function(){
        var chk = $(chkbox).prop('checked');
        
        if(chk){ 
            setCookie('exCookie','done',1); 
        }
        
        $(popup).stop().fadeOut(0);
        $('html, body').css('overflow','visible');
    });
    
    var cookieData = document.cookie;
    
    if(cookieData.indexOf('exCookie=done') < 0){
        $(popup).fadeIn(0);
        $('html, body').css('overflow','hidden');
    }else{
        $(popup).fadeOut(0);
        $('html, body').css('overflow','visible');
    }
    
}); 


//main_slider
$(document).ready(function(){
    $( '.main_slider .flexslider').flexslider({
        animation : "slide",
        slideshowSpeed : 5000
    });
}); 


//store
$(document).ready(function(){
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 20,
        freeMode: true,
        autoplay: {
            delay: 4000,
        }
    });
  
}); 


//product - icecream
$(document).ready(function(){
    var photo = '.icecream .photo li'; 
    var pagination = '.icecream .pagination'; 
    var speed = 1200; 
    var changeSpeed = 3500;
    var num = $(photo).size();
    var btnWrap = ''; 
    
    for(var i=1;i<=num;i++){
        btnWrap += '<button>' + '</button>';
    }
    
    $(pagination).html(btnWrap);
    
    var btn = '.icecream .pagination button'; 
    
    function moveFader(index){
        $(photo).stop().fadeOut(speed); 
        $(photo).eq(index).stop().fadeIn(speed); 
        $(btn).removeClass('active');
        $(btn).eq(index).addClass('active');
    }

    var basic = 0;
    moveFader(basic);
    
    var lastNum = num - 1; 
    
    var auto = setInterval(function(){
        if(basic == lastNum){
            basic = 0;
        }else{
            basic++; 
        }
        
        moveFader(basic); 
    },changeSpeed);
    
    $(btn).click(function(){
        var index= $(this).index();
        
        clearInterval(auto);
        moveFader(index);  
    });
    
});
    

//product - bakery
$(document).ready(function(){
    var photo = '.bakery .photo li'; 
    var pagination = '.bakery .pagination'; 
    var speed = 1200; 
    var changeSpeed = 3500; 
    var num = $(photo).size();
    var btnWrap = ''; 
    
    for(var i=1;i<=num;i++){
        btnWrap += '<button>' + '</button>';
    }
    
    $(pagination).html(btnWrap);
    
    var btn = '.bakery .pagination button'; 
    
    function moveFader(index){
        $(photo).stop().fadeOut(speed); 
        $(photo).eq(index).stop().fadeIn(speed); 
        $(btn).removeClass('active');
        $(btn).eq(index).addClass('active');
    }
    
    var basic = 0;
    moveFader(basic);
    var lastNum = num - 1; 
    
    var auto = setInterval(function(){
        if(basic == lastNum){
            basic = 0;
        }else{
            basic++; 
        }
        
        moveFader(basic); 
    },changeSpeed);
    
    $(btn).click(function(){
        var index= $(this).index();
        
        clearInterval(auto);
        
        moveFader(index);
    });
    
});

//workshop
$(document).ready(function(){

    $(window).scroll(function(){
        
        var sTop = $(window).scrollTop();
        
        $('.workshop').each(function(index){
            
            var divTop = $(this).offset().top;
            
            if(sTop > divTop - 600){ 
                $(this).addClass('active');
            }
            if(sTop < divTop - 700 ){
                $(this).removeClass('active');
            }
        });
        
    });

});


























