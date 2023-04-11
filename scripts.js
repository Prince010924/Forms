function getFormValues(){
    let firstName = document.getElementsById("fname");
    let lastName = document.getElementsById("lname");
    let licensePlate = document.getElementsById("number plate");
    let carName = document.getElementById("cars");
    let Shade = document.getElementsById("shade");
   console.log(`
        first name: ${firstName}\n
        last name: ${lastName} \n
        Number Plate: ${licensePlate} \n
        Name of car: ${carName} \n
        Want Shade: ${Shade} \n



    `)


}