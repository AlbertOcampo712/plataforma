import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegistroComponent } from './login/registro.component';
import { ErrorComponent} from './shared/error/error.component';
import { PagesComponent } from './pages/pages.component';


const appRoutes:Routes=[
	{ path: '', 
	component: PagesComponent,
	children:[
		{ path: 'inicio', component: InicioComponent },
		{ path: '', redirectTo: '/inicio', pathMatch:'full'}
	]
	 },
	{ path: 'inicio', component: InicioComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'registro', component: RegistroComponent },
	{ path: '**', component: ErrorComponent}

];


export const APP_ROUTES=RouterModule.forRoot(appRoutes,{useHash:true});
