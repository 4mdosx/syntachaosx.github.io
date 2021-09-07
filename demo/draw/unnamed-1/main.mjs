const ctx = document.getElementById('canvas-1').getContext('2d')

const drawCricle = (x, y) => {
	ctx.fillStyle = 'rgb(0, 0, 0)'
	ctx.beginPath()

	ctx.arc(x, y, 25, 0, 2 * Math.PI)
	ctx.fill()
}

for (let count = 0; count < 3; count++) {
	drawCricle(count * 150 + 350, 375)
	drawCricle(count * 150 + 350, 500)
	drawCricle(count * 150 + 350, 625)
}

for (let count = 0; count < 5; count++) {
	drawCricle(count * 125 + 250, 250)
	drawCricle(count * 125 + 250, 375)
	drawCricle(count * 125 + 250, 500)
	drawCricle(count * 125 + 250, 625)
	drawCricle(count * 125 + 250, 750)
}

for (let count = 0; count < 7; count++) {
	drawCricle(count * 100 + 200, 175)
	drawCricle(count * 100 + 200, 283)
	drawCricle(count * 100 + 200, 391)
	drawCricle(count * 100 + 200, 500)
	drawCricle(count * 100 + 200, 608)
	drawCricle(count * 100 + 200, 716)
	drawCricle(count * 100 + 200, 824)
}

for (let count = 0; count < 9; count++) {
	drawCricle(count * 91 + 145, 115)
	drawCricle(count * 91 + 135, 211)
	drawCricle(count * 91 + 135, 307)
	drawCricle(count * 91 + 135, 403)
	drawCricle(count * 91 + 135, 500)
	drawCricle(count * 91 + 135, 597)
	drawCricle(count * 91 + 135, 693)
	drawCricle(count * 91 + 135, 789)
	drawCricle(count * 91 + 135, 885)
}

for (let count = 0; count < 18; count++) {
	drawCricle(count * 60 + 75, 75)
	drawCricle(count * 60 + 75, 925)
	drawCricle(75, count * 60 + 75)
	drawCricle(925, count * 60 + 75)
}

for (let count = 0; count < 20; count++) {
	drawCricle(count * 50 + 25, 25)
	drawCricle(count * 50 + 25, 975)
	drawCricle(25, count * 50 + 25)
	drawCricle(975, count * 50 + 25)
}
