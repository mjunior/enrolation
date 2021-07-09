import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  phrasePart1 = [
    "Nessa sprint ",
    "Hoje ",
    "Nesse deploy ",
    "Nessa história ",
    "Essa feature ",
    "Essa semana "
  ]

  phrasePart2 = [
    "tivemos muitas dificuldades na nossa pipeline ",
    "não conseguimos subir pra produção ",
    "não conseguimos completar a pr ",
    "não batemos a meta",
    "vamos apresentar local",
    "não consgui completar a pr ",
  ]
  phrasePart3 = [
    "devido a lentidão na aprovação de pr",
    "por conta de falta de acesso à AWS",
    "porque a fis caiu",
    "por falta de devs",
    "porque minha internet caiu",
    "porque fui trocar de note",
    "devido a tantas reuniões"
  ]
  phrasePart4 = [
    "mesmo tendo fechado as tasks.",
    "mesmo cancelando os refinamentos.",
    "apesar do time ter feito hora extra.",
    "apesar de termos feito happines.",
    "mesmo respeitando o dia do foco.",
    "vou levar isso pra retro.",
    "mas o time deu o sangue.",
    "precisamos acionar infra"
  ]
  paragraph: string;
  constructor() { }

  ngOnInit(): void {
    this.generate();
  }


  generate() {

    for (let i = 0; i < Math.floor(Math.random() * 40) + 20; i++) {
      setTimeout(() => {
        this.getParagraph();
      }, i * 50);
    }

  }

  play() {
    var audio = new Audio(
      'http://www.javascriptkit.com/script/script2/click.mp3');
    audio.play();
  }

  getParagraph() {
    this.play();
    this.paragraph = `"${this.randon(this.phrasePart1)} 
    ${this.randon(this.phrasePart2)}
    ${this.randon(this.phrasePart3)},
    ${this.randon(this.phrasePart4)}"`;
  }

  private randon(phrase: string[]): string {
    return phrase[Math.floor(Math.random() * phrase.length)];
  }

}
