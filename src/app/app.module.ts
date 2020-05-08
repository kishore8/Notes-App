import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { EditareaComponent } from './components/editarea/editarea.component';
import {HelperService} from './services/helper.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    EditareaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
