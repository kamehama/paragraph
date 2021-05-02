var canvas = document.getElementById('mycanvas'); ctx = canvas.getContext("2d");
naruto_x=20
naruto_y=20


var hiddenleaf="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/76612106-8aba-4097-9619-baee44cc3b5f/d88qv8t-43aea6b7-9442-428d-917f-6787fcfcd310.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNzY2MTIxMDYtOGFiYS00MDk3LTk2MTktYmFlZTQ0Y2MzYjVmXC9kODhxdjh0LTQzYWVhNmI3LTk0NDItNDI4ZC05MTdmLTY3ODdmY2ZjZDMxMC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.qUc_GFyxuqloS5uiLP_liRxKqLIsQDYHoje8n8wU8t0"
naruto1="https://media.tenor.com/images/770762cbd93a813d89fb72989f787985/tenor.gif"

function add(){
    back=new Image()
    back.onload=upload_background
    back.src=hiddenleaf
    naruto=new Image()
    naruto.onload=upload_rover
    naruto.src=naruto1
   
}
function upload_background(){
    ctx.drawImage(back,0,0,canvas.width,canvas.height)
}
function upload_rover(){
    ctx.drawImage(naruto,naruto_x,naruto_y,100,90)
}
window.addEventListener("keydown",key_down)
function key_down(e){
    key=e.keyCode
    if(key=="37"){
        Left()
    }
    if(key=="38"){
        up()
    }
    if(key=="39"){
        right()
    }
    if(key=="40"){
        down()
    }
}