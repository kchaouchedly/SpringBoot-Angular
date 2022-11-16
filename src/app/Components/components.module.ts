import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { AppComponent } from "../app.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";











@NgModule({
    declarations: [
      HeaderComponent,
      FooterComponent,
      SidebarComponent,
      
     
  
    ],
    imports: [
      BrowserModule,
      AppRoutingModule , 
       ReactiveFormsModule
  
    ],
    exports:[
        FooterComponent,
        HeaderComponent,
        SidebarComponent
    ]
})
export class ComponentsModule{}