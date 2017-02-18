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
    "./components/ContextualMenu/ContextualMenu",
    "./components/ContextualMenu/ContextualMenuItem",
    "./components/Button/Button",
    "./components/CheckBox/CheckBox",
    "./components/Icon/Icon",
    "./components/Nav/Nav",
    "./components/NavGroup/NavGroup",
    "./components/NavLink/NavLink",
    "./components/Persona/Persona",
    "./components/PersonaCard/PersonaCard",
    "./components/Overlay/Overlay",
    "./components/Label/FabricLabel",
    "./components/List/List",
    "./components/ListItem/ListItem",
    "./components/ListItem/ListItemAction",
    "./components/OrgChart/OrgChart",
    "./components/Panel/Panel",
    // "./components/Panel/PanelContent",
    "./components/ProgressIndicator/ProgressIndicator",
    "./components/NavBar/NavBar",
    "./components/NavBar/NavBarItem",
    "./components/SearchBox/SearchBox",
    "./components/Spinner/Spinner",
  ]);
}
