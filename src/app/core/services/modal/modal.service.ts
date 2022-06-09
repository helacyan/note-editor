import { Injectable } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from '../../components/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private dialogRef: MatDialogRef<ModalComponent>) {}

  status: boolean = false

  continue() {
    this.dialogRef.close(true);
  }

  close() {
    this.dialogRef.close(false);
  }
}
