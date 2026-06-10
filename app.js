/**
 * AVE DUBAI - HIGH-PERFORMANCE CINEMATIC EXPANSIVE ARCHITECTURE
 * INTERACTIVE COUPLING LOGIC MODULE ENGINE
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // Global Reference Pointers
    const DOM = {
        preloader: document.getElementById('preloader'),
        preloaderLine: document.getElementById('preloader-line'),
        preloaderPercent: document.getElementById('preloader-percentage'),
        canvas: document.getElementById('cinema-canvas'),
        video: document.getElementById('cinema-video'),
        ambientGlow: document.getElementById('ambient-glow-layer'),
        vaultTrigger: document.getElementById('global-menu-vault-trigger'),
        vaultCardMenu: document.getElementById('card-trigger-menu'),
        vaultCurtain: document.getElementById('vault-curtain-overlay'),
        scrollWrapper: document.getElementById('scroll-wrapper'),
        scenes: document.querySelectorAll('.story-scene'),
        parallaxItems: document.querySelectorAll('.structural-parallax')
    };

    // Fine Fine Dine Explicit Vault Destination Route URI Key
    const FINE_DINE_VAULT_URI = "https://qr.finedinemenu.com/ave-restaurant/menu/697a4f44d7174724382a6f6c";

    // Register GSAP + ScrollTrigger Plugins
    gsap.registerPlugin(ScrollTrigger);

    /**
     * SYSTEM CONFIGURATION PARAMETERS
     */
    const CONFIG = {
        totalFrames: 120, // Array size map representing processing length of frame scrubbing
        videoAssetUrl: "https://assets.mixkit.co/videos/preview/mixkit-pouring-hot-coffee-into-a-cup-42353-large.mp4", // Premium highly optimized dynamic fallback mp4 stream
        frameSequencePattern: "https://luxury-assets.ave.com/frames/sequence_####.jpg" // High performance individual frame asset vector
    };

    let lenisEngine;
    let videoScrubberInstance;

    /**
     * INITIALIZE SMOOTH SCROLL ROUTINE (LENIS)
     */
    const initLenisSmoothScroll = () => {
        lenisEngine = new Lenis({
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Luxurious inertial easing curve
            direction: 'vertical',
            gestureDirection: 'vertical',
            smoothHover: true,
            infinite: false
        });

        // Sync Lenis output directly with ScrollTrigger engine transformations
        lenisEngine.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenisEngine.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);
    };

    /**
     * HIGH PERFORMANCE FRAME SCRUBBING ENGINE CORE MODULE
     */
    class VideoScrubberEngine {
        constructor(options) {
            this.canvas = options.canvas;
            this.video = options.video;
            this.ctx = this.canvas.getContext('2d');
            this.mode = 'video'; // Operational state fallback processing matrix ('canvas' | 'video')
            this.totalFrames = options.totalFrames;
            this.currentFrameIndex = 0;
            this.imagesArray = [];
            this.videoLoaded = false;
            
            this.initEngine();
        }

        initEngine() {
            // Screen constraints verification setup for processing engine mode
            // Fallback natively to HTML5 hardware accelerated video stream for dynamic rendering optimization
            this.setupVideoScrubbing();
            this.resizeViewport();
            window.addEventListener('resize', () => this.resizeViewport());
        }

        resizeViewport() {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.renderCurrentFrame();
        }

        setupVideoScrubbing() {
            this.video.style.display = 'block';
            this.canvas.style.display = 'none';
            this.video.src = CONFIG.videoAssetUrl;
            this.video.load();
            
            this.video.addEventListener('loadedmetadata', () => {
                this.videoLoaded = true;
                this.syncVideoToScroll(0);
            });
        }

        renderCurrentFrame() {
            if (this.mode === 'canvas' && this.imagesArray[this.currentFrameIndex]?.complete) {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                
                // Draw logic optimized handling elegant dynamic 'cover' logic constraints inside canvas element matrix
                const img = this.imagesArray[this.currentFrameIndex];
                const imgRatio = img.width / img.height;
                const canvasRatio = this.canvas.width / this.canvas.height;
                
                let drawWidth, drawHeight, xOffset, yOffset;
                
                if (canvasRatio > imgRatio) {
                    drawWidth = this.canvas.width;
                    drawHeight = this.canvas.width / imgRatio;
                    xOffset = 0;
                    yOffset = (this.canvas.height - drawHeight) / 2;
                } else {
                    drawHeight = this.canvas.height;
                    drawWidth = this.canvas.height * imgRatio;
                    xOffset = (this.canvas.width - drawWidth) / 2;
                    yOffset = 0;
                }
                
                this.ctx.drawImage(img, xOffset, yOffset, drawWidth, drawHeight);
            }
        }

        syncVideoToScroll(progress) {
            if (this.mode === 'video' && this.videoLoaded) {
                // Precise map calculation linking scroll progression bounding metrics straight to stream time limits
                const targetTime = this.video.duration * progress;
                
                // Native high efficiency precision frame jump processing matrix inside RAF layer loop
                requestAnimationFrame(() => {
                    this.video.currentTime = targetTime;
                });
            } else if (this.mode === 'canvas') {
                const frameIndex = Math.min(this.totalFrames - 1, Math.floor(progress * this.totalFrames));
                if (frameIndex !== this.currentFrameIndex) {
                    this.currentFrameIndex = frameIndex;
                    this.renderCurrentFrame();
                }
            }
        }
    }

    /**
     * SIMULATED PRELOADER AND CACHE INTERACTION ENGINE MANAGER
     */
    const executionPreloaderAndUnlock = () => {
        const tl = gsap.timeline({
            onComplete: () => {
                DOM.preloader.style.pointerEvents = 'none';
                initLenisSmoothScroll();
                buildCinematicCoreTimelines();
            }
        });

        // Simple elegant initial branding rendering operations
        tl.to('.preloader-logo', { opacity: 1, y: 0, duration: 1, ease: "power4.out" });

        // Simulate high performance cache verification stack loading matrix progression
        let loadingProgress = { val: 0 };
        tl.to(loadingProgress, {
            val: 100,
            duration: 2.8,
            ease: "power2.out",
            onUpdate: () => {
                const currentPercent = Math.floor(loadingProgress.val);
                DOM.preloaderPercent.innerText = currentPercent < 10 ? `0${currentPercent}%` : `${currentPercent}%`;
                gsap.set(DOM.preloaderLine, { scaleX: loadingProgress.val / 100 });
            }
        }, "-=0.4");

        // Unified structural lock screen dissolve wipe sequence out
        tl.to(DOM.preloader, {
            opacity: 0,
            duration: 1.2,
            ease: "power4.inOut"
        });

        tl.fromTo('.luxury-header', 
            { opacity: 0, y: -20 }, 
            { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" },
            "-=0.6"
        );
    };

    /**
     * SCROLL TRIGGER CORE KINETIC SCENERY OVERLAY AND SCRUBBER COUPLING PIPELINE
     */
    const buildCinematicCoreTimelines = () => {
        
        // Instantiate our frame engine handling logic mechanics
        videoScrubberInstance = new VideoScrubberEngine({
            canvas: DOM.canvas,
            video: DOM.video,
            totalFrames: CONFIG.totalFrames
        });

        // MASTER SCROLL TIMELINE: Maps structural frame scrubbing continuously over the 12 dynamic visual phases
        const masterTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: DOM.scrollWrapper,
                start: "top top",
                end: "70% center", // Terminates processing boundary metrics exactly at entrance of architectural spatial grid cards
                scrub: 1.2,
                onUpdate: (self) => {
                    videoScrubberInstance.syncVideoToScroll(self.progress);
                }
            }
        });

        // INTERACTIVE LIGHTING GLOW SYSTEM: Dynamically updates the volumetric ambient lighting layer across scenes
        ScrollTrigger.create({
            trigger: "#scene-04",
            start: "top center",
            end: "bottom center",
            scrub: true,
            onEnter: () => gsap.to(DOM.ambientGlow, { background: `radial-gradient(circle, ${getComputedStyle(document.documentElement).getPropertyValue('--lighting-amber-intense')} 0%, rgba(11,11,12,0) 70%)`, duration: 1 }),
            onLeaveBack: () => gsap.to(DOM.ambientGlow, { background: `radial-gradient(circle, ${getComputedStyle(document.documentElement).getPropertyValue('--lighting-amber')} 0%, rgba(11,11,12,0) 70%)`, duration: 1 })
        });

        // INDIVIDUAL SCENERY TEXT FADE CHOREOGRAPHY SYSTEM (SCENES 1-12)
        DOM.scenes.forEach((scene) => {
            const typography = scene.querySelector('.scene-typography');
            if (!typography) return;

            const trackingLine = typography.querySelector('.serif-title');

            const sceneTl = gsap.timeline({
                scrollTrigger: {
                    trigger: scene,
                    start: "top 80%",
                    end: "top 20%",
                    scrub: 1,
                    toggleActions: "play reverse play reverse"
                }
            });

            sceneTl.fromTo(typography, 
                { opacity: 0, y: 60, willChange: "transform, opacity" },
                { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
            );

            if (trackingLine) {
                sceneTl.fromTo(trackingLine,
                    { letterSpacing: "0.02em" },
                    { letterSpacing: "0.08em", duration: 1, ease: "power1.out" },
                    "-=1"
                );
            }

            // Exiting phase fade out logic sequencing out cleanly via parallel timeline parameters
            gsap.timeline({
                scrollTrigger: {
                    trigger: scene,
                    start: "bottom 40%",
                    end: "bottom top",
                    scrub: 1
                }
            }).to(typography, { opacity: 0, y: -60, ease: "power2.in" });
        });

        // SPATIAL ARCHITECTURAL DISPLACEMENT SYSTEM PARALLAX MECHANICS (SCENES 13-15)
        DOM.parallaxItems.forEach(item => {
            const parsingSpeed = parseFloat(item.getAttribute('data-speed')) || 1;
            gsap.fromTo(item, 
                { y: () => 50 * parsingSpeed, willChange: "transform" },
                {
                    y: () => -120 * parsingSpeed,
                    ease: "none",
                    scrollTrigger: {
                        trigger: item,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );
        });

        // SOCIAL PROOF COMPOSITION ANIMATION TIMELINE ENGINE (SCENE 16)
        const proofTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#scene-16",
                start: "top 75%",
                end: "bottom center",
                toggleActions: "play none none reverse"
            }
        });

        proofTimeline.from(".metrics-display", { opacity: 0, scale: 0.95, duration: 1.2, ease: "power4.out" })
                     .from(".review-card", { opacity: 0, y: 40, duration: 1, ease: "power3.out", stagger: 0.25 }, "-=0.6");

        // PORTAL CTA DECK ENTRANCE INTERFACE TRANSITION LOGIC MAP (SCENE 18)
        gsap.from(".portal-card", {
            opacity: 0,
            y: 50,
            duration: 1.4,
            stagger: 0.2,
            ease: "power4.out",
            scrollTrigger: {
                trigger: "#scene-18",
                start: "top 70%"
            }
        });
    };

    /**
     * THE EXCLUSIVE VAULT INTERFACE REDIRECTION OVERLAY ENGINE SYSTEM
     */
    const triggerVaultSecureWipeSequence = () => {
        // Halt client interactions during structural wipe operations
        if (lenisEngine) lenisEngine.stop();

        const tl = gsap.timeline({
            onComplete: () => {
                // Seamlessly transfer viewport parameters down to external structural finedine ledger interface
                window.location.href = FINE_DINE_VAULT_URI;
            }
        });

        // Open structural curtain with hardware accelerated borders bounding across viewport limits
        tl.to(DOM.vaultCurtain, { opacity: 1, pointerEvents: 'auto', duration: 0.4, ease: "power2.out" });
        tl.fromTo('.vault-curtain-bg', 
            { scale: 1.2, borderBottomWidth: "0px" }, 
            { scale: 1, borderBottomWidth: "1px", duration: 1.4, ease: "power4.inOut" },
            "-=0.4"
        );
        tl.to(DOM.vaultContent, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6");
    };

    // Attach Interactive Event Listeners mapping execution directly into internal systems
    DOM.vaultTrigger.addEventListener('click', triggerVaultSecureWipeSequence);
    DOM.vaultCardMenu.addEventListener('click', triggerVaultSecureWipeSequence);

    // Initial Launch sequence execution call
    executionPreloaderAndUnlock();
});
              
