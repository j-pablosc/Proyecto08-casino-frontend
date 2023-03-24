import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Correo no valido' : '';
  }

  onSubmit(f: any) {
    // f.value {email: "correo@...", password: "7687u67t"}
    // f.valid true || false

    if (f.valid) {
      this.authService.login(f.value).subscribe({
        next: (result) => {
          console.log(result); 
          this.tokenService.saveToken(result.token);
          this.router.navigate(['/home']);
        },
        error: (e) => {
          // console.log(e.error.message);
          alert(e.error.message);
        },
      });
    } else {
      // console.log(
      //   'Datos incompletos, por favor rellenar los campos obligatorios'
      // );
      alert('Datos incompletos, por favor rellenar los campos obligatorios');
    }
  }
}
