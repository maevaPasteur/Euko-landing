import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data/data.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    private title: string;
    hideDivs;

    constructor(private data: DataService) {
        this.title = data.title;
    }

    ngOnInit() {
        this.hideDivs = [].slice.call(document.querySelectorAll('.hide'));
        window.addEventListener('scroll', this.isVisible(this.hideDivs), true);
    }

    isVisible() {
        console.log('scroll');
        for (const b of this.hideDivs) {
            console.log(b);
            // console.log(pageXOffset, pageYOffset);
        }
    }
}
