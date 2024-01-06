import React, { useEffect, useRef, useState } from 'react';
import Styles from './Chat.module.css'
import vinu from '../../assests/images/vinishiya.jpeg'
import koki from '../../assests/images/kokila.jpg';
import sai from "../../assests/images/sai.jpeg";
import varsha from "../../assests/images/varsha.jpeg";
import hello from '../../assests/images/hello.gif';
import chat from '../../assests/images/chat.gif';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
function Chat(){
  const initialConversations = [
    {
      id: 0,
      title: 'Sophia',
      img: vinu,
      messages: [
        { text: 'Hi Sophia, how are you?', sender: 'user' },
        { text: 'I am doing well, thanks!', sender: 'other' },
        { text: 'What have you been up to?', sender: 'user' },
        { text: 'Just working on some projects.', sender: 'other' },
      ],
    },
    {
      id: 1,
      title: 'Emily',
      img: koki,
      messages: [
        { text: "Hey Emily, how's it going?", sender: 'user' },
        { text: "Hello! I'm good, thanks for asking.", sender: 'other' },
        { text: 'Any plans for the weekend?', sender: 'user' },
        { text: 'Not sure yet, maybe just relax.', sender: 'other' },
      ],
    },
    {
      id: 2,
      title: 'Lily',
      img: varsha,
      messages: [
        { text: "Hi Lily, how's your day been?", sender: 'user' },
        { text: "Hi! It's been a busy day.", sender: 'other' },
        { text: 'Anything interesting happening?', sender: 'user' },
        { text: 'Not much, just the usual.', sender: 'other' },
      ],
    },
    {
      id: 3,
      title: 'Benjamin',
      img: sai,
      messages: [
        { text: "Hello Benjamin, what's new?", sender: 'user' },
        { text: 'Not much, just work and more work.', sender: 'other' },
        { text: 'Need a break?', sender: 'user' },
        { text: 'Definitely! Vacation time soon!', sender: 'other' },
      ],
    }
  ];

  const [conversations, setConversations] = useState(initialConversations);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  // A ref to the messages container for scrolling
  const messagesContainerRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleConversationClick = (conversationId) => {
    setSelectedConversation(conversationId);
    const conversation = conversations.find(conv => conv.id === conversationId);
    setMessages(conversation.messages);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const newMessage = { text: message, sender: 'user' };
      const updatedConversations = [...conversations];
      const conversationIndex = updatedConversations.findIndex(conv => conv.id === selectedConversation);

      // Add user message
      updatedConversations[conversationIndex].messages.push(newMessage);

      // Simulate a reply after a delay
      setTimeout(() => {
        var replyMessage = "";
        if (message === "hi"){
          replyMessage = { text: 'hi, Varsha', sender: 'other' };
        }
        else if (message === "how are you"){
          replyMessage = { text: 'i am good, how about you?', sender: 'other' };
        }
        else if (message === "have you completed?"){
          replyMessage = { text: 'not yet... Still some works to do', sender: 'other' };
        }
        else if (message === "which place?"){
          replyMessage = { text: 'Moonaar', sender: 'other' };
        }
        else{
          replyMessage = { text: 'Paden?', sender: 'other' };
        }
        updatedConversations[conversationIndex].messages.push(replyMessage);
        setConversations(updatedConversations);
        setMessages([...messages, newMessage, replyMessage]);
        setMessage('');
        scrollToBottom();
      }, 1000);
    }
  };
  const[floating,setFloating]=useState(false);
  return (
    <div className={Styles.app}>
      <div className={Styles.conversation}>
        <h2>Conversations</h2>
        <ul className={Styles.friendlist}>
          {conversations.map((conversation) => (
            <p
              key={conversation.id}
              onClick={() => handleConversationClick(conversation.id)}
              className={Styles.paraa}
            >
              <img className={Styles.profile} src={conversation.img} alt={conversation.title} />
              <p>{conversation.title}</p>
            </p>
          ))}
        </ul>
      </div>
      {
        floating && 
      <div className={Styles.hiddenconversation}>
        <h2>Conversations</h2>
        <ul className={Styles.friendlist}>
          {conversations.map((conversation) => (
            <p
              key={conversation.id}
              onClick={() => {handleConversationClick(conversation.id);setFloating(!floating)}}
              className={Styles.paraa}
            >
              <img className={Styles.profile} src={conversation.img} alt={conversation.title} />
              <p>{conversation.title}</p>
            </p>
          ))}
        </ul>
      </div>}
      <div className={Styles.messages}>
        <PeopleOutlineIcon className={Styles.gang} onClick={()=>setFloating(!floating)}/>
        {selectedConversation !== null ? (
          <>
            <div className={Styles.msgheader}>
              <img className={Styles.msgheaderimg} src={initialConversations[selectedConversation].img} alt={initialConversations[selectedConversation].title} />
              <p className={Styles.msgheaderuser}>{initialConversations[selectedConversation].title}</p>
            </div>
            <div className={Styles.msgmaincontainer} ref={messagesContainerRef}>
              <div className={Styles.msgcontainer}>
                {messages.map((message, index) => (
                  <div
                  key={index}
                  className={`${Styles.messages} ${message.sender === 'user' ? Styles.user : Styles.friend}`}
                >
                  <p className={Styles.chat}>{message.text}</p>
                </div>
                ))}
              </div>
              <div className={Styles.msginput}>
              <div className={Styles.inputContainer}>
                {message && (
                  <div className={Styles.gifWrapper}>
                    <img src={hello} alt="Small GIF" className={Styles.gifImage} />
                  </div>
                )}
              
                <input
                  className={Styles.inputfield}
                  type="text"
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={handleSendMessage} className={Styles.send}>Send</button>
              </div>
            </div></div>
          </>
        ) : (<>
          <img src={chat} className={Styles.coverimg}/>
          <p className={Styles.caption}>Select a conversation to view </p></>
        )}
      </div>
    </div>
  );
};

export default Chat;