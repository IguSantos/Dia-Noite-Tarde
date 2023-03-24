function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('foto');

    var data = new Date()
    var hora = data.getHours()



    msg.innerHTML = `Agora são ${hora} horas!`

    if ( hora >= 12 && hora <= 17) {
        //Tarde
        img.innerHTML = '<img src="tarde.png" width="280" height="280">';

        document.body.style.background = 'rgb(114 175 210)'
     
    } else  if ( hora >= 18 && hora <= 23 || hora < 6 ) {
        //Noite
        img.innerHTML = '<img src="noite.png" width="280" height="280">' ;
        document.body.style.background = 'rgb(0 64 101)'

    } else if (hora >= 6 && hora <= 11 ) {
         //Manha
         img.innerHTML = '<img src="manha.png" width="280" height="280">'
         msg.innerHTML = `Agora são ${hora} manhã <br> Bora toma um cafézim!!`
         document.body.style.background = 'rgb(136 75 43)'

    } else {
        //por do sol
        img.innerHTML = '<img src="pordosol.png" width="280" height="280">'
        document.body.style.background = 'rgb(181 108 29)'
        msg.innerHTML += '<br> <strong>Sol</strong> já ta dando as cara'
    }
}



