import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cardprojet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cardprojet.component.html',
  styleUrls: ['./cardprojet.component.css']
})
export class CardprojetComponent {
  @Input() title1: string = '';
  @Input() title2: string = '';
  @Input() technologie: string = '';
  @Input() bdd: string = '';
  @Input() lien: string = '';
  @Input() description: string = "";
  @Input() detail: string = "";
  @Input() isShowModal: boolean = false;

  @Output() modalOpened = new EventEmitter<void>();
  @Output() modalClosed = new EventEmitter<void>();

  show_modal() {
    this.modalOpened.emit(); // Émet un événement pour indiquer que le modal est ouvert
  }

  close_modal() {
    this.modalClosed.emit(); // Émet un événement pour indiquer que le modal est fermé
  }
}
