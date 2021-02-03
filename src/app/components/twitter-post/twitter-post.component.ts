import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrls: ['./twitter-post.component.scss']
})
export class TwitterPostComponent {
  @Input() public baseHref = '';
  @Input() public hashTags = ['100daysofcode'];
  @Input() public message = 'This tweet has been created with twitter tweet component, using twitter API.';

  constructor() { }

  public get twitterUrl(): string {
    const base = this.getBaseWithHashtagsAndRoute();
    return base + this.message;
  }

  private getBaseWithHashtagsAndRoute(): string {
    const route = encodeURI(this.baseHref);
    const hashtags = this.hashTags.join(',');
    return `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(hashtags)}&url=${route}&text=`;
  }
}
