import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import {MacBookListComponent} from "./app/mac-book-list/mac-book-list.component";
import {MacBookListItemComponent} from "./app/mac-book-list-item/mac-book-list-item.component";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./app/services/in-memory-data.service";
import {provideHttpClient} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";


const routes: Routes = [
  {path:'', redirectTo: '/macbooks', pathMatch: 'full'},
  { path: 'macbooks', component: MacBookListComponent},
  { path: 'modify',
    loadComponent: () =>
      import('./app/mac-book-list-item/mac-book-list-item.component').then(m => m.MacBookListItemComponent) },
  { path: 'item/:id', component: MacBookListItemComponent},
  {path: 'modify-macbook/:id',
    loadComponent: () =>
      import('./app/modify-macbook/modify-macbook.component').then(m => m.ModifyMacbookComponent) },
  { path: '**',
    loadComponent: () =>
      import('./app/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent) },
  ];


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Ensure that HTTP interceptors are properly configured
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 })) // Import providers dynamically
  ],
}).catch((err) => console.error(err));



// const routes: Routes = [
//   {path:'', redirectTo: '/macbooks', pathMatch: 'full'},
//   { path: 'macbooks', component: MacBookListComponent},
//   { path: 'modify', component: ModifyMacbookComponent},
//   { path: 'item/:id', component: MacBookListItemComponent},
//   {path: 'modify-macbook/:id', component: ModifyMacbookComponent},
//   { path: '**', component: PageNotFoundComponent},
// ];
