function changeColorH5() {
    const colors = ['green', 'red', 'blue'];
    const h5s = document.querySelectorAll('h5');
    
    h5s.forEach(h5 => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        h5.style.color = randomColor;
    });
}

// Asignar el evento a cada h5
document.querySelectorAll('h5').forEach(h5 => {
    h5.addEventListener('click', changeColorH5);
});