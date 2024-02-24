const btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes = [{
        quote: "The only way to do great work is to love what you do.",
        person: "Steve Jobs"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        person: "Winston Churchill"
    },
    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        person: "Abraham Lincoln"
    },
    {
        quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
        person: "Dr. Seuss"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        person: "Franklin D. Roosevelt"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        person: "John Lennon"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        person: "Nelson Mandela"
    },
    {
        quote: "Believe you can and you're halfway there.",
        person: "Theodore Roosevelt"
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        person: "Aristotle"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        person: "Eleanor Roosevelt"
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        person: "Albert Einstein"
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        person: "Wayne Gretzky"
    },
    {
        quote: "The best way to predict the future is to create it.",
        person: "Peter Drucker"
    },
    {
        quote: "In the middle of difficulty lies opportunity.",
        person: "Albert Einstein"
    },
    {
        quote: "It always seems impossible until it is done.",
        person: "Nelson Mandela"
    }
];

btn.addEventListener('click', function(){
  let random   = Math.floor(Math.random()*quotes.length);

quote.innerText = quotes[random].quote;
person.innerText = quotes[random].person;
})