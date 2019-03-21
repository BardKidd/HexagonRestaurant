$(document).ready(function(){
    $('a[href^="#section"]:not([href="#"])').click(function(){
        let coordinate = $(this.hash);//hash可以直接做元件定義的處理，也就是說把取得到的目標放到coordinate上
        
        $('html,body').animate({
            scrollTop: coordinate.offset().top
        }, 800);
        
        return false;
    })
    
    
})