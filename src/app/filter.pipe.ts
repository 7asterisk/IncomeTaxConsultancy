import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from './Customer';

@Pipe({
    name: 'filter',
    pure: false
})

export class FilterPipe implements PipeTransform {
    transform(items: any[], filter: Customer): any {
        if (!items || !filter) {
            return items;
        }
        filter.name = filter.name.toLowerCase();
        return items.filter(item => item.name.toLowerCase().indexOf(filter.name) !== -1);
    }
}
