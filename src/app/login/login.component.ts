import { Component , Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() parentToChild:any;

  childMessage:string="message"
  @Output()messageEvent=new EventEmitter<String>();
  sendMessage(){
    this.messageEvent.emit(this.childMessage);

  }


  arr:string[]=["a","b","c","d","de"]
  objArray:Array<Object>=[
    // {eid:1,fname:"Niladri"},
    // {eid:2,fname:"Aradhita"},
    // {eid:3,fname:"Sonkho"}
  ]


  childToParent:string="child to parent"
  choice:boolean= true;
  title:number[]=[10,20,30,40,50];
  colors:string="Cyan";
  imgUrl:string="https://yt3.ggpht.com/a/AATXAJxC1Bcg85sFB7-ZyUVZcjecXDWF2fTFcWjvlg=s900-c-k-c0xffffffff-no-rj-mo"
  oneWay:string="Component ----> HTML"

  buttonClick(){
    console.log("clicked!");
  }
  onKeyUp($event:any){
      if($event.keyCode==37)
      console.log($event);
  }
  onKey(){
    console.log(this.oneWay);
  }
  receiveMessage($event:any){
    this.childMessage=$event;
  }
  formMessage:any=""
  formButtonClick(input:InnerHTML){
    this.formMessage=input.innerHTML;
  }
  // formButtonClick2(input:HTMLButtonElement){
  //   this.formMessage=input.textContent;
  // }
  // formButtonClick3(input:HTMLButtonElement){
  //   this.formMessage=input.textContent;
  // }

}
