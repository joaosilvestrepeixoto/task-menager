
interface point {
    nome: string,
    idade: number,
    draw: () => void
 }

let drawPpomt = (point: {  nome: string, idade: number}) => {
    //...
}


    drawPpomt({
        nome: 'joao',
        idade: 14
    })