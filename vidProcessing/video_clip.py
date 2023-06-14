import moviepy.editor as mp
import numpy as np
import multiprocessing
from datetime import datetime

start_time = datetime.now()
video1 = mp.VideoFileClip("./TestVideo1.mp4")
video2 = mp.VideoFileClip("./TestVideo2.mp4")
video3 = mp.VideoFileClip("./TEST1.mp4")

#segments = [(0,10),(60,90)]

timestamp = np.empty(6,dtype=object)

for i in range(6):
    val = input("Enter timestamp: ")
    times = val.split(':')
    timestamp[i] = int(times[0])*60 + int(times[1])



clip1 = video1.subclip(timestamp[0],timestamp[1])
clip2 = video2.subclip(timestamp[2],timestamp[3])
clip3 = video3.subclip(timestamp[4],timestamp[5])

clip_1 = clip1.set_fps(20)
clip_2 = clip2.set_fps(20)
clip_3 = clip3.set_fps(20)



clip_1.write_videofile("video-player\src\1.mp4", threads=32,verbose=False,logger=None,preset='ultrafast')
clip_1.close()
clip_2.write_videofile("video-player\src\2.mp4", threads=32,verbose=False,logger=None,preset='ultrafast')
clip_2.close()
clip_3.write_videofile("video-player\src\3.mp4", threads=32,verbose=False,logger=None,preset='ultrafast')
clip_3.close()

time_elapsed1 = datetime.now()

print('Time elapsed1 (hh:mm:ss.ms) {}'.format(time_elapsed1-start_time))
print(timestamp)
#clips = []
#clips.append(clip1)
#clips.append(clip3)
#clips.append(clip2)

# pool = multiprocessing.Pool()

# clips = pool.map_async(lambda clip: clip.set_fps(20), clips).get()



#final_clip = mp.concatenate_videoclips(clips,method="compose")

#final_clip.write_videofile("test_output.mp4", threads=32,verbose=False,logger=None,preset='ultrafast')
#final_clip.close()
time_elapsed = datetime.now() - start_time
print('Time elapsed (hh:mm:ss.ms) {}'.format(time_elapsed))
