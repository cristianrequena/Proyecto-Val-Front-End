import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: "", pathMatch: "full", redirectTo: "home" },
    
    {
        path:'',
        loadChildren: () => import('./pages/auth/auth.routes').then(m => m.AUTH_ROUTES),
        //canActivate:[redirectGuard]
    },

    {
        path:'',
        loadChildren: () => import('./pages/home/home.routes').then(m => m.HOME_ROUTES),
        //canActivate:[redirectGuard]
    },

    {
        path:'',
        loadChildren: () => import('./pages//contacts/contacts.routes').then(m => m.CONTACTS_ROUTES),
       // canActivate:[redirectGuard]
    },

    { path: '**', redirectTo: 'welcome' }
];
