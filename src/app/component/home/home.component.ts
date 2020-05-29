import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  hola = 'Hello World!';
  role = '';

  heros = [
    {
      nombre: 'Iron man',
      img: './assets/images/ironman.jpg',
      description:
        'Anthony Edward "Tony" Stark suffers a severe chest injury during a kidnapping. Later, Stark develops his suit, adding weapons and other technological devices he designed through his company, Stark Industries.',
    },
    {
      nombre: 'Spider-Man',
      img: './assets/images/spiderman.jpg',
      description:
        'Spider-Man is the alias of Peter Parker, an orphan raised by his Aunt May and Uncle Ben in New York City after his parents Richard and Mary Parker were killed in a plane crash.',
    },
    {
      nombre: 'Wolverine',
      img: './assets/images/wolverine.jpg',
      description:
        'He is a mutant who possesses animal-keen senses, enhanced physical capabilities, a powerful regenerative ability known as a healing factor, and three retractable claws in each hand.',
    },
  ];

  villains = [
    {
      nombre: 'Thanos',
      img: './assets/images/thanos.jpg',
      description:
        'Thanos is one of the most powerful villains in the Marvel Universe and has clashed with many heroes including the Avengers, the Guardians of the Galaxy, the Fantastic Four, and the X-Men.',
    },
    {
      nombre: 'Venom',
      img: './assets/images/venom.jpg',
      description:
        'The character is a sentient alien Symbiote with an amorphous, liquid-like form, who survives by bonding with a host, usually human.',
    },
    {
      nombre: 'Magneto',
      img: './assets/images/magneto.jpg',
      description:
        'The character is a powerful mutant, one of a fictional subspecies of humanity born with superhuman abilities, who has the ability to generate and control magnetic fields.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  getTipo(tipo) {
    this.role = tipo;
  }
}
