var title = document.createElement("div")
title.className = "vaportitle"
title.innerText = "Vapor"
appid.appendChild(title)

var items = document.createElement("center")

var games = document.createElement("iframe")
games.src = "https://uwuugle.com/games/index.html"
games.rameborder="1"
games.marginheight="0px"
games.marginwidth="0px"
games.height="100%"
games.width="100%"
items.appendChild(games)

appid.appendChild(items)

var vaporstyle = document.createElement("style")
vaporstyle.innerText = ".vaportitle {font-size: 60px; text-align: center; color: white; user-select: none; margin-top: 10px;}.vaportab{cursor: pointer;background: #303134;border-radius: 2.5px;height: 50px;text-align: center;line-height: 50px;color: white; border: none; font-size: 18px;user-select: none; margin: 5px;} .vaportab:hover {background: darkslategrey;}"
document.getElementsByTagName("html")[0].appendChild(vaporstyle)