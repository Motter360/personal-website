import React from 'react';

export function Contact(){
    return(
        <div className='contact section dm-shade-1'>
            <p className='section-title'>Get In Touch</p>
            <p className='reach-out'>What's next? Feel free to reach out 
                to me if you're looking for a developer, 
                have a question, or simply want to connect!
            </p>
            <div className='centered'>
                <img src="/mail.png" alt="Email Icon" className='small' />
                <p className='contact-info'>Example@example</p>
                <img src="/copy-paste.png" alt="Copy/Paste Icon" className='small' />
            </div>
            <div className='centered'>
                <img src="/phone.png" alt="Phone Icon" className='small'/>
                <p className='contact-info'>(sum)Num-ber</p>
                <img src="/copy-paste.png" alt="Copy/Paste Icon" className='small' />
            </div>
        </div>
    )
}

export default Contact;