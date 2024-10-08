import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {macbookList} from "./app/Shared/mockMacBook.data";
import {MacBookListComponent} from "./app/mac-book-list/mac-book-list.component";


const routes: Routes = [
  {path:'', redirectTo: '/macbooks', pathMatch: 'full'},
  { path: 'macbooks', component: MacBookListComponent}];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(() => console.log('Bootstrap successful'));
