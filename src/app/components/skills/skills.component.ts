import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills = [
    {
      skillCategory: 'Frontend',
      skillDescription: '2+ years of experience',
      skillIconClass: 'uil-brackets-curly',
      skillList: [
        {
          skill: 'HTML',
          skillPercentage: '85%'
        },
        {
          skill: 'CSS',
          skillPercentage: '80%'
        },
        {
          skill: 'Javascript',
          skillPercentage: '75%'
        },
        {
          skill: 'Angular',
          skillPercentage: '70%'
        }
      ]
    },
    {
      skillCategory: 'Backend',
      skillDescription: '1+ years of experience',
      skillIconClass: 'uil-database',
      skillList: [
        {
          skill: 'NodeJS',
          skillPercentage: '60%'
        },
        {
          skill: 'ExpressJS',
          skillPercentage: '50%'
        }
      ]
    },
    {
      skillCategory: 'Database',
      skillDescription: '1+ years of experience',
      skillIconClass: 'uil-server-connection',
      skillList: [
        {
          skill: 'MySQL',
          skillPercentage: '60%'
        },
        {
          skill: 'MongoDB',
          skillPercentage: '70%'
        }
      ]
    },
  ];

  setActiveClassTo = this.skills[0].skillCategory;

  constructor() {}

  ngOnInit(): void {}
}
