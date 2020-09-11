import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-localstorage';

@Injectable({
  providedIn: 'root'
})
export class DumpDataService {

  constructor(private _localStorage : LocalStorageService) { }

  public getSections(){
    return localStorage.getItem('app')['sections'];
  } 

  public postSection(section:any) {
    const app = this.getData();
    let sections = app['sections'] ;
    if (!sections) {
      sections = [];
    }
    sections.push(section);
  }

  public putSection(section:any){
    const app = this.getData();
    let sections = app['sections'] ;
    if (!sections) {
      return null;
    } 

    let index = sections.findIndex((s: any) => s.id == section.id);
    if (index==-1) {
      return null;
    } 

    sections[index] = section;
    app['sections'] = sections;
    localStorage.setItem('app',JSON.stringify(app));
    return section;
  }

  public deleteSection(section: any){
    const app = this.getData();
    let sections = app['sections'] ;
    if (!sections) {
      return null;
    } 
    let index = sections.findIndex((s: any) => s.id == section.id);
    if (index==-1) {
      return null;
    } 

    sections = sections.filter((s: any) => s.id!=section.id);
    app['sections'] = sections;
    localStorage.setItem('app',JSON.stringify(app));
  }

  private getData(){
    return localStorage.getItem('app');
  }
}
