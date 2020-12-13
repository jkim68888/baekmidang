//header scroll
$(document).ready(function(){
    
    $(window).scroll(function(){
        
        var top = $(window).scrollTop();

        if(top > 0){
           $('header').addClass('active');
        }else{
           $('header').removeClass('active');
        }
    });
    
});

//gnb
$(document).ready(function(){
    
    var newBg = $('<div class="sub_bg"></div>');

    $('header').append(newBg);
    
    var gnb = '.gnb';
    var main = '.main_nav';
    var sub = '.sub_nav';
    var bg = '.sub_bg';
    var speed = 500;

    $(gnb).hover(function(){
        $(sub + ', ' + bg).stop().slideDown(speed);
        $(main).removeClass('active');
    },function(){
        $(sub + ', ' + bg).stop().slideUp(speed);
        $(main).removeClass('active');
    });

    $(main).first().focus(function(){
        $(gnb).trigger('mouseenter');
        $(this).addClass('active');
    });

    $(main).focus(function(){
        $(main).removeClass('active'); 
        $(this).addClass('active'); 
    });

    $(main).first().keydown(function(e){
        if(e.keyCode == 9){ 
            if(e.shiftKey){ 
                $(gnb).trigger('mouseleave');
                $(this).removeClass('active'); 
            }
        }
    });
    
    $(sub).last().find('li:last a').keydown(function(e){
        if(e.keyCode == 9){ 
            if(!e.shiftKey){ 
                $(gnb).trigger('mouseleave');
                $(main).removeClass('active');
            }
        }
    });
    
    $(sub).find('li:last a').focus(function(){
        $(main).removeClass('active');
        $(this).parents(sub).prev().addClass('active');
    });
});

//familysite
$(document).ready(function(){
    
    var btn = '.familysite button';
    var speed = 400; 
    var icon = '.fs_icon';
    var active = 'active';
    
    $(btn).click(function(){
        
        $(this).next().stop().slideToggle(speed);
        $(this).find(icon).toggleClass(active);
        
        $(btn).parent().mouseleave(function(){
            $(this).find('ul').stop().slideUp(speed); 
            $(this).find(icon).removeClass(active);
        });
    });
    
    $(btn).next().find('li:last a').keydown(function(e){
        if(e.keyCode == 9){ 
            if(!e.shifKey){ 
                $(btn).parent().trigger('mouseleave');
            }
        }
    });
    
    $(btn).keydown(function(e){
        if(e.keyCode == 9){
            if(e.shiftKey){
                $(this).parent().trigger('mouseleave');
            }
        }
    });
    
});

//top_btn
$(document).ready(function(){
    
    var btn = '.top_btn a';
    var speed = 1200; 
    var easing = 'easeOutQuart'; 
    
    $(window).scroll(function(){
        
        var top = $(window).scrollTop(); 
        
        if(top > 200){
            $(btn).parent().stop().fadeIn(600);
        }else{
            $(btn).parent().stop().fadeOut(600);
        }
        
    });
    
    $(window).resize(function(){
        
        var wWidth = $(window).width();
        var minWidth = 1180;
        var stopWidth = minWidth + 300;
        
        if(wWidth < stopWidth){
            $(btn).parent().stop().fadeOut(600);
        }else{
            $(btn).parent().stop().fadeIn(600);
        }
    });
    
    $(btn).click(function(e){
        
        e.preventDefault(); 
        
        $('html, body').stop().animate({
            scrollTop: 0
        },speed,easing);
        
    });

});





























