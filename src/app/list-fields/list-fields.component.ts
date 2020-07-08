import { Component, OnInit } from '@angular/core';
import { FirebaseServices } from '../services/firebase-services.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-fields',
  templateUrl: './list-fields.component.html',
  styleUrls: ['./list-fields.component.css']
})
export class ListFieldsComponent implements OnInit {

  public myDataArray: MatTableDataSource<any>;
  public listResult = [];

  constructor(public lista: FirebaseServices) { }

  displayedColumns: string[] = ['nome', 'tipoUnidade', 'uf'];

  async ngOnInit() {
    let resultSize;
    await this.lista.getcnes().subscribe((response) => {
      resultSize = response.size;
      response.forEach(element => {
        this.listResult.push(element.data());
        resultSize--;

        if (resultSize == 0) {
          this.selectTab({ index: 0 });
        }
      });
    });
  }

  selectTab(event) {

    switch (event.index) {
      case 0:
        const listResultNome = this.listResult.sort((x, y) => {
          return ((x.Nome.toLowerCase() === y.Nome.toLowerCase()) ? 0 : ((x.Nome.toLowerCase() > y.Nome.toLowerCase()) ? 1 : -1));
        });
        this.myDataArray = new MatTableDataSource(listResultNome);
        break;
      case 1:
        const listResultTipo = this.listResult.sort((x, y) => {
          return ((x.TipoUnidade.toLowerCase() === y.TipoUnidade.toLowerCase()) ? 0 : ((x.TipoUnidade.toLowerCase() > y.TipoUnidade.toLowerCase()) ? 1 : -1));
        });
        this.myDataArray = new MatTableDataSource(listResultTipo);
        break;
      case 2:
        const listResultUf = this.listResult.sort((x, y) => {
          return ((x.UF.toLowerCase() === y.UF.toLowerCase()) ? 0 : ((x.UF.toLowerCase() > y.UF.toLowerCase()) ? 1 : -1));
        });
        this.myDataArray = new MatTableDataSource(listResultUf);
      default:
        break;
    }
  }
}
