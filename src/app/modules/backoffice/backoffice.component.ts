import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss'],
})
export class BackofficeComponent implements OnInit {
  toggle = false;

  constructor() {}

  ngOnInit(): void {
    this.togleMenu();
  }

  togleMenu(): void {
    this.toggle = !this.toggle;

    const nav = document.getElementById('nav');
    const content = document.getElementById('content');
    const main = document.getElementById('main');

    if (this.toggle) {
      nav?.classList.remove('close');
      content?.classList.remove('close');
      main?.classList.remove('close');
    } else {
      nav?.classList.add('close');
      content?.classList.add('close');
      main?.classList.add('close');
    }
  }
}
