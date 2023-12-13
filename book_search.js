/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    //search is case sensitive

    //results is list of "ISBN", "Page", and "Line"
    var foundbooks = ""
    
    //always return at least the searchTerm, "Results": [] also seems mandatory, but can be empty
    var result = {
        "SearchTerm": searchTerm,
        "Results": []
    };
    if (searchTerm.length==0){ //check if the search term is empty
        return result //return if the search term is empty
    }
    if ((scannedTextObj).length>0){
        //the list of books is not empty
        //console.log(scannedTextObj)
        for (let i = 0; i< scannedTextObj.length; i++){ //check each book object
            //console.log(scannedTextObj[i])
            let book = scannedTextObj[i]
            if ((book.Content).length>0){//book has scanned Content
                //console.log(book.Content)
                for (let a= 0; a <book.Content.length; a++){//check each scanned Content
                    let scan = book.Content[a];
                    //console.log(scan)
                    if ((scan.Text).indexOf(searchTerm)>-1){ //the search term exists in the Text
                        //console.log("found a match")
                        var found = {
                            "ISBN": book.ISBN,
                            "Page": scan.Page,
                            "Line": scan.Line
                        };
                        //console.log(found)
                        result.Results = result.Results.concat(found)
                    }
                }
            }
        }
    }   
    //list of books is empty
    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]

/** Example input object. */
const twentyLeaguesIn2 = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } ,
            {
                "Page": 32,
                "Line": 15,
                "Text": "but the present feeling draped all over me."
            }
        ] 
    }
]

const twentyLeaguesIn3 = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "BEFORE THE EVENING SUN CAME UP, THERE WAS LIGHT"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "AND THEN THE TIDES RUSHED IN AND ALL WAS DARK."
            }
        ] 
    }
]

const twentyLeaguesIn4 = [
    {
        "Title": "The Roses Beyond the Gate",
        "ISBN": "9230008428512",
        "Content": [
            {
                "Page": 4,
                "Line": 9,
                "Text": "This was not an every day occurence. The thorns"
            },
            {
                "Page": 9,
                "Line": 2,
                "Text": "everyday with you and there is not any new"
            }
        ] 
    }
]

const twentyLeaguesIn5 = [
    {
        "Title": "The Roses Beyond the Gate",
        "ISBN": "9230008428512",
        "Content": [
            {
                "Page": 9,
                "Line": 2,
                "Text": "everyday with you and there is not any new"
            },
            {
                "Page": 4,
                "Line": 9,
                "Text": "This was not an every day occurence. The thorns"
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/** Example output object */
const twentyLeaguesOut2 = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {
            "ISBN": "9780000528531",
            "Page": 32,
            "Line": 15
        }
    ]
}

/** Example output object */
const twentyLeaguesOut3 = {
    "SearchTerm": "the",
    "Results": [
    ]
}

/** Example output object for "on by" */
const twentyLeaguesOut4 = {
    "SearchTerm": "on by",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
}

/** Example output object */
const twentyLeaguesOut5 = {
    "SearchTerm": "every-day",
    "Results": [
    ]
}

/** Example output object */
const twentyLeaguesOut6 = {
    "SearchTerm": "everyday",
    "Results": [
        {
            "ISBN": "9230008428512",
            "Page": 9,
            "Line": 2
        }
    ]
}

/** Example output object for "." */
const twentyLeaguesOut7 = {
    "SearchTerm": ".",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
}

/** Example output object for a blank search term */
const twentyLeaguesOut8 = {
    "SearchTerm": "",
    "Results": [
    ]
}

/** Example output object for a search term of a space*/
const twentyLeaguesOut9 = {
    "SearchTerm": " ",
    "Results": [
        {
            "ISBN": "9230008428512",
            "Page": 4,
            "Line": 9
        },
        {
            "ISBN": "9230008428512",
            "Page": 9,
            "Line": 2
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

/*
At the least, you should write three kinds of tests:
○ Positive tests: tests that return a match.
○ Negative tests: tests that do not return any matches.
○ Case-sensitive tests: tests that match (for example) on “The” but not on “the”.
*/

/* Return the correct number given two */
const test3result = findSearchTermInBooks("the", twentyLeaguesIn2); 
if (JSON.stringify(twentyLeaguesOut2) === JSON.stringify(test3result)) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", twentyLeaguesOut2);
    console.log("Received:", test3result);
}


/*Check that there are no results when the input is capitalized because it is case-sensitive*/
const test4result = findSearchTermInBooks("the", (twentyLeaguesIn3)); 
if (test4result.Results.length == 0) {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", twentyLeaguesOut3.Results.length);
    console.log("Received:", test4result.Results.length);
}

/** We can check that it works regarding phrases */
const test5result = findSearchTermInBooks("on by", twentyLeaguesIn); 
if (JSON.stringify(twentyLeaguesOut4) === JSON.stringify(test5result)) {
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected:", twentyLeaguesOut4);
    console.log("Received:", test5result);
}

/** We can check for more case-sensitivity regarding punctuation - two false cases*/
const test6result = findSearchTermInBooks("every-day", twentyLeaguesIn4);
if (JSON.stringify(twentyLeaguesOut5) === JSON.stringify(test6result)) {
    console.log("PASS: Test 6");
} else {
    console.log("FAIL: Test 6");
    console.log("Expected:", twentyLeaguesOut5);
    console.log("Received:", test6result);
}

/** We can check for more case-sensitivity regarding punctuation - only one match*/
const test7result = findSearchTermInBooks("everyday", twentyLeaguesIn4);
if (JSON.stringify(twentyLeaguesOut6) === JSON.stringify(test7result)) {
    console.log("PASS: Test 7");
} else {
    console.log("FAIL: Test 7");
    console.log("Expected:", twentyLeaguesOut6);
    console.log("Received:", test7result);
}

/** We can check that it works when the scanned content is out of order */
const test8result = findSearchTermInBooks("everyday", twentyLeaguesIn5);
if (JSON.stringify(twentyLeaguesOut6) === JSON.stringify(test8result)) {
    console.log("PASS: Test 8");
} else {
    console.log("FAIL: Test 8");
    console.log("Expected:", twentyLeaguesOut6);
    console.log("Received:", test8result);
}

/** We can check if it works when we search for punctuation*/
const test9result = findSearchTermInBooks(".", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut7) === JSON.stringify(test9result)) {
    console.log("PASS: Test 9");
} else {
    console.log("FAIL: Test 9");
    console.log("Expected:", twentyLeaguesOut7);
    console.log("Received:", test9result);
}

/** We could choose to check that we get the right number of results when there is no search term. */
const test10result = findSearchTermInBooks("", twentyLeaguesIn); 
if (test10result.Results.length == 0) {
    console.log("PASS: Test 10");
} else {
    console.log("FAIL: Test 10");
    console.log("Expected:", twentyLeaguesOut8.Results.length);
    console.log("Received:", test10result.Results.length);
}

/** We could choose to check that we get the right number of results when the search term is a space. */
const test11result = findSearchTermInBooks(" ", twentyLeaguesIn4); 
if (test11result.Results.length == 2) {
    console.log("PASS: Test 11");
} else {
    console.log("FAIL: Test 11");
    console.log("Expected:", twentyLeaguesOut9.Results.length);
    console.log("Received:", test11result.Results.length);
}