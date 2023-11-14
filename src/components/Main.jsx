import React, { useState } from 'react'
import videoBg from "../assets/videoBg.mp4"
import sword from "../assets/sword2.png"

const Main = () => {

  const [quote, setQuote] = useState(
    {
      "quote": "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.",
      "author": "Martin Luther King"
    }

  )

  const quotes = [
    {
      "quote": "Be yourself; everyone else is already taken.",
      "author": "Oscar Wilde",
      "profession": "Irish poet",
      "topics": [
        "Inspirational",
        "Advice",
        "Humor"
      ]
    },
    {
      "quote": "To live is the rarest thing in the world. Most people exist, that is all.",
      "author": "Oscar Wilde",
      "profession": "Irish poet",
      "topics": [
        "Philosophy",
        "Humor"
      ]
    },
    {
      "quote": "True friends stab you in the front.",
      "author": "Oscar Wilde",
      "profession": "Irish poet",
      "topics": [
        "Philosophy",
        "People"
      ]
    },
    {
      "quote": "Women are made to be Loved, not understood.",
      "author": "Oscar Wilde",
      "profession": "Irish poet",
      "topics": [
        "Philosophy",
        "Humor"
      ]
    },
    {
      "quote": "Be the change that you wish to see in the world.",
      "author": "Mahatma Gandhi",
      "profession": "Indian leader",
      "topics": [
        "Inspirational",
        "Philosophy",
        "Advice"
      ]
    },
    {
      "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
      "author": "Mahatma Gandhi",
      "profession": "Indian leader",
      "topics": [
        "Inspirational",
        "Life",
        "Advice"
      ]
    },
    {
      "quote": "No one can make you feel inferior without your consent.",
      "author": "Eleanor Roosevelt",
      "profession": "Former First Lady of the United States",
      "topics": [
        "Wisdom"
      ]
    },
    {
      "quote": "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
      "author": "Eleanor Roosevelt",
      "profession": "Former First Lady of the United States",
      "topics": [
        "Wisdom",
        "People"
      ]
    },
    {
      "quote": "Do what you feel in your heart to be right - for you'll be criticized anyway.",
      "author": "Eleanor Roosevelt",
      "profession": "Former First Lady of the United States",
      "topics": [
        "Wisdom",
        "Advice"
      ]
    },
    {
      "quote": "Do one thing every day that scares you.",
      "author": "Eleanor Roosevelt",
      "profession": "Former First Lady of the United States",
      "topics": [
        "Wisdom",
        "Life"
      ]
    },
    {
      "quote": "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.",
      "author": "Martin Luther King",
      "profession": "American minister",
      "topics": [
        "Inspirational",
        "Wisdom",
        "Love"
      ]
    },
    {
      "quote": "Our lives begin to end the day we become silent about things that matter.",
      "author": "Martin Luther King",
      "profession": "American minister",
      "topics": [
        "Inspirational",
        "Life"
      ]
    },
    {
      "quote": "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      "author": "Martin Luther King",
      "profession": "American minister",
      "topics": [
        "People",
        "Life"
      ]
    },
    {
      "quote": "Injustice anywhere is a threat to justice everywhere.",
      "author": "Martin Luther King",
      "profession": "American minister",
      "topics": [
        "Wisdom"
      ]
    },
    {
      "quote": "The time is always right to do what is right.",
      "author": "Martin Luther King",
      "profession": "American minister",
      "topics": [
        "Inspirational",
        "Wisdom"
      ]
    },
    {
      "quote": "Life's most persistent and urgent question is, 'What are you doing for others?",
      "author": "Martin Luther King",
      "profession": "American minister",
      "topics": [
        "Inspirational",
        "Life",
        "People"
      ]
    },
    {
      "quote": "Weak people revenge. Strong people forgive. Intelligent People Ignore.",
      "author": "Albert Einstein",
      "profession": "Theoretical physicist",
      "topics": [
        "Inspirational",
        "Life"
      ]
    },
    {
      "quote": "I have not failed. I've just found 10,000 ways that won't work.",
      "author": "Thomas A. Edison",
      "profession": "American inventor",
      "topics": [
        "Inspirational"
      ]
    },
    {
      "quote": "Genius is one percent inspiration and ninety-nine percent perspiration.",
      "author": "Thomas A. Edison",
      "profession": "American inventor",
      "topics": [
        "Inspirational",
        "Wisdom"
      ]
    },
    {
      "quote": "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
      "author": "Thomas A. Edison",
      "profession": "American inventor",
      "topics": [
        "Inspirational",
        "Advice"
      ]
    },
    {
      "quote": "If we did all the things we are capable of, we would literally astound ourselves.",
      "author": "Thomas A. Edison",
      "profession": "American inventor",
      "topics": [
        "Inspirational"
      ]
    },
    {
      "quote": "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
      "author": "Albert Einstein",
      "profession": "Theoretical physicist",
      "topics": [
        "Inspirational",
        "Wisdom"
      ]
    },
    {
      "quote": "Life isn't about finding yourself. Life is about creating yourself.",
      "author": "George Bernard Shaw",
      "profession": "Irish playwright",
      "topics": [
        "Inspirational",
        "Life",
        "Advice"
      ]
    },
    {
      "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      "author": "Winston Churchill",
      "profession": "Former British Prime Minister",
      "topics": [
        "Inspirational",
        "Life",
        "Advice"
      ]
    },
    {
      "quote": "If you're going through hell, keep going.",
      "author": "Winston Churchill",
      "profession": "Former British Prime Minister",
      "topics": [
        "Inspirational",
        "Advice"
      ]
    },
    {
      "quote": "We make a living by what we get, but we make a life by what we give.",
      "author": "Winston Churchill",
      "profession": "Former British Prime Minister",
      "topics": [
        "People",
        "Life"
      ]
    },
    {
      "quote": "Peace begins with a smile.",
      "author": "Mother Teresa",
      "profession": "Roman Catholic Saint",
      "topics": [
        "Inspirational",
        "Wisdom"
      ]
    },
    {
      "quote": "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
      "author": "Mother Teresa",
      "profession": "Roman Catholic Saint",
      "topics": [
        "Inspirational",
        "Love",
        "Advice"
      ]
    },
    {
      "quote": "If you can't feed a hundred people, then feed just one.",
      "author": "Mother Teresa",
      "profession": "Roman Catholic Saint",
      "topics": [
        "Inspirational",
        "Advice",
        "People"
      ]
    },
    {
      "quote": "Kind words can be short and easy to speak, but their echoes are truly endless.",
      "author": "Mother Teresa",
      "profession": "Roman Catholic Saint",
      "topics": [
        "Inspirational",
        "People"
      ]
    },
    {
      "quote": "Isn't it nice to think that tomorrow is a new day with no mistakes in it yet?",
      "author": "L.M. Montgomery",
      "profession": "Canadian author",
      "topics": [
        "Inspirational"
      ]
    },
    {
      "quote": "Tomorrow is always fresh, with no mistakes in it.",
      "author": "L.M. Montgomery",
      "profession": "Canadian author",
      "topics": [
        "Inspirational"
      ]
    },
    {
      "quote": "We should regret our mistakes and learn from them, but never carry them forward into the future with us.",
      "author": "L.M. Montgomery",
      "profession": "Canadian author",
      "topics": [
        "Inspirational",
        "Advice",
        "Life"
      ]
    },
    {
      "quote": "It's so easy to be wicked without knowing it, isn't it?",
      "author": "L.M. Montgomery",
      "profession": "Canadian author",
      "topics": [
        "Inspirational",
        "Philosophy",
        "Life"
      ]
    },
    {
      "quote": "All the darkness in the world cannot extinguish the light of a single candle.",
      "author": "Francis of Assisi",
      "profession": "Italian Catholic Saint",
      "topics": [
        "Inspirational",
        "Wisdom"
      ]
    },
    {
      "quote": "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
      "author": "Francis of Assisi",
      "profession": "Italian Catholic Saint",
      "topics": [
        "Inspirational",
        "Wisdom"
      ]
    },
    {
      "quote": "Preach the Gospel at all times and when necessary use words.",
      "author": "Francis of Assisi",
      "profession": "Italian Catholic Saint",
      "topics": [
        "Religion",
        "Wisdom"
      ]
    },
    {
      "quote": "A single sunbeam is enough to drive away many shadows.",
      "author": "Francis of Assisi",
      "profession": "Italian Catholic Saint",
      "topics": [
        "Inspirational",
        "Wisdom"
      ]
    },
  ]

  const roandomize = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)]
    setQuote(select)
  }

  //not fully randomized, can be repedet itself
  //icon color

  return (
    <div className='w-full h-screen'>
      <video className='w-full h-full object-cover' src={videoBg} autoPlay loop muted />
      <div className='absolute top-0 left-0 w-full h-full '></div>
      <div className='absolute w-full h-full top-0 flex flex-col justify-center items-center text-white'>
        <div className='bg-stone-900 h-[210px] w-[850px] opacity-75 rounded-3xl pt-6 px-2 text-center relative '>
          <p className='h-[50px] text-3xl mb-[35px] font-cinzel'>"{quote.quote}"</p>
          <p className='text-xl  font-danc'>-{quote.author}</p>
          <div className='absolute bottom-[20px] left-[340px]'>
            <img className='h-[35px] cursor-pointer' onClick={() => { roandomize() }} src={sword} alt="icon" />

          </div>

        </div>
      </div>
    </div>

  )
}

export default Main