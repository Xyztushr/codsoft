
const time = gsap.timeline()


time.from("nav a,#logo",{
    y:-20,
    
    opacity:0
})
time.from("#hleft,#hright",{
    opacity:0,
    duration:1
})
time.from("#hright #image",{
    rotate:10,
})
time.to("#linx",{
    opacity:100,
    rotate: 360,
    duration:1,
    width:"140%"
})
time.to("#liny",{
    opacity:100,
    rotate: -270,
    duration:1,
    width:"140%"
})
const secondtl = gsap.timeline()
secondtl.from(".container .skill-box",{
    opacity:0,
    x:50,
    stagger:1,
    duration:2,
    scrollTrigger:{
        scrub:2,
        start:"70%",
        end:"100%",
    }
})
secondtl.from(".elem, .text",{
    repeat:-1,
    yoyo:true,
    duration:5,
    y:20

})