import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {macbookList} from "./app/Shared/mockMacBook.data";
import {MacBookListComponent} from "./app/mac-book-list/mac-book-list.component";
import {ModifyMacbookComponent} from "./app/modify-macbook/modify-macbook.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {MacBookListItemComponent} from "./app/mac-book-list-item/mac-book-list-item.component";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./app/services/in-memory-data.service";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";


const routes: Routes = [
  {path:'', redirectTo: '/macbooks', pathMatch: 'full'},
  { path: 'macbooks', component: MacBookListComponent},
  { path: 'modify', component: ModifyMacbookComponent},
  { path: 'item/:id', component: MacBookListItemComponent},
  {path: 'modify-macbook/:id', component: ModifyMacbookComponent},
  { path: '**', component: PageNotFoundComponent},
  ];


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Ensure that HTTP interceptors are properly configured
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 })) // Import providers dynamically
  ],
}).catch((err) => console.error(err));
