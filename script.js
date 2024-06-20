let overwatch = document.querySelector('.overwatch')
let valorant = document.querySelector('.valorant')
let rocket_league = document.querySelector('.rocket_league')
let rect = document.querySelector('.rect')

function change_overwatch_bg_color_dark() {
    container.style.color = 'rgb(255,140,0)'
}

function change_overwatch_bg_color_light() {
    container.style.color = 'rgb(255,165,0)'
}

overwatch.addEventListener('mouseenter', change_overwatch_bg_color_dark)
overwatch.addEventListener('mouseleave', change_overwatch_bg_color_light)