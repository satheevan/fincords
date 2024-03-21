import { Routing } from '../../Routes/Routing';



const routeBilling = Routing.path.routeBilling


const billingNavs = [
    { id: 1, title: "New Billing", alais: "Pos or Billing Entry", path: `${routeBilling.billNew}` },
    { id: 2, title: "Draft", alais: "Draft Billing Entry", path: `${routeBilling.billDraft}` },
    { id: 3, title: "Entry Book", alais: " Accounting Transaction", path: `${routeBilling.entryBook}` },
    { id: 4, title: "Report", alais: "Billing Report", path: `${routeBilling.billReport}` }
]

// itemsList: [
//     {
//         Food: {
//             showOn:true,
//             listItems:[
//             {
//                itemId: 1,
//                 itemIcon:require(''),
//                 itemName: "LemonRice",
//                 category: "Rice",
//                 discount:true,
//                 price: 30,
//                 itemsAvailabe:true,
//             },
//             {
//                 itemId: 2,
//                 itemIcon:require(''),
//                 itemName: "CurdRice",
//                 category: "Rice",
//                 discount:true,
//                 price: 25,
//                 itemsAvailabe:true,
//             },
//             {
//                 itemId: 3,
//                 itemIcon:require(''),
//                 itemName: "vegRice",
//                 category: "Rice",
//                 discount:true,
//                 price: 40,
//                 itemsAvailabe:true,
//             },
//             {
//                 itemId: 4,
//                 itemIcon:require(''),
//                 itemName: "TomatoRice",
//                 category: "Rice",
//                 discount:true,
//                 price: 30,
//                 itemsAvailabe:true,
//             },
//             {
//                 itemId: 5,
//                 itemIcon:require(''),
//                 itemName: "breadOmblet",
//                 category: "chatitems",
//                 discount:true,
//                 price: 50,
//                 itemsAvailabe:true,
//             }
//         ]
//     }
//     },
//     {
//         drinks: [
//             {
//                 itemId: 11,
//                 itemName: "Grape juice",
//                 category: "juice",
//                 price: 50
//             },
//             {
//                 itemId: 12,
//                 itemName: "tea",
//                 category: "hotdrinks",
//                 price: 20
//             },
//             {
//                 itemId: 13,
//                 itemName: "coffee",
//                 category: "hotdrinks",
//                 price: 40
//             },
//             {
//                 itemId: 14,
//                 itemName: "Apple juice",
//                 category: "juice",
//                 price: 50
//             }
//         ]
//     }
// ]
export const billcordsDetails = {
    companyInfo: {
        comapanyLogo: "Logo",
        comapanyName: "client Company",
        comapanyAddress: "client Address"
    },
    billingNavs,


}
