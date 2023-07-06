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

openBusiness() {
// Both of these would work!
// But the standard Router is recommended.
// this.navController.navigateForward(`/tabs/films/42`);
this.router.navigateByUrl(`/tabs/news/42`);  
}


}

