import { Routes } from '@angular/router';
import { Logincomponent } from './logincomponent/logincomponent';
import { Maincomponent } from './researchcomponent/maincomponent';
import { Homecomponenet } from './homecomponenet/homecomponenet';
import { Library } from './library/library';
import { Signin } from './signin/signin';

export const routes: Routes = [{path:'login',component:Logincomponent},{path:'search',component:Maincomponent},{path:'home',component:Homecomponenet}
    ,{path:'library',component:Library},{path:'sign',component:Signin}
];
