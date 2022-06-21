import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any = {}
  loggedIn:boolean;

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  login(){
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      this.loggedIn = true;
      console.log('loggin in')
    })
  }
  logout(){
    this.accountService.logout();
    this.loggedIn = false;
    console.log('logging out')
  }

  getCurrentUser(){
    this.accountService.currentUser$.subscribe(user =>{
      this.loggedIn = !!user;
    },error =>{
      console.log(error);
    })
  }

}
