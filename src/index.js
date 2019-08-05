const { app } =  require('./bin/routes');

app.listen(3000, () => {
  console.clear();
  console.log('Servidor montado!');
})