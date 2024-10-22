import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./component/menu/menu.component";
import { AccueilComponent } from "./page/accueil/accueil.component";
import { ProfilComponent } from "./page/profil/profil.component";
import { ParcoursComponent } from "./page/parcours/parcours.component";
import { CompetenceComponent } from "./page/competence/competence.component";
import { ProjetComponent } from "./page/projet/projet.component";
import { ContactComponent } from "./page/contact/contact.component";
declare var WOW: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuComponent, AccueilComponent, ProfilComponent, ParcoursComponent, CompetenceComponent, ProjetComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-angular';
  ngAfterViewInit() {
    const wow = new WOW();
    wow.init();
  }

}
