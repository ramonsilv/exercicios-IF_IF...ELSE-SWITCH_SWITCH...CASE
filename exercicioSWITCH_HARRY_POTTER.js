function harry() {
    let personagem = prompt('digite o nome do personagem que queira saber: SIBILA TRELAWNEY / CHO CHANG / PETER PETTIGREW / NINFADORA TONKS / NARCISA MALFOY').toUpperCase()
    switch (personagem) {
        case "SIBILA TRELAWNEY":
            console.log('Corvinal')
            break
        case "CHO CHANG":
            console.log('Corvinal')
            break
        case "PETER PETTIGREW":
            console.log('Grifinória')
            break
        case "NINFADORA TONKS":
            console.log('Lufa-lufa')
            break
        case "NARCISA MALFOY":
            console.log('Sonserina')
            break
        default:
            console.log('Personagem não encontrada')
    }
} harry()