import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../servicios/usuario/usuario.service';

import { Usuario } from '../models/usuario.model';

declare function init_plugins();


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./login.component.css']
})
export class RegistroComponent implements OnInit {

	forma: FormGroup;


  constructor(
    public _usuarioService: UsuarioService
    ) { }

  sonIguales(campo1:string, campo2:string){

    return ( group:FormGroup)=>{
      
      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;

      if( pass1 === pass2){
        return null;
      }

      return{
        sonIguales: true
      }; 
    }

  }

  ngOnInit() {
  	init_plugins();

  	this.forma = new FormGroup({
  		nombre: new FormControl(null, Validators.required),
  		apellido: new FormControl(null, Validators.required),
  		correo: new FormControl(null, [Validators.required, Validators.email]),
  		password: new FormControl(null, Validators.required),
  		password2: new FormControl(null, Validators.required),
  	},{ validators: this.sonIguales('password', 'password2')});
  }

registrarUsuario(){
  if(this.forma.invalid){
    return;
  }
 let usuario = new Usuario(
   this.forma.value.nombre,
   this.forma.value.apellido,
   this.forma.value.correo,
   this.forma.value.password,
   );
 
 this._usuarioService.crearUsuario(usuario)
   .subscribe(resp =>{
     console.log(resp);
   });
}
}
