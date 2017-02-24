
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
      // { route: 'Breadcrumb',      name: 'breadcrumb',   moduleId: 'components/breadcrumb/breadcrumb', nav: true,  title: 'Breadcrumb',  settings: 'COMPONENTS' },
      { route: 'Button',          name: 'button',       moduleId: 'components/button/button',         nav: true,  title: 'Button',      settings: 'COMPONENTS' },
      { route: 'CheckBox',        name: 'checkbox',     moduleId: 'components/checkbox/checkbox',     nav: true,  title: 'CheckBox',    settings: 'COMPONENTS' },
      { route: 'CommandButton',   name: 'cmdbutton',    moduleId: 'components/cmdbutton/cmdbutton',   nav: true,  title: 'CommandButton', settings: 'COMPONENTS' },
      { route: 'ContextualMenu',  name: 'ctxmenu',      moduleId: 'components/ctxmenu/ctxmenu',       nav: true,  title: 'ContextualMenu', settings: 'COMPONENTS' },
      { route: 'FacePile',        name: 'facepile',     moduleId: 'components/facepile/facepile',     nav: true,  title: 'FacePile',    settings: 'COMPONENTS' },
      { route: 'Icon',            name: 'icon',         moduleId: 'components/icons/icons',           nav: true,  title: 'Icon',        settings: 'COMPONENTS' },
      { route: 'Label',           name: 'label',        moduleId: 'components/label/labels',          nav: true,  title: 'Label',       settings: 'COMPONENTS' },
      { route: 'Link',            name: 'link',         moduleId: 'components/link/link',             nav: true,  title: 'Link',        settings: 'COMPONENTS' },
      { route: 'List',            name: 'list',         moduleId: 'components/list/list',             nav: true,  title: 'List',        settings: 'COMPONENTS' },
      { route: 'MessageBanner',   name: 'messagebanner',  moduleId: 'components/messagebanner/messagebanner', nav: true,  title: 'MessageBanner', settings: 'COMPONENTS' },
      { route: 'MessageBar',      name: 'messagebar',   moduleId: 'components/messagebar/messagebar', nav: true,  title: 'MessageBar',  settings: 'COMPONENTS' },
      { route: 'OrgChart',        name: 'orgchart',     moduleId: 'components/orgchart/orgchart',     nav: true,  title: 'OrgChart',    settings: 'COMPONENTS' },
      { route: 'Overlay',         name: 'overlay',      moduleId: 'components/overlay/overlay',       nav: true,  title: 'Overlay',     settings: 'COMPONENTS' },
      { route: 'Panel',           name: 'panel',        moduleId: 'components/panel/panel',           nav: true,  title: 'Panel',       settings: 'COMPONENTS' },
      { route: 'Persona',         name: 'persona',      moduleId: 'components/persona/persona',       nav: true,  title: 'Persona',     settings: 'COMPONENTS' },
      { route: 'PersonaCard',     name: 'personacard',  moduleId: 'components/personacard/personacard', nav: true,  title: 'PersonaCard',     settings: 'COMPONENTS' },
      { route: 'Progress',        name: 'progress',     moduleId: 'components/progress/progress',    nav: true,  title: 'Progress Indicator',  settings: 'COMPONENTS' },
      { route: 'Spinner',         name: 'spinner',      moduleId: 'components/spinner/spinner',       nav: true,  title: 'Spinner',     settings: 'COMPONENTS' },
      { route: 'TextField',       name: 'textfield',    moduleId: 'components/textfield/textfield',   nav: true,  title: 'TextField',   settings: 'COMPONENTS' },
      { route: 'Toggle',          name: 'toggle',       moduleId: 'components/toggle/toggle',         nav: true,  title: 'Toggle',      settings: 'COMPONENTS' },
      { route: 'components/*path',    name: 'route',        navigationStrategy: navStrat },
    ]);
    config.mapUnknownRoutes('inprogress/inprogress');
    this.router = router;
  }
}
