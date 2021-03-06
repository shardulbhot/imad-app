var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
     'article-one':{
        title: 'Article One|Shardul Bhot',
    heading:'Article One',
    date:'1 Sep 2017',
    content:`<p>
            Hello Welcome to Article one.
            Hello Welcome to Article one.
            Hello Welcome to Article one.
            Hello Welcome to Article one.
            Hello Welcome to Article one.
            Hello Welcome to Article one.
            Hello Welcome to Article one.
            </p>
           `
},
'article-two':{
    title:'Article Two | Shardul Bhot',
    heading:'Article Two',
    date:'1 Sep 2017',
    content:`<p>
            Hello Welcome to Article two.
            </p>
    `},
     'article-three':{
         title:'Article Three | Shardul Bhot',
    heading:'Article Three',
    date:'1 Sep 2017',
    content:`<p>
            Hello Welcome to Article three.
            </p>
    `}

};

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
var htmlTemplate=`
<html>
      <head>
            <title>
            ${title}
            </title>
      </head>
      <body>
            <div>
                  <a href="/">Home</a>
            </div>
            <hr/>
            <h3>${heading}</h3>
            <div>
              ${date}
            </div>
            <div>
            ${content}
            </div>
      </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
 res.send(createTemplate(articles[articleName]));  
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
