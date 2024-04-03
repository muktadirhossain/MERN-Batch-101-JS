let display = document.getElementById("result")

// clear the input
const clearValue = () => {
    display.value = ""
}

// Append Value::
function appendValue(value) {
    display.value = display.value + value
}

// Calculate
const calculate = () => {
    try {
        const sum = eval(display.value)
        display.value = sum
    } catch (error) {
        display.value = "Error"
    }

}

const person = {
    name: "Sima ahmed",
    age: 18,
    readIn: 10
};

const { name, ...rest } = person;
// console.log(rest)

// const newObject = {...person}
// console.log(newObject)

const arr = ["Rahim", "Abir", "Sima"];

const newArray = [...arr]
    // console.log(newArray)

;(
    function call(){
        console.log(newArray)
    }
)()





