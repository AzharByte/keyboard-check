//Adding JS Code

const insert = document.querySelector("#insert");

window.addEventListener("keydown", (event) => {
  insert.innerHTML = `

<div class="key">
<table>
  <tr>
    <th> Key Pressed </th>
    <th> Key Code </th>
    <th> Code </th>
  </tr>
  <tr>
    <td>${event.key === " " ? "space" : event.key}</td>
    <td>${event.keyCode}</td>
    <td>${event.code}</td>
  </tr>
 
</table>




</div>




`;
});
