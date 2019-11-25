const fs = require('fs')

function createFile(base, limit) {
  return new Promise((res, rej) => {

    if (!Number(base)) {
      rej('No es un número')
      return
    }

    const func = (base, limit, from = 1, data = '') => {
      if (from > limit) {
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
          if (err) {
            rej(err);
          }
          res(`tabla-${base}.txt`)
        })
        return
      }
      data += `${base} x ${from} = ${from * base}\n`
      from = from + 1
      func(base, limit, from, data)
    }
    func(base, limit)

  });
}

function listTable(base, limit, from = 1, data = '') {
    if (from > limit) {
      return
    }
    console.log(`${base} x ${from} = ${from * base}`)
    from = from + 1
    listTable(base, limit, from, data)
}

module.exports = {
  createFile,
  listTable
}