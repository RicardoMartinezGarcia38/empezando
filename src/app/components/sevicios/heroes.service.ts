
import { Injectable } from '@angular/core';
import { HeroesComponent } from '../heroes/heroes.component';

@Injectable()
    export class HeroesService {
        private heroes: Heroe[] = [
            {
                nombre: 'Varian, Rey de Ventormenta',
                bio: 'Hijo del rey Lein y unico sucesor al trono de Ventormenta',
                img: 'assets/img/Varian_padre.jpg',
                aparicion: 'World of Warcraft',
                casa: 'assets/img/alianzalogo.png',
                apodo: 'Codos el Galdiador'},
                {
                nombre: 'Jaina de la casa Valiente',
                bio: 'Hija menor de Daelin y Katherine Valiente, es una de las magas mas poderosas de Azerot',
                img: 'assets/img/Jaina.jpg',
                aparicion: 'World of Warcraft',
                casa: 'assets/img/alianzalogo.png',
                apodo: 'La hija del Mar'},
                {
                nombre: 'Tyrande sacerdotisa de Elune',
                bio: 'Hijo del rey Lein y unico sucesor al trono de Ventormenta',
                img: 'assets/img/tyrande.jpg',
                aparicion: 'World of Warcraft',
                casa: 'assets/img/alianzalogo.png',
                apodo: 'Guerrera Nocturna'},
                {
                nombre: 'Silvanas',
                bio: 'Hijo del rey Lein y unico sucesor al trono de Ventormenta',
                img: 'assets/img/silvanas.jpg',
                aparicion: 'World of Warcraft',
                casa: 'assets/img/hordalogo.png',
                apodo: 'El Alma en Pena'},
                {
                nombre: 'Thrall jefe de guerra',
                bio: 'Hijo del rey Lein y unico sucesor al trono de Ventormenta',
                img: 'assets/img/Thrall.jpg',
                aparicion: 'World of Warcraft',
                casa: 'assets/img/hordalogo.png',
                apodo: 'Guardian de la Tierra'},
                {
                nombre: 'Bane pezuña de sangre',
                bio: 'Hijo del rey Lein y unico sucesor al trono de Ventormenta',
                img: 'assets/img/Bane.png',
                aparicion: 'World of Warcraft',
                casa: 'assets/img/hordalogo.png',
                apodo: 'Señor de Cima del Trueno'}
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
            for ( let heroe of this.heroes ){
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
        apodo: string; }
