const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');
const menu = document.querySelector('.nav__menu');


// open Nav Menu

menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
})

// Close Nav Menu

const closeNav = () => {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
}

closeBtn.addEventListener('click', closeNav);


// close Nav Menu when menu items are clicked

if(window.innerWidth < 1024) {
    document.querySelectorAll(".nav__menu li a").forEach(navItem => {
        navItem.addEventListener('click', closeNav)
    })
}

// Change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})


//fetches testimonials for testimonial arrays
const fetchTestimonials = () => {
    let testimonialsContainer = document.querySelector('.testimonials__container');
    testimonialsContainer.innerHTML = '';


//loop through array and print testimonial

testimonials.forEach(testimonial => {
    const newTestimonial = document.createElement('article');
    newTestimonial.className = 'testimonial';
    newTestimonial.innerHTML = `
                    <p>
                        "${testimonial.quote}"
                    </p>
                    <div class="testimonial__client">
                        <span class="avatar">
                            <img src="${testimonial.avatar}">
                        </span>
                        <div class="testimonial__work">
                            <p><b>${testimonial.name}</b></p>
                            <small>${testimonial.title}</small>
                        </div>
                    </div>
                    `
                    testimonialsContainer.append(newTestimonial);
    })
    

}






window.addEventListener('load', fetchTestimonials)