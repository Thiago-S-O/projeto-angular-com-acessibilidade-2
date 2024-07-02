import { ModalRef, ModalService } from './shared/components/modal/services/modal.service';
import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;

  title = 'a11y-p2';
  public firstName = 'nome do usuário';
  public modalRef: ModalRef;

  constructor(private modalService: ModalService) { }

  public show(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'user details'
    });
  }
}
