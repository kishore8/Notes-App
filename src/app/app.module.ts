import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { EditareaComponent } from './components/editarea/editarea.component';

import { StoreModule }from '@ngrx/store';
import { reducer } from './redux/reducers/noteMaker.reducer';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    EditareaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({notes:reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
