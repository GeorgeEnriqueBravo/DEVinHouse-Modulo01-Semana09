import { Component } from '@angular/core';
import { ComunicadorService } from './service/comunicador.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private comunicador: ComunicadorService) {

  }

  title = 'exercicio-semana09';

  personagem: any = {
    nome: 'ONE PUNCH MAN',
    imagem: 'https://entusiastanerd.com.br/wp-content/uploads/2020/04/One-Punch-Man-S2E2.jpg',
    nomeAtor: 'Nome do personagem: Saitama',
    descricao:
      'One Punch-Man conta a história de Saitama, um super-herói extremamente poderoso, que se entediou com a ausência dos desafios nas suas lutas contra o mal e procura encontrar um oponente digno.',
  };

  email: string = '';
  senha: string = '';

  comunicaApp() {
    this.comunicador.comunicaService(this.email, this.senha)
    // console.log(this.email)
    // console.log(this.senha)
  }

  digita(event: any) {
    console.log(event)
  }
}
