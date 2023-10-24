let texts = ['#v1', '#v2', '#v3', '#v4', '#v5']
const left = document.querySelector('#left')
const right = document.querySelector('#right')
let count = 0

right.addEventListener('click', function (event) {
	event.preventDefault()
	if (count < texts.length - 3) {
		count += 1
	}
	show()
})

left.addEventListener('click', function (event) {
	event.preventDefault()

	if (count > 0) {
		count -= 1
	}
	show()
})
function show() {
	for (let elem of texts) {
		if (!document.querySelector(elem).classList.contains('visually-hidden')) {
			document.querySelector(elem).classList.add('visually-hidden')
		}
	}
	for (let i = 0; i < 3; i++) {
		if (count + i < texts.length) {
			document
				.querySelector(texts[count + i])
				.classList.remove('visually-hidden')
		} else {
			document
				.querySelector(texts[count + i - texts.length])
				.classList.remove('visually-hidden')
			// document
			// 	.querySelector('#v')
			// 	.append(document.querySelector(texts[count + i - texts.length]))
		}
	}
	// if (count == 0) {
	// 	document.querySelector('#v').prepend(document.querySelector(texts[1]))
	// 	document.querySelector('#v').prepend(document.querySelector(texts[0]))
	// }
}
