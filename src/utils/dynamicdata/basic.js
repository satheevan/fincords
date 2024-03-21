import { Routing } from "../../Routes/Routing"


const basicFontAndColors = {
    font: {
        style1: "",
        style2: "",
        size: "",
    },
    color: {
        bgColorPrimary: "",
        bgColorSecondary: "",
        fontColorPrimary: "",
        fontColorsecondary: "",
        btnColor: "",
        other10prec: ""
    },

}
const header = {
    keyAndPhrase: {
        headingContent: "sample",
    }
}
const navBar = {
    home: {
        label: "Home",
        path: Routing.path.routeHome.home
    },
    service: {
        label: "Service",
        path: Routing.path.routeHome.service
    },
    team: {
        label: "Team",
        path: Routing.path.routeHome.team
    },
    download: {
        label: "Download",
        path: Routing.path.routeHome.download
    },
    contact: {
        label: "Contact Us",
        path: Routing.path.routeHome.home
    },
    help: {
        label: "Help",
        path: Routing.path.routeHome.home
    },
}
export const basicItems = {
    header,
    navBar,
    basicFontAndColors,
}