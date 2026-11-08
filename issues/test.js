document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('neon-cursor');
    cursor.style.left = '${e.clientX}px';
    cursor.style.right = '${e.clientY}px'
});