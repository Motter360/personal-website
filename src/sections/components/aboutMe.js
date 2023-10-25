import React from 'react';

export function AboutMe(){
    return(
        <div id="about-me" className='about-me section dm-shade-2'>
            <p className='section-title'>About Me</p>
            <img className="fullbody" src="/fullbody.jpg" alt="Thomas standing infront of the Manhattan skyline"/>
            <h3>Curious about me? Here you have it:</h3>
            <div className='bio'>
                <p>I am a self taught front end web developer 
                    with a passion for problem solving and teamwork. 
                    I am looking to further expand my skills and make 
                    valuable contributions in a team oriented environment. 
                    Passion for the project, good communication, and 
                    learning opportunities are important to me. 
                </p>
                <p>I began my learning journey nearly a year and a half 
                    ago, looking for a career path that was more engaging 
                    and held better opportunities for growth. Since then, 
                    I have pursued bootcamps, community coding groups, and 
                    numerous personal projects to improve my skills. I have 
                    accomplished much in my personal time in addition to 
                    a full time job, and I believe the next step in my path
                    is an internship or similar entry level position.
                </p>
                <p>My life philosophy has always been one of personal growth 
                    and continuous improvement. I get excited at the possibility 
                    of a new challenge, and thrive on constructive criticism.
                    Between a bachelors degree in psychology, job experience 
                    ranging from construction to bartending and sales, and 
                    an intense motivation to continue learning, I bring a 
                    unique set of people and communication skills that make 
                    me an excellent addition to your team!
                </p>
                <p id='final-say'>Finally, when I'm not working or pursuing a personal project,
                    you can find me grilling for my friends or with my nose 
                    stuck in a book. I believe a good work life balance is 
                    critical to being a top performing employee, and that proper 
                    work - life boundaries benefit both employee and employer!
                </p>
            </div>
        </div>
    )
}

export default AboutMe;