const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const url = "https://wallhaven.cc/random";
const url_search = "https://wallhaven.cc/search?q=";

let q = "car";

axios(url_search + q + "&page=3").then(async (response) => {
  const html = response.data;
  const $ = cheerio.load(html);
  const li = $("#thumbs > section > ul > li");
  li.each(function (index, element) {
    const img = $(element).find('a').attr('href');
    console.log(img);
  });

  // for (let i = 0; i < li.length; i++) {
  //   const img = $(li[i]).find("a").attr("href");
  //   axios(img).then((response) => {
  //     const html = response.data;
  //     const $ = cheerio.load(html);
  //     const img = $("#wallpaper").attr("src");
  //     const name = img.split("/").pop();
  //     const path = `./images_search/${name}`;
  //     const writer = fs.createWriteStream(path);
  //     axios({
  //       url: img,
  //       method: "GET",
  //       responseType: "stream",
  //     }).then((response) => {
  //       response.data.pipe(writer);
  //       console.log("Downloaded: " + name);
  //     });
  //   });
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  // }
  
}).catch((err) => {
  console.log(err);
});

// axios(url).then(async (response) => {
//   const html = response.data;
//   const $ = cheerio.load(html);
//   const li = $("#thumbs > section > ul > li");

//   for (let i = 0; i < li.length; i++) {
//     const img = $(li[i]).find("a").attr("href");
//     axios(img).then((response) => {
//       const html = response.data;
//       const $ = cheerio.load(html);
//       const img = $("#wallpaper").attr("src");
//       const name = img.split("/").pop();
//       const path = `./images/${name}`;
//       const writer = fs.createWriteStream(path);
//       axios({
//         url: img,
//         method: "GET",
//         responseType: "stream",
//       }).then((response) => {
//         response.data.pipe(writer);
//       });
//     });
//     await new Promise((resolve) => setTimeout(resolve, 2000));
//   }

// li.each(function (index, element) {
//     const img = $(element).find('a').attr('href');
//     axios(img).then(response => {
//         const html = response.data;
//         const $ = cheerio.load(html);
//         const img = $('#wallpaper').attr('src');
//         const name = img.split('/').pop();
//         const path = `./images/${name}`;
//         const writer = fs.createWriteStream(path);
//         axios({
//             url: img,
//             method: 'GET',
//             responseType: 'stream'
//         }).then(response => {
//             response.data.pipe(writer);
//         });
//     });
// });
// });
