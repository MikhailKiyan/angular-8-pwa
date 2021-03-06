import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'items',
    loadChildren: () => import('./modules/application/items/items.module')
      .then(m => m.ItemsModule)
  }, {
    path: 'contact',
    loadChildren: () => import ('./modules/general/contact/contact.module')
      .then(m => m.ContactModule)
  }, {
    path: 'about',
    loadChildren: () => import('./modules/general/about/about.module')
      .then(m => m.AboutModule)
  }, {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
