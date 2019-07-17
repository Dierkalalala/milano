new Vue({
	el: '#app',
	data() {
		return{
			commodity1: [
				{imageUrl: "url('medi/bag_1.jpg')", name: 'Женская сумочка', cost: '1 300 000'},
				{imageUrl: "url('medi/bag_1.jpg')", name: 'Женская сумочка', cost: '1 300 000'},
				{imageUrl: "url('medi/bag_1.jpg')", name: 'Женская сумочка', cost: '1 300 000'},
				{imageUrl: "url('medi/bag_1.jpg')", name: 'Женская сумочка', cost: '1 300 000'},
				{imageUrl: "url('medi/shoes_2.jpg')", name: 'Женская сумочка', cost: '1 300 000'},
				{imageUrl: "url('medi/shoes_2.jpg')", name: 'Женская сумочка', cost: '1 300 000'},
				{imageUrl: "url('medi/shoes_2.jpg')", name: 'Женская сумочка', cost: '1 300 000'},
				{imageUrl: "url('medi/shoes_2.jpg')", name: 'Женская сумочка', cost: '1 300 000'},
			 ],
			commodity2: [
				{imageUrl: "url('medi/shoes_2.jpg')", name: 'Женская сумочка', cost: '1 300 000'},
				{imageUrl: "url('medi/shoes_2.jpg')", name: 'Женская сумочка', cost: '1 300 000'},
				{imageUrl: "url('medi/shoes_2.jpg')", name: 'Женская сумочка', cost: '1 300 000'},
				{imageUrl: "url('medi/shoes_2.jpg')", name: 'Женская сумочка', cost: '1 300 000'},
				{imageUrl: "url('medi/shoes_2.jpg')", name: 'Женская сумочка', cost: '1 300 000'},
				{imageUrl: "url('medi/shoes_2.jpg')", name: 'Женская сумочка', cost: '1 300 000'},
				{imageUrl: "url('medi/shoes_2.jpg')", name: 'Женская сумочка', cost: '1 300 000'},
				{imageUrl: "url('medi/shoes_2.jpg')", name: 'Женская сумочка', cost: '1 300 000'},
			],
			commodity3: [
				{imageUrl: "url('medi/bag_1.jpg')", name: 'Женская сумочка', cost: '1 300 000'},
				{imageUrl: "url('medi/bag_1.jpg')", name: 'Женская сумочка', cost: '1 300 000'},
				{imageUrl: "url('medi/bag_1.jpg')", name: 'Женская сумочка', cost: '1 300 000'},
				{imageUrl: "url('medi/bag_1.jpg')", name: 'Женская сумочка', cost: '1 300 000'},
				{imageUrl: "url('medi/bag_1.jpg')", name: 'Женская сумочка', cost: '1 300 000'},
				{imageUrl: "url('medi/bag_1.jpg')", name: 'Женская сумочка', cost: '1 300 000'},
				{imageUrl: "url('medi/bag_1.jpg')", name: 'Женская сумочка', cost: '1 300 000'},
				{imageUrl: "url('medi/bag_1.jpg')", name: 'Женская сумочка', cost: '1 300 000'},
		],
		shown: '',
		openmenu: true,
		name: null,
		email: null,
		errors: [],
		phone: null,
		menuitem: false,
	}
		
	},
	computed: {
		number() {
			return parseInt(this.phone)
		}
	},
	methods: {
		showSlide(slideIndex) {
			let slides = this.$el.getElementsByClassName('slide')
			let dots = this.$el.getElementsByClassName('dot')
			Array.from(slides).forEach(function(slide){
				slide.style.display = 'none'
			})
			Array.from(dots).forEach(function(dot){
				dot.classList.remove('active')
			})
			slides[slideIndex - 1].style.display = 'block'
			dots[slideIndex - 1].classList.add('active')
			},
		changeCommodityGroup(index) {
			let group = document.getElementsByClassName('catalogue_item')
			console.log(group)
			Array.from(group).forEach(function(item){
				item.classList.remove('activegroup')
			})
			group[index - 1].classList.add('activegroup')
			switch (index) {
				case 1:
					this.shown = this.commodity1
					break;
				case 2:
					this.shown = this.commodity2
					break;
				case 3: 
					this.shown = this.commodity3
					break;
			}
		},
		validEmail: function (email) {
      		let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      		return re.test(email);
    	},
    	validNumber(number) {
    		let phoneno = /^(\([0-9]{2}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/;
    		return phoneno.test(number)
    	},
    	checkForm(e) {
    		this.errors = []
    		if(!this.name) {
    			this.errors.push('Заполните поле ФИО')
    		} 
    		if(!this.phone) {
    			this.errors.push('Введите номер телефона')
    		}
    		if(this.number === NaN){
    			this.errors.push('Введите корректный номер телефона')
    		}
    		if(!this.email){
    			this.errors.push('Укажите email адресс')
    		} else if (!this.validEmail(this.email)){
    			this.errors.push('Укажите правильный email')
    		}
			if(this.errors.length == 0) {
    			console.log(this.name, this.email, this.phone)
    		}
    	},
    	
	},
	mounted: function() {
		this.showSlide(1)
		this.changeCommodityGroup(1)
	}
})
		
const images = document.querySelectorAll('.commodity_image_wrapper')    	
for(let i = 0; i < images.length; i++) {
	const image = images[i]
	image.addEventListener('mousemove', rotate)
	image.addEventListener('mouseout', stopRotate)
}

function rotate(event) {			 
  	const image = this.querySelector('.imaage')
  	const halfHeight = image.offsetHeight / 2;
  	const halfWidth = image.offsetWidth / 2;
  		image.style.transform = 'rotateX(' + -(event.offsetY -
  		halfWidth) / 5 + 'deg) rotateY(' + (event.offsetX -
  		halfHeight) / 5 +'deg)'
  		
  				
  		}
function stopRotate(event) { 
			let images = document.getElementsByClassName('imaage')
  			Array.from(images).forEach(image => {
  				image.style.transform = 'rotate(0)'
  			
  			})
  		}