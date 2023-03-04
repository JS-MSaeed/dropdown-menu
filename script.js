"use strict";

//SELECT ELEMENT IN HTML
const citiesContainer = document.querySelector(".city__parent"); 

//FUNCTION TO RENDER VIEW
const renderData = function (data) {
  const html = `
    <option>${data}</option>
  `;
  citiesContainer.insertAdjacentHTML("afterbegin", html);
};

//FETCH FUNCTION
const fetchData = async function () {
  const res = await fetch(`./cities.json`);         // FILE FROM LOCAL MACHINE
  const data = await res.json();
  const results = data.forEach((ele) => {
    renderData(ele.cityNameAr);
  });
};

fetchData();
