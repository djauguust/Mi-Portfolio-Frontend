import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs'
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  showLogIn: boolean = true;
  subscription?: Subscription;
  brillo: String = '';
  apellido: String ='Brito';
  nombre: String = 'Augusto Ismael';
  titulo: String = 'Full Stack Developer Jr';
  
  constructor(
    private toggleService:ToggleService
  ) { 
    this.subscription = this.toggleService.onToggle().subscribe(value => this.showLogIn = value);
  }

  ngOnInit(): void {
  }

}

