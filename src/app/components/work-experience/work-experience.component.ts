import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  experience = [
    {
      role: 'Frontend Developer',
      companyDetails: 'Crownstack technologies - Delhi',
      timePeriod: 'Dec 2020 - Present'
    },
    {
      role: 'MEAN Stack Developer Intern',
      companyDetails: 'Cintana technologies - Chennai',
      timePeriod: 'Jan 2020 - Jun 2020'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
