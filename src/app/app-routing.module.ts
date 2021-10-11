import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  
  { path: '', pathMatch: 'full', redirectTo: '/index' },
  { path: 'index', component: HomeComponent },
  { path: 'posts', component: AllPostsComponent },
  { path: 'postdetails/:blogId', component: PostDetailsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: '**', component: PageNotFoundComponent }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
