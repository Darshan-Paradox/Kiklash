
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

		if (res.redirected)
			window.location = res.url
		else
			document.querySelector(".id").style.background = `rgba(255, 0, 0, 0.4)`
	}
}

document.body.addEventListener("keypress", (e) => {submit(e)})
