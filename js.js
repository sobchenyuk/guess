/**
 * Created by Андрей on 21.02.2017.
 */

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var arr2 = [];
arr2 = arr;
var arr3 = arr2.concat(arr);
var count,datNumber,w,q,m;
var arr4 = [];
var attempts,points,active_true;
function compareRandom(a, b) {
    return Math.random() - 0.5;
}
arr3.sort(compareRandom);
var block = document.querySelector('#block');
for (var i = 0; i < arr3.length; i++) {
    var div = document.createElement('div');
    div.className = "count";
    div.setAttribute('data-number', i);
    div.innerHTML = arr3[i];
    block.appendChild(div);

}



attempts = document.querySelector('.attempts');
points = document.querySelector('.points');
wins = document.querySelector('.wins');

attempts.innerHTML = 0;
points.innerHTML = 0;
wins.innerHTML = 0;

w = 1;
q = 1;
m = 1;

count = document.querySelectorAll('#block .count');
var b;

for (var a = 0; a < count.length; a++){

    var c = 0;
    var col = a;

    count[a].onclick= function(e) {
        datNumber = this.getAttribute('data-number');

        c++;

            this.className += " active";


            var text = this.innerHTML;


            arr4.push(datNumber,text);

            var text1 = arr4[1];

            var text2 = arr4[3];

            var value1 = arr4[0];

            var value2 = arr4[2];


            if(this.classList.contains("active_true")){
                this.classList.remove("active");
            }

            function func() {
                arr4.length = 0;
                c = 0;
                for (var a = 0; a < count.length; a++) {
                    count[a].classList.remove("active");
                }
            }

            if(text1 == text2){

                count[value1].className = "count active_true";
                count[value2].className = "count active_true";
                arr4.length = 0;
                c = 0;
                points.innerHTML = q++;
            }else if(text1 !== text2 && c >= 2){

                setTimeout(func, 200);

            }

                attempts.innerHTML = w++;

        activeTrue = document.querySelectorAll('#block .active_true');

        for (var a = 0; a < activeTrue.length; a++) {
           var aColl = a;
        }

        if(aColl == col){
            wins.innerHTML = m++;

            alert('Поздравляем с победой');

            arr4.length = 0;
            c = 0;
            for (var n = 0; n < count.length; n++) {
                count[n].classList.remove("active_true");
            }
        }
    };





}
