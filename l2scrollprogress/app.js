var getprogressbar = document.getElementById("progress-bar")

window.onscroll = function(){
	scrollpoint()
}

function scrollpoint(){
	// console.log("hello world")

	var getscrolltop = document.documentElement.scrollTop
	// console.log(getscrolltop)
	var getscrollheight = document.documentElement.scrollHeight
	// console.log(getscrollheight)
	var getclientheight = document.documentElement.clientHeight
	// console.log(getclientheight)
	var calcheight = getscrollheight - getclientheight
	// console.log(calcheight)
	// var getfinalheight = Math.round(getscrolltop * 100 / calcheight)
	// console.log(getfinalheight)
	var getfinal = Math.round(getscrolltop/calcheight * 100)
	console.log(getfinal)

	getprogressbar.style.width = `${getfinal}%`

}

function printme(){
	window.print()
}

