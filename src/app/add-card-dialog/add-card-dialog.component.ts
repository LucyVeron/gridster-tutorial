import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

export interface Icon {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-add-card-dialog',
  templateUrl: './add-card-dialog.component.html',
  styleUrls: ['./add-card-dialog.component.scss']
})
export class AddCardDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AddCardDialogComponent>,
  ) { }

  public result: any;

  public icon = new FormControl();
  public icons: Icon[] = [
    {
      name: 'Build',
      icon: 'build'
    },
    {
      name: 'Smiley',
      icon: 'sentiment_satisfied_alt'
    },
    {
      name: 'Favorite',
      icon: 'favorite'
    },
    {
      name: 'Star',
      icon: 'grade'
    }
  ];

  public color = 'default';
  public colors: string[] = [
    'default',
    'primary',
    'accent',
    'warn'
  ];

  public addCard(): void {
    this.result = {
      color: this.color,
      icon: this.icon.value
    };
    this.dialogRef.close(this.result);
  }
}
