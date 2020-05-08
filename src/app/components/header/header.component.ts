import { Component, OnInit } from '@angular/core';
import { HelperService } from "../../services/helper.service";
import { debug } from 'util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private hService: HelperService) { }
  currStat: boolean;
  ngOnInit() {
    this.hService.currentStatus$.subscribe((val)=>{
      this.currStat = val;
      
    });   
  }

  triggerNoteList(e){
    e.preventDefault();
    this.hService.toggleSidebar(!this.currStat);
  }

  triggerActions(e,action){
      e.preventDefault();
  }

}
