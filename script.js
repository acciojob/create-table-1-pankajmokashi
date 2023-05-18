function insert_Row() {
    //Write your code here
	const table = document.getElementById("sampleTable")
	const tbody = document.createElement("tbody")
	table.appendChild(tbody)
	const tr = 
		`
			<tr><td>New Cell1</td> 
			<td>New Cell2</td></tr> 
	   `
  tbody.innerHTML = tr + tbody.innerHTML
}
