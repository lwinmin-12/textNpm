export const myName = "lwin min oo";
export const showMyName = (newName = myName) => console.log(newName)
export const showMyNameUi = (newName = myName, top=0, right=0) => {
    let divTag = document.createElement('div')
    divTag.style.color ="white"
    divTag.style.backgroundColor ="black"
    divTag.style.position ="fixed"
    divTag.style.right =right
    divTag.style.top = top
    divTag.style.fontSize ="200px"
    

    divTag.innerHTML =`<h1>${myName}</h1>`
}