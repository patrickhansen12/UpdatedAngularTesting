import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {CvrService} from './cvr-info.service';
import {ICompany} from './company.model';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {

  let cvrService: CvrService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
      ],
    }).compileComponents();

    cvrService = TestBed.get(CvrService);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the joke.jpg asset/image folder', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.joke>img').src).toContain('assets/images/joke.jpg');
  }));

  it('should render the loading.gif from our asset/image folder', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.loading>img').src).toContain('assets/images/loading.gif');
  }));
  it(`should have as title 'testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('testing');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to testing!');
  });

  it('should have a field telling to enter CVR number', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#companyNameFast').textContent).toContain('Please input CVR number.');
  });

  it('should show the company name of the cvr number enterd Jasmine Done', (done) => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    const compiled = fixture.debugElement.nativeElement;

    const companyObject: ICompany = {
      address: '',
      city: '',
      companycode: 0,
      companydesc: '',
      creditbankrupt: false,
      email: '',
      employees: '',
      industrycode: 0,
      industrydesc: '',
      phone: 0,
      productionunits: [],
      protected: false,
      startdate: '',
      t: 0,
      version: 0,
      zipcode: 0,
      vat: null,
      name: 'Test OK'
    };

    const spy = spyOn(cvrService, 'getByVat').and.returnValue(Promise.resolve(companyObject));
    component.ngOnInit();
    component.cvrField.setValue('hello'); // set the value of the "text field";

    spy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      expect(compiled.querySelector('#companyNameFast').textContent).toBe('Test OK');
      done();
    });
  });

  it('should show the company name of the cvr number enterd Async / WhenStable ', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    const compiled = fixture.debugElement.nativeElement;

    const companyObject: ICompany = {
      address: '',
      city: '',
      companycode: 0,
      companydesc: '',
      creditbankrupt: false,
      email: '',
      employees: '',
      industrycode: 0,
      industrydesc: '',
      phone: 0,
      productionunits: [],
      protected: false,
      startdate: '',
      t: 0,
      version: 0,
      zipcode: 0,
      vat: null,
      name: 'Test OK'
    };

    const spy = spyOn(cvrService, 'getByVat').and.returnValue(Promise.resolve(companyObject));
    component.ngOnInit();
    component.cvrField.setValue('hello'); // set the value of the "text field";

    fixture.whenStable().then(() =>{
      fixture.detectChanges();
      expect(compiled.querySelector('#companyNameFast').textContent).toBe('Test OK');
    });
  });

  it('should show the company name of the cvr number enterd fakeAsync / Tick', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    const compiled = fixture.debugElement.nativeElement;

    const companyObject: ICompany = {
      address: '',
      city: '',
      companycode: 0,
      companydesc: '',
      creditbankrupt: false,
      email: '',
      employees: '',
      industrycode: 0,
      industrydesc: '',
      phone: 0,
      productionunits: [],
      protected: false,
      startdate: '',
      t: 0,
      version: 0,
      zipcode: 0,
      vat: null,
      name: 'Test OK'
    };

    const spy = spyOn(cvrService, 'getByVat').and.returnValue(Promise.resolve(companyObject));
    component.ngOnInit();
    component.cvrField.setValue('hello'); // set the value of the "text field";

    tick();
    fixture.detectChanges();
    expect(compiled.querySelector('#companyNameFast').textContent).toBe('Test OK');
  }));
});
