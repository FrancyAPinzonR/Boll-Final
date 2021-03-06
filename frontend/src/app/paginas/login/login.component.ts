import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  constructor(private auth: AuthService, private router: Router) {}

  loginUsuario = {
    correo: '',
    password: '',
  };

  ngOnInit(): void {}

  login() {
    this.auth.loginUsuario(this.loginUsuario).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.jwtToken);
        this.router.navigate(['/perfilusuario']);
      },
      (err) => console.log(err)
    );
  }
}
