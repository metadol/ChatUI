import React from 'react'
import {
 OutgoingMessage,
 IncomingMessage,
 Answerone,
 Answertwo 
} from './Messages';


const MessageGroup = ({children}) => (
    <div className='flex flex-col gap-2 px-4 py-2 mb-5 sm:px-8'>
        {children}
    </div>
);

const FlexColumn = ({children}) => (
    <div className='flex flex-col items-start w-full gap-2'>
        {children}
    </div>
);

const Chat = () => {

    const messagesOne = [
        'High Traffic Alert: Traffic Volume Exceeded',
        'Error Rate Alert: Error Frequency Surpased'
    ];
    
    const messagesTwo = [
        {kub: 'nexus-frontend deployment', mess: 'deployed by', image: '/azure1.jpg'},
        {kub: 'vnet nexus-prod-eastus-prod', mess: 'configuration updated by', image: '/github1.jpg'}
    ];



    return (
        <div className='p-6 mt-[49px] z-0 mb-14 overflow-x-hidden '>
            <div className='flex flex-col gap-5 sm:gap-2 '>
                <OutgoingMessage message="Show me the criticalincident with open status for nexus Saas application" />

                <FlexColumn>
                    <IncomingMessage message="Here are the currently open incidents from nexus SaaS:"/>
                    <MessageGroup>
                        {messagesOne.map((message, index) => <Answerone key={index} message={message} />)}
                    </MessageGroup>
                </FlexColumn>
 
                <OutgoingMessage message="What are the latest updates to associated resources?"/>

                <FlexColumn>
                    <IncomingMessage message="See the data below for recent changes to related resources"/>
                    <MessageGroup>
                        {messagesTwo.map((message, index) => <Answertwo key={index} {...message} />)}
                    </MessageGroup>
                </FlexColumn>
            </div>
        </div>
    )
}

export default Chat