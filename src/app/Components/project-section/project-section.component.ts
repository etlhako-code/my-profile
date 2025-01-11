import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.scss']
})
export class ProjectSectionComponent implements OnInit {

  constructor() { }
  projects=[{
    "name":"E-sign",
    "img":"/../../../assets/images/Logo.png",
    "link":"https://e-signdigitalacademy.herokuapp.com/",
    "stack":["html","css","Angular","APIRTC","nodejs", "postgresql"],
    "description":"Esign serves a real time communication example, full crud ecormerce platform for sign language interpreters",
    
  },
  {
    "name":"Brownies cake shop",
    "img":"/../../../assets/images/Logo.png",
    "link":"http://simple-store-back-end.herokuapp.com/home",
    "stack":["html","css","Angular","nodejs", "postgresql"],
    "description":"an example full crud ecormerce platform that sells pastries"
  },
  {
    "name":"Jobberg",
    "img":"/../../../assets/images/Logo.png",
    "link":"http://jobbergfrontend.herokuapp.com/",
    "stack":["Html","css","Angular","nodejs", "postgresql"],
    "description":"created both for recruiters and teams. Where recruiters reimage collaboration and find people"
  }];



  ngOnInit(): void {
  }

}
