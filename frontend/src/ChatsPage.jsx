import {MultiChatSockect, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('67d307fb-6d9a-452f-8e31-4e6312939f65', props.user.username, props.user.secret);
    return <div style={{height:'100vh'}}>
        <MultiChatSockect {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
    </div>
}

export default ChatsPage