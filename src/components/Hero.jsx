import { useState, useEffect, useRef } from 'react'
import profilePic from '../assets/profile-pic.png'
import songCover from '../assets/song-cover-pic.jpg'
import songFile from '../assets/song1.mp3'

const greetings = [
    { text: 'Hello!', lang: 'English' },
    { text: 'నమస్కారం!', lang: 'Telugu' },
    { text: 'नमस्ते!', lang: 'Hindi' },
    { text: 'Bonjour!', lang: 'French' },
    { text: 'こんにちは!', lang: 'Japanese' },
    { text: 'Hola!', lang: 'Spanish' },
    { text: 'வணக்கம்!', lang: 'Tamil' },
    { text: 'Ciao!', lang: 'Italian' },
]

const playlist = [
    { title: 'Perfect', artist: 'Ed Sheeran', cover: songCover, src: songFile },
    // Placeholders for future songs as requested
    { title: 'Coming Soon', artist: 'Unknown', cover: songCover, src: '' },
    { title: 'Coming Soon', artist: 'Unknown', cover: songCover, src: '' },
    { title: 'Coming Soon', artist: 'Unknown', cover: songCover, src: '' },
]

function Hero() {
    const [greetingIdx, setGreetingIdx] = useState(0)
    const [greetingVisible, setGreetingVisible] = useState(true)
    const [time, setTime] = useState('')
    const [isOnline, setIsOnline] = useState(true)

    const [trackIdx, setTrackIdx] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [progress, setProgress] = useState(0)
    const audioRef = useRef(null)

    // Greeting cycle
    useEffect(() => {
        const interval = setInterval(() => {
            setGreetingVisible(false)
            setTimeout(() => {
                setGreetingIdx(prev => (prev + 1) % greetings.length)
                setGreetingVisible(true)
            }, 400)
        }, 2200)
        return () => clearInterval(interval)
    }, [])

    // IST clock
    useEffect(() => {
        function updateTime() {
            const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }))
            const h = now.getHours()
            const m = String(now.getMinutes()).padStart(2, '0')
            const ampm = h >= 12 ? 'PM' : 'AM'
            const h12 = h % 12 || 12
            setTime(`${h12}:${m} ${ampm}`)
            setIsOnline(h >= 9 && h < 22)
        }
        updateTime()
        const interval = setInterval(updateTime, 60000)
        return () => clearInterval(interval)
    }, [])

    const togglePlay = () => {
        if (!audioRef.current || !playlist[trackIdx].src) return
        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play().catch(e => console.log("Audio play failed", e))
        }
        setIsPlaying(!isPlaying)
    }

    const toggleMute = () => {
        if (!audioRef.current) return
        audioRef.current.muted = !isMuted
        setIsMuted(!isMuted)
    }

    const nextTrack = () => {
        setTrackIdx((prev) => (prev + 1) % playlist.length)
    }

    const prevTrack = () => {
        setTrackIdx((prev) => (prev - 1 + playlist.length) % playlist.length)
    }

    useEffect(() => {
        if (isPlaying && audioRef.current && playlist[trackIdx].src) {
            audioRef.current.play().catch(e => {
                console.log("Audio play failed:", e)
                setIsPlaying(false)
            })
        } else if (!playlist[trackIdx].src && isPlaying) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsPlaying(false)
        }
    }, [trackIdx, isPlaying])

    const handleTimeUpdate = () => {
        if (audioRef.current && audioRef.current.duration) {
            setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100)
        }
    }

    const handleSeek = (e) => {
        if (!audioRef.current || !audioRef.current.duration || !playlist[trackIdx].src) return
        const rect = e.currentTarget.getBoundingClientRect()
        const clickX = e.clientX - rect.left
        const p = clickX / rect.width
        audioRef.current.currentTime = p * audioRef.current.duration
        setProgress(p * 100)
    }

    const currentTrack = playlist[trackIdx]

    return (
        <section id="hero">
            <audio
                ref={audioRef}
                src={currentTrack.src}
                onEnded={nextTrack}
                onTimeUpdate={handleTimeUpdate}
            />

            {/* Main intro card */}
            <div className="glass hero-main" style={{ gridColumn: 1, gridRow: '1 / 3' }}>
                <div className="hero-main-text">
                    <div
                        className="greeting-cycle"
                        style={{
                            opacity: greetingVisible ? 1 : 0,
                            transform: greetingVisible ? 'translateY(0)' : 'translateY(-8px)',
                        }}
                    >
                        {greetings[greetingIdx].text}
                    </div>
                    <div className="hero-name">
                        I'm <span>Meghana Sai T.P</span>
                    </div>
                    <div className="hero-tagline">From Raw Data to Real Impact</div>
                    <div className="hero-roles">AI Engineer · Data Scientist</div>
                    <div className="hero-btns">
                        <a href="/resume.pdf" target="_blank" className="btn-primary">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Read Resume
                        </a>
                        <a href="#contact" className="btn-ghost">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,12 2,6" />
                            </svg>
                            Say Hi!
                        </a>
                    </div>

                    <div className="hero-quote">
                        "Turning data into decisions, one model at a time."
                    </div>
                </div>
                <div className="hero-main-photo">
                    <div className="photo-blob">
                        <img src={profilePic} alt="Meghana Sai T.P" className="profile-img" />
                    </div>
                </div>
            </div>

            {/* Right column */}
            <div className="hero-right">
                {/* Activity + Time */}
                <div className="glass activity-card">
                    <div className="activity-info">
                        <div className="activity-label">Status</div>
                        <div className="activity-status">
                            <div className={`status-dot${isOnline ? '' : ' away'}`} />
                            <span>{isOnline ? 'Online' : 'Away'}</span>
                        </div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2px' }}>Nellore, India</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '4px' }}>Local Time</div>
                        <div className="local-time">{time || '--:--'}</div>
                    </div>
                </div>

                {/* Education */}
                <div className="glass edu-card">
                    <div className="edu-label">Education</div>
                    <div className="edu-degree">B.Tech in Artificial Intelligence & Data Science</div>
                    <div className="edu-college">R.M.K College of Engineering and Technology</div>
                    <div className="edu-meta">
                        <span className="edu-year">2022 – 2026</span>
                        <span className="edu-cgpa">CGPA: 8.04</span>
                    </div>
                </div>

                {/* Spotify vibe card */}
                <div className="glass spotify-card">
                    <div className="spotify-label">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#1DB954">
                            <circle cx="12" cy="12" r="10" />
                            <path fill="white" d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6-.15-.5.15-1 .6-1.15 3.55-1.05 9.4-.85 13.1 1.35.45.25.6.85.35 1.3-.25.35-.85.5-1.3.25zm-.1 2.8c-.25.35-.7.5-1.05.25-2.7-1.65-6.8-2.15-9.95-1.15-.4.1-.85-.1-.95-.5-.1-.4.1-.85.5-.95 3.65-1.1 8.15-.55 11.25 1.35.3.15.45.65.2 1zm-1.2 2.75c-.2.3-.55.4-.85.2-2.35-1.45-5.3-1.75-8.8-.95-.3.1-.65-.1-.75-.45-.1-.3.1-.65.45-.75 3.8-.85 7.1-.5 9.7 1.1.35.15.4.55.25.85z" />
                        </svg>
                        Currently vibing to
                    </div>
                    <div className="spotify-track">
                        <div className="album-art" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}>
                            <img src={currentTrack.cover} alt={currentTrack.title} className="album-art-img" />
                        </div>
                        <div className="track-info">
                            <div className="track-name">{currentTrack.title}</div>
                            <div className="track-artist">{currentTrack.artist}</div>
                        </div>
                        <div className="player-controls">
                            <button className="player-btn" onClick={prevTrack} aria-label="Previous">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                    <polygon points="19,20 9,12 19,4" />
                                    <rect x="5" y="4" width="2" height="16" />
                                </svg>
                            </button>
                            <button className="player-btn" onClick={togglePlay} aria-label={isPlaying ? 'Pause' : 'Play'}>
                                {isPlaying ? (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <rect x="6" y="4" width="4" height="16" rx="1" />
                                        <rect x="14" y="4" width="4" height="16" rx="1" />
                                    </svg>
                                ) : (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <polygon points="5,3 19,12 5,21" />
                                    </svg>
                                )}
                            </button>
                            <button className="player-btn" onClick={nextTrack} aria-label="Next">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                    <polygon points="5,4 15,12 5,20" />
                                    <rect x="17" y="4" width="2" height="16" />
                                </svg>
                            </button>
                            <button className="player-btn" onClick={toggleMute} aria-label={isMuted ? 'Unmute' : 'Mute'} style={{ marginLeft: '4px' }}>
                                {isMuted ? (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polygon points="11,5 6,9 2,9 2,15 6,15 11,19" fill="currentColor" />
                                        <line x1="23" y1="9" x2="17" y2="15" />
                                        <line x1="17" y1="9" x2="23" y2="15" />
                                    </svg>
                                ) : (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polygon points="11,5 6,9 2,9 2,15 6,15 11,19" fill="currentColor" />
                                        <path d="M15.54 8.46a5 5 0 010 7.07" />
                                        <path d="M19.07 4.93a10 10 0 010 14.14" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    <div className="progress-bar" onClick={handleSeek}>
                        <div className="progress-fill" style={{ width: `${progress}%` }} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
