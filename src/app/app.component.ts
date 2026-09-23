import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MenuComponent } from "./component/menu/menu.component";
import { AccueilComponent } from "./page/accueil/accueil.component";
import { ProfilComponent } from "./page/profil/profil.component";
import { ParcoursComponent } from "./page/parcours/parcours.component";
import { CompetenceComponent } from "./page/competence/competence.component";
import { ProjetComponent } from "./page/projet/projet.component";
import { ContactComponent } from "./page/contact/contact.component";

// Chargé globalement via "scripts" dans angular.json
declare var WOW: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MenuComponent, AccueilComponent, ProfilComponent, ParcoursComponent, CompetenceComponent, ProjetComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio-angular';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    // WOW manipule le DOM : uniquement côté navigateur (pas pendant le SSR / prérendu)
    if (isPlatformBrowser(this.platformId) && typeof WOW !== 'undefined') {
      new WOW().init();
    }
  }
}
