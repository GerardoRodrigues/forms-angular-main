import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ConsultaCepService } from '../services/consulta-cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router, private service: ConsultaCepService) { }

  ngOnInit(): void {
  }

  cadastrar(form: NgForm){
      if(form.valid){
        this.router.navigate(['/sucesso']);
      }else{
        alert('Formulário Inválido');
      }
  }

  consultaCEP(ev: any){
    return this.service.getConsultaCep(ev.target.value).subscribe(resultado => console.log(resultado));
  }
}
