import { Dictionary } from "./id";

export const en: Dictionary = {
  navbar: {
    home: "Home",
    test: "Tests",
    features: "Features",
    leaderboard: "Leaderboard",
    about: "About Us",
    blog: "Blog",
    login: "Log in",
    register: "Sign up",
  },
  hero: {
    badge: "ONLINE MATH TEST PLATFORM",
    title: "Measure Your Math Intelligence, Discover",
    titleHighlight: "Your Potential.",
    description: "ReMath is an intelligent platform to measure, analyze, and develop your mathematical skills accurately, interactively, and fun for everyone.",
    startBtn: "Start Test Now",
    exploreBtn: "See How It Works",
    activeUsers: "users",
    testsTaken: "Tests Taken",
  },
  features: {
    title: "Why Choose ReMath",
    description: "The best features designed to help you understand your math potential.",
    cards: [
      {
        title: "Adaptive Testing",
        description: "Question difficulty automatically adjusts to your ability as you answer.",
      },
      {
        title: "In-Depth Analysis",
        description: "Get detailed reports on your strengths and weaknesses in every math topic.",
      },
      {
        title: "Learning Recommendations",
        description: "The system provides material suggestions based on your test results.",
      },
      {
        title: "Global Leaderboard",
        description: "Compare your score with other users and reach the top of the leaderboard.",
      },
      {
        title: "Comprehensive Question Bank",
        description: "Thousands of practice questions of varying difficulty updated regularly.",
      },
      {
        title: "Achievement Certificates",
        description: "Get proof of ability for every level of intelligence you successfully achieve.",
      },
    ]
  },
  howItWorks: {
    title: "How It Works?",
    description: "A simple process to identify your abilities and develop your mathematical potential.",
    steps: [
      {
        title: "Register & Create Account",
        description: "Create a free account and complete your short profile.",
      },
      {
        title: "Take a Test",
        description: "Choose a suitable test and work on it with focus.",
      },
      {
        title: "Get Results",
        description: "View your score, analysis, and study recommendations.",
      },
      {
        title: "Improve Potential",
        description: "Learn more effectively and achieve the best version of yourself.",
      },
    ]
  },
  popularTests: {
    title: "Popular Test Choices",
    description: "Start with your favorite topics and test your skills now.",
    viewAll: "View all tests →",
    startBtn: "Start Test",
    tests: [
      { title: "Arithmetic", questions: "20 Questions" },
      { title: "Algebra", questions: "25 Questions" },
      { title: "Geometry", questions: "20 Questions" },
      { title: "Mathematical Logic", questions: "20 Questions" },
      { title: "Statistics & Data", questions: "20 Questions" },
    ]
  },
  stats: {
    items: [
      { value: "50,000+", label: "Active Users" },
      { value: "200,000+", label: "Tests Completed" },
      { value: "95%", label: "System Accuracy" },
      { value: "20+", label: "Math Topics" },
    ]
  },
  testimonials: {
    title: "What They Say?",
    description: "Stories from users who have grown with ReMath.",
    reviews: [
      {
        name: "Rizky Pratama",
        role: "Student",
        quote: "ReMath helped me identify my weaknesses in algebra and how to improve. The results are very detailed.",
      },
      {
        name: "Salsa Anindita",
        role: "High School Student",
        quote: "The questions are challenging but fun. I'm more motivated to study math every day.",
      },
      {
        name: "Dimas Wahyu",
        role: "Teacher",
        quote: "As a teacher, ReMath is very helpful for analyzing student abilities objectively and quickly.",
      },
    ]
  },
  cta: {
    title: "Ready to discover your potential?",
    description: "Start your journey with ReMath today and find your best mathematical abilities.",
    startBtn: "Start Test Now",
  },
  faq: {
    title: "Frequently Asked Questions",
    description: "Find answers to common questions about the ReMath platform.",
    questions: [
      {
        q: "What is ReMath?",
        a: "ReMath is a smart diagnostic math testing platform designed to accurately measure, analyze, and map your math potential."
      },
      {
        q: "Are the tests on ReMath paid?",
        a: "Currently, all basic features and tests on ReMath are fully accessible for free to help improve math education."
      },
      {
        q: "How does the adaptive test system work?",
        a: "Our system uses a special algorithm that will adjust the difficulty level of the next question based on your previous answer (right or wrong)."
      },
      {
        q: "Is there a time limit when taking the test?",
        a: "Yes, each test has a time limit that varies depending on the number of questions and the difficulty level to train your time management."
      },
      {
        q: "Can I retake a test I have already completed?",
        a: "Of course! You can retake the test at any time. We even recommend it so you can see your score progress."
      },
      {
        q: "How do I read the test analysis report?",
        a: "After completing the test, go to the Dashboard or Analysis menu. You will see a graph of your strengths and weaknesses in each topic."
      },
      {
        q: "Are the questions according to the school curriculum?",
        a: "Our questions are prepared following the national basic math competency standards but are designed to focus more on understanding concepts and logic."
      },
      {
        q: "How do I get a global ranking?",
        a: "The more tests you complete with high scores, the more XP you get. Your ranking will automatically go up on the Leaderboard."
      }
    ]
  },
  footer: {
    description: "An intelligent platform to measure, analyze, and develop mathematical intelligence accurately and reliably.",
    productsTitle: "Platform",
    products: {
      test: "Start Test",
      features: "How it Works",
      leaderboard: "Leaderboard",
      pricing: "Advantages",
    },
    companyTitle: "Support",
    company: {
      about: "Help Center",
      blog: "FAQ",
      career: "User Guide",
      contact: "Contact Us",
    },
    newsletterTitle: "Get the latest updates",
    newsletterDesc: "Subscribe to the ReMath newsletter.",
    placeholder: "Enter your email",
    copyright: "© 2026 ReMath. All rights reserved."
  },
  auth: {
    brandTagline: "The smart platform to measure and develop your mathematical intelligence.",
    // Sign In
    signInTitle: "Sign In to Your Account",
    signInSubtitle: "Welcome back! Sign in to continue your learning journey.",
    emailLabel: "Email",
    emailPlaceholder: "name@email.com",
    passwordLabel: "Password",
    passwordPlaceholder: "Enter your password",
    forgotPasswordLink: "Forgot password?",
    signInBtn: "Sign In",
    noAccount: "Don't have an account?",
    signUpLink: "Sign up now",
    orContinueWith: "or continue with",
    googleBtn: "Google",
    githubBtn: "GitHub",
    // Sign Up
    signUpTitle: "Create New Account",
    signUpSubtitle: "Join 50,000+ users who have already developed their math potential.",
    fullNameLabel: "Full Name",
    fullNamePlaceholder: "Enter your full name",
    confirmPasswordLabel: "Confirm Password",
    confirmPasswordPlaceholder: "Re-enter your password",
    agreeTerms: "I agree to the",
    termsLink: "Terms & Conditions",
    andText: "and",
    privacyLink: "Privacy Policy",
    signUpBtn: "Sign Up",
    hasAccount: "Already have an account?",
    signInLink: "Sign In",
    passwordStrength: {
      weak: "Weak",
      fair: "Fair",
      good: "Good",
      strong: "Strong",
    },
    // Forgot Password
    forgotTitle: "Forgot Password?",
    forgotSubtitle: "Enter your registered email and we'll send instructions to reset your password.",
    sendResetBtn: "Send Reset Link",
    backToSignIn: "Back to sign in",
    forgotSuccessTitle: "Check Your Email!",
    forgotSuccessMsg: "We've sent password reset instructions to",
    forgotSuccessNote: "Didn't receive the email? Check your spam folder or resend.",
    resendEmail: "Resend Email",
    // Verification
    verifyTitle: "Verify Your Email",
    verifySubtitle: "Enter the 6-digit verification code sent to",
    verifyBtn: "Verify",
    resendCode: "Resend Code",
    resendIn: "Resend in",
    seconds: "seconds",
    didntReceive: "Didn't receive the code?",
  },
  dashboard: {
    sidebar: {
      home: "Home",
      myTests: "My Tests",
      analysis: "Analysis",
      leaderboard: "Leaderboard",
      learn: "Learn",
      settings: "Settings",
      more: "More"
    },
    header: {
      search: "Search tests, topics, or materials...",
      notifications: "Notifications",
      noNotifications: "No new notifications.",
      viewProfile: "View Profile",
      logout: "Logout",
      roleAdmin: "Administrator",
      roleUser: "Student"
    },
    welcome: {
      greeting: "Hello, {name}! 👋",
      subtitle: "Keep up the spirit to grow today! You're one step closer to becoming the best version of yourself.",
      streakTitle: "Learning Streak",
      streakDays: "days",
      streakSub: "in a row",
      targetTitle: "Weekly Target",
      targetSub: "questions",
      streakPopupTitle: "STREAK +1!",
      streakPopupDesc: "Awesome! 🔥<br/>You have studied for {days} days in a row. Keep it up!",
      streakPopupBtn: "Continue Learning"
    },
    statCard: {
      mathScore: "Math Score",
      noTestHistory: "No test history yet",
      beginner: "Beginner",
      rank: "Your Rank",
      completeFirstTest: "Complete your first test",
      accuracy: "Answer Accuracy",
      learningTime: "Total Learning Time"
    },
    badgeCard: {
      title: "Latest Badges",
      viewAll: "View all",
      bestTest: "Your Best Subject",
      noMathYet: "No Math Yet",
      startTestNow: "Start a test now"
    },
    dailyChallenge: {
      title: "Daily Challenge",
      endsIn: "Ends in",
      get: "and get",
      points: "points",
      startChallenge: "Start Challenge",
      challenges: [
        "Complete 15 logic questions today",
        "Get a score of 800+ in Algebra",
        "Complete 3 mixed tests",
        "Answer 20 questions without mistakes",
        "Learn 2 new topics today"
      ]
    },
    recentTests: {
      title: "Recent Test History",
      viewAll: "View all",
      doAgain: "Retake",
      empty: "No test history yet."
    },
    recommendedTests: {
      title: "Recommended Tests for You",
      subtitle: "Recommended tests based on your results and progress",
      viewAll: "View all",
      startBtn: "Start",
      questions: "Q's"
    },
    strengthWeakness: {
      title: "Strongest & Weakest Topics",
      strongest: "Strongest",
      weakest: "Needs Improvement",
      viewAnalysis: "View Analysis",
      empty: "Complete your first test to see the analysis."
    },
    learningTarget: {
      title: "Learning Targets",
      subtitle: "Complete your targets and improve your skills!",
      viewAll: "View All Targets",
      statusCompleted: "Completed",
      statusContinue: "Continue",
      statusNew: "New",
      empty: "No learning targets yet."
    },
    learnPage: {
      title: "Hello {name}, Continue Learning!",
      subtitle: "Here are the recommended learning modules based on your latest diagnostic test results.",
      progress: "Progress",
      video: "Videos",
      startLearn: "Start Learning",
      locked: "Locked (Finish test first)",
      modalTitle: "Learning Module",
      modalSubtitle: "Video Materials & Exercises",
      playlist: "Playlist",
      conceptPart: "Basic Concepts Part",
      videoMins: "minutes",
      modules: {
        aljabar: "Algebra",
        geometri: "Geometry",
        kalkulus: "Calculus",
        statistika: "Statistics",
        levelSmp: "Basic (Junior High)",
        levelSma: "Intermediate (High School)",
        levelSmaAdvanced: "Advanced (High School)",
        levelSd: "Basic (Elementary)"
      }
    }
  }
};
