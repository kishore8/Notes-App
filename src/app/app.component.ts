import { Component, OnInit } from '@angular/core';
import { HelperService } from './services/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  isSbOpen: Boolean = false;
  constructor(private hService:HelperService){

  }

  ngOnInit(){
    this.hService.currentStatus$.subscribe((val) =>{
      this.isSbOpen = val;
  });
  }
}
