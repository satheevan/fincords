import InvoiceTemp1 from "../components/Ui/InvoiceCreator/print/template1";

export const Routing = {
    authentication: {
        status: false,
    },
    path: {
        // before Login
        guest:{
            guest:"/fincord",
            service:"/fincord/service",
            about:"/fincord/about",
            login:"/fincord/login",
            register:"/fincord/register",
            invoiceGen:"/fincord/invoice-gen",
            invoiceDetails:"/fincord/invoice-details",
            InvoiceTemp:"/fincord/template",
            printInvoice:"/fincord/printInvoice"
        },
        // after Login
        routeHome: {
            home: "/home",
            service: "/service",
            team: "/team",
            download: '/download',
            contact: "/contact-us",
            help: "/help"
        },
        routeBilling: {
            billCords: '/billcords',
            services: {
                restaurantServices: "/restaurant-service",
                legalServices:"/legal-service"

            },
            billReport: '/bill-report',
            entryBook: '/entry-book',/*Log book/Day Book*/
            billDraft: '/bill-draft',
            billNew: '/new-billing'
        },
        routeInventory: {
            inventory: '/inventory',
        },
        routeFinancialAnalysis: {
            finacialAnalysis: '/financial-analysis',
        },
        routeCRM: {
            customerRelationshipManagment: '/customer-relationship-management',
        },
        routeReport: {
            report: '/report'
        },
        routeInvoice:{
            goodsInvoice:"fincord/invoiceGoods"

        }
    }

}
