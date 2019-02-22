window.onload = () => {
    let body = document.getElementsByTagName('body')[0];
    const affichage = document.querySelector('#affichage');
    var input = document.querySelector('input');
    var Btn = document.querySelector('button');

    function majElements(className) {
        let msgs = document.getElementsByClassName(className)
        while(msgs.length > 0){
        msgs[0].parentNode.removeChild(msgs[0]);
    }
}

const myInput = document.querySelector('input');
myInput.addEventListener('keyup',function(e){
	if (e.keyCode === 13) {
        let req = new XMLHttpRequest;
        let url = "https://cors-anywhere.herokuapp.com/https://fr.wikipedia.org/w/api.php?action=opensearch&format=json&search="+input.value;
        
        req.open('GET',url)
        req.responseType= 'json'
        req.send()  
        
        req.onload = function(){
            let objectJson = req.response;
            
            //let article = document.createElement('article')
            //body.appendChild(article)
            //mettre en dehors de boucle sinon se repète partout
    
            if(objectJson[1][0]) {
                //regarde si existe
                let inputMinuscule = objectJson[0].toLowerCase();
                let titreMinuscule = objectJson[1][0].toLowerCase();
                console.log(inputMinuscule)
                console.log(titreMinuscule)
    
                if(titreMinuscule == inputMinuscule){
                    majElements('nouveau')
                    let iframe = document.createElement('iframe')
                    iframe.src = objectJson[3][0]
                    affichage.appendChild(iframe)
                    iframe.className = "nouveau"
                    console.log(objectJson);
                    } 
                else {
                    majElements ('nouveau')
                    let iframe = document.createElement('iframe')
                    iframe.className = "nouveau"
                    affichage.appendChild(iframe)
                    iframe.src = "https://elisarenda.github.io/404-Page/."
                    console.log("erreur")
                    }   
            } 
                else {
                majElements ('nouveau')
                    let iframe = document.createElement('iframe')
                    iframe.className = "nouveau"
                    affichage.appendChild(iframe)
                    iframe.src = "https://elisarenda.github.io/404-Page/."
                    console.log("erreur")
                }        
                      
                
            for(let i in objectJson[3][0]){
                //permet de parcourir objectJson   
                var myElement = document.querySelector("img");
                    myElement.style.width = "80px";
                    myElement.style.height = "80px";
    
                var titreh2 = document.querySelector("h2")
                    titreh2.style.fontSize = "35px"
                                                 
                //let article = document.createElement('article')
                //body.appendChild(article)
                let parr = document.createElement('h2')
                //parr.className = 'nouveaux'
                //article.appendChild(parr) 
                let tab = objectJson [1][i]
                    parr.textContent = tab;
                let titre = document.createElement ('a')
                    titre.className = 'nouveaux';
                //article.appendChild(titre)
                let link = objectJson [3][i]
                    titre.href = link;
                    titre.textContent = link;
            }       
    
        }
  }
});

Btn.addEventListener("click" ,function(){
    let req = new XMLHttpRequest;
    let url = "https://cors-anywhere.herokuapp.com/https://fr.wikipedia.org/w/api.php?action=opensearch&format=json&search="+input.value;
    
    req.open('GET',url)
    req.responseType= 'json'
    req.send()  
    
    req.onload = function(){
        let objectJson = req.response;
        
        //let article = document.createElement('article')
        //body.appendChild(article)
        //mettre en dehors de boucle sinon se repète partout
     
        if(objectJson[1][0]) {
            //regarde si existe
            let inputMinuscule = objectJson[0].toLowerCase();
            let titreMinuscule = objectJson[1][0].toLowerCase();
            console.log(inputMinuscule)
            console.log(titreMinuscule)

            if(titreMinuscule == inputMinuscule){
                majElements('nouveau')
                let iframe = document.createElement('iframe')
                iframe.src = objectJson[3][0]
                affichage.appendChild(iframe)
                iframe.className = "nouveau"
                //console.log(objectJson);
            } 
            else {
                majElements ('nouveau')
                let iframe = document.createElement('iframe')
                iframe.className = "nouveau"
                affichage.appendChild(iframe)
                iframe.src = "https://elisarenda.github.io/404-Page/."
            }   
        } 
            else {
            majElements ('nouveau')
                let iframe = document.createElement('iframe')
                iframe.className = "nouveau"
                affichage.appendChild(iframe)
                iframe.src = "https://elisarenda.github.io/404-Page/."
            }        
                  
            
        for(let i in objectJson[3][0]){
            //permet de parcourir objectJson   
            var myElement = document.querySelector("img");
            myElement.style.width = "80px";
            myElement.style.height = "80px";

            var titreh2 = document.querySelector("h2")
            titreh2.style.fontSize = "35px"
                                             
            //let article = document.createElement('article')
            //body.appendChild(article)
            let parr = document.createElement('h2')
            //parr.className = 'nouveaux'
            //article.appendChild(parr) 
            let tab = objectJson [1][i]
            parr.textContent = tab;
            let titre = document.createElement ('a')
            titre.className = 'nouveaux';
            //article.appendChild(titre)
            let link = objectJson [3][i]
            titre.href = link;
            titre.textContent = link;
            }       

    }
});
}