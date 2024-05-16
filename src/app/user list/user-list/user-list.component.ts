import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Iuser } from '../../Iuser/iuser';
import { UserServiceService } from '../../user service/user-service.service';
import { IUserById } from '../../Iuser/iuser-by-id';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit ,OnChanges {
  spinner;
  FlagId: boolean = false;
  waitingFlag: boolean = true;
  searchInput !: number;
  allUser: Iuser = {} as Iuser;
  userGetByID: IUserById = {} as IUserById;
  pageNumber: number = 1;
  previousDisable: boolean = false;
  nextDisable: boolean = true;
  userListByID: IUserById = {} as IUserById;
  constructor(private userService: UserServiceService) {
    this.spinner = faSpinner;

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.userService.getUserByID(this.searchInput).subscribe(user=>{
      this.userGetByID=user;
    });
  
  }
  ngOnInit(): void {
    
      this.userService.getAllUserByPage(1).subscribe(p => {
        this.allUser = p;
      }); 

    
  }
  page1(page: number) {
    this.waitingFlag = false;
    this.pageNumber = 1;
    this.userService.getAllUserByPage(page).subscribe(user => {
      this.allUser = user;
    }).unsubscribe;
    this.previousDisable = true;
    this.nextDisable = false;
    this.waitingFlag = true;
  }
  page2(page: number) {
    this.waitingFlag = false;
    this.pageNumber = 2;
    this.userService.getAllUserByPage(page).subscribe(user => {
      this.allUser = user;
    }).unsubscribe;
    this.nextDisable = true;
    this.previousDisable = false;
    this.waitingFlag = true;
  }
  search(id: number) {
    this.userService.getUserByID(this.searchInput).subscribe(user=>{
      this.userGetByID=user;
    });

     }

}
