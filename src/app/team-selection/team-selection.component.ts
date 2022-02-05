import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FloarService } from '../services/floar.service';

@Component({
  selector: 'app-team-selection',
  templateUrl: './team-selection.component.html',
  styleUrls: ['./team-selection.component.scss']
})
export class TeamSelectionComponent implements OnInit {

  teams: any;

  teamsForm: FormGroup = this.fb.group({
    selectedTeams: new FormArray([])
  })

  constructor(private fb: FormBuilder, private floarService: FloarService, private router: Router) { }

  ngOnInit(): void {
    this.floarService.getTeams()
    .subscribe((teams) => {
      console.log("GETTING TEAMS");
      console.log(teams)
      this.teams = teams;
    })
  }

  onCheckboxChange(event: any) {
    const selectedTeams = this.teamsForm.get('selectedTeams') as FormArray;

    if (event.target.checked) {
      selectedTeams.push(new FormControl(event.target.value))
    } else {
      const index = selectedTeams.controls.findIndex(x => x.value === event.target.value);
      selectedTeams.removeAt(index);
    }

    console.log("FORM VALUE", this.teamsForm.value);
  }

  onNextClick() {
    this.floarService.editTeams(this.teamsForm.value.selectedTeams)
    .subscribe(() => {
      console.log("EDITED");
      this.router.navigateByUrl('/customer')
    },
    error => this.router.navigateByUrl('/customer')
    )
  }

}
