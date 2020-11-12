import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Section } from '../../../commons/dto/section.dto';
import { SectionService } from '../services/section.service';
interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  countries = COUNTRIES;
  public displayColumns = [];
  public data = [];
  public PREFIX = 'admin.section.table.columns.';

  constructor(private _sectionService: SectionService, private _translate: TranslateService) {
  }

  ngOnInit(): void {

    /**/
    let a : any= this._translate.store;
    console.log(a);
     a = this._translate.currentLang;
     console.log(a);
    
    this._translate.use('en').subscribe(() => { 
      this._sectionService.getSections().subscribe(
        (response: Section[] ) =>
        {
          let columns = [];
          this.data = response;
          for (const attribute in this.data[0]) {
            let column = this._translate.instant(this.PREFIX+attribute);
            columns.push(column);
          }
          this.displayColumns = [...columns];
          console.log(columns);
          
        },
        (error: any) => this.handlerError(error)
        );
    });


  }

  public buscar() {
    console.log("buscando");
  }

  private handlerError(error: any) {
    console.log('error:', error);
  }
}
