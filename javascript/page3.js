//Selectors
const table = document.querySelector('table');
const select = document.getElementById('sort');

//Render API
window.addEventListener('load', () => {
  getAPI();
  mapAPI();
});

let arr = [];

//Get or fetch API
const getAPI = () => {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open(
    'GET',
    'https://reqres.in/api/users',
    false
  );
  xmlHttp.send(null);
  let data = xmlHttp.responseText
  arr = JSON.parse(data);
  console.log(arr);
};

const mapAPI = () => {
  table.innerHTML += `
    <tr>
      <th>Last Name</th>
      <th>First Name</th>
      <th>Email</th>
    </tr>`;

  arr.data.map((a) => {
    table.innerHTML += `
      <tr>
        <td>${a.last_name}</td>
        <td>${a.first_name}</td>
        <td>${a.email}</td>
      </tr>
        `;
  });
};

select.addEventListener('change', () => {
  if (select.value == 'lastName') {
    let newArr = arr.data.sort((a, b) => {
      if (a.last_name < b.last_name) {
        return -1;
      }
      if (a.last_name > b.last_name) {
        return 1;
      }
      return 0;
    });
    let arr1 = newArr;
  
    table.innerHTML = '';
    table.innerHTML += `
    <tr>
      <th>Last Name</th>
      <th>First Name</th>
      <th>Email</th>
    </tr>`;
    arr1.map((a) => {
      table.innerHTML += `
      <tr>
      <td>${a.last_name}</td>
      <td>${a.first_name}</td>
      <td>${a.email}</td>
    </tr>
        `;
    });
  }
  if (select.value == 'firstName') {
    let newArr = arr.data.sort((a, b) => {
      if (a.first_name < b.first_name) {
        return -1;
      }
      if (a.first_name > b.first_name) {
        return 1;
      }
      return 0;
    });
    let arr1 = newArr;
  
    table.innerHTML = '';
    table.innerHTML += `
    <tr>
      <th>Last Name</th>
      <th>First Name</th>
      <th>Email</th>
    </tr>`;
    arr1.map((a) => {
      table.innerHTML += `
      <tr>
      <td>${a.last_name}</td>
      <td>${a.first_name}</td>
      <td>${a.email}</td>
    </tr>
        `;
    });
  }
  if(select.value == 'email'){
    let newArr = arr.data.sort((a, b) => {
      if (a.email < b.email) {
        return -1;
      }
      if (a.email > b.email) {
        return 1;
      }
      return 0;
    });
    let arr1 = newArr;
  
    table.innerHTML = '';
    table.innerHTML += `
    <tr>
      <th>Last Name</th>
      <th>First Name</th>
      <th>Email</th>
    </tr>`;
    arr1.map((a) => {
      table.innerHTML += `
      <tr>
      <td>${a.last_name}</td>
      <td>${a.first_name}</td>
      <td>${a.email}</td>
    </tr>
        `;
    });
  }
});
