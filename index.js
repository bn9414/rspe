

//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});
//end preloads screen//



/* navigation bar*/
var n=true;
var a =document.getElementById('nav_line');
var b=document.getElementsByClassName('l1')[0];
var c=document.getElementsByClassName('l2')[0];
var d=document.getElementsByClassName('l3')[0];
var e=document.getElementsByClassName('mob_menu')[0];

function test(){
    if(n==true){
    b.className='line l1 lc1';
    d.className='line l3 lc3';
     c.className='line l2 lc2';
    e.className='mob_menu mob_open';
    }

if(n==false){
    b.className='line l1';
    d.className='line l3';
     c.className='line l2';
    e.className='mob_menu mob_close';
    }
n=!n;
}



a.addEventListener('click', test, false );
/* navigation bar*/