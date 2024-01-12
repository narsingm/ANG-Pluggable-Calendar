import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent {
  @Input() message: string | undefined;
  public onConfirm: Subject<boolean> = new Subject<boolean>();

  constructor(public bsModalRef: BsModalRef) { }
  decline(): void {
    this.bsModalRef?.hide();
  }

  confirm() {
    this.onConfirm.next(true);
    this.bsModalRef.hide();
  }

  cancel() {
    this.onConfirm.next(false);
    this.bsModalRef.hide();
  }
}
