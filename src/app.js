/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["rates", "bus", "lectores", "jesus"];
  let extensions = [".com", ".net", ".us", ".io", ".org", ".es"];

  let domainName = [];

  for (let item of pronoun) {
    for (let item2 of adj) {
      for (let item3 of noun) {
        for (const item4 of extensions) {
          if (item3.slice(-2) == item4.substring(1)) {
            domainName = `${item}${item2}${item3.slice(0, -2)}.${item3.slice(
              -2
            )}`;
          } else {
            domainName = `${item}${item2}${item3}${item4}`;
          }
          console.log(domainName);
        }
      }
    }
  }
};
