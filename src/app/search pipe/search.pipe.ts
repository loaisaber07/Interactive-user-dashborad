import { Pipe, PipeTransform } from '@angular/core';
import { Iuser } from '../Iuser/iuser';
import { HttpClient } from '@angular/common/http';
import { IUserById } from '../Iuser/iuser-by-id';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  constructor() { }

  transform(user:any[] , id:number):any {
    let a ; 
    if(id){
 user.find(p=>{
  if(p == id){a= p;}
});
   return a;
    }}}
