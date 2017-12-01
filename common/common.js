/* navigation bar*/
var n=true;
var a =document.getElementById('nav_line');
var b=document.getElementsByClassName('l1')[0];
var c=document.getElementsByClassName('l2')[0];
var d=document.getElementsByClassName('l3')[0];
var hover_menu=document.getElementById('hover_menu');
var pmenu=document.getElementsByClassName('pmenu');

var mobm2=document.getElementsByClassName('mobm2');

var pmenumob=document.getElementsByClassName('pmenumob');
e=document.getElementsByClassName('mob_menu')[0];

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
var ptick=0;
var pmtick=0;
function pmenu_up()
{if(ptick==0){
    pmenu[0].style.display="block";}
 
 if(ptick==1){
    pmenu[0].style.display="none";}
 
 ptick=!ptick;
}



hover_menu.addEventListener('click',pmenu_up,false);


function pmenumob_up()
{if(pmtick==0){
    pmenumob[0].style.display="block";}
 
 if(pmtick==1){
    pmenumob[0].style.display="none";}
 
 pmtick=!pmtick;
}

mobm2[0].addEventListener('click',pmenumob_up,false);
