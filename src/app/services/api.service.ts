import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, from, map, mergeMap, of, retry, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListaPersonagens } from '../interfaces/listaPersonagens';
import { Personagem } from '../interfaces/personagem';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  //retorna lista de personagens
  getPersonagens(page: number): Observable<ListaPersonagens> {
    const url = `${environment.BASE_URL}/character/?page=${page}`;
    return this.httpClient.get<ListaPersonagens>(url)
    .pipe(
      retry(10) //numero de tentativas que vai conectar com o servidor
    )
  }

  //retorna Personagem(ens) de acordo com o termo da busca
  public buscaPersonagem(termoDaBusca: string): Observable<ListaPersonagens> {
    return this.httpClient.get<ListaPersonagens>(`${environment.BASE_URL}/character/?name=${termoDaBusca}`)
    .pipe(
      retry(10) //numero de tentativas que vai conectar com o servidor
    )
    
  }

}
