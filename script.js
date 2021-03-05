
function getRandom() {

    const ApiUrl = "http://openlibrary.org/search.json?q=the+lord+of+the+rings";
  
    // używamy api fetch do wykonywania wywołań api . 
    fetch(ApiUrl)
   
      .then(function (response) {
        // otrzymujemy surową odpowiedź. 
  
        return response.json();

      })
      .then(function (json) {
         
        // teraz mamy json. 
        for(i=0;i<50;i++){
 autor=json.docs[i].author_name
  tytul =json.docs[i].title
  rokWydania=json.docs[i].first_publish_year
const container =document.querySelector('.table')  
 const item=document.createElement('tbody')
  
  item.innerHTML+=`<tr>
  <th scope="row">${i+1}</th>
  <td>${autor}</td>
  <td>${tytul}</td>
  <td>${rokWydania}</td>
</tr>`
 
container.appendChild(item)
}
  })
} 


getRandom()