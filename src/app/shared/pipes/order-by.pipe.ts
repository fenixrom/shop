import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(list: any[] | null, key: string, isAsc: boolean = false): any[] | null {
    if (!list) {
      return list;
    }
    const sortedArr = [...list].sort((a: any, b: any) => {
      if ( a[key] < b[key] ){
        return -1;
      }
      if ( a[key] > b[key] ){
        return 1;
      }
      return 0;
    });

    return isAsc ? sortedArr : sortedArr.reverse();
  }

}
