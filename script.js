document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('h1');
    const container = document.querySelector('.container');

    // Mouse move effect for container
    container.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = container.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        
        const xOffset = (x - 0.5) * 20;
        const yOffset = (y - 0.5) * 20;
        
        container.style.transform = `perspective(1000px) rotateX(${yOffset}deg) rotateY(${xOffset}deg)`;
    });

    // Reset container position when mouse leaves
    container.addEventListener('mouseleave', () => {
        container.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });

    // Smooth transition for container movements
    container.style.transition = 'transform 0.3s ease-out';
});