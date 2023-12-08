import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

function Room() {
  const { roomID } = useParams();
  let myMeeting = async (element) => {
     const appID = 1395470951;
    const serverSecret = "0ab37b4a45f4738f9252cd3c37cbf98d";
    
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), `${roomID}`);
    
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Copy link',
            url:`http://localhost:3000/room/${roomID}`
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
        showRoomTimer:true
      });
  }
  return (
    <div   ref={myMeeting}>
     
    </div>
  )
}

export default Room
