let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let TT = document.querySelector(".TT")

for (let day in weekdays)
{
	let weekday = document.createElement("span")
	weekday.innerHTML = `<b>${weekdays[day]}</b>`
	weekday.className = `${weekdays[day]}`

	weekday.style.gridColumn = `${Number(day)+2}/${Number(day)+3}`
	weekday.style.background = `rgb(0, 0, 0)`
	weekday.style.color = `rgb(225,225,225)`
	weekday.style.borderColor = `rgb(200,200,200)`

	TT.appendChild(weekday)
}

for (let i = 0; i < 9; i++)
{
	let hour = document.createElement("span")
	
	hour.innerHTML = `${8 + i}:00`
	hour.className = `hr${i+1}`

	hour.style.gridRow = `${i+2}/${i+3}`
	hour.style.background = `rgb(188, 188, 188)`
	
	TT.appendChild(hour)
}

for (let day in weekdays)
{
	for (let i = 0; i < 9; i++)
	{
		let cell = document.createElement("span")
		cell.innerHTML = ``
		cell.className = `${weekdays[day]}${i+1}`

		cell.style.gridRow = `${i+2}/${i+3}`
		cell.style.gridColumn = `${Number(day)+2}/${Number(day)+3}`
	
		TT.appendChild(cell)
	}
}
