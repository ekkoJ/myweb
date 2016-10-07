var express = require('express');
var router = express.Router();
var data = {
    questions : [
        {
            question : 'If I have 10 millions dollors to buy your girlfriend(boyfriend).Will you sell her(him) to me?',
            answer1 : 'A. never!',
            answer2 : 'B. Sure,why not!?',
            answer3 : 'C. I want to see the money first!',
        },
        {
            question : 'As you see,here is a broken bridge and its broken part.How can I fix it?',
            answer1 : 'A. rotate the broken part',
            answer2 : 'B. scale the broken part',
            answer3 : 'C. move the broken part to the right place',
        },
        {
            question : 'Now as you see, here are three cups.Each cup has a little ball in it.'+ '<br/>' +'Could you tell me which one has the red ball?',
            answer1 : 'A. the first',
            answer2 : 'B. the second',
            answer3 : 'C. the third',
        }
    ]
};


/* GET home page. */
router.get('/data', function(req, res, next) {
    // next();
    res.json(data);
  // $.ajax({
  //     url: '/path/to/file',
  //     type: 'get',
  //     dataType: 'json',
  //     data: {param1: 'value1'}
  // })
  // .done(function() {
  //     console.log("success");
  // })
  // .fail(function() {
  //     console.log("error");
  // })
  // .always(function() {
  //     console.log("complete");
  // });

});

module.exports = router;
