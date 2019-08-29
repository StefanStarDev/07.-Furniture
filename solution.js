function solve() {

  let furnitureList;

  let checkBoxes = document.getElementsByTagName('input')


  checkBoxes[0].id = 'damn'


  for (const checkbox of checkBoxes) {

    checkbox.disabled = false

  }
  let buyBtn = document.querySelector("#exercise > button:nth-child(6)")
  let names = []
  let sum = 0
  let sumDecoration = 0
  let counter = 0
  let inputs = []

  inputs.push(checkBoxes[0])

  document.getElementsByTagName('button')[0].addEventListener("click", () => {

    furnitureList = JSON.parse(document.getElementsByTagName("textarea")[0].value);

    let table = document.getElementsByClassName('table')[0];

    for (const furniture of furnitureList) {

      let row = table.insertRow();

      let cellImg = row.insertCell();
      let cellName = row.insertCell();
      let cellPrice = row.insertCell();
      let cellDecFactor = row.insertCell();
      let cellInput = row.insertCell();

      let img = document.createElement('img')
      img.setAttribute('src', furniture.img);
      cellImg.appendChild(img)

      let name = document.createElement("p")
      name.textContent = furniture.name
      cellName.appendChild(name)

      let price = document.createElement("p")
      price.textContent = furniture.price
      cellPrice.appendChild(price)

      let decFactor = document.createElement("p")
      decFactor.textContent = furniture.decFactor
      cellDecFactor.appendChild(decFactor)

      let input = document.createElement('input')
      input.setAttribute('type', 'checkbox')
      cellInput.appendChild(input)


      inputs.push(input)


    }

  })



  buyBtn.addEventListener('click', () => {
    let isTrue = () => {
      let isTrue = false
     for (const input of inputs) {
        if(input.checked == true){
          isTrue = true
        }

      }
      return isTrue
    }
    if(isTrue()){
      for (const input of inputs) {

        if (input.checked == true) {
  
          if (input.id === "damn") {
            let elementPrice = input.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.children[0].textContent
            let elementName = input.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.children[0].textContent
            let decorationFactor = input.parentNode.previousSibling.previousSibling.children[0].textContent
            names.push(elementName)
  
            sum += +elementPrice
            sumDecoration += +decorationFactor
            counter++
          }else{
            let elementPrice = input.parentNode.previousSibling.previousSibling.children[0].textContent
            let elementName = input.parentNode.previousSibling.previousSibling.previousSibling.children[0].textContent
            let decorationFactor = input.parentNode.previousSibling.children[0].textContent
    
            names.push(elementName)
    
            sum += +elementPrice
            sumDecoration += +decorationFactor
            counter++
          }
          
  
  
        }
      }
      let lastNames = []
      for (const name of names) {
        if (!lastNames.includes(name)) {
          lastNames.push(name)
        }
      }
  
      let avg = sumDecoration / counter
  
      let result = document.getElementsByTagName("textarea")[1]
  
      let resultStr = `Bought furniture: ${lastNames.join(", ")}\nTotal price: ${sum.toFixed(2)}\nAverage decoration factor: ${avg}\n`
     
      result.textContent = resultStr
  
      sum = 0
      sumDecoration = 0
      counter = 0
    }else{
      let result = document.getElementsByTagName("textarea")[1]
      result.textContent = ''
    }
    





  })

}