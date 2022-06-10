import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesListComponent } from './project/components/notes-list/notes-list.component';
import { NoteComponent } from './project/components/note/note.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { NotePageComponent } from './project/components/note-page/note-page.component'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from './core/components/modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input';
import { TextInputHighlightModule } from 'angular-text-input-highlight';
import { FilterPipe } from './project/pipes/filter.pipe';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    NoteComponent,
    HeaderComponent,
    FooterComponent,
    NotePageComponent,
    ModalComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    TextInputHighlightModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule
  ],
  providers: [{provide: MatDialogRef, useValue:{}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
