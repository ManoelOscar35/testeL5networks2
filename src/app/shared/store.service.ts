import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  private nomePersonagem = new BehaviorSubject<string>('');
  private page = new BehaviorSubject<number>(0);

  setNomePersonagem(value: string) {
    this.nomePersonagem.next(value);
  }

  getNomePersonagem() {
    return this.nomePersonagem.asObservable();
  }

  setPage(value: number) {
    this.page.next(value);
  }

  getPage() {
    return this.page.asObservable();
  }
}
