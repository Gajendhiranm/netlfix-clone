import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(value : any){
    console.log(value);
    this.route.navigate(['/home']);
    // let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if(!emailRegex.test(value["email"]) && value.password.length >= 4){
       
    // }
  
  }
}