
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
			let id_box = document.querySelector(".id")
			id_box.style.background = `rgba(255, 0, 0, 0.1)`
			id_box.borderBottomColor = `rgba(255, 0, 0, 0)`
		}
	}
}

document.body.addEventListener("keypress", (e) => {submit(e)})
