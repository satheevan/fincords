
const productData = {
    productList: {
        productCode: {
            label: "Product Code",
            name: "code",
            dataType: "Number",
        },
        productName: {
            label: "Product Name",
            name: "name",
            type: "Text"
        },
        productPrice: {
            label: "Product Price",
            name: "price",
            type: "Text",
            placeHolder: "Enter the  Rate"
        },
        productExpiry: {
            label: "Product Expiry",
            name: "expiry",
            type: "date",
            placeHolder: "Enter the Expiry"
        },
    }
}


const formClassName ={
    ClassContainer: "row",
    ClassLabel: "col-sm",
    ClassInput: "col-sm",
}



const inventoryProductFields = [
    {
        label: "Product Code",
        type: "number",
        name: "code",
        classCustom: {
            customClassContainer: "",
            customClassLabel: "",
            customClassInput: "",
        },
        classes :formClassName
        
    },
    {
        label: "Product Name",
        type: "text",
        name: "code",
        validationProps:{
                require
        },
        classCustom: {
            customClassContainer: "",
            customClassLabel: "",
            customClassInput: "",
        },
        classes :formClassName
    },
    {
        label: "Product Price",
        type: "text",
        name: "price",
        classCustom: {
            customClassContainer: "",
            customClassLabel: "",
            customClassInput: "",
        },
        classes :formClassName

    },
]

export const invetoryDetails = {
    inventoryProductFields,
    productData,

}
