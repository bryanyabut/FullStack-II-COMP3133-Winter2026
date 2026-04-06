import { Routes } from '@angular/router';
import { Home } from './home/home';
import { OrderForm } from './order-form/order-form';
import { Profile } from './profile/profile';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', title: 'Home', component: Home},
    { path: 'order', title: 'Order form', component: OrderForm},
    { path: 'profile', title: 'Profile', component: Profile},
    { path: '**', title: 'Page Not Found', component: PageNotFound},
];
