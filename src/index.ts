import { FrameworkConfiguration } from "aurelia-framework";

// export * from "./ContextualMenu/ContextualMenu";
// export * from "./ContextualMenu/ContextualMenuItem";
// export * from "./Button/Button";
// export * from "./Icon/Icon";
// export * from "./Persona/Persona";
// export * from "./Overlay/Overlay";
// export * from "./Label/Label";
// export * from "./List/List";
// export * from "./ListItem/ListItem";
// export * from "./ListItem/ListItemAction";
// export * from "./Panel/Panel";
// export * from "./Panel/PanelContent";
// export * from "./NavBar/NavBar";
// export * from "./NavBar/NavBarItem";
// export * from "./SearchBox/SearchBox";
// export * from "./Spinner/Spinner";


export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    "./ContextualMenu/ContextualMenu",
    "./ContextualMenu/ContextualMenuItem",
    "./Button/Button",
    "./Icon/Icon",
    "./Persona/Persona",
    "./Overlay/Overlay",
    "./Label/Label",
    "./List/List",
    "./ListItem/ListItem",
    "./ListItem/ListItemAction",
    "./Panel/Panel",
    "./Panel/PanelContent",
    "./NavBar/NavBar",
    "./NavBar/NavBarItem",
    "./SearchBox/SearchBox",
    "./Spinner/Spinner",
  ]);
}
