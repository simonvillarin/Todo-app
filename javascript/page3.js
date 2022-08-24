//Selectors
const table = document.querySelector('table');
const select = document.getElementById('sort');

//Render API
window.addEventListener('load', () => {
  getAPI();
  mapAPI();
});

let schools = [];

//Get or fetch API
const getAPI = async () => {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open(
    'GET',
    'http://universities.hipolabs.com/search?country=United+States',
    false
  );
  xmlHttp.send(null);
  schools = xmlHttp.responseText;
};

const mapAPI = () => {
  let _schools = JSON.parse(schools);
  table.innerHTML += `
    <tr>
      <th>School Name</th>
      <th>Country</th>
      <th>Website</th>
    </tr>`;

  _schools.splice(0, 20).map((school) => {
    table.innerHTML += `
      <tr>
        <td>${school.name}</td>
        <td>${school.country}</td>
        <td><a href="${school.web_pages}" target="_blank">${school.web_pages}</a></td>
      </tr>
        `;
  });
};

select.addEventListener('change', () => {
  let _schools = JSON.parse(schools);
  if (select.value == 'alphabetical') {
    let sortedSchools = _schools.splice(0, 20).sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    _schools = sortedSchools;

    table.innerHTML = '';
    table.innerHTML += `
    <tr>
      <th>School Name</th>
      <th>Country</th>
      <th>Website</th>
    </tr>`;
    _schools.map((school) => {
      table.innerHTML += `
        <tr>
        <td>${school.name}</td>
        <td>${school.country}</td>
        <td><a href="${school.web_pages}" target="_blank">${school.web_pages}</a></td>
      </tr>
        `;
    });
  }
  if (select.value == 'reverse') {
    let sortedSchools = _schools.splice(0, 20).sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
    });
    _schools = sortedSchools;

    table.innerHTML = '';
    table.innerHTML += `
    <tr>
      <th>School Name</th>
      <th>Country</th>
      <th>Website</th>
    </tr>`;
    _schools.map((school) => {
      table.innerHTML += `
        <tr>
        <td>${school.name}</td>
        <td>${school.country}</td>
        <td><a href="${school.web_pages}" target="_blank">${school.web_pages}</a></td>
      </tr>
        `;
    });
  }
});
