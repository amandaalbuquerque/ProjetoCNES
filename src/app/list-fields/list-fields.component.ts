import { Component, OnInit } from '@angular/core';
import { FirebaseServices } from '../services/firebase-services.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-fields',
  templateUrl: './list-fields.component.html',
  styleUrls: ['./list-fields.component.css']
})
export class ListFieldsComponent implements OnInit {

  // myDataArray = [];
  public myDataArray: MatTableDataSource<any>;

  constructor(public lista: FirebaseServices) { }

  displayedColumns: string[] = ['nome', 'tipoUnidade', 'uf'];

  async ngOnInit() {

    // this.myDataArray = [
    //   {Nome: 'Hydrogen', TipoUnidade: 1.0079, UF: 'H'},
    //   {Nome: 'Helium', TipoUnidade: 4.0026, UF: 'He'},
    //   {Nome: 'Lithium', TipoUnidade: 6.941, UF: 'Li'},
    //   {Nome: 'Beryllium', TipoUnidade: 9.0122, UF: 'Be'},
    //   {Nome: 'Boron', TipoUnidade: 10.811, UF: 'B'},
    //   {Nome: 'Carbon', TipoUnidade: 12.0107, UF: 'C'},
    //   {Nome: 'Nitrogen', TipoUnidade: 14.0067, UF: 'N'},
    //   {Nome: 'Oxygen', TipoUnidade: 15.9994, UF: 'O'},
    //   {Nome: 'Fluorine', TipoUnidade: 18.9984, UF: 'F'},
    //   {Nome: 'Neon', TipoUnidade: 20.1797, UF: 'Ne'},
    //   ];

    const arraylist = [];
    let resultSize;
    const listResult = [];
    await this.lista.getcnes().subscribe((response) => {
      resultSize = response.size;
      response.forEach(element => {
        listResult.push(element.data());
        resultSize--;

        if (resultSize == 0) {
          this.myDataArray = new MatTableDataSource(listResult);
        }
        console.log('CONSOLE!', element.data());
      });
    });

    console.log(arraylist);
    console.log(this.myDataArray);
  }
}
