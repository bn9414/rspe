

//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
        
        
         var hd1=document.getElementsByClassName('hd1');
         var hd2=document.getElementsByClassName('hd2');
         var hd3=document.getElementsByClassName('hd3');
         var hd4=document.getElementsByClassName('hd4');
         var hd5=document.getElementsByClassName('hd5');
         var hd6=document.getElementsByClassName('hd6');
         var hd7=document.getElementsByClassName('hd7');
        

function homeani()
{
    hd1[0].className=('hd1 homeani');
    hd2[0].className=('hd2 homeani');
    hd3[0].className=('hd3 homeani');
    hd4[0].className=('hd4 homeani');
    hd5[0].className=('hd5 homeani');
    hd6[0].className=('hd6 homeani');
    hd7[0].className=('hd7 homeani');
    
}
homeani();
        
        
        
	});
//end preloads screen//

