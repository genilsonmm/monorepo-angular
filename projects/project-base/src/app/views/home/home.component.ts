import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public profile: string = ''

  constructor(private router: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.profile = params['profile']
    })
  }
}
