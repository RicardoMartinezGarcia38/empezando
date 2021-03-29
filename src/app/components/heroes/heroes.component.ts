import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../sevicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private heroesService: HeroesService, private router: Router ) { }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
    console.log( this.heroes );

  }
  verHeroe( idx: number ): void{
    this.router.navigate( ['/heroe', idx] );
  }

}
