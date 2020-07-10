import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programmes',
  templateUrl: './programmes.page.html',
  styleUrls: ['./programmes.page.scss'],
})
export class ProgrammesPage implements OnInit {

  programmes:Array<Object> = [
    {
      name: "BSc. General",
      sub: ["Computer Science Major","Software Engineering Major"]
    },
    {
      name:"BSc Information Technology "
    },
    {
      name: "BSc Computer Studies Option"
    },
    {
      name: "BSc. Software Engineering (Mobile Application Technologies)"
    },
    {
      name: "Minors",
      sub: ["Computer Science","Software Engineering","Information Technology"]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
