export const projects = [
    {
        slug: "shoes-ecommerce",
        title: "Shoes Merchandise E-commerce App",
        type: "Client MVP",
        logo: "/projects/shoes/logo.png",
        cardDescription:
            "Prototype and MVP for a shoes merchandise company with cart and secure payments.",
        description:
            "A production-ready e-commerce mobile application MVP built for a shoes merchandise business. The app focuses on clean user experience, smooth checkout flow, and scalability for real-world business usage.",
        challenge:
            "Client needed a production-ready solution to reach customers and drive sales with minimal technical complexity.",
        solution:
            "Built a fast, scalable mobile app with focus on user experience, performance, and business-ready infrastructure.",
        result:
            "Production-ready MVP delivered on schedule with secure payments and scalable architecture.",
        features: [
            "Product listing with categories and search",
            "Shopping cart with real-time price calculation",
            "Secure online payments integration (Razorpay)",
            "Order history and tracking",
            "User authentication and profile management",
            "Admin panel for product management",
            "Scalable Firebase backend architecture",
            "Responsive UI optimized for Android devices"
        ],
        techStack: ["Android", "Kotlin", "Firebase", "Razorpay", "MVVM Architecture", "Jetpack Compose"],
        screenshots: [
            "/projects/shoes/1.jpg",
            "/projects/shoes/2.jpg",
            "/projects/shoes/3.jpg"
        ]
    },
    {
        slug: "govt-exam-app",
        title: "Government Exam Information App",
        type: "Personal Project",
        logo: "/projects/govt-exam/logo.png",
        cardDescription:
            "Student-focused mobile app for government exam details and job updates.",
        description:
            "A comprehensive mobile platform designed to help students preparing for government exams in India. It centralizes exam notifications, admission schedules, result dates, and job alerts in a simple, student-friendly interface used by thousands of active users.",
        challenge:
            "Students struggle to track multiple government exam notifications, admission dates, and job postings scattered across different websites.",
        solution:
            "Created a centralized platform with daily notifications, organized exam schedules, and backend-managed content for real-time updates.",
        result:
            "Successfully serving 10,000+ students with daily exam updates and job notifications. High engagement with returning users.",
        features: [
            "Central and State government exam information",
            "Daily job notifications and vacancy alerts",
            "Exam calendar with admission and result dates",
            "Push notifications for important updates",
            "Bookmark and save exams for quick access",
            "Backend-managed content system for real-time updates",
            "Offline access to saved content",
            "Clean, distraction-free student-focused UI"
        ],
        techStack: ["Android", "Kotlin", "Firebase Firestore", "FCM Notifications", "REST APIs", "Room Database"],
        screenshots: [
            "/projects/govt-exam/1.png",
            "/projects/govt-exam/2.png",
            "/projects/govt-exam/3.png"
        ]
    },
    {
        slug: "job-finder",
        title: "Job Finder Mobile Application",
        type: "Personal Project",
        logo: "/projects/job-finder/logo.png", // ← NEW

        cardDescription:
            "Lightweight job search app with filters and saved listings.",
        description:
            "An efficient Android application that helps job seekers search, filter, and save job listings from multiple sources. Built with focus on speed, simplicity, and usability for non-technical users looking for employment opportunities.",
        challenge:
            "Job seekers need a simple, fast way to browse opportunities without complex interfaces or slow-loading apps.",
        solution:
            "Developed a lightweight app with smart filters, instant search, and offline-capable saved jobs using local caching.",
        result:
            "Lightweight app with fast search and smooth performance, helping users find relevant jobs quickly.",
        features: [
            "Advanced job search with location and category filters",
            "Save jobs for later viewing (offline access)",
            "Recent searches and job recommendations",
            "Direct apply links to company portals",
            "Backend-powered real-time job listings",
            "Clean, minimal UI for fast navigation",
            "Share job listings with friends",
            "Fast and lightweight (under 10MB)"
        ],
        techStack: ["Android", "Kotlin", "REST APIs", "Room Database", "Retrofit", "Material Design"],
        screenshots: [
            "/projects/job-finder/img1.jpg",
            "/projects/job-finder/img2.jpg",
            "/projects/job-finder/img3.jpg"
        ]
    }
];
