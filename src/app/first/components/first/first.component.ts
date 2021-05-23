import { Component, Inject, OnInit, Optional } from '@angular/core';
import { AppConfig, configToken, configValue } from 'src/app/core/services/constant.service';
import { generatedString, GeneratorFactory } from 'src/app/core/services/generator.factory';
import { GeneratorService } from 'src/app/core/services/generator.service';
import { generatedLocalStorage, localStorageClass, LocalStorageModel } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  providers: [
    {
      provide: configToken, useValue: configValue
    },
    GeneratorService,
    {
      provide: generatedString,
      useFactory: GeneratorFactory(5),
      deps: [GeneratorService]
    },
    {
      provide: generatedLocalStorage,
      useValue: localStorageClass,
    }
  ]
})
export class FirstComponent implements OnInit {

  constructor(
    @Optional() @Inject(configToken) private config: AppConfig,
    @Optional() @Inject(generatedString) private generatedRandomString: string,
    @Optional() @Inject(generatedLocalStorage) private localStorage: LocalStorageModel,
    @Optional() private generatorService: GeneratorService,
  ) {
    console.log(this.config);
    console.log(this.generatedRandomString);
    // local storage
    this.localStorage.setItem('test', [1, 2, 3]);
    console.log(this.localStorage.getItem('test'));
    // generator
    console.log(this.generatorService.getNewId());
    console.log(this.generatorService.getNewId());
    console.log(this.generatorService.getNewId());
    console.log(this.generatorService.getNewId());
    console.log(this.generatorService.getNewId());
    console.log(this.generatorService.getNewId());
  }

  ngOnInit(): void {
  }

}
