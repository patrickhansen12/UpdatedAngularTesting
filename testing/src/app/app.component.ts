import {Component, OnInit} from '@angular/core';
import {CvrService} from './cvr-info.service';
import {FormControl} from '@angular/forms';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testing';

  public companyName = 'Please input CVR number.';
  public companyNameSlow = '';

  public cvrField = new FormControl();

  constructor(
    private cvrService: CvrService
  ) {}

  ngOnInit() {
    console.debug('Subscribe to cvrField valueChanges');
    this.cvrField.valueChanges.subscribe(data => {
      console.debug('Value Changed: ' + data);
      this.updateCvrInfo(data);
    });
  }

  private async updateCvrInfo(data) {
    console.debug('Pull information for:' + data);
    const information = await this.cvrService.getByVat('dk', data).toPromise();
    console.debug('Done:');
    console.debug(information);

    this.companyName = information.name;
  }

  }
