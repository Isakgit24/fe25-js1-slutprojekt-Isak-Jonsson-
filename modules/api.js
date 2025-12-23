import _ from "https://cdn.jsdelivr.net/npm/underscore@1.13.7/underscore-esm-min.js ";




const slideDiv = document.querySelector('.mySlides, fade')
const slideDiv2 = document.querySelector('#slide2')
const urlpop = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
const urlTop = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
const imgUrl = 'https://image.tmdb.org/t/p/w200'

const optionsPop = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTYwZDVmOTM2M2FjMmU1OGUyZTczNDc1ZTFlNzZiNiIsIm5iZiI6MTc2NTUyNjY1Ny43MjgsInN1YiI6IjY5M2JjYzgxNDhjNDQ0NGNkZGFjOWQwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3O_job_zRICAOueo-B-F81cX9MC6p1pWT3_S2J6uz9U'
  }
};

async function imgForSlideshow() {
  try {
    const resPop = await fetch(urlpop, optionsPop)
    const popObj1 = await resPop.json()
    const popRes = popObj1.results

    popRes.slice(0, 5).forEach(pop5 => {

      const img = document.createElement("img")
      img.src = imgUrl + pop5.poster_path;
      img.alt = ' no image found';

      slideDiv.appendChild(img);



    })
    popRes.slice(5, 10).forEach(pop10 => {

      const img2 = document.createElement("img")
      img2.src = imgUrl + pop10.poster_path;
      img2.alt = ' no image found';

      slideDiv2.appendChild(img2);
    })

  } catch (err) {
    console.log(err)
  }
}

async function getPop() {
  try {
    const resPop = await fetch(urlpop, optionsPop)
    const popObj = await resPop.json()

    if (popObj.status >= 400 && popObj.status < 500) {
      alert('There is something wrong whith the server or the client')
    }

    for (let i = 0; i < 10; i++) {
      const h1 = document.createElement('h1')
      const img = document.createElement('img')
      const p = document.createElement('p')
      const poster = popObj.results[i].poster_path
      h1.innerText = popObj.results[i].title
      p.innerText = popObj.results[i].release_date
      img.src = `https://image.tmdb.org/t/p/w200${poster}`
      popOrTop.appendChild(h1)
      popOrTop.appendChild(p)
      popOrTop.appendChild(img)

    }



  } catch (err) {
    console.log(err)
  }

}


const optionsTop = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTYwZDVmOTM2M2FjMmU1OGUyZTczNDc1ZTFlNzZiNiIsIm5iZiI6MTc2NTUyNjY1Ny43MjgsInN1YiI6IjY5M2JjYzgxNDhjNDQ0NGNkZGFjOWQwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3O_job_zRICAOueo-B-F81cX9MC6p1pWT3_S2J6uz9U'
  }
};



async function getTop() {
  try {
    const responseTop = await fetch(urlTop, optionsTop)
    const topObj = await responseTop.json()

    if (topObj.status >= 400 && topObj.status < 500) {
      alert('There is something wrong whith the server or the client')
    }

    for (let i = 0; i < 10; i++) {
      const h1 = document.createElement('h1')
      const img = document.createElement('img')
      const p = document.createElement('p')

      const poster = topObj.results[i].poster_path

      h1.innerText = topObj.results[i].title
      img.src = `https://image.tmdb.org/t/p/w200${poster}`
      p.innerText = topObj.results[i].release_date
      popOrTop.appendChild(h1)
      popOrTop.appendChild(img)
      popOrTop.appendChild(p)

    }



  } catch (err) {
    console.log(err)
  }

}

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTYwZDVmOTM2M2FjMmU1OGUyZTczNDc1ZTFlNzZiNiIsIm5iZiI6MTc2NTUyNjY1Ny43MjgsInN1YiI6IjY5M2JjYzgxNDhjNDQ0NGNkZGFjOWQwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3O_job_zRICAOueo-B-F81cX9MC6p1pWT3_S2J6uz9U'
  }
};

async function search(searchRes) {
  console.log(searchRes)
  const urlSh = `https://api.themoviedb.org/3/search/multi?query=${searchRes}&language=en-US&page=1`
  try {
    const responseSh = await fetch(urlSh, options)
    const shObj = await responseSh.json()

    if (shObj.status >= 400 && shObj.status < 500) {
      alert('There is something wrong whith the server or the client')
    }

    const resultArr = shObj.results
    console.log(shObj)

    const personArr = _.filter(resultArr, function (func) {
      return func.media_type == 'person';
    })
    console.log(personArr)



    const movieArr = _.filter(resultArr, function (func) {
      return func.media_type == 'movie';
    })
    console.log(movieArr)


    if (movieArr.length === 0 || personArr.length === 0) {
      const p = document.createElement('p')

      p.innerText = 'The movie or person you search for could not be found, check spelling'
      sh.appendChild(p)
    }


    for (let j = 0; j < personArr.length; j++) {
      const person = personArr[j]
      const h1 = document.createElement('h1')

      const img = document.createElement('img')
      const p = document.createElement('p')
      const ul = document.createElement('ul')

      const name_title = person.name
      const poster = person.profile_path
      const famouseFor = person.known_for_department
      const itsAPerson = person.media_type
      console.log(person.media_type)



      h1.innerText = `${itsAPerson}:  ${name_title}`
      img.src = `https://image.tmdb.org/t/p/w200${poster}`
      img.alt = ' no image found'
      p.innerText = famouseFor

      console.log(person.known_for)

      person.known_for.forEach(kf => {

        const li = document.createElement('li')
        li.innerText = `${kf.media_type.toUpperCase()}: ${kf.title || kf.name} `
        ul.appendChild(li)
        sh.appendChild(ul)

      }
      )

      sh.appendChild(h1)
      sh.appendChild(img)
      sh.appendChild(p)
      sh.appendChild(ul)

    }



    for (let i = 0; i < movieArr.length; i++) {

      const h1 = document.createElement('h1')
      const img = document.createElement('img')
      const p = document.createElement('p')
      const p2 = document.createElement('p')

      const name_title = movieArr[i].title
      const poster = movieArr[i].poster_path
      const release_date = movieArr[i].release_date
      const overview = movieArr[i].overview
      const itsAMovie = movieArr[i].media_type
      console.log(itsAMovie)
      console.log(movieArr[i])

      h1.innerText = `${itsAMovie}:  ${name_title}`
      img.src = `https://image.tmdb.org/t/p/w200${poster}`
      img.alt = ' no image found'
      p.innerText = release_date || 'unknown relase date'
      p2.innerText = overview


      sh.appendChild(h1)
      sh.appendChild(img)
      sh.appendChild(p)
      sh.appendChild(p2)


    }



  } catch (err) {
    console.error(err)
  }
}





export { getPop, getTop, search, imgForSlideshow };
