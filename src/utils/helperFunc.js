//set time function
setTimeout((e) => {
    console.log("say hi to everyone and done with quiet manner");
    setTimeout((e) => {
        console.log("Hello");
    }, 2000)
}, 5000);


async function Value1() {
    try {

        const result = await new Promise((resolve, reject) => { resolve("success") });
        console.log(result);
    }
    catch (error) {
        console.log("False Statement");
    }
}
export default Value1