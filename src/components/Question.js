import React, { useState, useEffect, useRef } from'react';

const Question = ({questions, audio, play}) => {

  return (

    <div>
      {
        questions.map((question, index) => {

          return <Waiting key={ index } question={question} audio={ audio } play={ play } />

        })
      }
    </div>

  )

}

const Waiting = ({question, audio, play}) => {

  const messageRef = useRef(null);

  const [waiting, setWaiting] = useState(1);

  useEffect(() => {

    setTimeout(() => {

      setWaiting((0));

      messageRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })

    }, question.wait)

  }, [waiting])

  return (
    <div ref={messageRef}> 
      {
        waiting === 1 ? 

          ''

        : 
          <Typing question={ question } audio={ audio } play={ play } />
      }
    </div>
  )
}

const Typing = ({ question, play, audio }) => {

  const [typing, setTyping] = useState(1);

  useEffect(() => {

    setTimeout(() => {

      setTyping(0);

      if (play) {

        audio.play();

      }

    }, question.delay)

  }, [typing])

  return (

    <div>
      {
        typing === 1 ?

          <div className="chat-bubble p-4 bg-gray-200 rounded-md mt-2 ml-3">
            <div className="typing p-4  flex">
              <div className="dot bg-gray-500 h-[10px] w-[10px] rounded-full ml-0"></div>
              <div className="dot bg-gray-500 h-[10px] w-[10px] rounded-full ml-4"></div>
              <div className="dot bg-gray-500 h-[10px] w-[10px] rounded-full ml-4 mr-4"></div>
            </div>
          </div>

        :

        <div className="w-5/6">
          <p className="mt-2 ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadow-sm w-fit">
            { question.text }
          </p>
        </div>
      }
    </div>

  )

};

export default Question