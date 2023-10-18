import { Component, OnInit } from '@angular/core';
import { AbhaCardService } from '../../abha-card.service';

@Component({
  selector: 'app-abha-card',
  templateUrl: './abha-card.component.html',
  styleUrls: ['./abha-card.component.css']
})
export class AbhaCardComponent implements OnInit {

  user:any = ""
  card:any = ""
  constructor(private _abhaService:AbhaCardService) { }

  ngOnInit(): void {
    this._abhaService.getAbhacard().subscribe((cardData:any)=>{
     
      this.card = cardData.card
      this.user = cardData.userDetail
    },(err)=> console.log(err))
  }

}
