//types
//interfaces

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    executarRugido(alturaEmDecibeis: number): void;
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}`)

}

// const animal2: IAnimal = {
//     nome: 'Elefante',
//     tipo: 'voador'
// }

interface IFelino extends IAnimal {
    visaoNortuna: boolean;
}

const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNortuna: true,
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}`)
}

// animal.executarRugido('aa');

animal.executarRugido(10);
