import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { IPokemon } from '../interfaces/pokemonInterface';

const API_GET_ALL_POKEMON = environment.API_GET__ALL_POKEMON;

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent {

  constructor(private http: HttpClient) { }

  createHeader(){
    let headers: HttpHeaders;
      headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
      .set('Acces-Control-Allow_Origin', '*');
    return headers;
  }

  getAllPokemon(){
    return this.http.get<IPokemon>(API_GET_ALL_POKEMON);
  }
}
