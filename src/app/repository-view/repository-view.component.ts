import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-repository-view',
  templateUrl: './repository-view.component.html',
  styleUrls: ['./repository-view.component.css']
})
export class RepositoryViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.directive_call();
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
