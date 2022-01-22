import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IsAuthenticatedGuard, IsGuestGuard, RestrictUnauthorizedRequestsInterceptor, SetAuthorizationHeaderInterceptor } from './modules/auth';
import { ContactUsComponent } from './modules/global/components/contact-us/contact-us.component';
import { NotFoundComponent } from './modules/global/components/not-found/not-found.component';
import { PageComponent } from './modules/global/components/page/page.component';
import { UnauthorizedComponent } from './modules/global/components/unauthorized/unauthorized.component';
import { ProductsModule } from './modules/products/products.module';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module')
      .then(module => module.AuthModule),
    canActivate: [IsGuestGuard]
  },
  {
    path: 'account',
    loadChildren: () => import('./modules/account/account-routing.module')
      .then(module => module.AccountRoutingModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./modules/orders/orders-routing.module')
      .then(module => module.OrdersRoutingModule),
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: 'pages/:page',
    component: PageComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full' 
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [
    ProductsModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SetAuthorizationHeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RestrictUnauthorizedRequestsInterceptor, multi: true },
  ]
})
export class AppRoutingModule { }
