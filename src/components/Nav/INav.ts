export interface INav {
    /**
     * A collection of link groups to display in the navigation bar
     */
    groups: INavGroup[];
}

export interface INavGroup {

    /**
     * Text to render as the header of a group
     */
    name?: string;

    /**
     * Links to render within this group
     */
    links: INavLink[];

    /**
     * truw if this group is expanded
     */
    isExpanded: boolean;
}

export interface INavLink {

    /**
     * Text to render for this link
     */
    name: string;

    /**
     * URL to navigate to for this link
     */
    url: string;

    /**
     * Child links to this link, if any
     */
    links?: INavLink[];

    /**
     * Function callback invoked when a link in the navigation is clicked
     */
    onClick?: (item: INavLink) => void;

    /**
     * button icon name if applied
     */
    icon?: string;

    /**
     * Classname to apply to the icon link.
     */
    iconClassName?: string;
    /**
     * Whether or not the link is in an expanded state
     */
    isExpanded?: boolean;
    /**
     * title for tooltip or description
     */
    title?: string;
    /**
     * Any additional properties to apply to the rendered links.
     */
    [propertyName: string]: any;
}
