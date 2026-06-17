document.addEventListener('DOMContentLoaded', () => {
    const iconos = ['🐂', '🐃', '🥩', '🚜', '🌾'];
    let cartas = [...iconos, ...iconos].sort(() => Math.random() - 0.5);
    let volteadas = [];
    let bloqueado = false;
    const tablero = document.getElementById('tablero');

    cartas.forEach((icono) => {
        const carta = document.createElement('div');
        carta.classList.add('carta');
        carta.dataset.valor = icono;
        carta.onclick = function() {
            if (bloqueado || this.classList.contains('volteada')) return;
            this.textContent = this.dataset.valor;
            this.classList.add('volteada');
            volteadas.push(this);

            if (volteadas.length === 2) {
                bloqueado = true;
                setTimeout(() => {
                    const [c1, c2] = volteadas;
                    if (c1.dataset.valor !== c2.dataset.valor) {
                        c1.textContent = '';
                        c1.classList.remove('volteada');
                        c2.textContent = '';
                        c2.classList.remove('volteada');
                    }
                    volteadas = [];
                    bloqueado = false;
                }, 800);
            }
        };
        tablero.appendChild(carta);
    });
});