$(document).ready(function(){
    $('.companybox').mouseenter(function () { 
        
        if (parseInt($(this).find('.companytotal:first').text()) >50000) {
            $(this).css("background-color", "green");
            $(this).css("border", "1px solid green");
            $(this).find('.counting').each(function (indexInArray, valueOfElement) { 
                
                if (parseInt($(this).text()) > 3) {
                    $(this).parent().parent().css("color", "yellow");
                }
                
            })
            
        } else {
            $(this).css("background-color", "yellow");
        }
        
    });
    jQuery(document).on('mouseleave','.companybox', function(data) {
    $(this).css("background-color", "white");
    $(this).find('.counting').each(function (indexInArray, valueOfElement) { 
                 
     if (parseInt($(this).text()) > 3) {
         $(this).parent().parent().css("color", "black");
     }
     
 })
   });
});