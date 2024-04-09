import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'glitch'
})
export class GlitchPipe implements PipeTransform {

  transform(value: string): string {
    return `<span class="glitch">${value}</span>`;
  }

}
