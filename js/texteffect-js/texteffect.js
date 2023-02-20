if(screen.width>1024){
        consoleText(['HOLA, SOY CHRISTIAN REYES', 'INGENIERO MECATRONICO','DESARROLLADOR FRONTEND','DESARROLLADOR BACKEND','OLÁ, SOU CHRISTIAN REYES', 'ENGENHEIRO MECATRÔNICO', 'DESENVOLVEDOR FRONTEND','DESENVOLVEDOR BACKEND','HI, I AM CHRISTIAN REYES', 'MECHATRONIC ENGINEER', 'FRONTEND DEVELOPER','BACKEND DEVELOPER'], 'text', ['#00ADB5']);
} 

function consoleText(words, id, colors) {
        if (colors === undefined) colors = ['#fff'];
        var visible = true;
        var con = document.getElementById('console');
        var letterCount = 1;
        var x = 1;
        var waiting = false;
        var target = document.getElementById(id)
        target.setAttribute('style', 'color:' + colors[0])

        window.setInterval(function () {
                if (letterCount === 0 && waiting === false) {
                    waiting = true;
                    target.innerHTML = words[0].substring(0, letterCount)
                    window.setTimeout(function () {
                        var usedColor = colors.shift();
                        colors.push(usedColor);
                        var usedWord = words.shift();
                        words.push(usedWord);
                        x = 1;
                        target.setAttribute('style', 'color:' + colors[0])
                        letterCount += x;
                        waiting = false;
                    }, 1000)
                } else if (letterCount === words[0].length + 1 && waiting === false) {
                    waiting = true;
                    window.setTimeout(function () {
                        x = -1;
                        letterCount += x;
                        waiting = false;
                    }, 1000)
                    
                } else if (waiting === false) {
                    target.innerHTML = words[0].substring(0, letterCount)
                    letterCount += x;
                } 
        }, 120)

        window.setInterval(function () {
            if (visible === true && a===0) {
                con.className = 'console-underscore hidden'
                visible = false;
    
            } else {
                con.className = 'console-underscore'
    
                visible = true;
            }
        }, 400)
}