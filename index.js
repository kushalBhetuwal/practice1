window.addEventListener('scroll', (e)=>{
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>0);
})