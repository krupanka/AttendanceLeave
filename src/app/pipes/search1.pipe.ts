import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search1'
})
export class Search1Pipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter((el)=>{
      //searcging element of employee name admin, manager
     if(el.employee.first_name.indexOf(args)===-1){
       return false;
     }else {
       return true;
     }
    
    });
  }

}
