import { Routes } from '@angular/router';
import { Landingpage } from './landingpage/landingpage';
import { MainContent } from './main-content/main-content';
import { Impressum } from './shared/impressum/impressum';
import { DataProtection } from './shared/data-protection/data-protection';

export const routes: Routes = [
    //{ path:'', component: Landingpage },
    { path:'', component: MainContent },
    { path:'imprint', component: Impressum},
    { path:'data-protection', component: DataProtection}
];
