import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiGateway } from 'src/api-gateway';
import { AlbumPorvider } from 'src/providers/album.provider';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: 'dashboard', component: DashboardComponent },
   ]
@NgModule({
  
  declarations: [
    AppComponent, 
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    
    
  ],
  providers: [ApiGateway, AlbumPorvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
