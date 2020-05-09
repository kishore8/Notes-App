import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-editarea',
  templateUrl: './editarea.component.html',
  styleUrls: ['./editarea.component.css']
})
export class EditareaComponent implements OnInit {

  constructor(private store: Store<any>) { }
  noteText: String = "";
  selNote: Object = {};
  ngOnInit() {
    this.store.select('notes').subscribe((data)=>{
      if(data && data.selectedNote){
        data.notes.map((note) =>{
          if(note.id === data.selectedNote.id){
            this.selNote = data.selectedNote;
            this.noteText = note.text; 
          }
        })
        
      }
    })
  }

  editNoteText(e){
    if(this.selNote){
      let payload = {value:e.target.value,selId:this.selNote['id']};
      this.store.dispatch({type:'EDIT_NOTE',payload});
    } 
  }

}
