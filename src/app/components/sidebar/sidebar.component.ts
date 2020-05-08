import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor() { }
  notes = [
    {
      "id": 1,
      "lastEdited": "Today 7:20pm",
      "text": "Lorem ipsum dolor sit amet"
    },
    {
      "id": 2,
      "lastEdited": "Today 7:22pm",
      "text": "onsectetur adipisicing elit"
    }];
  ngOnInit() {
    
  }

  readText(text){
    return text.split(' ').slice(0,2).join(' ');
  }

  noteClicked(e,note){
    console.log(note);
  }

}
