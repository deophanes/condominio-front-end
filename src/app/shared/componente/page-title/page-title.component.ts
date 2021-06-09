import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {

  @Input('page-model') pageModel: string;
  @Input('page-title') pageTitle: string;
  @Input('button-class') buttonClass: string;
  @Input('button-text') buttonText: string;
  @Input('button-link') buttonLink: string;
  @Input('button-icon') buttonIcon: string;
  @Input('show-button') showButton: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  processar(tipo: string) {
    return this.router.navigateByUrl(tipo);
  }
}
