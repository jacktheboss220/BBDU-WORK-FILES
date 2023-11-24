const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const url = 'https://wallhaven.cc/random';

axios(url).then(async response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const li = $('#thumbs > section > ul > li');

    for (let i = 0; i < li.length; i++) {
        const img = $(li[i]).find('a').attr('href');
        axios(img).then(response => {
            const html = response.data;
            const $ = cheerio.load(html);
            const img = $('#wallpaper').attr('src');
            const name = img.split('/').pop();
            const path = `./images/${name}`;
            const writer = fs.createWriteStream(path);
            axios({
                url: img,
                method: 'GET',
                responseType: 'stream'
            }).then(response => {
                response.data.pipe(writer);
            });
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
    }


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
});