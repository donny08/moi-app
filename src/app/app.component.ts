import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions, registerElement } from "@nativescript/angular";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { filter } from "rxjs/operators";
import { Application } from "@nativescript/core";
import { FilterableListpicker } from '@nstudio/nativescript-filterable-listpicker';
import {
    getString,
    remove
} from "@nativescript/core/application-settings";
registerElement("FilterableListpicker", () => FilterableListpicker);
registerElement("PreviousNextView", () => require("@nativescript/iqkeyboardmanager").PreviousNextView);

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(private router: Router, private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject services.
    }

    ngOnInit(): void {
        this._activatedUrl = "/home";
        this._sideDrawerTransition = new SlideInOnTopTransition();

        this.router.events
            .pipe(filter((event: any) => event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
         
        if(getString('user')) this.router.navigate(['home']);
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });

        const sideDrawer = <RadSideDrawer>Application.getRootView();
        sideDrawer.closeDrawer();
    }

    logout() {
        const sideDrawer = <RadSideDrawer>Application.getRootView();
        sideDrawer.closeDrawer();
        remove("user");
        this.routerExtensions.navigate(['login'], {
            clearHistory: true
        });
    }
}
