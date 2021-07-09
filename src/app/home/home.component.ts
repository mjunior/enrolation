import { Fragment } from './model/fragment.model';
import { ParagraphService } from './service/paragraph.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private _fragments: Fragment;
  paragraph: string;
  constructor(private _paragraphService: ParagraphService) { }

  ngOnInit(): void {
    this._paragraphService.getParagraph()
    .subscribe(res => {
        this._fragments = res;
        this.generate();
    }, error => {
      this.paragraph = 'Algo deu errado, sem desculpas pra vc agora. Tente novamente logo mais.'
    });
  }


  generate() {

    for (let i = 0; i < Math.floor(Math.random() * 40) + 20; i++) {
      setTimeout(() => {
        this._getParagraph();
      }, i * 50);
    }

  }

  private _play() {
    var audio = new Audio('/assets/click.mp3');
    audio.play();
  }

  private _getParagraph() {
    this._play();
    this.paragraph = 
    `"${this.randon(this._fragments.first)} 
    ${this.randon(this._fragments.second)}
    ${this.randon(this._fragments.third)},
    ${this.randon(this._fragments.fourth)}"`;
  }

  private randon(phrase: string[]): string {
    return phrase[Math.floor(Math.random() * phrase.length)];
  }

}
