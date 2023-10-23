import React from 'react';

export function Contact(){
    return(
        <div className='contact section dm-shade-1'>
            <p className='section-title'>Get In Touch</p>
            <p className='reach-out'>What's next? Feel free to reach out 
                to me if you're looking for a developer, 
                have a question, or simply want to connect!
            </p>
            <div className='spacer'>
                <div className='centered'>
                    <img src="/mail.png" alt="Email Icon" className='small' />
                    <p className='contact-info'>Hammonthomas@gmail.com</p>
                    <img src="/copy-paste.png" alt="Copy/Paste Icon" className='small' />
                </div>
                <div className='centered'>
                    <img src="/phone.png" alt="Phone Icon" className='small'/>
                    <p className='contact-info'>(417) 955-1731</p>
                    <img src="/copy-paste.png" alt="Copy/Paste Icon" className='small' />
                </div>
            </div>
            <div>
                <p className='reach-out'>You may also find me on these platforms!</p>
                <div className='together'>
                    <a target="_blank" href='https://github.com/Motter360' rel="noopener noreferrer">
                        <img className="github medium" src="/github-icon-dm.png" alt="github logo and link" />
                    </a>
                    <a target="_blank" href='https://www.linkedin.com/in/thomas-hammon-063366290' rel="noopener noreferrer">
                        <img className="linkedin small"src="/linkedin-icon-dm.png" alt="linked in logo and link" />
                    </a>
                </div>    
            </div>
        </div>
    )
}

export default Contact;