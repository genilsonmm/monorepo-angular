import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private isAuthenticated:boolean = false;
  constructor() { }

  public isRouteAuthenticated():boolean{
    return this.isAuthenticated;
  }

  public setIsAuthenticated(isAuth:boolean):void{
    this.isAuthenticated = isAuth;
  }

}
