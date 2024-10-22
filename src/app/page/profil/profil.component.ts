import { Component } from '@angular/core';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {
  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/CvRadoMaheninaEmbauche.pdf';
    link.download = 'Rado_Mahenina_cv.pdf'; //
    link.click();
  }
}
