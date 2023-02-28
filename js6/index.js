let row = document.getElementById('row')
let row2 = document.getElementById('row2')
let res1 = [];
let res2 = [];
let mmorpg = document.getElementById('mmorpg');
let shooter = document.getElementById('shooter')
let sailing = document.getElementById('sailing')
let permadeath = document.getElementById('permadeath')
let superhero = document.getElementById('superhero')
let pixel = document.getElementById('pixel')
let aa = document.querySelector('.aa')
let bb = document.querySelector('.bb')


async function getGames(type) {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '883253cb0cmsh1812593b41e69d5p102649jsn1f86c1190f1f',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    let url = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${type}`, options)
    res1 = await url.json()
    displayGames()
    
}

async function getOneGame(idd) {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '883253cb0cmsh1812593b41e69d5p102649jsn1f86c1190f1f',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    let url = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idd}`, options)
    res2 = await url.json()
    
    displayoneGame();


}


getGames('mmorpg');


function displayGames() {
    box = ''
    for (let i = 0; i < res1.length; i++) {
        box += `
        
        <div class="col-lg-3 ">
        <div id='oo${i}' class="zz" >
        <img src="${res1[i].thumbnail}" class='w-100' >
        <h4>${res1[i].title}</h4>
        <p>${res1[i].short_description}</p>
        </div>
        </div>
      `
    }
    row1.innerHTML = box
    for (let i = 0; i < res1.length; i++) {
        let oo = document.getElementById(`oo${i}`)
        oo.addEventListener('click', function () {
            getOneGame(res1[i].id)
        })
    }

    let zz = document.querySelectorAll('.zz')
    for (let i = 0; i < zz.length; i++) {
        zz[i].addEventListener('click',function(){
            aa.classList.replace("d-block", "d-none")
            bb.classList.replace("d-none", "d-block")
        })
    }
}

mmorpg.addEventListener('click', function () {
    getGames('mmorpg')
})

shooter.addEventListener('click', function () {
    getGames('shooter')
})

sailing.addEventListener('click', function () {
    getGames('sailing')
})

permadeath.addEventListener('click', function () {
    getGames('permadeath')
})

superhero.addEventListener('click', function () {
    getGames('superhero')
})

pixel.addEventListener('click', function () {
    getGames('pixel')
})

function displayoneGame(){
    box=''
        box+=`
        <div class="col-md-9 text-white" id="zz">
        <button id="xx">X</button>
        <img src=${res2.thumbnail} class = 'w-50'>
        <h1>Title : ${res2.title}</h1>
        <h3>category : ${res2.genre}</h3>
        <h3>platform : ${res2.platform}</h3>
        <p>${res2.short_description}</p>
        <a class="btn btn-outline-warning " href="${res2.game_url}">Show Game</a>
        </div>
        ` 
    row2.innerHTML = box

    let xx = document.getElementById('xx')
    xx.addEventListener('click', function(){
        aa.classList.replace("d-none", "d-block")
        bb.classList.replace("d-block", "d-none")
    })
}


