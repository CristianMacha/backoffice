import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menu = [
    { id: 1, name: 'Perfil', icon: 'fa-user', url: '/backoffice/profile' },
    { id: 2, name: 'Mis ventas', icon: 'fa-store', url: '/backoffice/profile' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  togleMenu(): void {
    const nav = document.getElementById('nav');
    const content = document.getElementById('content');
    const main = document.getElementById('main');

    nav?.classList.toggle('close');
    content?.classList.toggle('close');
    main?.classList.toggle('close');
  }

  dropdownUser() {
    const drowpdownContent = document.getElementById('drowpdown-content');
    drowpdownContent?.classList.toggle('hidden');
  }

  goToOpstion(url: string) {
    this.router.navigateByUrl(url);
    const drowpdownContent = document.getElementById('drowpdown-content');
    drowpdownContent?.classList.add('hidden');
  }
}
