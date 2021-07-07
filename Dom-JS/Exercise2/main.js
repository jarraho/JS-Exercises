const table = document.createElement('table');

for (let i = 0; i <= 4; i++){
  const row = document.createElement('tr');
  for (let j = 0; j <= 8; j++){
    const col = document.createElement('td');
    let val = i * j;
    if (val === 0) {
      val = i || j;
      val = val ? val : '';
      col.classList.add('header');
    }
    col.innerHTML = val;
    row.appendChild(col);
  }
  table.appendChild(row);
}

document.body.appendChild(table);
