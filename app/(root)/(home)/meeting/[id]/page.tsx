// "use client";
// import Loader from "@/components/Loader";
// import MeetingRoom from "@/components/MeetingRoom";
// import MeetingSetUp from "@/components/MeetingSetUp";
// import { useGetCalledById } from "@/hooks/useGetCalledById";
// import { useUser } from "@clerk/nextjs";
// import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
// import React, { useState } from "react";

// const Meeting = ({ params }: { params: { id: string } }) => {
//   const {isLoaded} = useUser();
//   const [isSetUpComplete, setIsSetUpComplete] = useState(false);
//   const { call, isCallLoading } = useGetCalledById(params.id);
//   if (!isLoaded || isCallLoading) {
//     return <Loader />;
//   }
//   return (
//     <main className="h-screen w-full ">
//       <StreamCall call={call}>
//         <StreamTheme>
//           {!isSetUpComplete ? (
//             <MeetingSetUp setIsSetUpComplete={setIsSetUpComplete} />
//           ) : (
//             <MeetingRoom />
//           )}
//         </StreamTheme>
//       </StreamCall>
//     </main>
//   );
// };

// export default Meeting;



"use client";

import Loader from "@/components/Loader";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetUp from "@/components/MeetingSetUp";
import { useGetCalledById } from "@/hooks/useGetCalledById";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React, { useState } from "react";

const Meeting = ({ params }: { params: { id: string } }) => {
  const { isLoaded } = useUser();
  const [isSetUpComplete, setIsSetUpComplete] = useState(false);
  const { call, isCallLoading } = useGetCalledById(params.id);

  if (!isLoaded || isCallLoading) return <Loader />;
  if (!call) return <p className="text-center text-white">Call not found</p>;

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetUpComplete ? (
            <MeetingSetUp setIsSetUpComplete={setIsSetUpComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting;
