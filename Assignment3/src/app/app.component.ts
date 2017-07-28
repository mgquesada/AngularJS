import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
		iter;
		buttonStatus;
		content = 'This is my content';
		myArray = [];
	
	constructor(){
		this.iter = 0;
		this.buttonStatus = true;
	}

	toggle(){
		this.iter+=1;
		this.myArray.push(Date());
		this.buttonStatus = !this.buttonStatus;
	}
	
	getColor(x){
		if(x>=4){
			return 'blue';
		}else{
			return 'transparent';
		}
	}

	

}
