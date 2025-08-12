import { SecondaryButton } from '../../app/_components/secondary-button/secondary-button';
import { PrimaryButton } from './../../app/_components/primary-button/primary-button';
import { Component } from '@angular/core';

@Component({
  selector: 'app-certificado-form',
  imports: [SecondaryButton, PrimaryButton],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {

}
