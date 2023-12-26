

export const billcords ={
    companyInfo: {
        comapanyLogo: "Logo",
        comapanyName: "client Company",
        comapanyAddress: "client Address"
    },
    billingMenus: [
        {
            id: 1,
            title: "New Billing",
            alais: "Pos or Billing Entry",
            path: "/newbilling"
        },
        {
            id: 2,
            title: "Draft",
            alais: "Draft Billing Entry",
            path: "/draft"
        },
        {
            id: 3,
            title: "Entry Book",
            alais: " Accounting Transaction",
            path: "/entrybook"
        },
        {
            id: 4,
            title: "Report",
            alais: "Billing Report",
            path: "/billingreport"
        }
    ],
    itemsList: [
        {
            Food: [
                {
                    itemId: 1,
                    item: "LemonRice",
                    category: "Rice",
                    price: 30
                },
                {
                    itemId: 2,
                    item: "CurdRice",
                    category: "Rice",
                    price: 25
                },
                {
                    itemId: 3,
                    item: "vegRice",
                    category: "Rice",
                    price: 40
                },
                {
                    itemId: 4,
                    item: "TomatoRice",
                    category: "Rice",
                    price: 30
                },
                {
                    itemId: 5,
                    item: "breadOmblet",
                    category: "chatitems",
                    price: 50
                }
            ]
        },
        {
            drinks: [
                {
                    itemId: 11,
                    item: "Grape juice",
                    category: "juice",
                    price: 50
                },
                {
                    itemId: 12,
                    item: "tea",
                    category: "hotdrinks",
                    price: 20
                },
                {
                    itemId: 13,
                    item: "coffee",
                    category: "hotdrinks",
                    price: 40
                },
                {
                    itemId: 14,
                    item: "Apple juice",
                    category: "juice",
                    price: 50
                }
            ]
        }
    ]
}
