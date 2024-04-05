function MudarVideo(skill, id) {
            let video = document.getElementById("video-principal")
            let skills = document.getElementById(id)
            let verificarAtual = video.src === caminhos[skill]

            if (verificarAtual) {
                 return
            }

            let caminhos = {
                "martelo":"./assets/imagens/giftexte.mp4",
                "raio":"./assets/imagens/giftexte.mp4",
                "veneno":"./assets/imagens/giftexte.mp4",
                "fogo":"./assets/imagens/giftexte.mp4"
            }

            video.src = caminhos[skill]
}
        

function MudaRunas(runa) {
    const RunePrincipal = document.getElementById("Runa-principal")
    const TitleRune = document.getElementById("Title-runas")
    const ParagraphRune = document.getElementById("ParagraphRune")

    const RunasCaminhos = {
        'double-cast': '../assets/imagens/runes/Double-Cast-Rune.png',
        'explosion-area': '../assets/imagens/runes/Explosion-Area-Rune.png',
        'fire': '../assets/imagens/runes/Fire-Rune.png',
        'ice': '../assets/imagens/runes/Ice-Rune.png',
        'Lightning':'../assets/imagens/runes/Lightning-Rune.png'
    }

    const Titles = {
        'double-cast': 'Ataque Duplo',
        'explosion-area': 'Runa de Explosão',
        'fire': 'Runa de fogo',
        'ice': 'Runa de Gelo',
        'Lightning':'Runa de Raio'
    }


    const discricao = {
        'double-cast': 'Chance de soltar duas habilidade sem uso adicional de mana',
        'explosion-area': 'Aumenta tamanho de explosão e mais coisas',
        'fire': 'Aumenta dano de fogo',
        'ice': 'Aumenta dano de Gelo',
        'Lightning':'Aumenta dano de Raio'
    }

    

    TitleRune.innerHTML = Titles[runa]
    RunePrincipal.src = RunasCaminhos[runa]
    ParagraphRune.innerHTML = discricao[runa]

}