import puppeteer from 'puppeteer'

export const cne = async () => {
  console.log('Iniciando Scraping')
  // config basica
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1')
  const url = 'http://www.cne.gob.ve/web/registro_electoral/registro_electoral.php'
  await page.goto(url)

  // esperamos el despliegue de las publicaciones
  await page.waitForSelector('#contenedor > table')

const persona = {
  Cédula: item.querySelector('#contenedor > table > tbody > tr > td > table > tbody > tr:nth-child(5) > td > table > tbody > tr:nth-child(2) > td > table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(2)').innerText.trim(),
  Nombre: item.querySelector('#contenedor > table > tbody > tr > td > table > tbody > tr:nth-child(5) > td > table > tbody > tr:nth-child(2) > td > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(2) > b').innerText.trim(),
  Estado: item.querySelector('#contenedor > table > tbody > tr > td > table > tbody > tr:nth-child(5) > td > table > tbody > tr:nth-child(2) > td > table:nth-child(1) > tbody > tr:nth-child(3) > td:nth-child(2)').innerText.trim(),
  Municipio: item.querySelector('#contenedor > table > tbody > tr > td > table > tbody > tr:nth-child(5) > td > table > tbody > tr:nth-child(2) > td > table:nth-child(1) > tbody > tr:nth-child(4) > td:nth-child(2)').innerText.trim(),
  Parroquia: item.querySelector('#contenedor > table > tbody > tr > td > table > tbody > tr:nth-child(5) > td > table > tbody > tr:nth-child(2) > td > table:nth-child(1) > tbody > tr:nth-child(5) > td:nth-child(2)').innerText.trim(),
  Centro: item.querySelector('#contenedor > table > tbody > tr > td > table > tbody > tr:nth-child(5) > td > table > tbody > tr:nth-child(2) > td > table:nth-child(1) > tbody > tr:nth-child(6) > td:nth-child(2) > font').innerText.trim(),
  Dirección: item.querySelector('#contenedor > table > tbody > tr > td > table > tbody > tr:nth-child(5) > td > table > tbody > tr:nth-child(2) > td > table:nth-child(1) > tbody > tr:nth-child(7) > td:nth-child(2) > font').innerText.trim(),
}
