import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalService } from '../../services/modal/modal.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private dialog: MatDialog, public modalService: ModalService) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = {
      top: 'calc(70px + 2rem)',
    };
    return this.dialog.open(ModalComponent, dialogConfig).afterClosed().subscribe(() => this.modalService.status = !this.modalService.status)
}

  activeToggle(){
    this.modalService.status = !this.modalService.status;
    this.modalService.status ? this.openDialog() : null;
  }

}
