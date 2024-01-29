import { Routing } from '../../routes/Routing';



const routing = Routing.path


const products = [
    { id: 1, title: "Billcords", alais: "Pos or Billing Entry", path: `${routing.routeBilling.billCords}` },
    {id: 2,title: "Iventory",alais: "Invntory Management System",path: `${routing.routeInventory.inventory}`},
    {id: 3,title: "FinancialAnalysis",alais: "Financial management system",path: `${routing.routeFinancialAnalysis.finacialAnalysis}`},
    // {id: 4,title: "CRM",alais: "CustomerRelationshipManagment",path: `${routing.routeCRM.customerRelationshipManagment}`},
    {id:4,title: "CRM",alais: "customer relationship management",path: `${routing.routeCRM.customerRelationshipManagment}`},
    {id: 5,title: "Report",alais: "Report",path: `${routing.routeReport.report}`}
]

export const home={
    products,
}
