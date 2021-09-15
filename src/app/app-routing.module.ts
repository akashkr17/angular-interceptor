import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormatInterceptorComponent } from './components/format-interceptor/format-interceptor.component';
import { RetryInterceptorComponent } from './components/retry-interceptor/retry-interceptor.component';
import { HeaderInterceptorComponent } from './header-interceptor/header-interceptor.component';

const routes: Routes = [
  {path:'header', component:HeaderInterceptorComponent},
  {path:'format', component:FormatInterceptorComponent},
  {path:'retry', component:RetryInterceptorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
