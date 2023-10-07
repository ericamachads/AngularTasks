import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'AnInt';
  parentMessage:string = "esse vem do Parent";

  fromChildOutput:string = "";
  userName!: string;

  message:string='';
  @ViewChild(PostComponent) childComp: PostComponent | undefined;
  constructor() {
    console.log(this.childComp);
  }
  ngAfterViewInit(): void {
    console.log(this.childComp);
    if (this.childComp) {
      this.message = this.childComp.childMessage;
    }
  }
  recivedMessage($event: any){
    console.log($event);
    this.fromChildOutput = $event;
  }
  onKeyup(){
    console.log(this.userName);
  }
}