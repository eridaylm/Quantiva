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
    description: "Quantiva is an intelligent platform to measure, analyze, and develop your mathematical skills accurately, interactively, and fun for everyone.",
    startBtn: "Start Test Now",
    exploreBtn: "See How It Works",
    activeUsers: "users",
    testsTaken: "Tests Taken",
  },
  features: {
    title: "Why Choose Quantiva",
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
    description: "Stories from users who have grown with Quantiva.",
    reviews: [
      {
        name: "Rizky Pratama",
        role: "Student",
        quote: "Quantiva helped me identify my weaknesses in algebra and how to improve. The results are very detailed.",
      },
      {
        name: "Salsa Anindita",
        role: "High School Student",
        quote: "The questions are challenging but fun. I'm more motivated to study math every day.",
      },
      {
        name: "Dimas Wahyu",
        role: "Teacher",
        quote: "As a teacher, Quantiva is very helpful for analyzing student abilities objectively and quickly.",
      },
    ]
  },
  cta: {
    title: "Ready to discover your potential?",
    description: "Start your journey with Quantiva today and find your best mathematical abilities.",
    startBtn: "Start Test Now",
  },
  footer: {
    description: "An intelligent platform to measure, analyze, and develop mathematical intelligence accurately and reliably.",
    productsTitle: "Products",
    products: {
      test: "Tests",
      features: "Features",
      leaderboard: "Leaderboard",
      pricing: "Pricing",
    },
    companyTitle: "Company",
    company: {
      about: "About Us",
      blog: "Blog",
      career: "Careers",
      contact: "Contact",
    },
    newsletterTitle: "Get the latest updates",
    newsletterDesc: "Subscribe to the Quantiva newsletter.",
    placeholder: "Enter your email",
    copyright: "© 2026 Quantiva. All rights reserved."
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
  }
};
