"use strict";

const citiesContainer = document.querySelector(".city__parent");

const renderData = function (data) {
  const html = `
    <option>${data}</option>
  `;
  citiesContainer.insertAdjacentHTML("afterbegin", html);
};

const fetchData = async function () {
  const res = await fetch(`./cities.json`);
  const data = await res.json();
  const results = data.forEach((ele) => {
    renderData(ele.cityNameAr);
  });
};

fetchData();
