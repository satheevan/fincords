import { Routing } from '../../routes/Routing';



const routing = Routing.path


const products = [
    { id: 0, title: "DashBoard", alais: "Main Dashboard", path: `/`, icon:require('../../asset/icons/user.svg')},
    { id: 1, title: "Billcords", alais: "Pos or Billing Entry", path: `${routing.routeBilling.billCords}`, icon:require('../../asset/icons/user.svg')},
    { id: 2, title: "Iventory", alais: "Invntory Management System", path: `${routing.routeInventory.inventory}`, icon:require('../../asset/icons/user.svg') },
    { id: 3, title: "FinancialAnalysis", alais: "Financial management system", path: `${routing.routeFinancialAnalysis.finacialAnalysis}`, icon:require('../../asset/icons/user.svg') },
    { id: 4, title: "CRM", alais: "customer relationship management", path: `${routing.routeCRM.customerRelationshipManagment}`, icon:require('../../asset/icons/user.svg') },
    { id: 5, title: "Report", alais: "Report", path: `${routing.routeReport.report}` },
    { id: 6, title: "Invoice", alais: "Invoice Genrator", path: `${routing.routeInvoice.goodsInvoice}` }
]

const menuItems = [
    { id: 0, labelName: "Revenue", Amount:`$ ${12460}`,icon:'#'},
    { id: 1, labelName: "Sales Target", Amount:`$ ${125900}`,icon:'#'},
    { id: 2, labelName: "Paid Orders", Amount:`$ ${2460}`,icon:'#'},
    { id: 3, labelName: "Purchase", Amount:`$ ${134600}`,icon:'#'},
    { id: 4, labelName: "Expenses", Amount:`$ ${34600}`,icon:'#'},
]

export const home = {
    products,
    menuItems
}
