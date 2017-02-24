import { bindable } from "aurelia-framework";
export class ctxmenu {

    @bindable public isDisabled: boolean = false;

    menuItems: any[] = [];
    public log($event, msg: string) {
        console.log(msg);
    }

    constructor() {
        this.menuItems.push({
            title: "Various", variant: 'header',
        },
            {
                title: "Animals",
            },
            {
                variant: 'divider',
            },
            {
                title: "Books", hasMenu: true, items: [{
                    title: "Fiction",
                },
                {
                    title: "Humor",
                },
                {
                    title: "Magzines",
                },
                {
                    title: "Non-fiction",
                },
                {
                    title: "Textbooks",
                }],
            },
            {
                title: "Education",
            },
            {
                title: "Music",
            },
            {
                title: "Sports", isDisabled: true,
            });
    }
}
