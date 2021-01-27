import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getPastThoughts } from '../Redux/actions'
import styled from "styled-components";
import '../Styles/PastThoughts.scss'

class PastThoughts extends React.Component {

    componentDidMount() {
        this.props.getPastThoughts(this.props.currentUser.id)
    }

    // makingRows() {
    //     this.props.myThoughts.map(thought => {
    //         return (
    //             <tr>
    //                 <td>{thought.date}</td>
    //                 <td>
    //                     <NavLink to={{ pathname: "/thought", aboutProps: { thought: thought } }}>
    //                         <h5>{thought.title}</h5>
    //                     </NavLink>
    //                 </td>
    //                 <td> {thought.letters.length}</td>
    //             </tr>
    //         )
    //     })
    // }

    // renderListOfThoughts() {
    //     return (
    //         <table id="thoughts">
    //             <tr>
    //                 <th>Date</th>
    //                 <th>Thought Title</th>
    //                 <th>Number Of Letters</th>
    //             </tr>
    //             {/* {this.makingRows()} */}

    //         </table>
    //     )

    // }

    render() {
        return (
            
            <Wrapper>
                <Title> MY THOUGHTS</Title>
                <div>
                    {this.props.myThoughts.length === 0 ? null :
                        <>
                            <table id="thoughts">
                                <tr>
                                    <th>Date</th>
                                    <th>Thought Title</th>
                                    <th>Number Of Letters</th>
                                </tr>
                                {this.props.myThoughts.map(thought => {
                                    return (
                                        <tr>
                                            <td>{thought.date}</td>
                                            <td>
                                                <NavLink to={{ pathname: "/thought", aboutProps: { thought: thought } }}>
                                                    <h5>{thought.title}</h5>
                                                </NavLink>
                                            </td>
                                            <td> {thought.letters.length}</td>
                                        </tr>
                                    )
                                })
                            }
                                </table>
                        </>
                    }
                </div>

            </Wrapper>
            
        )
    }
}

const Wrapper = styled.div`
    height: 88.6%;
    width: 50%;
    text-align: center;
    margin: auto;
    

    position: relative;
   
    top: 20%;
    margin: auto;
`

const Title = styled.h1`
font-weight: 700;
font-size: 50px;
color: #25ced1;
text-align: center;
text-shadow: 0px 0px 6px #25ced1;
margin-bottom: 20px;

`

function msp(state) {
    return ({
        currentUser: state.currentUser,
        myThoughts: state.myThoughts
    })
}
function mdp(dispatch) {
    return {
        getPastThoughts: (userId) => dispatch(getPastThoughts(userId))
    }
}

export default connect(msp, mdp)(PastThoughts)