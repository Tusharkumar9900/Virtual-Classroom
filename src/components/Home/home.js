import React,{useCallback} from 'react'
import {useHistory,Link} from 'react-router-dom'
import './home.css'
import question2 from '../img/question2.svg'


import {createRoomAPI} from '../api'
export default function Home({currentUserId,setTheme,theme}) {
    //console.log(props)
    const history=useHistory()
    
    const createRoom=useCallback(async()=>{
        
        try
        {
            const roomInformation=await createRoomAPI(currentUserId)
            history.push(`/rooms/${roomInformation.roomId}`)
        }
        catch(err)
        {
            console.log(err)
        }

    },[currentUserId])

    const join=()=>{
      const x=document.getElementById('join')
      console.log(x.value)
      if(x.value)
      {
        history.push(`/rooms/${x.value}`)
      }
      else
      {
        alert('Enter Meeting Id')
      }
    }

    return (
        <div>
             <div className={theme?"container-outside":"container-1"}>
                  <div className={theme?"dark-circle":"circle"}></div>
                  <div className={theme?"dark-landing":"columns-landing"}>
                      <div className={theme?"landing-1":"columns-landing-1"}>
                          <button className="theme-change" onClick={setTheme}>
                            {theme?<i className="fas fa-cloud-moon"></i>:<i className="fas fa-cloud-sun"></i>}
                          </button>
                          <div className="shift">
                              <div className={theme?"dark-text-head":"text-head"}>
                                <img className="logo" alt="ms-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png"></img>
                                Virtual<span className={theme?"dark-change-color":"change-color"}> Class</span>
                              </div>
                              <div className={theme?"dark-text-head":"text-head"}>
                                Join <span className={theme?"dark-change-color":"change-color"}>Class Room</span>
                              </div>
                              <button onClick={()=>{
                                  history.push('/chat')
                              }} 
                              className={theme?"dark-join-button":"join-button"}>Your Rooms</button>
                              <button onClick={createRoom} className={theme?"dark-join-button":"join-button"}>Instant Meet</button>
                              
                              <div>
                                <input className="join" type="text" id="join" placeholder="Enter Meeting Id"></input>
                                <button onClick={join} className={theme?"dark-join-button":"join-button"}>Join Meeting</button>
                              </div>
                              <div className={theme?"dark-style":"style"}>
                                <div>Connect with your Teacher Easily</div>
                                <div>Join the Class room and Start Learning Today!</div>
                                <div>Screen Sharing , Audio Call are also available.</div>
                                <div>FeedBack And Evaluation</div>
                              </div>
                          </div>
                      </div>
                      <div className={theme?"landing-2":"columns-landing-2"}> 
                        <div>
                          <Link to="/features" className={theme?"dark-login":"login-from-landing"}>Features</Link>
                          <a href="#about"  className={theme?"dark-login":"login-from-landing"}>About</a>
                          <a href="#contact" className={theme?"dark-register":"register-from-landing"}>Contact</a>
                        </div>
                        <div className={theme?"dark-image1-out":"image1-out"}>
                          <div className={theme?"dark-image1-head":"image1-head"}>Create a room and stay connected</div>
                          <img className="image1" src="https://miro.medium.com/max/3200/1*U0xqOjpBt-Xxkz3i5xbs_w.png"></img>
                        </div>
                      </div>
              </div>

              <div className={theme?"dark-connect-landing":"connect-landing"}>
                  <div className={theme?"dark-connect-landing-outer":"connect-landing-outer"}>
                      <img src="https://pronto-core-cdn.prontomarketing.com/2/wp-content/uploads/sites/225/2020/03/image-microsoft-teams.jpg"></img>
                      <div className={theme?"dark-connect-main":"connect-main"}>
                        <div className={theme?"dark-connect-head-in":"connect-head-in"}>Stay Connected</div>
                      <div className={theme?"dark-connect-main-text":"connect-main-text"}>
                      In this virtual classroom, we aim to foster a sense of community and collaboration among our students, instructors, and staff, even in the digital space. We believe that staying connected is vital for a thriving learning environment. Here, you can engage in discussions, share insights, and collaborate on projects with your peers. Our virtual classroom offers various channels for communication, including discussion boards, chat rooms, and video conferencing, allowing you to connect with fellow learners and educators effortlessly. Whether you have questions about course materials, want to brainstorm ideas, or simply wish to connect with like-minded individuals, this is the place to be. Let's stay connected, support each other, and create meaningful learning experiences together!
                     </div>
                      </div>
                  </div>
              </div>

              <div className={theme?"dark-about-landning":"about-landing"} id="about">
                <div className={theme?"dark-about-outer":"about-outer"}>
                    <div className="set-about">
                      <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png"></img>
                      <div className={theme?"dark-about-head":"about-head"}>About Us</div>
                      
                    </div>
                    <div className={theme?"dark-about-main":"about-main"}>
                      <span>We believe in what people make possible.</span><br></br><br/><br/>
                      Our mission is to empower every person and every organization on the planet to achieve more.<br></br>
                      Microsoft Teams offers a wide range of features including video calling , text chatting , screen sharing etc.
                    </div>
                </div>
              </div>


              <div className={theme?"dark-contact-landing":"contact-landing"} id="contact">
                  <div className="contact-up">
                    <img src={question2}></img>
                    <div className="contact-text">
                      <div className={theme?"dark-contact-text-head":"contact-text-head"}>Email Us</div>
                      <div className={theme?"dark-contact-text-main":"contact-text-main"}>Write mail if u have any queries.</div>
                      <div className={theme?"dark-contact-email":"contact-email"}>tusharkumar3432@gmail.com</div>
                    </div>
                  </div>
              </div>
              
              <div className={theme?"dark-landing-footer":"landing-footer"}>
                  <div className={theme?"dark-footer-outer":"footer-outer"}>
                    Developed By Tushar Kumar @CDAC
                  </div>
                </div>
              </div>
        </div>
    )
}
