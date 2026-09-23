import { CommonModule } from '@angular/common';
import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() name: string = '';
  @Input() prenom: string = '';
  activeSection: string = '';
  isSticky: boolean = false;
  isDropdownVisible = false;

  setActive(section: string) {
    this.activeSection = section;
    this.isDropdownVisible = false;
  }

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const menuSticky = document.querySelector('.menu-sticky') as HTMLElement | null;
    if (menuSticky) {
      this.isSticky = window.scrollY >= (menuSticky.offsetTop - 72);
    }

    const sections = ['accueilID', 'profilID', 'parcoursID', 'competenceID', 'projetID', 'contactID'];
    // Décalage pour tenir compte de la hauteur du menu sticky
    const scrollPosition = window.scrollY + 80;

    // En bas de page, la dernière section est trop courte pour atteindre le haut de l'écran
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (atBottom) {
      this.activeSection = sections[sections.length - 1];
      return;
    }

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const sectionTop = element.offsetTop;
        const sectionHeight = element.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          this.activeSection = section;
        }
      }
    });
  }
}
