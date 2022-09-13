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
  
  constructor(
    private toggleService:ToggleService
  ) { 
    this.subscription = this.toggleService.onToggle().subscribe(value => this.showLogIn = value);
  }

  ngOnInit(): void {
  }

  retornarContraste(){
    if(this.showLogIn){
      return '20%'
    }else{
      return ''
    }
  }
}
