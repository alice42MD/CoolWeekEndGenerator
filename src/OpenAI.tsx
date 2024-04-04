import React, { useState } from "react"

function Clear({ onClick }: { onClick: any }) {
  return <button onClick={onClick}>Clear</button>
}
function History({ question, onClick }: { question: any; onClick: any }) {
  return (
    <div onClick={onClick}>
      <p>{question.substring(0, 15)}...</p>
    </div>
  )
}
function Input({ value, onChange, onClick }: { value: any; onChange: any; onClick: any }) {
  return (
    <div>
      <input placeholder="Your prompt here..." value={value} onChange={onChange} />
      <button onClick={onClick}>Go</button>
    </div>
  )
}
function Message({ role, content }: { role: any; content: any }) {
  return (
    <div>
      <div>
        <img src={role === "assistant" ? "bot" : "user"} alt="profile avatar" />
      </div>
      <div>
        <p>{content}</p>
      </div>
    </div>
  )
}

const ChatGPT = () => {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<any[]>([])
  const [history, setHistory] = useState<any[]>([])

  const handleSubmit = async () => {
    const prompt = {
      role: "user",
      content: input
    }

    setMessages([...messages, prompt])

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_OPEN_AI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [...messages, prompt]
      })
    })
      .then(data => data.json())
      .then(data => {
        const res = data.choices[0].message.content
        setMessages(messages => [
          ...messages,
          {
            role: "assistant",
            content: res
          }
        ])
        setHistory(history => [...history, { question: input, answer: res }])
        setInput("")
      })
  }

  const clear = () => {
    setMessages([])
    setHistory([])
  }
  return (
    <div className="App">
      <div className="Column">
        <h3 className="Title">Chat Messages</h3>
        <div className="Content">
          {messages.map((el, i) => {
            return <Message key={i} role={el.role} content={el.content} />
          })}
        </div>
        <Input
          value={input}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) => setInput(e.target.value)}
          onClick={input ? handleSubmit : undefined}
        />
      </div>
      <div className="Column">
        <h3 className="Title">History</h3>
        <div className="Content">
          {history.map((el, i) => {
            return (
              <History
                key={i}
                question={el.question}
                onClick={() =>
                  setMessages([
                    { role: "user", content: history[i].question },
                    { role: "assistant", content: history[i].answer }
                  ])
                }
              />
            )
          })}
        </div>
        <Clear onClick={clear} />
      </div>
    </div>
  )
}

export default ChatGPT
