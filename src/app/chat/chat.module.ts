import {NgModule} from '@angular/core';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact-list/contact/contact.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations : [ContactListComponent, ContactComponent, ChatComponent],
  imports : [],
  exports : [ContactListComponent, ChatComponent]
})
export class ChatModule {

}
