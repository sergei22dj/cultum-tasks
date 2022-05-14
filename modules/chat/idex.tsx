import * as React from 'react';
import { DialogsBar } from './dialogs-bar';
import { characters } from './mock';
// views
import { ChatWrapper, DialogContentWrapper, DialogImage, DialogInput, DialogMessage, DialogSendTime, DialogWrapperConsumer, DialogWrapperSender, InputBar, MessageWrapper, SelectBar, SendButton } from './views';

const Chat = () => {
    
    const [message, setMessage] = React.useState('');
    const [messages, setMessages] = React.useState([])
    const [reverse, setReverse] = React.useState(false)


    console.log(characters)
    const checkTime = (i) => {
        {
            if (i<10)
            {
            i="0" + i;
            }
            return i;
            }
    }

    let time = new Date()
   let sendTime = (checkTime(time.getHours()) + ':' + checkTime(time.getMinutes()) + ':' + checkTime(time.getSeconds()))
   
   
   let newMessage = {
    messageText: message,
    photo: '/static/images/zitz.jpg',
    time: sendTime,
    state: true
}

   
    const sendMessage = () => {
        if(reverse) {
            newMessage
            setMessages(prev => [...prev, newMessage])
            setMessage('')
        }else{
            newMessage
            setMessages(prev => [...prev, newMessage = {messageText: message, 
                                                        photo: '/static/images/rush.jpg',
                                                         time: sendTime, 
                                                         state: false} ])
            setMessage('')
        }
    }

    console.log("массив messages: " , messages)
    console.log("состояние reverse: " , reverse)

 
    const reverseSender = () => {
        
        return reverse ? setReverse(false) : setReverse(true)
        
    }
    const MessageItem = () => {
        return(<>
        {messages.map(m => (
            <>
            {(reverse) ? 

            (m.state) ? 
            <DialogWrapperConsumer>
            <DialogImage src={m.photo} />
            <MessageWrapper>
                <DialogMessage>{m.messageText}</DialogMessage>
                <DialogSendTime>{m.time}</DialogSendTime>
            </MessageWrapper>
          </DialogWrapperConsumer> 
              : 
              <DialogWrapperSender>
                        <DialogImage src={m.photo} />
                      <MessageWrapper>
                      <DialogMessage>{m.messageText}</DialogMessage>   
                          <DialogSendTime>{m.time}</DialogSendTime>
                      </MessageWrapper>
              </DialogWrapperSender>              
              : 
              (m.state) ? 
              <DialogWrapperSender>
                      <DialogImage src={m.photo} />
                    <MessageWrapper>
                    <DialogMessage>{m.messageText}</DialogMessage>  
                        <DialogSendTime>{m.time}</DialogSendTime>
                    </MessageWrapper>
            </DialogWrapperSender>
               : 
               <DialogWrapperConsumer>
              <DialogImage src={m.photo} />
              <MessageWrapper>
                  <DialogMessage>{m.messageText}</DialogMessage>
                  <DialogSendTime>{m.time}</DialogSendTime>
              </MessageWrapper>
            </DialogWrapperConsumer>
               
            }   
          </>
          ))}
        </>)
            }
        
 return(
    <ChatWrapper>
        <DialogsBar />
        <DialogContentWrapper>
                <MessageItem />
        <InputBar>
        <DialogInput placeholder='Enter your message...' value={message} onChange={e => setMessage(e.target.value)} />
        <button onClick={reverseSender}>reverse</button>
        <SendButton onClick={sendMessage}>send</SendButton>
        </InputBar>
        </DialogContentWrapper>
    </ChatWrapper>
    )
}

export {Chat};

