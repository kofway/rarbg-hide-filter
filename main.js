// ==UserScript==
// @name        rarbg-exclude
// @include     https://rarbg.to/*
// @description Hide rarbg items in the filter list
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @grant       GM_addStyle
// @grant       GM.getValue
// ==/UserScript==

let a2 = $(".lista2");
let banList = ['hideitem1','hideitem2']

for (let i in a2) {
    for (let j in banList){
        if (a2[i].innerText.includes(banList[j])){
            a2[i].hidden = true
        }
    }
}
