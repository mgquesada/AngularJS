import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-servers',
  templateUrl: './the-servers.component.html',
  styleUrls: ['./the-servers.component.css']
})
export class TheServersComponent implements OnInit {
	allowNewServer = false;
	serverStatus = "No servers created";
	serverName = 'Two Way Binding';
	servers = ['Testserver', 'Testserver2'];
	serverCreated = false;
  	constructor() { 
 		setTimeout(()=>
 		{
 			this.allowNewServer = true;
 		} , 2000);
 	}
  	
  	ngOnInit(){}
    
    onCreateServer(){
    	this.serverCreated = true;
    	this.servers.push(this.serverName);
    	this.serverStatus = "Server Live";

    }

    onUpdateServerName(event: Event){
    	this.serverName = (<HTMLInputElement>event.target).value;
    }
}


