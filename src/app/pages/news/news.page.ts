import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
selector: 'app-news',
templateUrl: './news.page.html',
styleUrls: ['./news.page.scss'],   
})
export class NewsPage implements OnInit {

constructor(private navController: NavController, private router: Router) { }

	ngOnInit() {  
	}

openDetails() {
// Both of these would work!
// But the standard Router is recommended.
// this.navController.navigateForward(`/tabs/films/42`);
this.router.navigateByUrl(`/tabs/news-details/42`);  
}


}
