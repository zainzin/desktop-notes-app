import { Component, OnInit } from '@angular/core';
import {ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private electronService: ElectronService) { }

  ngOnInit() {
    
  }

  createNote() {
    this.electronService.ipcRenderer.send('createNote', {
      userId: localStorage.getItem('userId'), 
      note: {
        title: 'test', body: 'note test'
      }});
  }
}
