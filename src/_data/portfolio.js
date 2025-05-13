module.exports = {
    name: "EMRE YILMAZ",
    title: "Python & JS Developer",
    tagline: "Crafting Intelligent Automation, Data-Driven Solutions, and Engaging Web Experiences.",
    contact: {
        phone: null,
        email: "ylmz.emre2000@gmail.com",
        upwork: "https://www.upwork.com/freelancers/~014d5c9687f0983a49",
        github: "https://github.com/marleen01",
        location: "Lynchburg, VA"
    },
    profileImage: "/images/emre.jpg", // Make sure this path is correct
    about: "Highly motivated and resourceful developer specializing in Python automation, data processing, web scraping, and leveraging AI/ML for practical applications. My drive for problem-solving was notably demonstrated when I cracked a custom cipher algorithm in a Bitcointalk community challenge, earning a 0.1 BTC reward. This experience honed my skills in cryptography, scripting, and logical thinking.",
    skills: [
        "Python", "Selenium", "BeautifulSoup", "Pandas", "Matplotlib", "OpenCV",
        "JavaScript", "P5.js", "Node.js",
        "Automation", "Data Visualization", "Web Scraping", "API Integration",
        "LLM Implementation", "Object Detection (YOLOv8)", "ADB"
    ],
    experience: [
        {
            title: "Freelance Python Developer",
            company: "Self-Employed / Upwork",
            period: "02/2020 - Present",
            location: "Remote",
            description: "Successfully delivered a range of Python-based solutions for diverse clients, including mobile/web app automation (Truth Social API/ADB, Selenium/BeautifulSoup), data visualization (3D temperature profiles with Pandas/Matplotlib), and LLM consultation & fine-tuning."
        }
    ],
    projects: [
        {
            name: "Custom YOLOv8 Object Detection Model",
            description: "Developed and trained a custom YOLOv8 deep learning model to detect specific in-game objects in a popular MMORPG, achieving 90% accuracy with minimal latency.",
            technologies: ["Python", "YOLOv8", "OpenCV", "Deep Learning"],
            link: null // Add GitHub link if public
        },
        {
            name: "Python Crypto Trader Bot",
            description: "Automated cryptocurrency trading bot executing trades based on live news sentiment (Telegram/OpenAI) and coin listing announcements (Binance API).",
            technologies: ["Python", "Binance API", "Telegram API", "OpenAI API"],
            link: null
        },
        {
            name: "WhatsApp Chat Summarizer (LLM)",
            description: "Python script leveraging a local LLM (via LM Studio) to provide concise summaries of WhatsApp chat exports.",
            technologies: ["Python", "LLMs", "LM Studio", "NLP"],
            link: "https://github.com/marleen01/whatsapp-chat-summarizer"
        },
        {
            name: "Truth Social Automation (ADB)",
            description: "Python project automating interactions with the Truth Social mobile app using ADB, supporting multiple device threads.",
            technologies: ["Python", "ADB", "UI Automation", "Multi-threading"],
            link: "https://github.com/marleen01/truth-sign-up"
        },
        {
            name: "Automated Data Entry System",
            description: "Python tool for a private client to streamline data entry for a web interface, reducing manual workload by 70%.",
            technologies: ["Python", "Selenium", "BeautifulSoup", "Pandas"],
            link: null
        }
    ],
    strengths: [
        {
            name: "Flexibility",
            description: "Adaptable across diverse domains, with experience spanning automation, data visualization, creative coding, and fundamental Linux and networking skills. Quick to learn and apply new tools and technologies."
        },
        {
            name: "Self-Teaching",
            description: "Highly self-motivated and resourceful, with a proven ability to independently learn and master new technologies, frameworks, and concepts. Continuously seeks out knowledge."
        }
    ],
    currentYear: new Date().getFullYear()
};