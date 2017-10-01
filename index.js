const request = require('request'); //to be able to get data from websites
const S = require('string');    //to manipulate the source code of the requested websites
const prompt = require('prompt');   //to ask the user for what they want to search

var title, info, error, link, titleJSON, result;    //set up variables


console.log("Search for something on Stackoverflow");

prompt.start();
prompt.get(['title'], function (err, result) {
    title = result.title;   //get the user input
    console.log("\n");

    var url = 'https://api.stackexchange.com/2.2/search?order=desc&sort=relevance&intitle=' + title + '&site=stackoverflow';
        
    //get request from stack overflow api to get search results based on a title        
    request({
        url: url,
        gzip: true
    },  function (error, response, body) {
        info = JSON.parse(body);  //get the JSON of results

        try {
            info["items"][0].link; 
        }
        catch(err) {
            error = err;
        }
        finally {
            if (error) {    //if an error was found
                console.log("No results found");
            }
            else {  //if no error was found
                link = info["items"][0].link; //get the link of the question similar to that of what the user might ask
                titleJSON = info["items"][0].title; //get the title

                //get the info from the stackoverflow site that has the question in it  
                request({
                    url: link,
                    gzip: true
                }, function (error, response, body) {
                    //manipulate string to just get the text of the answer
                    result = S(body).between('<td class="answercell">', '</div>').s;
                    result = S(result).stripTags().s;

                    //print out answer
                    console.log("Answer: ", result);
                });

            //ouptut the title and link
            console.log("Title: ", titleJSON, "\n");
            console.log("Link: ", link, "\n");
        }
    }
});
})