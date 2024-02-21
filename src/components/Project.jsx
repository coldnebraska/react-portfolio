import './Project.css'

export default function Project() {
    const projects = [
        {
            sourceCode: 'https://github.com/coldnebraska/brushstrokes',
            liveApp: 'https://brushconsult.com',
            image: './images/brushstrokes.png'
        },
        {
            sourceCode: 'https://github.com/coldnebraska/gig-of-bands',
            liveApp: 'https://gig-of-bandz-25bf9a236ebe.herokuapp.com',
            image: './images/gig-for-bands.png'
        },
        {
            sourceCode: 'https://github.com/coldnebraska/travel-planner',
            liveApp: 'https://coldnebraska.github.io/travel-planner/',
            image: './images/travel-planner.png'
        },
        {
            sourceCode: 'https://github.com/coldnebraska/weather-dashboard',
            liveApp: 'https://coldnebraska.github.io/weather-dashboard/',
            image: './images/weather.png'
        },
        {
            sourceCode: 'https://github.com/coldnebraska/code-quiz',
            liveApp: 'https://coldnebraska.github.io/code-quiz/',
            image: './images/code-quiz.png'
        },
        {
            sourceCode: 'https://github.com/coldnebraska/css-test-page',
            liveApp: 'https://coldnebraska.github.io/css-test-page/',
            image: './images/horiseon.png'
        },
    ]

    return (
        <ul>
            <li>
                <h1>BrushStrokes</h1>
                <img src={projects[0].image}></img>
                <div className='links'>
                    <a href={projects[0].liveApp}>Live Application</a>
                    <a href={projects[0].sourceCode}>Source Code</a>
                </div>
            </li>
            <li>
                <h1>Gigs for Bands</h1>
                <img src={projects[1].image}></img>
                <div className='links'>
                    <a href={projects[1].liveApp}>Live Application</a>
                    <a href={projects[1].sourceCode}>Source Code</a>
                </div>
            </li>
            <li>
                <h1>Travel Planner</h1>
                <img src={projects[2].image}></img>
                <div className='links'>
                    <a href={projects[2].liveApp}>Live Application</a>
                    <a href={projects[2].sourceCode}>Source Code</a>
                </div>
            </li>
            <li>
                <h1>Weather Dashboard</h1>
                <img src={projects[3].image}></img>
                <div className='links'>
                    <a href={projects[3].liveApp}>Live Application</a>
                    <a href={projects[3].sourceCode}>Source Code</a>
                </div>
            </li>
            <li>
                <h1>Code Quiz</h1>
                <img src={projects[4].image}></img>
                <div className='links'>
                    <a href={projects[4].liveApp}>Live Application</a>
                    <a href={projects[4].sourceCode}>Source Code</a>
                </div>
            </li>
            <li>
                <h1>Horiseon</h1>
                <img src={projects[5].image}></img>
                <div className='links'>
                    <a href={projects[5].liveApp}>Live Application</a>
                    <a href={projects[5].sourceCode}>Source Code</a>
                </div>
            </li>
        </ul>
    )
}
