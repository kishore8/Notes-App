import { Component, OnInit, Inject } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selNote:Object = {};
  hasSelection:Boolean = false;
  
  constructor(private store: Store<any>) { }
  ngOnInit() {
    this.store.select('notes').subscribe((data)=>{
      if(data && data.selectedNote){
        data.notes.map((note) =>{
          if(note.id === data.selectedNote.id){
            this.selNote = data.selectedNote;
            this.hasSelection = true;
          }
        }) 
      }
    })
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
          "lastEdited": new Date().toISOString(),
          "text": "",
          "id": Math.random()
        };
        this.store.dispatch({
            type:'ADD_NOTE',
            payload: val
        });
       const note = val;
       this.store.dispatch({type:'SELECTED_NOTE',note}); 
       if(window.innerWidth < 600){
        this.store.dispatch({type:'SB_TOGGLE',payload: 'close'});
       } 
       
      break;
      case 'delete':
        if(!this.hasSelection){return alert('please select a note to delete');}
          let delVal = {
            id: this.selNote['id']
          }
          this.store.dispatch({
              type:'DELETE_NOTE',
              payload: delVal
          });
          break;
      default:
        break;
    }
      
  }

}
