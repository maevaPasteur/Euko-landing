import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
    private title: string;

    constructor(private data: DataService) {
        this.title = data.title;
    }

  ngOnInit() {
  }

}
