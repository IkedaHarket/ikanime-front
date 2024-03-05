import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path:'anime',
        loadComponent: () => import('./layouts/anime-world/anime-world.component').then( c => c.AnimeWorldComponent),
        children:[
            {
                path:'',
                loadComponent: () => import('./pages/public/anime-world/home/home.component').then( c => c.HomeComponent), 
            },{
                path:'venture',
                loadComponent: () => import('./pages/public/anime-world/venture/venture.component').then( c => c.VentureComponent),
            },{
                path:':name',
                loadComponent: () => import('./pages/public/anime-world/anime/anime.component').then( c => c.AnimeComponent),
            }
        ],
    },{
        path:'**',
        redirectTo:'anime'
    }
];
