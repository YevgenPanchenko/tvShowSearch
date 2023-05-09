const form = document.querySelector("#searchForm");
const img = document.createElement("img");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  makeImages(res.data);
  form.elements.query.value = "";
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};

/* Цей код JavaScript додає обробник події на подання форми, який запускається, коли користувач надсилає форму. Коли обробник події викликається, він запобігає стандартній поведінці браузера, що пов'язана з надсиланням форми, використовуючи метод preventDefault.

Після цього код отримує значення поля введення за допомогою form.elements.query.value і використовує його для створення об'єкту налаштувань config. Параметр q знаходиться в об'єкті config.params, який буде передано як параметри запиту до веб-служби API https://api.tvmaze.com/search/shows.

Коли отримано відповідь від API, функція makeImages викликається з даними відповіді як параметром. Ця функція перебирає отримані дані та створює HTML-елементи зображень для кожного знайденого телепередачі, які містяться у відповіді. Якщо зображення не знайдено, то HTML-елемент зображення не створюється.

У цьому коді використовується бібліотека Axios, яка є зручним інструментом для здійснення запитів HTTP на стороні клієнта з використанням синтаксису Promise, що дозволяє здійснювати запити до веб-служб API асинхронно і отримувати відповідь у форматі JSON або іншому форматі, залежно від типу запиту. */
