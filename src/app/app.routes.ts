import { Routes } from '@angular/router';
import { Landingpage } from './landingpage/landingpage';
import { MainContent } from './main-content/main-content';
import { Impressum } from './shared/impressum/impressum';

export const routes: Routes = [
    //{ path:'', component: Landingpage },
    { path:'', component: MainContent },
    { path:'imprint', component: Impressum}
];
