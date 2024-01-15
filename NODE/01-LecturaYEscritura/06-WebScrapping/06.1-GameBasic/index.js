import fs from "fs";
import puppeteer from "puppeteer";

const scrapping = async () => {
  const BASE_URL = "https://www.game.es/buscar/pokemon";

  // Creamos constantye de mi navegador: el browser
  // ---> navegador maximizado, porque es como quiero verlo
  //cuando me lo lance puppeteer
  //y le doy los parámetros

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });

  // Vamos a abrir la página en el navegador

  const page = await browser.newPage();

  // Navegamos a la url deseada
  await page.goto(BASE_URL);

  await page.waitForTimeout(6000); // Hacemos esperar 6 segundos

  // Que navegue hasta el footer esperamos un poco de tiempo
  // y que vuelva a hacer scroll para cargar más elementos
  //le doy las coordenadas del punto para que me navegue hasta él
  //. todo el tiempo con .scrollTo
  

  await page.evaluate(() => {
    const element = document.getElementById("l-footer");

    const y = element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({ top: y });
  });

  await page.waitForTimeout(6000);

  await page.evaluate(() => {
    const element = document.getElementById("l-footer");

    const y = element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({ top: y });
  });

  await page.waitForTimeout(6000);

  // Vamos a decirle que espere a que tenga cargados
  // unos items de la página, los selleciono por clase

  await page.waitForTimeout(".search-item");

  // Vamos a guardar los elementos de la pantalla
  // en objectos de js con evaluame ($$eval)
  //Apunto a la clase y hacemos una callback de los nodos
   //  .innerText para textos
   // .src para imágenes



  const titles = await page.$$eval("a.cm-txt", (nodos) =>
    nodos.map((nodo) => nodo.innerText)
  );

  const images = await page.$$eval(".img-responsive", (nodos) =>
    nodos.map((nodo) => nodo.src)
  );

  const prices = await page.$$eval("div.buy--price", (nodos) =>
    nodos.map((nodo) => nodo.innerText)
  );

  // Vamos a hacer un objecto completo con toda esta información

  const gameProducts = titles.map((title, index) => ({
    title: titles[index],
    image: images[index],
    price: prices[index],
  }));

  // Borramos el ultimo elemento del array 
  //que suele estar vacio al hacer el web scrapping(por experiencia)


  gameProducts.pop();
  console.log(gameProducts);

  // Pasamos los datos a string

  const dataString = JSON.stringify(gameProducts);

  //Hacemos el archivo con writeFile

  fs.writeFile("pokemon.json", dataString, () =>
    console.log("Archivo creado correctamente")
  );

  await browser.close();
};

scrapping();
