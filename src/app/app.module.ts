import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule,
  MatGridListModule,
  MatIconModule,
  MatListModule, MatPaginatorModule,
  MatSidenavModule, MatSortModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {SidenavComponent} from './sidenav/sidenav.component';
import {MoviesComponent} from './movies/movies.component';
import {HttpClientModule} from '@angular/common/http';
import {YtsService} from './yts/yts.service';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieGridListComponent } from './movie-grid-list/movie-grid-list.component';
import { MovieTableListComponent } from './movie-table-list/movie-table-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MoviesComponent,
    MovieCardComponent,
    MovieGridListComponent,
    MovieTableListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatCheckboxModule,
    MatSortModule,
    MatPaginatorModule,

    FlexLayoutModule
  ],
  providers: [YtsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
