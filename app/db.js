import Client from 'mariasql'

const c = new Client({
  host: '127.0.0.1',
  user: 'root'
});

export function showDatabases() {
  c.query('SHOW DATABASES', function (err, rows) {
    if (err) {
      throw err;
    }
    console.dir(rows);
  });

  c.end();
}
