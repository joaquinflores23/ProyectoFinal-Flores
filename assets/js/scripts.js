// Funcion para Modo Oscuro (copiada de la documentacion de Bootstrap)

(() => {
    'use strict'
  
    const getStoredTheme = () => localStorage.getItem('theme')
    const setStoredTheme = theme => localStorage.setItem('theme', theme)
  
    const getPreferredTheme = () => {
      const storedTheme = getStoredTheme()
      if (storedTheme) {
        return storedTheme
      }
  
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
  
    const setTheme = theme => {
      if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-bs-theme', 'dark')
      } else {
        document.documentElement.setAttribute('data-bs-theme', theme)
      }
    }
  
    setTheme(getPreferredTheme())
  
    const showActiveTheme = (theme, focus = false) => {
      const themeSwitcher = document.querySelector('#bd-theme')
  
      if (!themeSwitcher) {
        return
      }
  
      const themeSwitcherText = document.querySelector('#bd-theme-text')
      const activeThemeIcon = document.querySelector('.theme-icon-active use')
      const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
      const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')
  
      document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
        element.classList.remove('active')
        element.setAttribute('aria-pressed', 'false')
      })
  
      btnToActive.classList.add('active')
      btnToActive.setAttribute('aria-pressed', 'true')
      activeThemeIcon.setAttribute('href', svgOfActiveBtn)
      const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
      themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)
  
      if (focus) {
        themeSwitcher.focus()
      }
    }
  
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      const storedTheme = getStoredTheme()
      if (storedTheme !== 'light' && storedTheme !== 'dark') {
        setTheme(getPreferredTheme())
      }
    })
  
    window.addEventListener('DOMContentLoaded', () => {
      showActiveTheme(getPreferredTheme())
  
      document.querySelectorAll('[data-bs-theme-value]')
        .forEach(toggle => {
          toggle.addEventListener('click', () => {
            const theme = toggle.getAttribute('data-bs-theme-value')
            setStoredTheme(theme)
            setTheme(theme)
            showActiveTheme(theme, true)
          })
        })
    })
  })()

// Seleccion Contenedor

    // Paises
const containerPaises = document.querySelector('#paises-container')
    // Botones
const botones = document.querySelector('#buttons')


// Funcion Fetch Paises

const url = 'https://restcountries.com/v3.1/all?limit=10&page=1'

fetch(url)
.then( res => res.json())
.then( (data) => {
    console.log(data)
    generarTarjetas(data)
})

// Funcion Generar Tajetas
const generarTarjetas = array => {
  const data =  array.reduce(( acc, element ) => {
  //Operador si descriccion es null 
  // const replaceNullDescription = element.descripcion || "No hay descriccion";
  // Operador si imamgen es null
  // const ifImgNotFound = element.imagen || "../assets/img/icon-image-not-found.jpeg";   
  return acc + `
  <div class="col mb-5">
      <div class="card h-100">
          <!-- Product image-->
          <img class="card-img-top" src=${element.flags.png} alt="Imagen ${element.flags.alt}" />
          <!-- Product details-->
          <div class="card-body p-4">
              <div class="text-center">
                  <!-- Product name-->
                  <h3 class="fw-bolder">${element.name.common}</h3>

                  <h5>ID</h5>
                  <p>${element.cca3}</p>

                  <h5>Categoria</h5>


                  <h5>Descripcion</h5>




              </div>
          </div>
          <!-- Product actions-->
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center">
                  <button class="btn btn-secondary mt-auto" id="add-favs-${element.cca3}" onclick="addToFavorites(${element.cca3})" href="#">Agregar a Favoritos</button>
              </div>
          </div>
      </div>
  </div>

`
},'')

containerPaises.innerHTML = data
}

// Funcion Botones

// const bntNext = 
// const btnPrev =


