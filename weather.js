
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log("経度:", data.coord.lon);
  console.log("緯度:", data.coord.lat);
  console.log("天気:", data.weather[0].description);
  console.log("最低気温:", data.main.temp_min);
  console.log("最高気温:", data.main.temp_max);
  console.log("湿度:", data.main.humidity);
  console.log("風速:", data.wind.speed);
  console.log("風向:", data.wind.deg);
  console.log("都市名:", data.name);
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  const result = document.querySelector('#result');
  if (result) {
    result.remove();
  }
  const div = document.createElement("div");
  div.setAttribute("id", "result");


  document.body.insertAdjacentElement("beforeend", div);
  const h2 = document.createElement("h2");
  h2.textContent = "都市について";
  div.insertAdjacentElement("beforeend", h2);


  const city = document.createElement("ul");
  const longitude = document.createElement("li");
  longitude.textContent = "経度：" + data.coord.lon;
  const latitude = document.createElement("li");
  latitude.textContent = "緯度：" + data.coord.lat;
  const name = document.createElement("li");
  name.textContent = "都市名：" + data.name;


  city.insertAdjacentElement("beforeend", longitude);
  city.insertAdjacentElement("beforeend", latitude);
  city.insertAdjacentElement("beforeend", name);


  div.insertAdjacentElement("beforeend", city);
  const weather = document.createElement("h2");
  weather.textContent = "お天気について";
  div.insertAdjacentElement("beforeend", weather);
  const ul_weather = document.createElement("ul");
  const li_weather = document.createElement("li");
  li_weather.textContent = "天気：" + data.weather[0].description;
  const min = document.createElement("li");
  min.textContent = "最低気温：" + data.main.temp_min + " °C";
  const max = document.createElement("li");
  max.textContent = "最高気温：" + data.main.temp_max + " °C";
  const m1 = document.createElement("li");
  m1.textContent = "湿度：" + data.main.humidity + " %";
  const wind = document.createElement("li");
  wind.textContent = "風速：" + data.wind.speed + " m/s";
  const deg = document.createElement("li");
  deg.textContent = "風向：" + data.wind.deg + " 度";


  ul_weather.insertAdjacentElement("beforeend", li_weather);
  ul_weather.insertAdjacentElement("beforeend", min);
  ul_weather.insertAdjacentElement("beforeend", max);
  ul_weather.insertAdjacentElement("beforeend", m1);
  ul_weather.insertAdjacentElement("beforeend", wind);
  ul_weather.insertAdjacentElement("beforeend", deg);

  div.insertAdjacentElement("beforeend", ul_weather);

}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
const botton = document.querySelector('#search');
botton.addEventListener('click', sendRequest);



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  const key = document.querySelector('#keyword').value;
  if (key === '') {
    alert('都市名を入力してください');
    return;
  }

  const citylist = document.querySelector('#city-list');
  if (citylist) {
    citylist.style.display = 'none';
  }

  const url =
    'https://www.nishita-lab.org/web-contents/jsons/openweather/'+key+'.json';
  axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
   let data = resp.data;

  if (typeof data === 'string') {
    data = JSON.parse(data);
  }

  printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

