import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../user service/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IUserById } from '../../Iuser/iuser-by-id';
import { Location } from '@angular/common';
import { cursorTo } from 'readline';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {

  currentID: number = 0;
  CurrentUser: IUserById = {} as IUserById;
  previousFlag: boolean = false;
  nextFlag: boolean = false;
  constructor(private routeactive: ActivatedRoute
    , private userService: UserServiceService, private location: Location, private route: Router
  ) { }
  ngOnInit(): void {
    this.routeactive.paramMap.subscribe(paramMap => {
      this.currentID = Number(paramMap.get('id'));
      this.userService.getUserByID(this.currentID).subscribe(curUser => {
        this.CurrentUser = curUser;
      })

    })
  }
  back() {
    this.location.back();

  }
  previous() {
    console.log('ther current id is')
    console.log(this.currentID);
    if (this.currentID > 1) {
      this.currentID -= 1;
      if (this.currentID == 1) { this.previousFlag = true; }
      if (this.currentID <= 11) { this.nextFlag = false; }
      this.route.navigate(['/UserList', this.currentID]);
    } else {

      this.previousFlag = true;
    }
  }
  next() {
    if (this.currentID <= 11) {

      this.nextFlag = false;
      this.previousFlag = false;
      this.currentID += 1;
      if (this.currentID == 12) { this.nextFlag = true; }
      console.log('the current id is ');
      console.log(this.currentID);
      this.route.navigate(['/UserList', this.currentID]);
    }
    else {
      this.nextFlag = true;

    }
  }

}
