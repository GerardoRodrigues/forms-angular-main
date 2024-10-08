import { SucessoCadastroComponent } from './sucesso-cadastro/sucesso-cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MensagemComponent } from './components/mensagem/mensagem.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cadastro',
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'sucesso',
    component: SucessoCadastroComponent
  },
  {
    path: 'mensagem',
    component: MensagemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
