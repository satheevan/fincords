export const Routing = {
    authentication: {
        status: true,
    },
    path: {
        routeHome: {
            home:"/home",
            service:"/service",
            team:"/team",
            download:'/download',
            contact:"/contact-us",
            help:"/help"
        },
        routeBilling: {
            billCords: '/billcords',
            billReport: '/bill-report',
            entryBook: '/entry-book',/*Log book/Day Book*/
            billDraft: '/bill-draft',
            billNew: '/new-billing'
        },
        routeInventory: {
            inventory: '/inventory',
        }
    }

}
