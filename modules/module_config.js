exports.setupConfiguration = (sql) => {
  let CON = sql.createConnection({
    host:'localhost',
    user:'sammy',
    password:'B3ch3r-L3g3r',
    database:'lots_of_tables'
  })

  return CON;
}
