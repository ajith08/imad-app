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

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    var names = ['name1', 'name2', 'name3'];
    var list='';
    for(var i=0;i<names.length;i++)
    {
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};