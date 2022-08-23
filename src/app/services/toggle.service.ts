import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  private showLogIn:boolean = false;
  constructor() { }

  toggleLogIn():void{
    this.showLogIn = !this.showLogIn;
  }
}
