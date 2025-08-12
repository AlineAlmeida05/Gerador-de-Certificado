import { RouterLink } from '@angular/router';
import { SecondaryButton } from './../../app/_components/secondary-button/secondary-button';
import { Component } from '@angular/core';

@Component({
  selector: 'app-certificado',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css'
})
export class Certificado {

}
