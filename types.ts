// type IAnimal = {
//     nome: string;
//     tipo: 'terrestre' | 'aquático';
//     executarRugido(alturaEmDecibeis: number): void;
// }


interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
}

interface IFelino extends IAnimal {
    visaoNortuna: boolean;
}

interface ICanino extends IAnimal{
    porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino; //opicionais as propriedades das 2 interfaces

type IDomestico2 = IFelino & ICanino; //obrigatorio as propriedades das 2 interfaces

const animalType: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre',
}