import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    TagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GroupsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
