import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add-event-modal',
  templateUrl: './add-event-modal.component.html',
  styleUrls: ['./add-event-modal.component.scss']
})
export class AddEventModalComponent {
  formTitle: string | undefined;
  public onConfirm: Subject<boolean | { status: boolean, formTitle?: string }> = new Subject<boolean | { status: boolean, formTitle?: string }>();

  constructor(public bsModalRef: BsModalRef) { }
  decline(): void {
    this.bsModalRef?.hide();
  }

  confirm() {
    this.onConfirm.next({ status: true, formTitle: this.formTitle });
    this.bsModalRef.hide();
  }

  cancel() {
    this.onConfirm.next(false);
    this.bsModalRef.hide();
  }
}
