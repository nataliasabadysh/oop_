class AudioPlayer {
    play(audioFile) {}
}

class VideoPlayer {
    play(videoFile) {}
}

class AudioRecorder {
    record() {}
}

// Represents a karaoke player
class KaraokePlayer {
    constructor() {
        this.audioPlayer = new AudioPlayer();
        this.videoPlayer = new VideoPlayer();
        this.audioRecorder = new AudioRecorder();
    }

    playAudio(audioFile) {
        this.audioPlayer.play(audioFile);
    }

    playVideo(videoFile) {
        this.videoPlayer.play(videoFile);
    }

    recordAudio() {
        this.audioRecorder.record();
    }
}