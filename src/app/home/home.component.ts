import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items = [
    "tivemos muitas reuniões que impactaram o tempo de desenvolvimento",
    "o time se esforçou com o que tinha",
    "a fis estava fora",

  ]

  item: string;
  constructor() { }

  ngOnInit(): void {
  }
  

  gerar() {
    this.item = this.items[Math.floor(Math.random() * this.items.length)];
  }

}
