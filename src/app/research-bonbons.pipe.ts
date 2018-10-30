import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'researchBonbons'
})
export class ResearchBonbonsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
