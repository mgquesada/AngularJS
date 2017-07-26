import {Component} from '@angular/core';
@Component({
	selector: 'app-server',
	templateUrl: './server.component.html'
})


export class ServerComponent{//make class available in other files
	serverID = 10;
	serverStatus = 'offline';
	getServerStatus(){
		return this.serverStatus;
	}

}