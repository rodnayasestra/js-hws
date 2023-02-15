// Свойство innerHTML хранит содержимое элемента, включая теги, в виде строки. Возвращаемое значение это всегда валидный HTML-код.

// ПРОСМОТОР
// const article = document.querySelector(".article");
// console.log(article.innerHTML);

// const title = document.querySelector(".article .title");
// console.log(title.innerHTML);
// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);

// // ИЗМЕНЕНИЕ

// const changedTitle = document.querySelector(".article .title");
// title.innerHTML = "Best title <span>Ever!</span>";

//  Если в свойство innerHTML записать пустую строку, то содержимое элемента будет очищено. Это простой и быстрый способ удаления всего содержимого.

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");
// const markup = technologies
//   .map((technology) => `<li>${technology}</li>`)
//   .join("");
// console.log(markup);
// list.innerHTML = markup;

//добавление

const article = document.querySelector(".article");
const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
   <a class="link" href="#">Read more...</a>`;

// Replace += with = operator. See the difference?
// Article title is lost because we overwrite element content.
article.innerHTML += htmlString;
