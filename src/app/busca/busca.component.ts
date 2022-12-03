import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent {
  @Output() actionOutput:EventEmitter<any> = new EventEmitter();

  receber(event: any) {
    // console.log(event)
    // console.log(event.target.value)
    this.actionOutput.emit(event.target.value)
  }
}
