import { Component, Input, OnInit } from '@angular/core';
import {PipesService} from '../pipes.service'

@Component({
  selector: 'app-pipes-excample',
  templateUrl: './pipes-excample.component.html',
  styleUrls: ['./pipes-excample.component.scss']
})
export class PipesExcampleComponent implements OnInit{
  
 
  constructor( private PipesService : PipesService) { }

  dateAmount : { date: Date;  amount: number}
  
  ngOnInit() {
    this.dateAmount = this.PipesService.getDateAmount()
  }

}
