
window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

let toTop = document.createElement('button');
toTop.classList.add('back-to-top');
toTop.innerHTML = '⬆';
document.body.appendChild(toTop);

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        toTop.classList.add('show');
    } else {
        toTop.classList.remove('show');
    }
});

toTop.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

let courseImages = document.querySelectorAll('.course-img');
courseImages.forEach(img => {
    img.addEventListener('click', function() {
        let lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        document.body.appendChild(lightbox);

        let imgElement = document.createElement('img');
        imgElement.src = img.src;
        lightbox.appendChild(imgElement);

        lightbox.addEventListener('click', function() {
            lightbox.remove();
        });
    });
});

let navbar = document.querySelector('.navbar');
let toggleButton = document.createElement('button');
toggleButton.classList.add('navbar-toggle');
toggleButton.innerHTML = '☰';
header.insertBefore(toggleButton, navbar);

toggleButton.addEventListener('click', function() {
    navbar.classList.toggle('active');
});
