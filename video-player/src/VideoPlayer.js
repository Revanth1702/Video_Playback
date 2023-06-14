// import React, { useState, useEffect, useRef } from 'react';
// const VideoPlayer = ({ videoList }) => {
//     const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//     const videoRefs = [useRef(null), useRef(null)];
//     // console.log(videoRefs);
//     const [activeVideoRefIndex, setActiveVideoRefIndex] = useState(0);
//     // const lens = videoRefs.length
//     useEffect(() => {
//         // console.log("entered 1")
//         if (currentVideoIndex < videoList.length - 1) {
//             // console.log("entered 2")
//             const currentVideo = videoRefs[activeVideoRefIndex].current;
//             const nextVideoRefIndex = (activeVideoRefIndex + 1) % 2;
//             const nextVideo = videoRefs[nextVideoRefIndex].current;
//             // if (currentVideoIndex === 0) {
//             //     currentVideo.currentTime = 218; // Start at 00:03:38
//             //     currentVideo.addEventListener('timeupdate', () => {
//             //       if (currentVideo.currentTime > 236) { // End at 00:03:56
//             //         currentVideo.pause();
//             //       }
//             //     });
//             //   } else if (currentVideoIndex === 1) {
//             //     currentVideo.currentTime = 57; // Start at 00:00:57
//             //     currentVideo.addEventListener('timeupdate', () => {
//             //       if (currentVideo.currentTime > 72) { // End at 00:01:12
//             //         currentVideo.pause();
//             //       }
//             //     });
//             //   }
//             nextVideo.src = videoList[currentVideoIndex + 1];
//             nextVideo.load();
//         }
//         // console.log("entered 3")
//     }, [currentVideoIndex, videoList, activeVideoRefIndex]);
//     const handleVideoEnd = () => {
//         const nextVideoIndex = (currentVideoIndex + 1) % videoList.length;
//         const nextVideoRefIndex = (activeVideoRefIndex + 1) % 2;
//         setCurrentVideoIndex(nextVideoIndex);
//         setActiveVideoRefIndex(nextVideoRefIndex);
//     };
//     return (
//         <div style={{ position: 'relative', width: '640px', height: '360px' }}>
//             {/* <p>{{videoRefs.l}</p> */}
//             {/* <p>Array length is { lens }.</p> */}
//             {videoRefs.map((videoRef, index) => (
//                 <video
//                     ref={videoRef}
//                     key={index}
//                     width="100%"
//                     height="100%"
//                     style={{
//                         position: 'absolute',
//                         top: 0,
//                         left: 0,
//                         display: activeVideoRefIndex === index ? 'block' : 'none',
//                     }}
//                     onEnded={handleVideoEnd}
//                     src={index === 0 ? videoList[0] : ''}
//                 >
//                     Your browser does not support the video tag.
//                 </video>
//             ))}
//         </div>
//     );
// };
// export default VideoPlayer;



// import React, { useState, useEffect, useRef } from 'react';

// const VideoPlayer = ({ videoList }) => {
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const videoRefs = [useRef(null), useRef(null)];
//   const [activeVideoRefIndex, setActiveVideoRefIndex] = useState(0);

//   useEffect(() => {
//     if (currentVideoIndex < videoList.length - 1) {
//       const currentVideo = videoRefs[activeVideoRefIndex].current;
//       const nextVideoRefIndex = (activeVideoRefIndex + 1) % 2;
//       const nextVideo = videoRefs[nextVideoRefIndex].current;
//       nextVideo.src = videoList[currentVideoIndex + 1];
//       nextVideo.load();
//     }
//   }, [currentVideoIndex, videoList, activeVideoRefIndex]);

//   const handleVideoEnd = () => {
//     const nextVideoIndex = (currentVideoIndex + 1) % videoList.length;
//     const nextVideoRefIndex = (activeVideoRefIndex + 1) % 2;
//     setCurrentVideoIndex(nextVideoIndex);
//     setActiveVideoRefIndex(nextVideoRefIndex);
//     if (nextVideoIndex === 0) {
//       videoRefs[0].current.load();
//       videoRefs[1].current.load();
//       videoRefs[0].current.play();
//     }
//   };

//   return (
//     <div style={{ position: 'relative', width: '640px', height: '360px' }}>
//       {videoRefs.map((videoRef, index) => (
//         <video
//           ref={videoRef}
//           key={index}
//           width="100%"
//           height="100%"
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             display: activeVideoRefIndex === index ? 'block' : 'none',
//           }}
//         //   autoPlay
//           controls // Added controls attribute
//           onEnded={handleVideoEnd}
//           src={index === 0 ? videoList[0] : ''}
//         >
//           Your browser does not support the video tag.
//         </video>
//       ))}
//     </div>
//   );
// };

// export default VideoPlayer;



// import React, { useState, useEffect, useRef } from 'react';
// const VideoPlayer = ({ videoList }) => {
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const videoRefs = [useRef(null), useRef(null)];
//   const [activeVideoRefIndex, setActiveVideoRefIndex] = useState(0);

//   useEffect(() => {
//     if (currentVideoIndex < videoList.length - 1) {
//     //   const currentVideo = videoRefs[activeVideoRefIndex].current;
//       const nextVideoRefIndex = (activeVideoRefIndex + 1) % 2;
//       const nextVideo = videoRefs[nextVideoRefIndex].current;
//       nextVideo.src = videoList[currentVideoIndex + 1];
//       nextVideo.load();
//     }
//   }, [currentVideoIndex, videoList, activeVideoRefIndex]);

// //   const handleVideoEnd = () => {
// //     const nextVideoIndex = (currentVideoIndex + 1) % videoList.length;
// //     const nextVideoRefIndex = (activeVideoRefIndex + 1) % 2;
// //     setCurrentVideoIndex(nextVideoIndex);
// //     setActiveVideoRefIndex(nextVideoRefIndex);
// //     if (nextVideoIndex === 0) {
// //       videoRefs[0].current.load();
// //       videoRefs[1].current.load();
// //       videoRefs[0].current.play();
// //     }
// //   };
// const handleVideoEnd = () => {
//     const nextVideoIndex = (currentVideoIndex + 1) % videoList.length;
//     const nextVideoRefIndex = (activeVideoRefIndex + 1) % 2;
//     if (nextVideoIndex === 0) {
//       setCurrentVideoIndex(0);
//       setActiveVideoRefIndex(0);
//       videoRefs[0].current.load();
//       videoRefs[1].current.load();
//       videoRefs[0].current.play();
//     } else {
//       setCurrentVideoIndex(nextVideoIndex);
//       setActiveVideoRefIndex(nextVideoRefIndex);
//     }
//   };
  
//   return (
//     <div style={{ position: 'relative', width: '640px', height: '360px' }}>
//       {videoRefs.map((videoRef, index) => (
//         <video
//           ref={videoRef}
//           key={index}
//           width="100%"
//           height="100%"
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             display: activeVideoRefIndex === index ? 'block' : 'none',
//           }}
//           autoPlay // Added autoPlay attribute
//           controls // Added controls attribute
//           onEnded={handleVideoEnd}
//           src={index === 0 ? videoList[0] : ''}
//         >
//           Your browser does not support the video tag.
//         </video>
//       ))}
//     </div>
//   );
// };

// export default VideoPlayer;

// import React, { useState, useEffect, useRef } from 'react';

// const VideoPlayer = ({ videoList }) => {
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const videoRefs = [useRef(null), useRef(null)];
//   const [activeVideoRefIndex, setActiveVideoRefIndex] = useState(0);

//   useEffect(() => {
//     if (currentVideoIndex < videoList.length - 1) {
//       const currentVideo = videoRefs[activeVideoRefIndex].current;
//       const nextVideoRefIndex = (activeVideoRefIndex + 1) % 2;
//       const nextVideo = videoRefs[nextVideoRefIndex].current;
//       nextVideo.src = videoList[currentVideoIndex + 1];
//       nextVideo.load();
//       currentVideo.addEventListener('ended', handleVideoEnd);
//     }
//   }, [currentVideoIndex, videoList, activeVideoRefIndex]);

//   const handleVideoEnd = () => {
//     const currentVideo = videoRefs[activeVideoRefIndex].current;
//     currentVideo.removeEventListener('ended', handleVideoEnd);
//     const nextVideoIndex = (currentVideoIndex + 1) % videoList.length;
//     const nextVideoRefIndex = (activeVideoRefIndex + 1) % 2;
//     setCurrentVideoIndex(nextVideoIndex);
//     setActiveVideoRefIndex(nextVideoRefIndex);
//     if (nextVideoIndex === 0) {
//       videoRefs[0].current.load();
//       videoRefs[1].current.load();
//       videoRefs[0].current.play();
//     }
//   };

//   return (
//     <div style={{ position: 'relative', width: '640px', height: '360px' }}>
//       {videoRefs.map((videoRef, index) => (
//         <video
//           ref={videoRef}
//           key={index}
//           width="100%"
//           height="100%"
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             display: activeVideoRefIndex === index ? 'block' : 'none',
//           }}
//           autoPlay // Added autoPlay attribute
//           controls // Added controls attribute
//           src={index === 0 ? videoList[0] : ''}
//         >
//           Your browser does not support the video tag.
//         </video>
//       ))}
//     </div>
//   );
// };

// export default VideoPlayer;



// import React, { useState, useEffect, useRef } from 'react';

// function VideoPlayer({ videoList }) {
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     // When the component mounts or the current video index changes,
//     // set the source of the video player to the corresponding video
//     videoRef.current.src = videoList[currentVideoIndex];
//     videoRef.current.play();

//     // When the current video ends, play the next video in the list
//     videoRef.current.addEventListener('ended', () => {
//       setCurrentVideoIndex((currentVideoIndex + 1) % videoList.length);
//     });

//     // Clean up the event listener when the component unmounts
//     return () => {
//       videoRef.current.removeEventListener('ended', () => {});
//     };
//   }, [currentVideoIndex, videoList]);

//   return (
//     <div>
//       <video ref={videoRef} controls />
//     </div>
//   );
// }

// export default VideoPlayer;


import React, { useState, useEffect, useRef } from 'react';

function VideoPlayer({ videoList }) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    // When the component mounts or the current video index changes,
    // set the source of the video player to the corresponding video
    videoRef.current.src = videoList[currentVideoIndex];
    videoRef.current.play();

    // When the current video ends, play the next video in the list
    videoRef.current.addEventListener('ended', () => {
      setCurrentVideoIndex((currentVideoIndex + 1) % videoList.length);
    });

    // Clean up the event listener when the component unmounts
    return () => {
      videoRef.current.removeEventListener('ended', () => {});
    };
  }, [currentVideoIndex, videoList]);

  return (
    <div>
      <video ref={videoRef} controls style={{ width: '800px', height: '400px' }} />
    </div>
  );
}

export default VideoPlayer;



