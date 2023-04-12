import { Component } from '@angular/core';
import { ListaClientesComponent } from './pages/lista-clientes/lista-clientes.component';
import { AltaClienteComponent } from './pages/alta-cliente/alta-cliente.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clientes';
}
