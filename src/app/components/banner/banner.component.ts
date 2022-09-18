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
  
  constructor(
    private toggleService:ToggleService
  ) { 
    this.subscription = this.toggleService.onToggle().subscribe(value => this.showLogIn = value);
  }

  ngOnInit(): void {
  }

  retornarContraste(){
    return this.showLogIn ? '20%' : ''
  }
  retornarContraste2(){
    return this.showLogIn ? 'brightness(' + '20%' + ')' : 'brightness(' + '' + ')'
  }
}

