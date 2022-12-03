import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicadorService {

  constructor() { }

  comunicaService(email: string, senha: string) {
    // localStorage.setItem("E-mail", email)
    // localStorage.setItem("Senha", senha)

    const obj = {
      email: email,
      senha: senha
    }

    localStorage.setItem("objeto", JSON.stringify(obj))
  }
}
