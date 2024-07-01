const userData = [
  {
    idNo:1,
    name: "user1",
    mobileNo: "9840437111",
    emailId: "user1@gmail.com",
    dob: "01/01/2000",
    Address: "chennai",
  },
  {
    idNo:2,
    name: "user2",
    mobileNo: "9840437112",
    emailId: "user2@gmail.com",
    dob: "01/01/2000",
    Address: "chennai",
  },
  {
    idNo:3,
    name: "user3",
    mobileNo: "9840437113",
    emailId: "user3@gmail.com",
    dob: "01/01/2000",
    Address: "chennai",
  },
  {
    idNo:4,
    name: "user4",
    mobileNo: "9840437114",
    emailId: "user4@gmail.com",
    dob: "01/01/2000",
    Address: "chennai",
  },
  {
    idNo:5,
    name: "user5",
    mobileNo: "9840437115",
    emailId: "user5@gmail.com",
    dob: "01/01/2000",
    Address: "chennai",
  },
];
const roles = [
    {
        userId:1,
        roles:["admin","editor"]       
    },
    {
        userId:2,
        roles:["manager"]       
    },
    {
        userId:3,
        roles:["worker","view"]       
    },
    {
        userId:4,
        roles:["admin","editor"]       
    },
    {
        userId:5,
        roles:["worker","view"]       
    },
]
const permissions = [
    {
        userId:1,
        permissions:['read', 'write', 'delete'],     
    },
    {
        userId:2,
        permissions:['read', 'write'],    
    },
    {
        userId:3,
        permissions:['read'],       
    },
    {
        userId:4,
        permissions:['read', 'write', 'delete'],
    },
    {
        userId:5,
        permissions:['read'],       
    },
]
export const  userInfo={
    userData,
    roles,
    permissions

}