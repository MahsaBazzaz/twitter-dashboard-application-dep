import { Component, ComponentFactory, ComponentFactoryResolver, EventEmitter, Input, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { PostsService } from 'src/app/modules/posts/posts.service';
import { SpinnerService } from '../spinner/spinner.service';
import { TweetComponent } from '../tweet/tweet.component';
@Component({
  selector: 'app-searchbar',
  template: `<input #searchBox id="search-box" (change)="search(searchBox.value)" style="width: 100%;" />`,
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent {

  @Input() container: ViewContainerRef;
  componentFactory: ComponentFactory<TweetComponent>;
  containerRef: ViewContainerRef;

  isLoaded: boolean = false;

  constructor(private service: PostsService,
    private spinner: SpinnerService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    console.log(this.container);

    this.spinner.returnAsObservable().subscribe(
      subs => {
        this.isLoaded = subs;
      })
    this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(TweetComponent);
    this.containerRef = this.viewContainerRef;
    if (term.length > 0) {
      this.service.search(term).subscribe(
        response => {
          if (response.status) {
            this.container.clear();
            response.data.forEach(element => {
              const dyynamicComponent = <TweetComponent>this.container.createComponent(this.componentFactory).instance;
              //TODO: user photo
              dyynamicComponent.username = element.username;
              dyynamicComponent.tweet = element.text;
              dyynamicComponent.likes = element.likes;
              dyynamicComponent.retweets = element.retweets;
            });
          }
        },err => {},() => { })
    }
    else {
      this.service.getAllTweets().subscribe(
        response => {
          if (response.status) {
            this.container.clear();
            response.data.forEach(element => {
              const dyynamicComponent = <TweetComponent>this.container.createComponent(this.componentFactory).instance;
              //TODO: user photo
              dyynamicComponent.username = element.username;
              dyynamicComponent.tweet = element.text;
              dyynamicComponent.likes = element.likes;
              dyynamicComponent.retweets = element.retweets;
            });
          }
        },err => {},() => { })
    }
  }

  // ngOnInit(): void {

  // }
}
