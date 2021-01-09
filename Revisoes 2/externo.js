function mensagem() {
    alert("Este botão não faz nada!!!");
}

function clicaImagem(v) {
    switch (v.value) {
            case "Alive": 
                var obj = document.getElementById("filmeAlive");
                break;
            case "Black Box": 
                var obj = document.getElementById("filmeBlackBox");
                break;
            case "Call":
                var obj = document.getElementById("filmeCall");
                break;
            case "Holidate": 
                var obj = document.getElementById("filmeHolidate");
                break;
            case "Kiss the Ground": 
                var obj = document.getElementById("filmeKissTheGround");
                break;
            case "Mank": 
                var obj = document.getElementById("filmeMank");
                break;
            case "The Old Guard": 
                var obj = document.getElementById("filmeTheOldGuard");
                break;
            case "Project Power":
                var obj = document.getElementById("filmeProjectPower");            
                break;
        }    
    obj.checked = !obj.checked;
}

function mostra(v) {
    if (v.checked){
        switch (v.value) {
            case "Alive": alert ("Drama/Terror, Coreia do Sul, 1h39m");
                break;
            case "Black Box": alert ("Terror/Ficção científica, EUA, 1h40m");
                break;
            case "Call": alert ("Thriller/Fantasia, Coreia do Sul, 1h52m");
                break;
            case "Holidate": alert ("Romance/Comédia, EUA, 1h43m");
                break;
            case "Kiss the Ground": alert ("Documentário, EUA");
                break;
            case "Mank": alert ("Drama, EUA, 2h11m");
                break;
            case "The Old Guard": alert ("Ação/Fantasia, EUA, 2h05m");
                break;
            case "Project Power": alert ("Ação/Filme de super-herói , EUA, 1h54m");
                break;
        }
    }
}