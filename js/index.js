function MudarVideo(skill, classe) {
    const video = document.getElementById("video-principal")
    const skillAtual = document.getElementsByClassName(classe)
    const skillOutras = document.getElementsByClassName("skill-img")

    const caminhos = {
        "fireAura":"/assets/videos/fireAura.mp4",
        "holyCross":"/assets/videos/holyCross.mp4",
        "lightning":"/assets/videos/lightningStrike.mp4",
        "poisonPotion":"/assets/videos/poisonPotion.mp4"
    }


    // pega url atual do usuario para contacatenar com a src do caminhos 
    const url_atual = window.location.protocol + "//" + window.location.host
    const caminhoCompleto = url_atual + caminhos[skill]


    // verifica se é o mesmo video, se for ele para a função
    if (video.src == caminhoCompleto) {
        return 
    }

    video.src = caminhos[skill]
     
}
        

function MudaRunas(runa) {
    const RunePrincipal = document.getElementById("Runa-principal")
    const TitleRune = document.getElementById("Title-runas")
    const ParagraphRune = document.getElementById("ParagraphRune")

    const RunasCaminhos = {
        'double-cast': './assets/imagens/runes/Double-Cast-Rune.png',
        'explosion-area': './assets/imagens/runes/Explosion-Area-Rune.png',
        'fire': './assets/imagens/runes/Fire-Rune.png',
        'ice': './assets/imagens/runes/Ice-Rune.png',
        'Lightning':'./assets/imagens/runes/Lightning-Rune.png'
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