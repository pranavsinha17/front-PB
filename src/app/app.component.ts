import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 
  constructor(public loginService:AuthenticationService){}
  
  ngOnInit(): void {
    
  }
  title = 'mdb-angular-free';

}

