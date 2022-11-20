const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')



let apiQuotes = [];

// show loading
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// hide loading
function complete(){
    quoteContainer.hidden=false;
    loader.hidden = true;
}


function newQuote(){
    loading();
    // Pick a random quote from apiQuotes Array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    // To check if Author field is blank and replace it as unknown

    if(!quote.author){
        authorText.textContent = 'Unknown'
    }else{
        authorText.textContent = quote.author;
    }

    // Check long quote length to determine the styling

    if(quote.text.length > 120 ){
        quoteText.classList.add('long-quote')
    }else{
        quoteText.classList.remove('long-quote')
    }


    //set Qoute, hide loader

    quoteText.textContent = quote.text;
    complete();
}

// Get Quotes from API
async function getQuotes(){
    const apiUrl='https://type.fit/api/quotes'
    try{

        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();

    }catch(error){
        // Catch Error here
    }
}

// Tweet Quote

function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank')
}

//Event listener

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click',tweetQuote);

// on load
getQuotes();
