class Concentration{
  constructor(){
    const table = document.querySelector('#table');

    this.tr = document.createElement('tr');
    this.tr.classList.add('tr_box');

    this.td = document.createElement('td');
    this.td.classList.add('td_hidden');
    for(let i = 0; i < 5; i++){
      this.td.textContent = Math.floor(Math.random()*i+1);

    }

    this.td1 = document.createElement('td');
    this.td1.classList.add('td_hidden')
    for(let i = 0; i < 9; i++){
      this.td1.textContent = Math.floor(Math.random()*i+1);
    }

    this.td2 = document.createElement('td');
    this.td2.classList.add('td_hidden')
    for(let i = 0; i < 5; i++){
    
      this.td2.textContent = Math.floor(Math.random()*i+1);
      
    }

    this.td3 = document.createElement('td');
    this.td3.classList.add('td_hidden')
    for(let i = 0; i < 9; i++){
      this.td3.textContent = Math.floor(Math.random()*i+1);
    }

    this.tr.appendChild(this.td);
    this.tr.appendChild(this.td1);
    this.tr.appendChild(this.td2);
    this.tr.appendChild(this.td3);
    table.appendChild(this.tr);

  }

}

const items = [
new Concentration(),
new Concentration(),
new Concentration(),
new Concentration(),

]