import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    private title: string;

  constructor(private data: DataService) {
    this.title = data.title;
  }

  ngOnInit() {
  }

}
