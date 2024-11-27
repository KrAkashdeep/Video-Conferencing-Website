// import React, { useEffect, useRef } from "react";
// import { useParams } from "react-router-dom";
// import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

// const Room = () => {
//   const { roomID } = useParams();
//   const roomContainerRef = useRef(null);

//   useEffect(() => {
//     const joinMeeting = async () => {
//       const appID = 946219318;
//       const serverSecret = "8e0b853d79deae0bcbfe949b73ca46a4";

//       const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
//         appID,
//         serverSecret,
//         roomID,
//         Date.now().toString(),
//         "akashdeep"
//       );

//       const zp = ZegoUIKitPrebuilt.create(kitToken);

//       zp.joinRoom({
//         container: roomContainerRef.current,
//         scenario: {
//           mode: ZegoUIKitPrebuilt.GroupCall,
//         },
//         sharedLinks: [],
//         layout: "auto",
//         showScreenSharingButton: false,
//         turnOnCameraWhenJoining: true,
//       });
//     };

//     joinMeeting();
//   }, [roomID]);

//   return (
//     <div
//       ref={roomContainerRef}
//       className="w-screen h-screen bg-gray-100 flex items-center justify-center"
//     >
//       <div className="hidden sm:flex text-sm text-gray-500 absolute bottom-4">
//         For the best experience, rotate your phone to landscape mode.
//       </div>
//     </div>
//   );
// };

// export default Room;

import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { roomID } = useParams();
  const roomContainerRef = useRef(null);

  useEffect(() => {
    const joinMeeting = async () => {
      const appID = 946219318;
      const serverSecret = "8e0b853d79deae0bcbfe949b73ca46a4";

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        Date.now().toString(),
        "akashdeep"
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);

      zp.joinRoom({
        container: roomContainerRef.current,
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall,
        },
        sharedLinks: [],
        layout: "auto",
        showScreenSharingButton: false,
        turnOnCameraWhenJoining: true,
      });
    };

    joinMeeting();
  }, [roomID]);

  return (
    <div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
      {/* Container for the meeting interface */}
      <div
        ref={roomContainerRef}
        className="w-full h-full flex items-center justify-center bg-white shadow-md sm:max-w-[90%] sm:max-h-[90%] sm:rounded-lg sm:overflow-hidden"
      ></div>
    </div>
  );
};

export default Room;
