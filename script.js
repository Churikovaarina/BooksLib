(async function ShowTable(){
  
  async function getBooks(){
    response = await fetch('http://127.0.0.1:8080/server.json');
    let books = JSON.parse(await response.text());
    return books;
  }

   
  let tbody = document.getElementById('tbody');

  function AddBooks(books) {
    books.forEach(function (item){
      AddTableRow(tbody, item);
    });
  }

  

  function AddTableRow(container, arr) {
    container.append(createTableRow(arr));
  }

  function createTableRow(arr) {
    
    if (!arr.length) return;

      let tr = document.createElement('tr');
        for (let key of arr) {

        let td = document.createElement('td');
        td.innerHTML = key;

        tr.append(td);
      
      }
      tr.innerHTML+='<td><a href="#" class="edit">Edit</a><a href="#" class="delete" type="reset">Delete</a></td>';
      return tr;
    }
    
    if(document.readyState){
      let books = await getBooks();
      AddBooks(books);
    }
  }  
)();
