document.querySelectorAll('.image-container').forEach(container => {
    const image = container.querySelector('.zoom-target');
    const zoomWindow = container.querySelector('.zoom-window');
    
    image.addEventListener('load', () => {
        zoomWindow.style.backgroundImage = `url('${image.src}')`;
    });
    
    if (image.complete) {
        // Image was already cached/loaded
        zoomWindow.style.backgroundImage = `url('${image.src}')`;
    }
    
    container.addEventListener('mousemove', (e) => {
        const rect = image.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const percentX = (x / rect.width) * 100;
        const percentY = (y / rect.height) * 100;
        
        zoomWindow.style.display = 'block';
        zoomWindow.style.left = `${x + 20}px`;
        zoomWindow.style.top = `${y + 20}px`;
        zoomWindow.style.backgroundPosition = `${percentX}% ${percentY}%`;
    });
    
    container.addEventListener('mouseleave', () => {
        zoomWindow.style.display = 'none';
    });
});