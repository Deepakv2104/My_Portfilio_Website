let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

let typed = new Typed('.auto-input',{
    strings:['Full Stack Developer!','Freelancer!'],
    typeSpeed:60,
    backSpeed:60,
    backDelay:2000,
    loop:true,
})
let navLinks = document.querySelectorAll('nav a');
let sections = document.querySelectorAll('section'); // Note the use of querySelectorAll

window.addEventListener('scroll', function () {
    const scrollPos = window.scrollY;
    sections.forEach(section => {
        if (scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active');
                }
            });
        }
    });
});
