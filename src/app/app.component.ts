import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DisplayGrid, GridsterConfig, GridType } from 'angular-gridster2';
import { AddCardDialogComponent } from './add-card-dialog/add-card-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public card: any;
  public options: GridsterConfig;
  public dashboard: Array<any>;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.options = {
      gridType: GridType.Fixed,
      fixedColWidth: 200,
      fixedRowHeight: 200,
      draggable: { enabled: true }
    };
    this.dashboard = [];
  }

  public addCard(): void {
    const dialogRef = this.dialog.open(AddCardDialogComponent);
    dialogRef.afterClosed().subscribe((config: any) => {
      if (!config) { return; }
      this.dashboard.push({ config, cols: 1, rows: 1, y: 0, x: 0 });
    });
  }
}
