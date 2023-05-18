function insert_Row() {
    //Write your code here
	  const table = document.getElementById("sampleTable")
	const tr = 
		`
			<tr><td>New cell1</td> 
			<td>New cell2</td></tr> 
	   `
  table.innerHTML = tr + table.innerHTML
}
