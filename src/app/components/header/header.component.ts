import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ToggleService } from "src/app/services/toggle.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private toggleService:ToggleService,
  ) { }
  
  ngOnInit(): void {
  }

  toggleLogIn(){
    this.toggleService.toggleLogIn();
  }
}
