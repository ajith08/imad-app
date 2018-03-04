console.log('Loaded!');

var img = document.getElementById('madi');
var marginLeft = 0;

/*function moveRight () {
   marginLeft = marginLeft + 10;
   img.style.marginLeft = marginLeft + 'px';
}
 */
img.onclick = function () {
    img.style.marginLeft = '100px';
   //   var interval = setInterval(moveRight, 100);
};


var submit = document.getElementById('submit_btn');
submit.onclick = function() {
/*    var names = ['name1', 'name2', 'name3'];
    var list='';
    for(var i=0;i<names.length;i++)
    {
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list; */
    var request = new XMLHttpRequest();
    reuest.onreadystatechange = function() {
        if (request.readyState===XMLHttpRequest.DONE) {
            if (request.status===200) {
                 var names = request.responseText;
                 names = JSON.parse(names);
    var list='';
    for(var i=0;i<names.length;i++)
    {
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
            }
        }
    }
};
var nameInput = document.getElementById('name');
var namme = nameInput.value;
request.oprn('GET','http://ajithravikumar08.imad.hasura-app.io/submit?name=' +namme, true);
request.send(null);