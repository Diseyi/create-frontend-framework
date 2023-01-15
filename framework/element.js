const createElement = (tagname) => {
    return (strings, ...args) => ({
        type: tagname,
        template: strings.reduce((acc, currentString, index) => acc + currentString +  (args[index] || ""), "")
    })
}

export const div = createElement("div")
export const p = createElement("p")

const firstname = "Diseyi";
const lastname = "Philomena";

const {template} = p`Hello ${firstname} ${lastname} ! `
// console.log(template)

// console.log(div(["hello " , " "], ["diseyi", "philomena"]).type)