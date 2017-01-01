import {Router, RouterConfiguration} from 'aurelia-router'

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Office UI Fabric in Aurelia';
    let navStrat = (instruction) => {
      instruction.config.moduleId = instruction.fragment
      instruction.config.href = instruction.fragment
    }
    config.map([
      { route: ['', 'home'],    name: 'home',         moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' },
      {route: ['components/*'],   name: 'route',  navigationStrategy: navStrat}
    ]);

    this.router = router;
  }
}
