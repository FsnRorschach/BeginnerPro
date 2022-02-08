const desenhar = () => {
    const canvas = document.getElementById('meuCanvas');
    const ctx = canvas.getContext('2d');

    // triangulo preenchido
    ctx.beginPath();
    ctx.moveTo(400, 470);
    ctx.lineTo(770, 250);
    ctx.lineTo(400, 25);
    ctx.lineTo(30, 250);
    ctx.fillStyle = 'rgb(255, 251, 0)';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(25 + 15 * 25, 20 + 10 * 23, 150, 0, Math.PI * 2, true);
    ctx.fillStyle = 'rgb(24, 47, 255)';
    ctx.fill();
}

document.onload = desenhar();