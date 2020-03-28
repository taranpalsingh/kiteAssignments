import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FruitsComponent } from './fruits/fruits.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { HomeComponent } from './home/home.component';
import { DeactivateGuardService } from './deactivate-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FruitsComponent,
    VegetablesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [DeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
