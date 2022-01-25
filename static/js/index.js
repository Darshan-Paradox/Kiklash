
async function submit(e)
{
	if (e.key == "Enter")
	{
		let uid = document.querySelector(".id").value
	 	let res = await fetch(`/verify`,
			        {
						method: "POST",
						headers: {
							'Content-Type': 'text/plain'
						},
						body: uid
					})

		console.log(res)
		if (res.redirected)
			window.location = res.url
		else
		{
			document.querySelector(".id").style.background = `rgba(255, 0, 0, 0.1)`
			document.querySelector(".id").innerHTML = `invalid ID`
		}
	}
}

document.body.addEventListener("keypress", (e) => {submit(e)})
