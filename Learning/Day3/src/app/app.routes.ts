import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Photos } from './photos/photos';
import { Users } from './users/users';
import {Contact} from './contact/contact';
export const routes: Routes = [
 {path:"",component:Home},
 {path:"about",component:About},
 {path:"photos",component:Photos},
 {path:"users",component:Users},
 {path:"contact",component:Contact}

]
