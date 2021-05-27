import {Component, Input, OnInit} from '@angular/core';
import {TweetsEntity, UserEntity} from "../../../models/Response";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() userLoad: UserEntity | any

  constructor() { }

  ngOnInit(): void {
  }

}
