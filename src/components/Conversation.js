import React, { useState, useMemo } from 'react'

import Question from './Question';

import { agentImg, profile } from '../assets/images';

import { notification } from '../assets/sound';
const Conversation = ({ agent }) => {

  const question1 = [
    {
      text: 'Hi 👋',
      wait: 1000,
      delay: 1000
    },
    {
      text: `I'm ${agent} from Orla Health.`,
      wait: 2000,
      delay: 1000
    },
    {
      text: 'Want to find out if you qualify for a No Cost DNA Genetic Test Kit? Tap Yes! 😊',
      wait: 3000,
      delay: 1000
    },
    {
      text: <button onClick={() => { setAnswer1('Yes'); setPlay(true) } } className="text-white font-bold bg-blue-500 rounded-full py-3 px-6">Yes</button>,
      wait: 4000,
      delay: 1000
    },  
  ];
  
  const question2 = [
    {
      text:'Okay, let me ask you a couple questions.',
      wait: 1000,
      delay: 1000
    },
    {
      text: 'What is your age range?',
      wait: 2000,
      delay: 1000
    },
    {
      text: <button onClick={() => setAnswer2('64-70')} className="text-white font-bold bg-blue-500 rounded-full py-3 px-6">64-70</button>,
      wait: 3000,
      delay: 1000
    },
    {
      text: <button onClick={() => setAnswer2('71-84')} className="text-white font-bold bg-blue-500 rounded-full py-3 px-6">71-84</button>,
      wait: 4000,
      delay: 1000
    },
    {
      text: <button onClick={() => setAnswer2('85-100')} className="text-white font-bold bg-blue-500 rounded-full py-3 px-6">85-100</button>,
      wait: 5000,
      delay: 1000
    },
  ];
  
  const question3 = [
    {
      text: 'Are you receiving Medicare?',
      wait: 1000,
      delay: 1000
    },
    {
      text: <button onClick={() => setAnswer3('Yes')}  className="text-white font-bold bg-blue-500 rounded-full py-3 px-6">Yes</button>,
      wait: 2000,
      delay: 1000
    },
    {
      text: <button onClick={() => setAnswer3('No')}  className="text-white font-bold bg-blue-500 rounded-full py-3 px-6">No</button>,
      wait: 3000,
      delay: 1000
    },
    {
      text: <button onClick={() => setAnswer3('Unsure')}  className="text-white font-bold bg-blue-500 rounded-full py-3 px-6">Unsure</button>,
      wait: 4000,
      delay: 1000
    },
  ];
  
  const question4 = [
    {
      text: 'In addition to your medicare, do you also have a United Healthcare, Humana, Cigna, Aetna or Kaiser plan ?',
      wait: 1000,
      delay: 1000
    },
    {
      text: <button onClick={() => setAnswer4('Yes I Do')} className="text-white font-bold bg-blue-500 rounded-full py-3 px-6">Yes I Do</button>,
      wait: 2000,
      delay: 1000
    },
    {
      text: <button onClick={() => setAnswer4('No I Do Not')} className="text-white font-bold bg-blue-500 rounded-full py-3 px-6">No I Do Not</button>,
      wait: 3000,
      delay: 1000
    },
  ]
  
  const congratulation = [
    {
      text: '🎉 Congratulations! 🎁',
      wait: 1000,
      delay: 1000
    },
    {
      text: 'You are prequalified for a Medicare Assistance Plan with up to $2,000 in grocery benefits! You can use it for groceries, prescriptions, and more.',
      wait: 2000,
      delay: 1000
    },
    {
      text: 'Tap the button below to CALL NOW and secure your benefits today.',
      wait: 3000,
      delay: 1000
    },
    {
      text: <button className="text-white font-bold bg-blue-500 rounded-lg py-3 px-2">+1 888-393-0390</button>,
      wait: 4000,
      delay: 1000
    },
  ]
  
  const sorry = [
    {
      text: "🙇‍♀️ Sorry, it seems like you don't qualify for this offer 😕",
      wait: 1000,
      delay: 1000
    },
  ]
  
  const congratulation2 = [
    {
      text: '🎉 Congratulations! 🎁',
      wait: 1000,
      delay: 1000
    },
    {
      text: "You're prequalified to receive a No-Cost DNA Genetic Test Kit! Confirm your shipping info over the phone to receive your test kit.",
      wait: 2000,
      delay: 1000
    },
    {
      text: 'Tap the button below to CALL NOW and finalize your order. It only takes 2 minutes!',
      wait: 3000,
      delay: 1000
    },
    {
      text: <button className="text-white font-bold bg-blue-500 rounded-lg py-3 px-2">+1 888-965-0711</button>,
      wait: 4000,
      delay: 1000
    },
    {
      text: 'Or, schedule an appointment to speak with our representative at your earliest convenience.',
      wait: 5000,
      delay: 1000
    },
    {
      text: <a rel="noreferrer" target="_blank" className="text-white font-bold bg-blue-500 rounded-full py-3 px-6"  href="https://api.leadconnectorhq.com/widget/booking/NcPaWSOyaeqj6ygIveEN">Click Here</a>,
      wait: 5000,
      delay: 1000
    }
  ]

  const ChatClose = () => {

    return (
  
    <div className="pt-2">

      <div className="flex py-5 items-center">

          <div className="flex-grow border-t border-gray-200"></div>

          <span className="flex-shrink mx-4 text-gray-300 text-xs">Chat Closed</span>

          <div className="flex-grow border-t border-gray-200"></div>

      </div>

    </div>

    )

  }

  const audio = new Audio( notification );

  const [play, setPlay] = useState(false);

  const [Question1, setQuestion1] = useState(question1);
  const [Question2, setQuestion2] = useState(question2);
  const [Question3, setQuestion3] = useState(question3);
  const [Question4, setQuestion4] = useState(question4);

  const [Answer1, setAnswer1] = useState('');
  const [Answer2, setAnswer2] = useState('');
  const [Answer3, setAnswer3] = useState('');
  const [Answer4, setAnswer4] = useState('');

  useMemo(() => {

    if (Answer1 === 'Yes') {

      setQuestion1([
        {
          text: 'Hi 👋',
          wait: 1000,
          delay: 1000
        },
        {
          text: `I'm ${agent} from Gene Horizon.`,
          wait: 1000,
          delay: 1000
        },
        {
          text: 'Want to find out if you qualify for a No Cost DNA Genetic Test Kit? Tap Yes! 😊',
          wait: 1000,
          delay: 1000
        },
      ]);

    }

    if (Answer2 === '64-70' || Answer2 === '71-84' || Answer2 === '85-100') {

      setQuestion2([
        {
          text:'Okay, let me ask you a couple questions.',
          wait: 1000,
          delay: 1000
        },
        {
          text: 'What is your age range?',
          wait: 1000,
          delay: 1000
        },
      ])

    }

    if (Answer3 === "Yes" || Answer3 === "No" || Answer3 === "Unsure") {

      setQuestion3([
        {
          text: 'Are you receiving Medicare?',
          wait: 1000,
          delay: 1000
        },
      ])

    }

    if (Answer4 === "Yes I Do" || Answer4 === "No I Do Not") {

      setQuestion4([
        {
          text: 'In addition to your medicare, do you also have a United Healthcare, Humana, Cigna, Aetna or Kaiser plan ?',
          wait: 1000,
          delay: 1000
        },
      ])

    }

    if (play) {

      audio.play();

    }

  }, [Answer1, Answer2, Answer3, Answer4, agent, play])

  const UserProfile = ({ answer }) => {

    return (
      <div className="flex items-start justify-end mt-2">
        <div className="ml-3 bg-blue-500 text-white p-3 rounded-lg shadow-sm w-fit">{ answer }</div>
        <img src={ profile } alt="User Profile" className="w-8 h-8 rounded-full ml-3" />
      </div>
    )

  }


  const Agent = () => {

    return (

      <img alt="Agent" src={ agentImg } className="w-8 h-8 rounded-full min-w-[30px]" />

    )

  }

  return (
    
    <div className="flex">
      <div className="items-end flex agent"><Agent /></div>
      <div>
      {

      <Question questions={ Question1 } audio={ audio } play={ play } />

      }
      {
        Answer1 === "Yes" ?

        <div>

          <UserProfile answer={ Answer1 } />
          <Question questions={ Question2 }  audio={ audio } play={ play }/>

        </div>

        : ''
      }
      {
        Answer2 === "64-70" || Answer2 === "71-84" || Answer2 === "85-100"?

        <div>

          <UserProfile answer={ Answer2 } />

          <Question questions={ Question3 } audio={ audio } play={ play } />

        </div>

        : ''
      }
      {
        Answer3 === "Yes" || Answer3 === "Unsure" ?

          <div>
            <UserProfile  answer={ Answer3 } />
            <Question questions={ Question4 } audio={ audio } play={ play } />
          </div>

        : Answer3 === "No" ?

          <div>
              <UserProfile answer={ Answer3 } />
              <Question questions={ sorry } audio={ audio } play={ play } />
              <ChatClose />
          </div>

        : ''
      }
      {
        Answer4 === "Yes I Do" ?

          <div>
            <UserProfile answer={ Answer4 } />
            <Question questions={ congratulation } />
          </div>

        : Answer4 === "No I Do Not" ?

          <div>

            <UserProfile answer={ Answer4 } />
            <Question questions={ congratulation2 } audio={ audio } play={ play } />

          </div>

        : ''
      }
      </div>      
    </div>

    
  )
}

export default Conversation