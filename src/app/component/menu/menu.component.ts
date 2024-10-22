import { CommonModule } from '@angular/common';
import { Component, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'] // Change 'styleUrl' to 'styleUrls'
})
export class MenuComponent {
  @Input() name: string = '';
  @Input() prenom: string = '';
  activeSection: string = '';
  isSticky: boolean = false;
  isDropdownVisible = false;


  constructor(private route: Router) {}

  setActive(section: string) {
    this.activeSection = section;
    this.isDropdownVisible = false;
  }

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
  lien(): void {
    console.log("TENA MILAY");
    this.route.navigate(['/mahenina']);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const menuSticky = document.querySelector('.menu-sticky') as HTMLElement;
    const menuOffset = menuSticky.offsetTop;

    if (window.scrollY >= (menuOffset - 72)) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }

    const sections = ['accueilID', 'profilID', 'parcoursID', 'competenceID','projetID, contactID'];
    const scrollPosition = window.scrollY;

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
