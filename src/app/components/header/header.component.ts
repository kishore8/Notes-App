import { Component, OnInit } from '@angular/core';
import { debug } from 'util';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store<any>) { }
  ngOnInit() {
  }

  triggerNoteList(e){
    e.preventDefault();
    this.store.dispatch({type:'SB_TOGGLE'});
  }

  triggerActions(e,action){
    e.preventDefault();
    switch (action) {
      case 'add':
        let val ={
          "lastEdited": new Date(),
          "text": "",
          "id": Math.random()
        };
        this.store.dispatch({
            type:'ADD_NOTE',
            payload: val
        });
        break;
      case 'edit':
        
          break;
      default:
        break;
    }
      
  }

}
