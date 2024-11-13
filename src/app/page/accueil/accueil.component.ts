import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/CvRadoMaheninaEmbauche.pdf';
    link.download = 'Rado_Mahenina_cv.pdf';
    link.click();
  }
}
