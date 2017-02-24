import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class Home {
    heading = 'Office UI Fabric JS components for Aurelia!';
    

}

export class UpperValueConverter {
    toView(value) {
        return value && value.toUpperCase();
    }
}
