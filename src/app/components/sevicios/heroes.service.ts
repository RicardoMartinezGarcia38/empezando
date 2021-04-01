
import { Injectable } from '@angular/core';
import { HeroesComponent } from '../heroes/heroes.component';

@Injectable()
    export class HeroesService {
        private heroes: Heroe[] = [
            {
                nombre: 'Varian',
                bio: 'Varian Wrynn, también conocido como Lo Gosh el "Lobo Fantasmal", es el hijo del fallecido rey Llane Wrynn y antiguo rey de Ventormenta. Bajo su mandato, los humanos de Ventormenta llevaron a la Alianza a la victoria contra el Rey Exánime en Rasganorte y se enfrentó a la Horda de Garrosh Grito Infernal durante los años de conflicto.',
                img: 'assets/img/Varian_padre.jpg',
                aparicion: 'World of Warcraft',
                casa: 'assets/img/alianzalogo.png',
                apodo: 'Lo Gosh el "Lobo Fantasmal"',
                edad: '45 Años'},
                {
                nombre: 'Jaina',
                bio: 'Jaina Valiente (Jaina Proudmoore en Warcraft III) es la hechicera humana viva más poderosa de la actualidad. Pertenece al linaje de la Casa Valiente cuyos progenitores Daelin y Katherine han servido como gobernantes del reino humano de Kul Tiras. Hasta su reciente regreso a su hogar, ostentó importantes cargos como líder del Kirin Tor y gobernante de Theramore y de Dalaran.',
                img: 'assets/img/Jaina.jpg',
                aparicion: 'World of Warcraft',
                casa: 'assets/img/alianzalogo.png',
                apodo: 'La hija del Mar',
                edad: '43 Años'},
                {
                nombre: 'Tyrande',
                bio: 'Tyrande Susurravientos (WoW) (pronunciado como Ti-Ran-da), es la suma sacerdotisa de la diosa Elune, la líder de las Hermanas de Elune, y la principal responsable del gobierno de los elfos nocturnos. Su corazón pertenece al archidruida Malfurion, con quien combatió en el pasado en muchas ocasiones contra los peligros que acecharon a su raza. Tyrande se encuentra actualmente el Templo de la Luna en la ciudad de Darnassus.',
                img: 'assets/img/tyrande.jpg',
                aparicion: 'World of Warcraft',
                casa: 'assets/img/alianzalogo.png',
                apodo: 'Guerrera Nocturna',
                edad: '18532 Años'},
                {
                nombre: 'Silvanas',
                bio: 'Titulada a veces también como "la Dama Oscura" o como "la Reina alma en pena", es la líder suprema de los Renegados, una de las facciones más poderosas de no-muertos en Azeroth. En vida, Sylvanas fue la General Forestal de Lunargenta, cuyo liderazgo y proezas marciales fueron sin igual. Durante la Tercera Guerra, defendió con valentía Quel Thalas de una invasión de la Plaga dirigida por el caballero de la muerte Arthas Menethil. Al final, sin embargo, Sylvanas cayó en batalla. En lugar de honrar a la General Forestal con una muerte rápida, Arthas arrancó su alma y la transformó en una alma en pena: una agente astuta y vengadora del Rey Exánime, apoderada por el odio.',
                img: 'assets/img/silvanas.jpg',
                aparicion: 'World of Warcraft',
                casa: 'assets/img/hordalogo.png',
                apodo: 'El Alma en Pena',
                edad: '230 Años'},
                {
                nombre: 'Thrall',
                // tslint:disable-next-line: max-line-length
                bio: 'Thrall, (llamado Go el al nacer) hijo de Durotan, es el antiguo Jefe de Guerra de la restaurada Horda chamanística y fundador de la nación de Durotar en Kalimdor. Tras la caída del Rey Exánime y la creciente invasión elemental que culminó en el Cataclismo, Thrall dejó el puesto de líder de la Horda y se unió al Anillo de la Tierra para combatir con los furiosos elementales.',
                img: 'assets/img/Thrall.jpg',
                aparicion: 'World of Warcraft',
                casa: 'assets/img/hordalogo.png',
                apodo: 'Guardian de la Tierra',
                edad: '115 Años'},
                {
                nombre: 'Baine',
                bio: 'El Gran Jefe Baine Pezuña de Sangre es el hijo del difunto líder tauren Cairne Pezuña de Sangre, a quien admiraba como un modelo a seguir. demás de ser un guerrero sin igual, sus verdaderos talentos se encuentran en la área de la diplomacia. Es una poderosa fuerza en cuanto moderación, sabiduría y unidad dentro de la Horda, especialmente en sus tratos con la Alianza.',
                img: 'assets/img/Bane.png',
                aparicion: 'World of Warcraft',
                casa: 'assets/img/hordalogo.png',
                apodo: 'Pezuña de sangre',
                edad: '150 Años'}
        ];

    constructor() {
            console.log('Servicio listo para usar');
        }
        // tslint:disable-next-line:typedef
        getHeroes(): Heroe[]{
           return this.heroes;
        }
        // tslint:disable-next-line:typedef
        getHeroe( idx: string ){
            return this.heroes[idx];
        }

        buscarHeroes( termino: string ): Heroe[]{
            const heroesArr: Heroe[] = [];
            termino = termino.toLowerCase();

            // tslint:disable-next-line:prefer-const
            for ( let heroe of this.heroes ){

                // tslint:disable-next-line:prefer-const
                let nombre = heroe.nombre.toLowerCase();

                if ( nombre.indexOf( termino ) >= 0 ){
                    heroesArr.push( heroe );
                }
            }
            return heroesArr;
        }
    }

export interface Heroe{
        nombre: string;
        bio: string;
        img: string;
        aparicion: string;
        casa: string;
        apodo: string;
        edad: string; }
