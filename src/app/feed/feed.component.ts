import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  providers: [FeedService]
})
export class FeedComponent implements OnInit {
  userfeed:any;
  items:any;
  constructor(private _feed:FeedService) {
    this._feed.gfeed().subscribe(userfeed => {
    this.userfeed = userfeed;
    this.items = userfeed.posts.items
  });
   }



  ngOnInit() {
  }

}
