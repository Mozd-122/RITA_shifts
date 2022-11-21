import { createServer } from 'http';

createServer((req, res) => {
  
if(req.method == "GET")
    {
      res.write('received GET request.');
        res.end("received GET request.")
    }
else if(req.method == "POST")
    {
      res.write('received POST request.');
        res.end("received POST request.");
    }
else
    {
      res.write('Undefined request .');
        res.end("Undefined request .");
    }
  
  
  res.write('Hello World!');
  res.end();
}).listen(process.env.PORT);
