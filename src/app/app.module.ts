import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectCardComponent } from './Components/project-card/project-card.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { IntroductionComponent } from './Components/introduction/introduction.component';
import { ProjectSectionComponent } from './Components/project-section/project-section.component';
import { AboutComponent } from './Components/about/about.component';
import { WorkExperienceComponent } from './Components/work-experience/work-experience.component';
import { ContactComponent } from './Components/contact/contact.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SkillsComponent } from './Components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectCardComponent,
    NavbarComponent,
    IntroductionComponent,
    ProjectSectionComponent,
    AboutComponent,
    WorkExperienceComponent,
    ContactComponent,
    FooterComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
