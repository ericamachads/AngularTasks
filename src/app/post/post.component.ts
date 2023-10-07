import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  title: string = "Lis of Posts";

  postMessage: string = "Esse texto vem do parent post";

  childMessage: string = "Esse texto vem do child post";

  outputChildMessage: string ="Esse texto vem do child post via output";

  
  @Input() fromParent: string;

  @Output() messageEvent = new EventEmitter <string>();
  constructor (){
    this.fromParent = ''; // Inicialize com um valor padrão, se apropriado
  }
  ngOnInit(): void {
    
  }
  sendMessage(){
    this.messageEvent.emit(this.outputChildMessage);
  }

}
