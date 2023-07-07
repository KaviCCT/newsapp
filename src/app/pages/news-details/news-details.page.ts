import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.page.html',
  styleUrls: ['./news-details.page.scss'],
})
export class NewsDetailsPage implements OnInit {
  author: any
  content: any
  description: any
  publishedAt: any
  source: any
  title: any
  url: any
  urlToImage: any


  constructor(private router:Router, private activatedRoute:ActivatedRoute, private toastController: ToastController) { }

  ngOnInit() {
    this.author = this.activatedRoute.snapshot.queryParamMap.get('author')
    this.content = this.activatedRoute.snapshot.queryParamMap.get('content')
    this.description = this.activatedRoute.snapshot.queryParamMap.get('description')
    this.publishedAt = this.activatedRoute.snapshot.queryParamMap.get('publishedAt')
    this.source = this.activatedRoute.snapshot.queryParamMap.get('source')
    this.title = this.activatedRoute.snapshot.queryParamMap.get('title')
    this.url = this.activatedRoute.snapshot.queryParamMap.get('url')
    this.urlToImage = this.activatedRoute.snapshot.queryParamMap.get('urlToImage')
  }

  async likeArticle() {
    // Perform the like action (e.g., make an API request)
    // Show a toast message to indicate success
    const toast = await this.toastController.create({
      message: 'Article liked',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
  
  async shareArticle() {
    // Perform the share action (e.g., share the article URL)
    // Show a toast message to indicate success
    const toast = await this.toastController.create({
      message: 'Article shared',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
  
  async bookmarkArticle() {
    // Perform the bookmark action (e.g., add the article to favorites)
    // Show a toast message to indicate success
    const toast = await this.toastController.create({
      message: 'Article bookmarked',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }


}
