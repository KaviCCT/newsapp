import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NewsArticlesService } from 'src/app/api/news-articles.service';
import { ActivatedRoute } from '@angular/router';

interface NewsResponse {
	articles: any[];
}

@Component({
selector: 'app-news',
templateUrl: './news.page.html',
styleUrls: ['./news.page.scss'],   
})
	
export class NewsPage implements OnInit {
	
topHeadlines: any[] = [];

constructor(
  private articleService: NewsArticlesService,
	private route: ActivatedRoute,
	private router: Router
) {}

ngOnInit() {
	this.route.paramMap.subscribe((params) => {
	  const selectedCategory = params.get('category');
	  if (selectedCategory) {
		this.getArticlesByCategory(selectedCategory);
	  }
	});
  }
	
	 private getArticlesByCategory(category: string) {
		this.articleService
		  .getArticlesByCategory(category)
		  .subscribe((results: NewsResponse) => {
			this.topHeadlines = results.articles;
		  });
	  }

	getDetails(selectedArticle:any) {

		const params: NavigationExtras = {
			queryParams: {
				'author': selectedArticle.author,
				'content': selectedArticle.content,
				'description': selectedArticle.description,
				'publishedAt': selectedArticle.publishedAt,
				'source': selectedArticle.source.name,
				'title': selectedArticle.title,
				'url': selectedArticle.url,
				'urlToImage': selectedArticle.urlToImage

			}
		}
		this.router.navigate(['/tabs/news/category/details'],params)
  }
}


