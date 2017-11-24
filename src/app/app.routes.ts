import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from "./sign-up/sign-up.component";
import { FeedComponent} from "./feed/feed.component";

const routes: Routes = [
  {
    path: '',
    component: SignUpComponent
  },
  {
    path: 'feed',
    component: FeedComponent
  }

];
export const routing = RouterModule.forRoot(routes);
