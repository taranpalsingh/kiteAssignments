import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatTabsModule, MatSnackBarModule, MatButtonModule, MatProgressSpinner, MatProgressSpinnerModule, MatExpansionModule, MatIconModule, MatToolbarModule, MatPaginatorModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    SnackbarComponent,
    ToolbarComponent,
    SpinnerComponent,
    ExpansionPanelComponent,
    PaginatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule
  ],
  providers: [],
  entryComponents: [SnackbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
