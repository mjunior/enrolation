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
    "Nessa feature ",
    "Nessa entrega ",
    "Essa semana ",
  ]

  phrasePart2 = [
    "tivemos muitas dificuldades na nossa pipeline ",
    "não conseguimos subir pra produção ",
    "não conseguimos completar a pr ",
    "não batemos a meta",
  ]
  phrasePart3 = [
    "devido a lentidão na aprovação de pr",
    "por conta de falta de acesso à AWS",
    "porque a fis caiu",
    "por falta de devs",
    "porque minha internet caiu",
    "porque fui trocar de note",
  ]
  phrasePart4 = [
    "mesmo tendo fechado as tasks.",
    "mesmo cancelando os refinamentos.",
    "apesar do time ter feito hora extra.",
    "apesar de termos feito happines.",
    "mesmo respeitando o dia do foco.",
    "vou levar isso pra retro.",
    "mas o time deu o sangue."
  ]
  paragraph: string;
  constructor() { }

  ngOnInit(): void {
    this.generate();
  }


  generate() {
    this.paragraph = `"
    1:${this.randon(this.phrasePart1)} 
    2:${this.randon(this.phrasePart2)}
    3:${this.randon(this.phrasePart3)},
    4:${this.randon(this.phrasePart4)}
    "`;
  }

  private randon(phrase: string[]): string {
    return phrase[Math.floor(Math.random() * phrase.length)];
  }

}
