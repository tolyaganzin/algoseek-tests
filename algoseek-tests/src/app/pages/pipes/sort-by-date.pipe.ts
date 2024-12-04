import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByDate',
  standalone: true
})
export class SortByDatePipe implements PipeTransform {//order from new to old

  transform(items: any[], dateField: string = 'date'): any[] {// possible to improve for order type selection
    if (!items || items.length === 0) return items;
    
    // Sort the items by the given date field (default is 'date')
    return items.sort((a, b) => {
      const dateA = new Date(a[dateField]);
      const dateB = new Date(b[dateField]);

      return dateB.getTime() - dateA.getTime(); // Ascending order
    });
  }

}
