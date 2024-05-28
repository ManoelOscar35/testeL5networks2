import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ListaPersonagens } from 'src/app/interfaces/listaPersonagens';
import { Personagem } from 'src/app/interfaces/personagem';
import { ApiService } from 'src/app/services/api.service';
import { StoreService } from 'src/app/shared/store.service';

@Component({
  selector: 'app-detalhes-personagens',
  templateUrl: './detalhes-personagens.component.html',
  styleUrls: ['./detalhes-personagens.component.scss']
})
export class DetalhesPersonagensComponent {

  personagem!: Personagem | null;
  nome!: string;
  page!: number;
  unsubscribe$: Subject<any> = new Subject<any>();

  constructor(
    private apiService: ApiService,
    private storeService: StoreService
  ) {}

  ngOnInit() {
    this.getNomePersonagem();
    this.getPage();
    this.getPersonagens();
  }

  // obtem o personagem e insere no atributo personagem
  getPersonagens() {
    this.apiService.getPersonagens(this.page).pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (res: ListaPersonagens) => { 
        res.results.forEach((p: Personagem) => {
          if(p.name === this.nome) {
            this.personagem = p;
          }
        });
      },
      error: (err: Error) => console.error(err),
      complete: () => console.log("Stream concluída com sucesso!")
    })
  }

  //obtem o nome do personagem
  getNomePersonagem() {
    this.storeService.getNomePersonagem().subscribe({
      next: (res: any) => this.nome = res
    });
  }

  //Obtém a página e passa para o atributo page
  getPage() {
    this.storeService.getPage().subscribe({
      next: (res: any) => this.page = res
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next([]);
  }
}
