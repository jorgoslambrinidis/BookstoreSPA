// angular + angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// modules
import { TestModule } from './modules/test/test.module';

// services
import { MainService } from './services/main.service';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BookComponent } from './components/book/book.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PublisherComponent } from './components/publisher/publisher.component';
import { UserComponent } from './components/user/user.component';
import { AuthorComponent } from './components/author/author.component';
import { CategoryComponent } from './components/category/category.component';
import { BookService } from './services/book.service';
import { PublisherService } from './services/publisher.service';
import { BookCardComponent } from './shared/components/book-card/book-card.component';
import { MaterialModule } from './shared/modules/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BookComponent,
    AuthorComponent,
    CategoryComponent,
    PublisherComponent,
    UserComponent,
    BookCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TestModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    MainService,
    BookService,
    PublisherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
