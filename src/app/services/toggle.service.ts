import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  private showLogIn:boolean = false;
  private subjet = new Subject<any>();

  constructor() { }

  toggleLogIn():void{
    this.showLogIn = !this.showLogIn;
    this.subjet.next(this.showLogIn);  // No sé que hace esta línea pero funciona
  }

  onToggle():Observable<any>{
    return this.subjet.asObservable();
  }
}
