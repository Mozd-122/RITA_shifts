import { createServer } from 'http';

createServer((req, res) => {
  
if(req.method == "GET")
    {
      res.write('received GET request.');
        res.end()
    }
else if(req.method == "POST")
    {
      res.write('received POST request.');
        res.end();
    }
else
    {
      res.write('Undefined request .');
        res.end();
    }
  
}).listen(8080);
