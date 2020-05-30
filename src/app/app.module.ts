import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddCardDialogComponent } from './add-card-dialog/add-card-dialog.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCardDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatRippleModule,
    MatDialogModule
  ],
  entryComponents: [
    AddCardDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
