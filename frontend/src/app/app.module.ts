import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupPageComponent } from './components/group-page/group-page.component';
import { MessageComponent } from './components/message/message.component';
import { MembersComponent } from './components/members/members.component';
import { MessagesComponent } from './components/messages/messages.component';
import { CreateMessageComponent } from './components/create-message/create-message.component';
import { TagComponent } from './components/tag/tag.component';
import { TagsComponent } from './components/tags/tags.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';

import { GroupsService } from '../app/services/groups.service'

@NgModule({
  declarations: [
    AppComponent,
    GroupPageComponent,
    MessageComponent,
    MembersComponent,
    MessagesComponent,
    CreateMessageComponent,
    TagComponent,
    TagsComponent,
    NavbarComponent,
    HomePageComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GroupsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
