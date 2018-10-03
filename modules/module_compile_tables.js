exports.compileTables = (CON) => {
  let query = 'INSERT INTO general_data (name,surname) VALUES ?';
  let values = [
    ['Alessandro', 'Fioritto'],
    ['Alessandro', 'Londero'],
    ['Bruno', 'Menis'],
    ['Daniele', 'Marchiol'],
    ['Davide', 'Turchetto'],
    ['Emiliano', 'Tonizzo'],
    ['Edoardo', 'Rodaro'],
    ['Elvis', 'Candusso'],
    ['Federico', 'Fantini'],
    ['Francesco', 'Bergamin'],
    ['Giacomo', 'Circa'],
    ['Giacomo', 'Zampieri'],
    ['Luca', 'Tubaro'],
    ['Manuel', 'Antonutti'],
    ['Manuel', 'Massari'],
    ['Marco', 'Pendalo'],
    ['Niccol&ograve', 'De Rosa'],
    ['Samuele', 'Simonitti'],
    ['Stefano', 'Commisso'],
    ['Tommaso', 'Da Fr&egrave']
  ];
  CON.query(query, [values], (err, result) => {
    if (err)
      throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });

  query = 'INSERT INTO phone_numbers (general_data_ID,prefix,phone_number,phone_number_descrition) VALUES ?';
  values = [
    [1, 39, '389 265 4435', 'personal_phone'],
    [2, 39, '349 135 9053', 'personal_phone'],
    [3, 39, '393 414 8157', 'personal_phone'],
    [4, 39, '346 186 1012', 'personal_phone'],
    [5, 39, '345 280 2006', 'personal_phone'],
    [6, 39, '333 688 1799', 'personal_phone'],
    [7, 39, '327 999 1801', 'personal_phone'],
    [8, 39, '342 048 6334', 'personal_phone'],
    [9, 39, '349 232 5458', 'personal_phone'],
    [10, 39, '366 812 0961', 'personal_phone'],
    [11, 39, '340 199 8955', 'personal_phone'],
    [12, 39, '366 785 7648', 'personal_phone'],
    [13, 39, '391 148 2279', 'personal_phone'],
    [14, 39, '380 341 1977', 'personal_phone'],
    [15, 39, '342 377 7639', 'personal_phone'],
    [16, 39, '342 533 4496', 'personal_phone'],
    [17, 39, '334 712 1180', 'personal_phone'],
    [18, 39, '349 708 8766', 'personal_phone'],
    [19, 39, '342 358 5614', 'personal_phone'],
    [20, 39, '331 224 2995', 'personal_phone'],
    [20, 39, '331 242 2995', 'Tommaso da fr&egrave &egrave sfondato di soldi, quindi pu&ograve permettersi pi&ugrave numeri di telefono'],
    [20, 39, '331 422 2995', 'Un numero di numeri pari al numero di permutazioni possibili di 224']
  ];

  CON.query(query, [values], (err, result) => {
    if (err)
      throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });

  query = 'INSERT INTO emails (general_data_ID,email,email_description) VALUES ?';
  values = [
    [1, 'alepsyco2001@gmail.com', 'personal_email'],
    [1, 'alepsyco2010@gmail.com','Visto e considerato che Fioritto vuole farsi eleggere rappresentante'],
    [1, 'alepsyco2100@gmail.com','ha creato un numero di email pari al numero'],
    [1, 'alepsyco1200@gmail.com', 'di permutazioni di 2001, al fine di darsi un po pi&ugrave di voti;'],
    [1, 'alepsyco1020@gmail.com', 'per&ograve sia io che lui siamo molto pigri'],
    [1, 'alepsyco1002@gmail.com', 'perci&ograve ne ho fatte un po" meno di 12'],
    [2, 'alelondero01@gmail.com', 'personal_email'],
    [3, , 'null_email'],
    [4, 'marchiol.daniele@libero.it', 'personal_email'],
    [5, 'dvd.turchetto@gmail.com', 'personal_email'],
    [6, 'emiliano.tonizzo@gmail.com', 'personal_email'],
    [7, 'edoardorodaro@gmail.com', 'personal_email'],
    [8, 'elviscandusso@gmail.com', 'personal_email'],
    [9, 'fantinifederico7@gmail.com', 'personal_email'],
    [10, 'fantasmacheco@gmail.com', 'personal_email'],
    [11, 'giacomo.circa@gmail.com', 'personal_email'],
    [12, 'giacomo01zampieri@gmail.com', 'personal_email'],
    [13, 'lucatuba2001@gmail.com', 'personal_email'],
    [14, , 'null_email'],
    [15, 'manuelmass01@gmail.com', 'personal_email'],
    [16, , 'null_email'],
    [17, 'Niccolobagigio@outlook.it', 'personal_email'],
    [18, 'samuele2424@gmail.com', 'personal_email'],
    [19, 'stefano.comix@gmail.com', 'personal_email'],
    [20, 'tommaso.dafre@gmail.com', 'personal_email']
  ];

  CON.query(query, [values], (err, result) => {
    if (err)
      throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
}
