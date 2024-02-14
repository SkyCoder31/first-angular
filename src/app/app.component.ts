import { Component,ViewChild } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  choice:boolean=false;
  title = 'first-angular';
  color: string= "Cyan";
  
  childParent:string="";
  @ViewChild(LoginComponent) loginObj:any;
  ngAfterViewInit(){
    console.log(this.loginObj);
    this.childParent=this.loginObj.childToParent;
  }

  childTOPraentEvent: any;
  receive($event:any){
    this.childTOPraentEvent = $event;
  }
}
