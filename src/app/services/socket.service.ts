import { Injectable } from '@angular/core';
import { Observable, onErrorResumeNext } from 'rxjs';

import * as io from 'socket.io-client';
const SERVER_URL = 'http://localhost:3000/chat';

@Injectable({
  providedIn: 'root'
})

export class SocketService {
  private socket;

  constructor() { }

  initSocket(): void {
    this.socket = io(SERVER_URL);
  }
 joinroom(selroom):void{
    this.socket.emit("joinRoom",selroom);
  }
  leaveroom(selroom):void{
    this.socket.emit("joinRoom",selroom);
  }
  joined(next){
    this.socket.on('joined', res=>next(res));
  }
  createroom(newroom){
    this.socket.emit('newroom',newroom);
  }
  reqnumusers(selroom){
    this.socket.emit('numusers',selroom);
  }
  getnumusers(next){
    this.socket.on('numusers',res=>next(res));
  }
  reqroomList(){
    console.log("ttt")
    this.socket.emit('roomlist',"rooms");
  }

  getroomList(next){
    this.socket.on('roomlist',res=>next(res));
  }
  

sendMessage(message:string):void{
  this.socket.emit('message',message);
}
getMessage(next){
  this.socket.on('message',(message)=>next(message));
}
notice(next){
  this.socket.on('notice',res=>next(res));
}
}

  // public onMessage(): Observable<any> {
  //     let EE = new Observable(observer => {
  //     // console.log("recev:" + message);
  //     this.socket.on('message', (data: string) => {
  //       console.log('on' + data);
  //       observer.next(data);
  //     });

  //   });
  //   return EE;
  // }
