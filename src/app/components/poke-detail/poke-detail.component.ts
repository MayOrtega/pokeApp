import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss']
})
export class PokeDetailComponent implements OnInit {

  pokemon:any = '';
  pokemonType = [];
  pokemonImg = '';

  constructor(private PokemonService: PokemonService, private activateRouter:ActivatedRoute ){
    this.activateRouter.params.subscribe(
      params=>{
        this.getPokemon(params['id'])
      }
    );
  }
  ngOnInit(): void {
    
  }

  getPokemon(id:any){
    this.PokemonService.getPokemons(id).subscribe(
      res=>{
       this.pokemon = res;
       this.pokemonImg = this.pokemon.sprites.front_default;
       this.pokemonType = res.types[0].type.name;
      },
      err=>{
        console.log(err);
      }
    )
  }

}
