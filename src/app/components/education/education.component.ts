import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs'
import { ToggleService } from 'src/app/services/toggle.service';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  showLogIn: boolean = true;
  subscription?: Subscription;
  
  constructor(
    private toggleService:ToggleService
  ) { 
    this.subscription = this.toggleService.onToggle().subscribe(value => this.showLogIn = value);
  }

  ngOnInit(): void {
  }

}
