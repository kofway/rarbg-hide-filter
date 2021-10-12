// ==UserScript==
// @name        rarbg-hide-and-highlight
// @include     https://rarbg.to/*
// @description Hide rarbg items in the filter list and highlight items in highlight list
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @grant       GM_addStyle
// @grant       GM.getValue
// ==/UserScript==

let a2 = $(".lista2");
let banList = ['hideitem1','hideitem2']
let highlightList = ['highlight1']

for (let i in a2) {
    if (i == 'length') {
        break;
    }

    for (let k in highlightList){
        if (a2[i].innerText.includes(highlightList[k])){
            a2[i].children[1].children[0].style.color = 'red'
            console.log(a2[i].innerText + " is highlighted!!!");
        }
    }
    for (let j in banList){
        if (a2[i].innerText.includes(banList[j])){
            a2[i].hidden = true
            console.log(a2[i].innerText + " is hidden!!!");
        }
    }
}
