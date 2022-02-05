import { Component, OnInit } from '@angular/core';
import { FloarService } from '../services/floar.service';

@Component({
  selector: 'app-user-landing',
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.scss']
})
export class UserLandingComponent implements OnInit {

  games: any;

  constructor(private floarService: FloarService) { }

  ngOnInit(): void {
    this.floarService.getGames()
    .subscribe(games => {
      console.log("GETTING GAMES");
      console.log(games)
      this.games = games;
    })
  }

}
