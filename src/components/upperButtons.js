import {OverlayTrigger,Popover} from 'react-bootstrap'
import React,{useState} from 'react'
import Chat from './chat'
import Connect from './connect'
import './css/upperButtons.css'
import Participants from './participants'


export default function UpperButtons(props) {

    const [connect,setConnect]=useState(false)
    const [show,setShow]=useState(false)

    return (
        <div>
            <div className={props.theme?"dark-upper-outer":"upper-outer"}>
               <OverlayTrigger
                placement="left"
                overlay={<Popover id="popover-basic"><Popover.Title as="h3">Chat</Popover.Title></Popover>}>
                    <button onClick={()=>{props.setChat(!props.chat);setConnect(false)}} className="toggle-chat">
                    <i class="fas fa-comment-dots"></i>
                    </button>
                </OverlayTrigger>
            
                <Chat name={props.name} className="chat"theme={props.theme} chat={props.chat} 
                    socketInstance={props.socketInstance} 
                    exitChat={()=>props.setChat(!props.chat)}/>

                <OverlayTrigger
                placement="left"
                overlay={<Popover id="popover-basic"><Popover.Title as="h3">theme</Popover.Title></Popover>}>
                    <button className="theme-display">
                        {
                            props.theme
                            ?
                            <i className="fas fa-cloud-moon"></i>
                            :
                            <i className="fas fa-cloud-sun"></i>
                        }
                    </button>
                </OverlayTrigger>

                {
                    connect
                    ?
                    <Connect toggleConnect={()=>setConnect(!connect)} connect={connect}/>
                    :
                    null
                }
                
                <OverlayTrigger
                placement="left"
                overlay={<Popover id="popover-basic"><Popover.Title as="h3">Invite</Popover.Title></Popover>}>
                    <button className="connect-out-button" onClick={()=>setConnect(!connect)}>
                         <i className="fas fa-share-alt"></i>
                    </button>
                </OverlayTrigger>
                {
                    show
                    ?<Participants setNewRaise={props.setNewRaise}
                    setLowerHand={props.setLowerHand} newRaise={props.newRaise} lowerHand={props.lowerHand}></Participants>
                    :
                    null
                }
                <OverlayTrigger
                placement="left"
                overlay={<Popover id="popover-basic"><Popover.Title as="h3">Participants</Popover.Title></Popover>}>
                    <button className="participants-button" onClick={()=>setShow(!show)}>
                        <i class="fas fa-users"></i>
                    </button>
                </OverlayTrigger>
            </div> 
        </div> 
    )
} 
