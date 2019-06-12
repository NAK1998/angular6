import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule,RouteConfigLoadEnd} from '@angular/router';

import {UserComponent} from './components/app.user';
import {HistoryComponent} from './components/app.history';

import {LoginComponent} from './components/app.login';
import { AuthGuard } from './auth.gaurd';



const appRoutes: Routes = 

[
    {
        path:'login',
        component:LoginComponent
    },
    {
        path: 'user',
        component: UserComponent,
        canActivate: [AuthGuard]
       
       
    },
    {
        path: 'history',
        component: HistoryComponent,
        canActivate: [AuthGuard]
    },
    {
        path:'',
        component:LoginComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);