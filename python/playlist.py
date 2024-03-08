import os
from sys import argv
from threading import Thread, active_count, current_thread
from pytube import YouTube, Playlist
import numpy as np

downloads_folder = "./downloader"


def downloader(link, folder=downloads_folder):
    yt = YouTube(link)
    print("Title: "+yt.title)
    print("Views: "+str(yt.views))
    video = yt.streams.get_highest_resolution()
    video.download(folder)
    print("Finished Downloading!")


def threader():
    start = 0
    end = 4
    for _ in range(int(np.ceil(len(argv[1:])/4))):
        for video in argv[start+1:end+1]:
            try:
                bulk = Playlist(video)
                vid = list(bulk.video_urls)
                for _ in range(int(np.ceil(len(vid)/4))):
                    for video in vid[start:end]:
                        t = Thread(target=downloader, args=[
                                   video, downloads_folder+f"/{bulk.title}/"])
                        t.start()
                    start += 4
                    end += 4
                    t.join()
            except Exception as e:
                t = Thread(target=downloader, args=[video])
                t.start()
        start += 4
        end += 4
        t.join()


threader()
# downloader("https://youtu.be/LcR-M6IVEwo?feature=shared")
