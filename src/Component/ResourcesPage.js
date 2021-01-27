import React from 'react'
import { Divider } from 'primereact/divider'
import styled from "styled-components";

class ResourcesPage extends React.Component {

    render() {
        return (
            <Wrapper>
                <Block style={{backgroundColor: "transparent"}}>
                <Title> Mental Health Resources & Helpful Tools </Title>
                <Description> Sometimes we need to ask for help to get better. And thats okay! Here are a list of national and international resources to get you the help that you deserve!</Description>

                </Block>
                <Block>
                    <Topic> CRISIS LINES </Topic>
                    <Description> Our emotions and thoughts can get overwhelming. In times of emergencies, we should always reach out to someone who is trained. Never think you are alone! There are so many crisis lines that are available 24/7.</Description>

                    <SmallerHeading> International </SmallerHeading>
                    <ul>
                        <li><a href="https://www.iasp.info/resources/Crisis_Centres/"> International Association for Suicide Pervention </a></li>
                        <li><a href="https://www.opencounseling.com/suicide-hotlines"> International Suicide Hotlines </a></li>
                    </ul>
                    <br/><br/>
                    <SmallerHeading> UK </SmallerHeading>
                    <ul>
                        <li><a href="https://www.samaritans.org/"> Samaritans </a></li>
                    </ul>
                    <br/><br/>
                    <SmallerHeading> USA </SmallerHeading>
                    <ul>
                        <li><a href="https://suicidepreventionlifeline.org/"> National Suicide Pervention Lifeline</a> - 1-800-273-8255</li>
                        <li><a href="http://www.translifeline.org/"> Trans Lifeline </a> - 877-565-8860 </li>
                        <li><a href="https://www.thetrevorproject.org/"> The Trevor Project </a> - 1-866-488-7386 </li>
                        <li><a href="https://www.veteranscrisisline.net/"> Veterans Crisis Line </a> - 1-800-273-8255 & Press 1 </li>
                    </ul>
                </Block>


                <Block>
                    <Topic> Online Resources </Topic>
                    <Description> Getting help does not always have to be face to face. Sometimes it is easier both financially and emotionally to chose online therapy. Here are some popular services.</Description>

                    <ul>
                        <li><a href="https://www.7cups.com/"> 7 Cups of Tea </a></li>
                        <li><a href="https://www.breakthrough.com/"> Breakthrough </a></li>
                        <li><a href="https://www.talkspace.com/"> Talkspace </a></li>
                        <li><a href="https://www.doctorondemand.com/"> Doctors On Demand </a></li>
                    </ul>
                </Block>


                <Block>
                    <Topic> Directories To Find A Therapist</Topic>
                    <Description> Ready to make the first step in starting therapy? Here is a list of databases that you can use to find a therapist perfect for you!</Description>
                    <ul>
                        <li><a href="https://www.goodtherapy.org/"> GoodTherapy </a></li>
                        <li><a href="http://internationaltherapistdirectory.com/"> International Therapist Directory </a></li>
                        <li><a href="https://www.psychologytoday.com/us/therapists"> Psychology Today </a></li>
                        <li><a href="https://beingseen.org/"> Being Seen </a></li>
                        <li><a href="https://www.opencounseling.com/us-directory"> OpenConsueling </a></li>
                    </ul>
                </Block>


                <Block>
                    <Topic> Self-Care</Topic>
                    <Description> Here tools that can help you practice daily self-care!</Description>
                    <ul>
                        <li><a href="https://drive.google.com/file/d/0B6A2F5ky9SELU0Zfd05YMEpyNUk/view"> Everything is Awful and I'm Not Okay </a></li>
                        <li><a href="https://socialwork.buffalo.edu/resources/self-care-starter-kit.html"> Self-Care Starter Kit </a></li>
                        <li><a href="http://philome.la/jace_harr/you-feel-like-shit-an-interactive-self-care-guide"> You Feel Like Sh*t: An Interactive Self-Care Guide </a></li>
                    </ul>
                </Block>


                <Block>
                    <Topic> Apps </Topic>
                    <Description> There are so many apps out there that can help you in your everyday life. Here are some that can be useful to you!</Description>
                    <ul>
                        <li><a href="http://app.fiveminutejournal.com/"> 5 Minute Journal</a> - IOs, Andriod </li>
                        <li><a href="http://www.viha.ca/cyf_mental_health/boosterbuddy.html"> BoosterBuddy </a> - IOs, Andriod </li>
                        <li><a href="https://www.calm.com/"> Calm </a> - Web, IOs, Andriod </li>
                        <li><a href="https://habitica.com/"> Calm Harm </a> - IOs, Andriod </li>
                        <li><a href="https://habitica.com/"> Habitica </a> - Web, IOs, Andriod </li>
                        <li><a href="https://mightier.com/science"> Mightier </a> - Web </li>
                        <li><a href="https://www.sleepcycle.com/"> SleepCycle </a> - IOs, Andriod </li>
                        <li><a href="https://www.superbetter.com/"> SuperBetter </a> - Web, IOs, Andriod </li>
                        <li><a href="http://companionapproach.com/"> Stress and Anxiety Companion </a> - Web, IOs, Andriod </li>
                        <li><a href="https://www.facebook.com/whatsupsapp/"> What's Up </a> - IOs, Andriod </li>
                    </ul>
                </Block>

                
            </Wrapper>
        )
    }

}

const Wrapper = styled.div`
    height: 88.6%;
    width: 100%;
    margin: 0;
    overflow: visible !important;
    overflow-y: scroll !important;
    background-color: transparent;
`
const Title = styled.h1`
font-weight: 800;
font-size: 50px;
color: #25CED1;
text-align: center;
text-shadow: 0px 0px 4px #25CED1;
margin-bottom: 20px;
`
const Topic = styled.h2`
font-weight: 600;
font-size: 40px;
color: #25CED1;
text-align: center;
text-shadow: 0px 0px 2px #25CED1;
margin-bottom: 20px;
`

const SmallerHeading = styled.h3`
font-weight: 500;
font-size: 35px;
color: #9396F0;
text-align: center;
text-shadow: 0px 0px 1px #9396F0;
margin-bottom: 20px;
`

const Description = styled.p`
    font-size: 30px;
    font-weight: 300;
    color: #ffc2e0;
    margin: 20px;
    align-self: start;
`
const Block = styled.p`
    margin: 50px 50px 50px 50px;
    text-align: center;
    justify-content: center;
    
    background-color: rgba(0, 0, 0, 0.664);

    li {
        list-style: none;
        font-size: 27px;
        color: #FCFCFC;
    }

    a {
        font-size: 27px;
    }
`
export default ResourcesPage