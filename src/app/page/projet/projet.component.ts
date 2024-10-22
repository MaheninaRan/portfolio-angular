import { Component } from '@angular/core';
import { CardprojetComponent } from "../../component/cardprojet/cardprojet.component";

@Component({
  selector: 'app-projet',
  standalone: true,
  imports: [CardprojetComponent],
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.css'
})
export class ProjetComponent {
  public activeModalIndex: number | null = null; // Pour suivre quel modal est ouvert

  public showModal(index: number) {
    this.activeModalIndex = index; // Ouvre le modal pour le projet correspondant
  }

  public closeModal() {
    this.activeModalIndex = null; // Ferme le modal
  }

}
