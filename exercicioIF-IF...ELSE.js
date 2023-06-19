function atleta(){
let idade = 8

    if(idade >= 6 && idade <= 10){
        console.log('Infantil') 
        return 
    }else if(idade >= 11 && idade <= 15){
        console.log('Infanto-Juvenil') 
        return
    }else if(idade >= 16 && idade <= 21){
        console.log('Juvenil') 
        return
    }else if(idade >= 22 && idade <=35){
        console.log('Adulto')
        return
    }else{
        console.log('você não esta apto')
    }
}
atleta()

function atleta(){
let idade = 37

    if(idade >= 6 && idade <= 10){
        console.log('Infantil')
    }
    if(idade >= 11 && idade <= 15){
        console.log('Infanto-Juvenil')
    }
    if(idade >= 16 && idade <= 21){
        console.log('Juvenil')
    }
    if(idade >= 22 && idade <=35){
        console.log('Adulto')
    }
    if(idade <= 5 || idade >= 36){
        console.log('você não esta apto')
    }
}
atleta()