import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path:'home',
    children:[

      {
      path:'',
      loadChildren: './home/home.module#HomePageModule'
      },
      {
      path:'posts',
      loadChildren: './posts/posts.module#PostsPageModule'
      },

    ]

  },

  { path: 'posts',
    children:[
      {
      path:'',
      loadChildren: './posts/posts.module#PostsPageModule'
      },
    // {
    //   path: ':postid',
    //    loadChildren: './posts/post-detail/post-detail.module#PostDetailPageModule'
    //   }

    ]
  },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
