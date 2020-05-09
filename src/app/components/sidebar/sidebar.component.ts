import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private store:Store<any>) { }
  notes = [];
  selectedNote = {};
  ngOnInit() {
    this.store.select('notes').subscribe(notesList =>{
      if(notesList){
        this.sortByLatest(notesList.notes);
        this.notes = [...notesList.notes].reverse();
      }
    });  
  }


  sortByLatest(arr){
    arr.sort(function(a,b){
      return <any>new Date(b.lastEdited) - <any>new Date(a.lastEdited);
    });
  }
  readTitle(text){
    if(text){
      return text.split(' ').slice(0,2).join(' ');
    }

    return 'No Title';
    
  }


  readDate(cdate){
    const d = new Date(cdate)
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)

    return `${da}-${mo}-${ye}`;

  }

  noteClicked(e,note){
      this.selectedNote = note.id;
      this.store.dispatch({type:'SELECTED_NOTE',note});
  }

}
