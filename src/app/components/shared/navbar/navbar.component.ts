import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})


export class NavbarComponent implements OnInit {

  constructor( private router: Router ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  buscarHeroes( termino: string ){

    this.router.navigate( ['/buscar', termino] );
  }

}
