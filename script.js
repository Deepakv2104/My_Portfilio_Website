let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

let typed = new Typed('.auto-input',{
    strings:['Front-End Developer!','Freelancer!','Sketch Artist!','Photographer!'],
    typeSpeed:60,
    backSpeed:60,
    backDelay:2000,
    loop:true,
})