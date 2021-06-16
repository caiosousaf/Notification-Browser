const View = {
    render({ minutes, seconds }) {
        document.getElementById("timer").innerHTML =  `
        <p>Próxima Lembrança </p>
        <span>${minutes}:${seconds}</span>
        `;
    }
}

export { View };