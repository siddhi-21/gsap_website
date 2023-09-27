let tl=gsap.timeline();

tl.from("nav img,#nav-main,#nav-btn",{
 y:-100,
 duration:1,
 delay:1,
 opacity:0,
 stagger:0.2,
});
tl.from(".heading h3",{
    y:100,
    opacity:0,
    stagger:0.2,
    delay:0.2,
    duration:1
})
tl.from("#img-left ,#img3,#img4,#img2",{
    x:100,
    opacity:0,
    scale:0,
    delay:0.2,
    duration:1
})
tl.from(".scroll",{
    scale:0,
    opacity:0
})
tl.to(".scroll",{
    y:40,
    repeat:-1,
    yoyo:true
})