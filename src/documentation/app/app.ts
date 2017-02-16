
import {Router, RouterConfiguration, NavigationInstruction} from 'aurelia-router';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Office UI Fabric in Aurelia';
    let navStrat = (instruction: NavigationInstruction) => {
      // tslint:disable-next-line:no-unused-variable
      let x = router.baseUrl;
      instruction.config.moduleId = instruction.fragment.indexOf('/') === 0 ? instruction.fragment.substring(1) : instruction.fragment;
      instruction.config.href = instruction.fragment;
      // instruction.config.viewPorts.default.moduleId = instruction.config.moduleId;
    };
    config.map([
      { route: ['', 'home'],      name: 'home',         moduleId: 'home/home',                        nav: true,  title: 'Home' },
      { route: 'Breadcrumb',      name: 'breadcrumb',   moduleId: 'components/breadcrumb/breadcrumb', nav: true,  title: 'Breadcrumb',  settings: 'COMPONENTS' },
      { route: 'Button',          name: 'button',       moduleId: 'components/button/button',         nav: true,  title: 'Button',      settings: 'COMPONENTS' },
      { route: 'CheckBox',        name: 'checkbox',     moduleId: 'components/checkbox/checkbox',     nav: true,  title: 'CheckBox',    settings: 'COMPONENTS' },
      { route: 'Icon',            name: 'icon',         moduleId: 'components/icons/icons',           nav: true,  title: 'Icon',        settings: 'COMPONENTS' },
      { route: 'Label',           name: 'label',        moduleId: 'components/label/labels',          nav: true,  title: 'Label',       settings: 'COMPONENTS' },
      { route: 'Panel',           name: 'panel',        moduleId: 'components/panel/panel',           nav: true,  title: 'Panel',       settings: 'COMPONENTS' },
      { route: 'Persona',         name: 'persona',      moduleId: 'components/persona/persona',       nav: true,  title: 'Persona',     settings: 'COMPONENTS' },
      { route: 'Progress',        name: 'progress',     moduleId: 'components/progress/progress',    nav: true,  title: 'Progress Indicator',  settings: 'COMPONENTS' },
      { route: 'components/*path',    name: 'route',        navigationStrategy: navStrat },
    ]);
    config.mapUnknownRoutes('inprogress/inprogress');
    this.router = router;
  }
}
