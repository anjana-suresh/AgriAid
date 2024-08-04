document.addEventListener('DOMContentLoaded', () => {
  loadNGOs();
  loadInitiatives();
  loadGrants();
});

function loadNGOs() {
  fetch('data/ngos.json')
      .then(response => response.json())
      .then(data => {
          const ngoList = document.getElementById('ngo-list');
          if (ngoList) {
              data.forEach(ngo => {
                  const listItem = document.createElement('li');
                  listItem.textContent = `${ngo.name} - ${ngo.description}`;
                  ngoList.appendChild(listItem);
              });
          }
      });
}

function loadInitiatives() {
  fetch('data/initiatives.json')
      .then(response => response.json())
      .then(data => {
          const initiativeList = document.getElementById('initiative-list');
          if (initiativeList) {
              data.forEach(initiative => {
                  const listItem = document.createElement('li');
                  listItem.textContent = `${initiative.name} - ${initiative.description}`;
                  initiativeList.appendChild(listItem);
              });
          }
      });
}

function loadGrants() {
  fetch('data/grants.json')
      .then(response => response.json())
      .then(data => {
          const grantList = document.getElementById('grant-list');
          if (grantList) {
              data.forEach(grant => {
                  const listItem = document.createElement('li');
                  listItem.textContent = `${grant.name} - ${grant.description}`;
                  grantList.appendChild(listItem);
              });
          }
      });
}
