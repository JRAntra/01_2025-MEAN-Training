import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: false,
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  title = 'Training';
  isShow = []
  arr=[
    {name:"JR",Occ:"Trainer"},
    {name:"Miranda",Occ:"Trainer"},
    {name:"David",Occ:"Contractor"},
    {name:"Patrick",Occ:"Manager"},

  ]
  showsColor="green"

  names= ["JR", "David", "tom","patrick"]

  showTemplate = 'attribute'

  ngStyleColor = "green"

  onSelect(name:string){
    this.showTemplate = name;
  }
}
