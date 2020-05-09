import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  isSbOpen: Boolean = false;
  constructor(private store: Store<any>){

  }

  ngOnInit(){

    this.store.dispatch({
      type:'LOAD_NOTES'
    });
    
    
    this.store.select('notes').subscribe((data)=>{
      if(data){
        this.isSbOpen = data.isSideBarOpen;
      }
    })
  }
}
