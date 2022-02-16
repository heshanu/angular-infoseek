import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // name:string='';
  //des:string='';
  items:string[]=['drink','dance','sleep'];
  textvalue:string='';
  textvalue1:number=0;
  textSuccessful:boolean=false;

  constructor(){}

  isShowErrorMessage:boolean=false;
  isShowDelete:boolean=false;i:number=0;
  onCli(){
    if(this.textvalue!='' && typeof (this.textvalue)==='string'){

        this.items.push(this.textvalue);
        this.textvalue='';
        this.textSuccessful=true;
    }else{
      this.isShowErrorMessage=true;
    }
  }

  onDeleteItem(index:number){
    this.items.splice(index,1);
    //this.isShowErrorMessage=true;
    this. isShowDelete=true;    
  }

  
}
