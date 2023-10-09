import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string | undefined;
  password: string | undefined;
  visible: boolean = true;
  changetype: boolean = true;
  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    // TODO: Call your authentication service to authenticate the user
    if (this.email === 'example@example.com' && this.password === 'password') {
      // If the user is authenticated, navigate to the home page
      this.router.navigateByUrl('/home');
    } else {
      // If the user is not authenticated, display an error message
      alert('Invalid email or password');
    }
  }
  

}
