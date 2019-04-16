const welcome = () => {
  console.log(`Bienvenido a NODETRONCITO`)
  console.log()
  console.log('Endpoints Disponibles:')
  console.log()
  console.log(`HOME => http://${process.env.HOST}:${process.env.PORT}/`)
  console.log(`LocalBitcoins, Mercantil, Sell => http://${process.env.HOST}:${process.env.PORT}/mercantil/sell`)
  console.log(`LocalBitcoins, Banesco, Sell => http://${process.env.HOST}:${process.env.PORT}/banesco/sell`)
  console.log(`PRUEBA => http://${process.env.HOST}:${process.env.PORT}/prueba`)
}

module.exports = welcome