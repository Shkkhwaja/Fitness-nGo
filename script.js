gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();



//   GSAP DOM Animation

gsap.from('nav',{
    y:-65,
    duration:2,
})

gsap.from(".nav-logo",{
    y:-65,
    duration:2,
    delay:1

})

gsap.from('ul a > li',{
    y:-65,
    duration:1.5,
    stagger:0.2,
    opacity:0,
    delay:1.5
})
  
gsap.from('.main-heading',{
    duration:2.5,
    ease: "bounce.out",
    y: -250,
    delay:3
})
gsap.from('.black-box img',{
    x:-1500,
    duration:2,
    delay:2
})
  

gsap.registerPlugin(ScrollTrigger);

gsap.from("#exp h2", {
    x:-200,
    duration:1,
    opacity:0,
    scrollTrigger: {
        trigger: "#exp h2",
        start: 'top 50%', 
        end: 'bottom 95%', 
        // markers: true,
        scroller: "#main",
        scrub:2
    }
});
gsap.from("#exp p", {
  x:-200,
  y:50,
  duration:1,
  opacity:0,
  scrollTrigger: {
      trigger: "#exp p",
      start: 'top 100%', 
      end: 'bottom 100%', 
      // markers: true,
      scroller: "#main",
      scrub:2
  }
});

gsap.from(".second-page img", {
    x:200,
    y:-40,
    duration:1,
    opacity:0,

    scrollTrigger: {
        trigger: ".second-page img",
        start: 'top 50%', 
        end: 'bottom 95%', 
        // markers: true,
        scroller: "#main",
        scrub:2,
        stagger:0.2,

    }
});

gsap.to("#ngo-logo", {
   
  rotation: 360,
  duration: 2,
     scrollTrigger: {
      trigger:"#ngo-logo",
      scroller:"#main",
      start: 'top 90%', 
      end: 'bottom 40%',
      // markers:true,
      scrub:2

     }
     });



     gsap.from("#girl", {
      x:-200,
      y: 80,
      duration:1,
      opacity:0,
  
      scrollTrigger: {
          trigger: "#girl",
          start: 'top 70%', 
          end: 'bottom 95%', 
          // markers: true,
          scroller: "#main",
          scrub:2,
  
      }
  });

  gsap.from(".exp-content", {
    x:200,
    duration:1,
    opacity:0,

    scrollTrigger: {
        trigger: ".exp-content",
        start: 'top 70%', 
        end: 'bottom 95%', 
        // markers: true,
        scroller: "#main",
        scrub:2,

    }
});

gsap.from("#exp-img-2", {
  x:-200,
  y: 80,
  duration:1,
  opacity:0,

  scrollTrigger: {
      trigger: "#exp-img-2",
      start: 'top 70%', 
      end: 'bottom 95%', 
      // markers: true,
      scroller: "#main",
      scrub:2,

  }
});

gsap.from(".exp-content-2", {
x:200,
duration:1,
opacity:0,

scrollTrigger: {
    trigger: ".exp-content-2",
    start: 'top 70%', 
    end: 'bottom 95%', 
    // markers: true,
    scroller: "#main",
    scrub:2,

}
});

gsap.from(".exp-content-3 img:nth-child(1)", {
  x:-200,
  y: 80,
  duration:1,
  opacity:0,

  scrollTrigger: {
      trigger: ".exp-content-3 img:nth-child(1)",
      start: 'top 50%', 
      end: 'bottom 100%', 
      // markers: true,
      scroller: "#main",
      scrub:2,

  }
});

gsap.from(".exp-content-3 img:nth-child(2)", {
  x:-200,
  y: 80,
  duration:1,
  opacity:0,

  scrollTrigger: {
      trigger: ".exp-content-3 img:nth-child(2)",
      start: 'top 45%', 
      end: 'bottom 100%', 
      // markers: true,
      scroller: "#main",
      scrub:2,

  }
});


gsap.from(".exp-content-text", {
  duration:1,
  ease: "bounce.out",
  y: -250,
  opacity:0,

  scrollTrigger: {
      trigger: ".exp-content-text",
      start: 'top 15%', 
      end: 'bottom 70%', 
      // markers: true,
      scroller: "#main",
      scrub:1,

  }
});



gsap.from("#final-img", {
  duration:1,
  opacity:0,

  scrollTrigger: {
      trigger: "#final-img",
      start: 'top 65%', 
      end: 'bottom 80%', 
      // markers: true,
      scroller: "#main",
      scrub:2,

  }
});

gsap.from(".exp-content-text-2", {
  duration: 2,
  y:50,
  opacity:0,

  scrollTrigger: {
      trigger: ".exp-content-text-2",
      start: 'top 60%', 
      end: 'bottom 90%', 
      // markers: true,
      scroller: "#main",
      scrub:2,

  }
});


//    JQuery


$(document).ready(function(){

    $("#pass-btn").click(function(){
        $(".free-pass-form").fadeIn("slow")

    })
    $("#close-btn").click(function(){
        $(".free-pass-form").fadeOut("1000")

    })

})

let btnOne = document.getElementsByClassName("nav-btn-1")[0]
btnOne.addEventListener('click',()=> {
    alert("Go To JOIN Section 👉")
})