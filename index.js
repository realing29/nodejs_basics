const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.write('<h1>Hello from nodejs</h1>')
  res.write('<h2>Hello from nodejs</h2>')
  res.write('<h3>Hello from nodejs</h3>')

  res.end(`
    <div style="background: red; width: 200px; height: 200px;">
      <span>text</span>
    </div>
  `)
})

server.listen('3000', () => {
  console.log('Server is running')
})