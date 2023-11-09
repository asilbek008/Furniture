"use strict";

const menu = document.querySelector(".menu");
const navigation = document.querySelector(".navigation");
const header = document.querySelector(".header");
const heart = document.querySelector(".seller-icons-item");

menu.addEventListener("click", (e) => {
  navigation.style.right = "32px";
});
header.addEventListener("click", (e) => {
  navigation.style.right = "-300px";
});

heart.addEventListener("onclick", (e) => {
  background.style = "red";
});
