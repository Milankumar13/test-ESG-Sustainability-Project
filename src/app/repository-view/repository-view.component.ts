import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
declare var $: any;

@Component({
  selector: 'app-repository-view',
  templateUrl: './repository-view.component.html',
  styleUrls: ['./repository-view.component.css']
})
export class RepositoryViewComponent implements OnInit {

  companies : any = [];
  selectedCompany : any = {};

  constructor(
    private dataService : DataService
  ) {
   }

  ngOnInit(): void {
    this.companies = this.dataService._getCompaniesList();
    setTimeout(() => {
      this.directive_call();
    }, 500);
  }

  selectedFirm(company : any){
    console.log(company)
    this.selectedCompany = company;
  }

  directive_call() {
    var menuopener = $(this);

  // Grid or list selection
  $('#btn-grid').on('click', function () {
    $('#main-folders').removeClass('flex-column');
    $('#btn-list').removeClass('active')
    menuopener.addClass('active')
  });
  $('#btn-list').on('click', function () {
    $('#main-folders').addClass('flex-column');
    $('#btn-grid').removeClass('active')
    menuopener.addClass('active')
  });
  $('#btn-grid').on('click', function () {
    $('#main-files').removeClass('flex-column');
    $('#btn-list').removeClass('active')
    menuopener.addClass('active')
  });
  $('#btn-list').on('click', function () {
    $('#main-files').addClass('flex-column');
    $('#btn-grid').removeClass('active')
    menuopener.addClass('active')
  });


  // Open folder and see files
  $('button.folder-container').on('click', function () {
    $('#filesGroup').removeClass('d-none');
    $('#foldersGroup').addClass('d-none')
  });
  $('a#backToFolders').on('click', function () {
    $('#foldersGroup').removeClass('d-none');
    $('#filesGroup').addClass('d-none')
  });

  console.log('call in directive function')
}
}
