import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'swipe-certified',
  templateUrl: './swipe-certified.component.html',
  styleUrls: ['./swipe-certified.component.scss']
})
export class SwipeCertifiedComponent implements OnInit {

  @Input('data') data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
