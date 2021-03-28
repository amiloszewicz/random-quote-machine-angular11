import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public appTitle = 'Random Qoute Machine';
  public appAuthor = 'by Adam Miłoszewicz';
  
  constructor() { }
  
  ngOnInit(): void {

  }

}
