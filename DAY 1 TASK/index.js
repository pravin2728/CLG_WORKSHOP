
$('.add-gif').on('click',function(){

var gif = $('.gif-link').val();
if(gif=="")
;
else
{
var str = `<div class="text-center">
<div style="background-color: rgb(10, 117, 188); padding: 15px 40px 15px 40px;">
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${gif}" alt="Card image cap">
            <div class="card-body" style="background-color: rgb(223, 234, 230);">
                <h5 class="card-title">Minion</h5>
                <p class="card-text">Sample gif of Minion is displayed here</p>
                <div><span id="bananas">0</span> Bananas</div>
                <br>
                <button class="btn btn-outline-warning" id="bananaButton">🍌Banana</button>
            </div>
    </div>
</div>
</div>`;}
$('.gifs').append(str);
});

//var banana_button = document.getElementById('bananaButton');

$('#bananaButton').on("click", function() {
   let counter_value = document.querySelector('#bananas');
   let count = counter_value.innerHTML;
   counter = Number(count)+1;
   counter_value.innerHTML=counter;
});