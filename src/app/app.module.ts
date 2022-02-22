import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TinhThanhComponent } from './tinh-thanh/tinh-thanh.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const appRoutes:Routes=[
  {path:'',component:TinhThanhComponent},
 ];
@NgModule({
  declarations: [
    AppComponent,
    TinhThanhComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
      ),
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule,
      
      BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
