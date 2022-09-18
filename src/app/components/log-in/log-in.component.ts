import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs'
import { ToggleService } from 'src/app/services/toggle.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  @Output() btnClick = new EventEmitter();

  showLogIn: boolean = true;
  
  
    subscription?: Subscription;
  
    constructor(
      private toggleService:ToggleService
    ) { 
      this.subscription = this.toggleService.onToggle().subscribe(value => this.showLogIn = value);
    }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();
  }
}
