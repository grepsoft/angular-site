import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  mouseOverClass = {
    'cms': 'shadow-none',
    'lbs': 'shadow-none',
    'pnd': 'shadow-none'
  };
  doHighlight = false;

  constructor() { }

  ngOnInit() {
  }

  highlightItem(type, target) {
    let classToAdd = "shadow-lg";
        
    if (type !== 'mouseenter') {
      classToAdd = "shadow-none";
    }
    
    this.mouseOverClass[target] = classToAdd;
  }
}
