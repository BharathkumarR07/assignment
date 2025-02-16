gsap.to(".hero-title", { opacity: 1, y: 0, duration: 1, delay: 0.5 });
gsap.to(".hero-description", { opacity: 1, y: 0, duration: 1, delay: 1 });

const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(container => {
    container.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const offsetX = (clientX - container.offsetLeft - container.offsetWidth / 2) / 30;
        const offsetY = (clientY - container.offsetTop - container.offsetHeight / 2) / 30;
        container.querySelector('.image').style.transform = `scale(1.05) translate(${offsetX}px, ${offsetY}px)`;
    });

    container.addEventListener('mouseleave', () => {
        container.querySelector('.image').style.transform = 'scale(1)';
    });
});
