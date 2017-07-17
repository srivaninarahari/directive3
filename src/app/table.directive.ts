import { Directive,HostListener,HostBinding,Input } from '@angular/core';

@Directive({
  selector: '[appTable]'
})
export class TableDirective {
 @Input()rowIndex:number;//SHOW  INDEX  VALUE
//LOGIC  FOR  MOUSE  ENTER
@HostListener('mouseenter') onmouseover(){
    if(this.rowIndex %2==0){
      this.color = "red";
    }
    else {
       this.color = "green";
    }
}//LOGIC  FOR  MOUSE  LEAVE
@HostListener('mouseleave') onMouseLeave() {
   this.color= "black";
  }

@HostBinding('style.color') color:string;
  constructor() { }

}
