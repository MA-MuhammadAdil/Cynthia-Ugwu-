const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

  function firstpage(){
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

    .to(".boundingelement", {
        y: '0',
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: 0.2
    })

    .from("#herofooter", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    });
} 
var timer ;

function mouseskew() {
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener('mousemove', function(detx) {
        clearTimeout(timer)


        xscale = gsap.utils.clamp(0.8, 1.2, detx.clientX - xprev);
        yscale = gsap.utils.clamp(0.8, 1.2, detx.clientY - yprev);
  
        xprev = detx.clientX;
        yprev = detx.clientY;

        // Call circleMouse to move and scale the mini circle
        circleMouse(xscale, yscale);
        
       timer =  setTimeout(function(){
    document.querySelector("#minicircle").style.transform = `translate(${detx.clientX}px, ${detx.clientY}px) scale(1,1)`;

         },100)
    });
}

function circleMouse(xscale, yscale) {
     window.addEventListener("mousemove",function(detx){
        this.document.querySelector("#minicircle").style.transform = `translate(${detx.clientX}px,${detx.clientY}px)`
     })
}
mouseskew();
firstpage();
circleMouse();
 

document.querySelectorAll(".elem").forEach(function(elem){


var rotate  = 0 ;
var diffrot = 0 ;


    elem.addEventListener("mousemove",function(detail){

    var diff = detail.clientY - elem.getBoundingClientRect().top;
        diffrot = detail.clientX - rotate;
        rotate = detail.clientX;

        gsap.to(elem.querySelector("img"),{
            // display:'block',
            opacity:1,
            ease:Power1,
            top:diff,
            left:detail.clientX,
            rotate:gsap.utils.clamp(-20,20,diffrot )
            
        }
        )

    });



    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.querySelector("img"),{
            // display:'block',
            opacity:0,
            ease:Power1,           
        }
        )  
    })


})


 