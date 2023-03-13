let quote = document.querySelector(".quote");
let person = document.querySelector(".person");
let btn = document.querySelector(".btn");

const quotes = [
    {
        quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
        person: "Nelson Mandela"
    },
    {
        quote: `"The way to get started is to quit talking and begin doing"`,
        person: "Walt Disney"
    },
    {
        quote: `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."`,
        person: "Steve Jobs"
    },
    {
        quote: `"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."`,
        person: "James Cameron"
    },
    {
        quote: `"Life is what happens when you're busy making other plans."`,
        person: "John Lennon"
    },
];

btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})