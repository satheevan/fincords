import { Routing } from '../../routes/Routing';



const routeBilling = Routing.path.home


const billingNavs = [
    { id: 1, title: "New Billing", alais: "Pos or Billing Entry", path: `${routeBilling.billNew}` },
    {id: 2,title: "Draft",alais: "Draft Billing Entry",path: `${routeBilling.billDraft}`},
    {id: 3,title: "Entry Book",alais: " Accounting Transaction",path: `${routeBilling.entryBook}`},
    {id: 4,title: "Report",alais: "Billing Report",path: `${routeBilling.billReport}`}
]
