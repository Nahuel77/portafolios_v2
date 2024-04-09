import { Component } from '@angular/core';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.scss']
})
export class CertificadosComponent {

  showImage: number | null = null;

  toggleImage(index: number): void {
    this.showImage = this.showImage === index ? null : index;
  }

}
