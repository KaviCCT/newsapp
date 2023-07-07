import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
selector: 'app-news-categories',
templateUrl: './news-categories.page.html',
styleUrls: ['./news-categories.page.scss'],   
})
export class NewsCategoriesPage implements OnInit {

constructor(private navController: NavController, private router: Router) { }

	ngOnInit() {  
	}

	openCategory(category: string) {
		this.router.navigate(['/tabs/news', category]);
	  }
}




