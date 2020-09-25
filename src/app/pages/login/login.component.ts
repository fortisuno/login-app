import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UserModel;

  constructor( private httpService: HttpService) { }

  ngOnInit() {
    this.usuario = new UserModel();
    this.usuario.user = "admin";
    this.usuario.password = "admin123";
  }

  onSubmit( form: NgForm ) {
    if( form.invalid ) { return; }
    console.log('Formulario enviado');
    this.httpService.login( this.usuario ).subscribe( resp => {
      console.log( resp )
    });
  }

}
