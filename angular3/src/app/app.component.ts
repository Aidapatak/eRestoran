// @ts-ignore

import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf, NgStyle} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';

export interface Student {
  id: number
  ime: string
  prezime: string
  broj_indeksa: string
  opstina_rodjenja_id: number
  opstina_rodjenja: OpstinaRodjenja
  datum_rodjenja: string
  created_time: string
  slika_studenta: string
}

export interface OpstinaRodjenja {
  id: number
  description: string
  drzava_id: number
  drzava: Drzava
}

export interface Drzava {
  id: number
  naziv: string
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgIf, NgForOf, NgStyle, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private httpClient: HttpClient) {


  }

  name: string = "Aida";
  brojac: number = 0;
  niz: string[] = ['jedan', 'dva', 'tri', 'cetiri'];
  public temp: string = " ";

  getName(): string {
    return "hello : " + this.name;
  }

  buttonClick() {
    this.brojac++;
    this.name += "." + this.brojac;
  }

  nameChangeEvent($event: Event) {
    // @ts-ignore
    let v = $event.target.value;
    this.name = v;
  }

  showHeader() {
    return this.name.length > 2
  }

  GetHeaderStyle() {
    return this.name.startsWith('A') ? {backgroundColor: "blue"} : {backgroundColor: "red"};
  }

  studentArray : Student[]=[];

  fetchData() {
    const url = "https://wrd-fit.info/Student/GetAll";
    this.httpClient.get(url).subscribe((x: any) => {

      this.studentArray = x;
    });

  };
}




