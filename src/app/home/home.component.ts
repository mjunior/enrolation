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
    "Nessa semana ",
  ]

  phrasePart2 = [
    "tivemos muitas dificuldades na nossa pipeline ",
    "não conseguimos subir pra produção ",
    "não consgui completar a pr ",
    "não ",
  ]
  phrasePart3 = [
    "devido a lentidão de aprovação de pr ",
    "por conta de falta de acesso à AWS ",
    "pq a fis caiu ",
    "por falta de devs ",
    "porque minha internet caiu ",
    "por que fui trocar de note ",
  ]
  phrasePart4 = [
    " mesmo tendo fechado as tasks. ",
    " mesmo cancelando os refinamentos. ",
    " apesar do time feito hora extra. ",
    " apesar de termos feito happines. ",
    " mesmo respeitando o dia do foco. ",
    " #desculpa. ",
    ". Vou levar isso pra retro. ",
  ]
  item: string;
  constructor() { }

  ngOnInit(): void {
  }


  gerar() {
    this.item = this.phrasePart1[Math.floor(Math.random() * this.phrasePart1.length)] +
      this.phrasePart2[Math.floor(Math.random() * this.phrasePart2.length)] +
      this.phrasePart3[Math.floor(Math.random() * this.phrasePart3.length)] +
      this.phrasePart4[Math.floor(Math.random() * this.phrasePart4.length)];

  }

}
