// Burger
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener("click", () => {
    nav.classList.toggle('active');
    burger.classList.toggle('burger--active');
    document.body.classList.toggle("stop-scroll");    
});

//Маска для тел

let selector = document.getElementById("tel")
let im = new Inputmask("+7(999) 999-99-99")
im.mask(selector)

//Валидация и отправка

let validation = new JustValidate("form")

validation.addField("#name", [
  {
    rule: "required",
    errorMessage: "Это обязательное поле для заполнения!"
  },
  {
    rule: "minLength",
    value: 2,
    errorMessage: "Минимум 2 символа!"
  }
]).addField("#tel", [
  {
    validator: (value) => {
      const phone = selector.inputmask.unmaskedvalue()
      return Boolean(Number(phone) && phone.length > 0)
    },
    errorMessage: 'Введите телефон'
  },
  {
    validator: (value) => {
      const phone = selector.inputmask.unmaskedvalue()
      return Boolean(Number(phone) && phone.length === 10)
    },
    errorMessage: 'Введите телефон полностью'
  }
]).onSuccess(async function () {
  let data = {
    name: document.getElementById("name").value,
    tel: selector.inputmask.unmaskedvalue(),
    msg: document.getElementById("msg").value
  }

  let response = await fetch("mail.php", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })

  let result = await response.text()

  // alert(result)
})


//Плавное исчезновение placeholder

const nameField = document.getElementById('name') 
const nameFieldCover = document.getElementById('placeholder1') 

nameFieldCover.addEventListener('click', function(){
	nameFieldCover.style.opacity = '0'
	nameFieldCover.style.zIndex = '-1'
	nameField.focus()
})
nameField.addEventListener('focusout', function(e){
	if (nameField.value == '') {
		nameFieldCover.style.opacity = '1'
		nameFieldCover.style.zIndex = '10'
		nameField.blur()
	}	
})

//изменение стиля карточки по наведению
const cards = Array.from(document.querySelectorAll('.technique__card'))

cards.forEach(card => {
	card.addEventListener('mouseover', function(e){
		let cardCurrent = e.currentTarget
		
		
		cardCurrent.style.borderColor = '#DA7000'
		let cardName = cardCurrent.querySelector('.technique__name')
			
		cardName.style.color = '#DA7000'
	
	})

})
cards.forEach(card => {
	card.addEventListener('mouseout', function(e){
		let cardCurrent = e.currentTarget			
		cardCurrent.style.borderColor = '#DDDDDD'

		let cardName = cardCurrent.querySelector('.technique__name')
		cardName.style.color = '#0E0E0E'
	})

})
cards.forEach(card => {
	card.addEventListener('click', function(e){
		let cardCurrent = e.currentTarget			
		cardCurrent.style.borderColor = '#EE8414'

		let cardName = cardCurrent.querySelector('.technique__name')
		cardName.style.color = '#EE8414'

		let cardImg = cardCurrent.querySelector('.technique__svg')
		cardImg.classList.add('active')
	})
})




