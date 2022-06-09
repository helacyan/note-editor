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


@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    NoteComponent,
    HeaderComponent,
    FooterComponent,
    NotePageComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [{provide: MatDialogRef, useValue:{}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
