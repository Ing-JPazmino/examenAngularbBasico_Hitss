import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { IDataPokemon } from 'src/app/interfaces/pokemonInterface';
import { PokemonService } from 'src/app/service/pokemonService';
import { ServicesComponent } from 'src/app/services/services.component';

@Component({
  selector: 'app-pagina-tabla',
  templateUrl: './pagina-tabla.component.html',
  styleUrls: ['./pagina-tabla.component.css']
})
export class PaginaTablaComponent implements OnInit{

  listPokemon:IDataPokemon[] = [];
  columnTabla: any;
  loading = false;

  constructor(private ruta:Router,
              //private services: ServicesComponent,
              private pokemonService: PokemonService,
              private mensajes: MessageService){
      
    }
  
  ngOnInit(): void {
    this.iniColumnaTabla();
    console.log('Estoy en el ngOnInit');
    this.loading=true;
    //this.services.getAllPokemon().subscribe(
    this.pokemonService.getAllPokemon().subscribe(
      {
        next: (datos) => {
          console.log("Aqui estan los datos: " + datos.results);
          this.loading=false;
          this.listPokemon = datos.results;
          this.mensajes.add({ severity: 'success', summary: 'Satisfactorio', detail: 'Exito' });
        },
        error: (err) => {
          console.log(err);
          this.loading=false;
          this.mensajes.add({ severity: 'error', summary: 'Error', detail: 'Hubo un problema' });
        }
      }
    );
  }
//cabecera
  iniColumnaTabla(){
    this.columnTabla = [
      {
        field: 'name', header: 'Nombre de Pokemon'
      },
        {
          field: 'url', header: 'Direccion URL'
        }
    ];
  }

}
