//types
//interfaces

interface IAnimal1 {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    executarRugido(alturaEmDecibeis: number): void;
}

const animal: IAnimal1 = {
    nome: 'Elefante',
    tipo: 'terrestre',
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}`)

}

// const animal2: IAnimal = {
//     nome: 'Elefante',
//     tipo: 'voador'
// }

interface IFelino1 extends IAnimal1 {
    visaoNortuna: boolean;
}

const felino: IFelino1 = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNortuna: true,
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}`)
}

// animal.executarRugido('aa');

animal.executarRugido(10);
