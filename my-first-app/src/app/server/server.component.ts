import {Component} from '@angular/core';
@Component({
	selector: 'app-server',
	templateUrl: './server.component.html',
	styleUrls: ['./server.component.css']
})


export class ServerComponent{//make class available in other files
	serverID = 10;
	serverStatus = 'offline';
	getServerStatus(){
		return this.serverStatus;
	}

	constructor(){
		this.serverStatus = Math.random() > 0.5? 'online': 'offline';
	}

	getColor(){
		return this.serverStatus==='online'?'green':'red';

	}

}