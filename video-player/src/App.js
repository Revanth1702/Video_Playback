import React from 'react';
import './App.css';
import video1 from './1.mp4';
import video2 from './2.mp4';
import video3 from './3.mp4';
import VideoPlayer from './VideoPlayer';
function App() {
const videoList = [
video1,
video2,
video3
];
return (
<div className="App">
<header className="App-header">
<VideoPlayer videoList={videoList} />
</header>
</div>
);
}
export default App;

