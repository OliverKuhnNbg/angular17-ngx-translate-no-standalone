import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translation-test',
  templateUrl: './translation-test.component.html',
  styleUrl: './translation-test.component.scss'
})
export class TranslationTestComponent {
  title: string = "";
  home: string = "";
  constructor(private translate: TranslateService) {
    this.translate.get('welcome').subscribe(value => this.title = value);
    this.translate.get('home').subscribe(value => this.home= value);
  }
}
