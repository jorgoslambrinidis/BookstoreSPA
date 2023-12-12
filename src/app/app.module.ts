// angular + angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// modules
import { TestModule } from './modules/test/test.module';
import { MaterialModule } from './shared/modules/material/material.module';

// services
import { MainService } from './services/main.service';
import { BookService } from './services/book.service';
import { PublisherService } from './services/publisher.service';
import { AuthService } from './services/auth.service';

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
import { BookCardComponent } from './shared/components/book-card/book-card.component';
import { LoginComponent } from './shared/components/login/login.component';
import { RegisterComponent } from './shared/components/register/register.component';

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
    BookCardComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TestModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    MainService,
    BookService,
    PublisherService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
