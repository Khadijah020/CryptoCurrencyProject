//const APIURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
//const PriceAPI = 'https://pro-api.coingecko.com/api/v3/coins/markets?vs_currency=usd&price_change_percentage=1h%2C24h%2C7d'

const APIURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&price_change_percentage=1h%2C24h%2C7d'



const getCoins = async () => {
    const response = await fetch(APIURL)
    const data = await response.json()
    console.log(data)
    getEachCoin(data)
}


const getEachCoin = async (data) => {

    const tbody = document.querySelector("tbody")

    tbody.innerHTML = ''

    data.forEach((element) => {
        const row = document.createElement("tr")
        row.classList.add("table-content")
        row.innerHTML = `
                <tr>
                  <td>${element.market_cap_rank}</td>
                  <td id="info">
                  <img src="${element.image}" alt="Image" class="info-image">
                  <div class="info-text">
                   <span class="name">${element.name}</span>
                   <span class="symbol">${element.symbol.toUpperCase()}</span>
                   </div>
                   </td>

                  <td>$${element.current_price.toLocaleString()}</td>
                  <td>${element.price_change_percentage_1h_in_currency.toFixed(1)}</td> 
                  <td>${element.price_change_percentage_24h.toFixed(1)}</td> 
                  <td>${element.price_change_percentage_7d_in_currency.toFixed(1)}</td>
                  <td>$${element.total_volume.toLocaleString()}</td>
                  <td>$${element.market_cap.toLocaleString()}</td>
                </tr>`
        tbody.appendChild(row)
        //console.log(row)
    });
}

getCoins()

//Functionality to reload data every 10 seconds.
setInterval(getCoins, 10000)




