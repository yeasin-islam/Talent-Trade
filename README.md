<p align="center">
  <img src="client/public/WebLogo.png" alt="TalentTrade Logo" width="300" />
</p>
<!-- 
# TalentTrade - Skill Sharing & Professional Networking Platform -->

**Version:** 1.0  
**Date:** September 10, 2025

---

## Table of Contents
1. [Project Overview](#1-project-overview)
    - [Mission Statement](#11-mission-statement)
    - [Problem Statement](#12-problem-statement)
    - [Target Audience](#13-target-audience)
2. [Core Features](#2-core-features)
3. [User Roles & Permissions](#3-user-roles--permissions)
4. [Technical Specification](#4-technical-specification)
5. [Pages & Routes](#5-pages--routes)
6. [Database Schema Design](#6-database-schema-design)
7. [Feature Implementation Roadmap](#7-feature-implementation-roadmap)
8. [Development Roadmap (Phased)](#8-development-roadmap-phased)
9. [Monetization Strategy](#9-monetization-strategy)
10. [Future Enhancements](#10-future-enhancements)
11. [Folder Structure (with responsibility)](#11-folder-structure-with-responsibility)
12. [Testing & Deployment](#12-testing--deployment)
13. [Team Members & Responsibilities](#13-team-members--responsibilities)
14. [Team Member Roles (Optional)](#14-team-member-roles-optional)
15. [Summary](#15-summary)

---

## 1. Project Overview
### 1.1 Mission Statement
To create a dynamic, multi-faceted online platform where individuals can exchange skills, access professional courses, find job opportunities, and build a meaningful professional network in a single integrated ecosystem.

### 1.2 Problem Statement
Professionals and learners currently rely on separate platforms for learning (e.g., Udemy), job hunting (e.g., LinkedIn), and networking (e.g., Facebook). This fragmentation is inefficient. TalentTrade solves this problem by providing one unified ecosystem where skill-sharing connects learning, career growth, and community engagement.

### 1.3 Target Audience
- **Registered Users:** Lifelong learners, hobbyists, and professionals seeking new skills.
- **Tutors:** Experts and teachers looking to monetize their knowledge.
- **Recruiters:** HR professionals and companies sourcing verified skilled individuals.
- **Admins:** Platform managers handling maintenance, moderation, and operations.

---

## 2. Core Features
### 2.1 User & Profile Management
- Secure user authentication (registration, login, password reset)
- Role-based access control (RBAC)
- Comprehensive user profiles (bio, avatar, skills offered/sought, completed swaps, course enrollments, activity feed)

### 2.2 Skill Swapping System
- Propose, accept, decline, and complete skill swaps
- Dashboard to track swap status
- Mutual rating and review system to build trust

### 2.3 Interactive Social Feed
- Central feed displaying posts from all user types
- Post types: Skill Swap Requests, Course Promotions, Job Opportunities
- Users can like, comment, share, and filter posts

### 2.4 Course Marketplace (Tutor)
- Tutors can create, edit, publish, and manage courses (text, video, quizzes)
- Storefront to browse, enroll, and track courses
- Tutor dashboard for student progress and revenue

### 2.5 Job Board (Recruiter)
- Recruiters can post, edit, and manage job listings
- Searchable job board for users and tutors
- Integrated application system with profile submission
- Recruiter dashboard for applicant tracking

### 2.6 Communication & Networking
- Friendship system (add/accept/decline requests)
- Real-time messaging
- Notifications for new messages, swaps, and interactions

### 2.7 Dashboards (User, Tutor, Recruiter, Admin)
- **Registered User:** Swap manager, courses, job applications, notifications, profile insights  
- **Tutor:** Course management, student progress, revenue, messaging, social engagement  
- **Recruiter:** Job posting & management, applicant tracking, analytics, messaging  
- **Admin:** Overview panel, user management, content moderation, swap monitoring, analytics, payments, system settings  

---

## 3. User Roles & Permissions
| Feature | Guest | Registered User | Tutor | Recruiter | Admin |
|---|:---:|:---:|:---:|:---:|:---:|
| View Public Pages | ✅ Read-only | ✅ Full | ✅ Full | ✅ Full | ✅ Full |
| Create/Edit Profile | ❌ | ✅ | ✅ | ✅ | ✅ Manage All |
| Manage Skills | ❌ | ✅ | ✅ | ✅ | ❌ N/A |
| Initiate Skill Swaps | ❌ | ✅ | ✅ | ✅ | ❌ N/A |
| Post to Social Feed | ❌ | ✅ | ✅ | ✅ | ✅ Moderate All |
| Interact (Like/Comment) | ❌ | ✅ | ✅ | ✅ | ✅ Moderate All |
| Manage Friends & Chat | ❌ | ✅ | ✅ | ✅ | ❌ N/A |
| Browse Courses & Jobs | ✅ Read-only | ✅ Full | ✅ Full | ✅ Full | ✅ View All |
| Enroll in Courses | ❌ | ✅ | ✅ | ✅ | ❌ N/A |
| Create & Manage Courses | ❌ | ❌ | ✅ | ❌ | ✅ Manage All |
| Apply for Jobs | ❌ | ✅ | ✅ | ❌ | ❌ N/A |
| Create & Manage Jobs | ❌ | ❌ | ❌ | ✅ | ✅ Manage All |
| Access Admin Panel | ❌ | ❌ | ❌ | ❌ | ✅ Full |

---

## 4. Technical Specification
### 4.1 Technology Stack
- **Frontend:** Next.js (React 18+)
- **UI/Styling:** Tailwind CSS, Shadcn/UI
- **State Management:** Zustand or Redux Toolkit
- **Backend:** Node.js with Express.js or NestJS
- **Database:** MongoDB
- **Authentication:** JWT
- **Real-time:** WebSockets (Socket.IO)
- **Deployment:** Vercel (Frontend), AWS / Heroku / DigitalOcean (Backend & DB)

### 4.2 Architecture Overview
- Monolithic architecture (initially)
- SPA frontend communicates with RESTful backend APIs
- WebSockets for chat and notifications

---

## 5. Pages & Routes
- `/` → Home / Landing page
- `/login` & `/register` → Authentication
- `/feed` → Social feed
- `/profile/:userId` → Public user profile
- `/settings/profile` → Edit profile
- `/swaps` → Swap dashboard
- `/courses` → Course marketplace
- `/courses/:courseId` → Course detail & enrollment
- `/jobs` → Job board
- `/jobs/:jobId` → Job detail & application
- `/messages` → Chat list
- `/messages/:conversationId` → One-on-one chat
- `/admin` → Admin dashboard

---

## 6. Database Schema Design
### Users
```json
{
  "_id": "ObjectId",
  "email": "user@example.com",
  "passwordHash": "hashed_password_string",
  "role": "Registered User",
  "profile": { "firstName": "Yeasin", "lastName": "Islam", "bio": "...", "avatarUrl": "..." },
  "skillsOffering": ["ObjectId_skill1"],
  "skillsSeeking": ["ObjectId_skill2"],
  "friends": ["ObjectId_friend1"],
  "friendRequests": [{"userId": "ObjectId", "direction": "INCOMING"}],
  "createdAt": "ISODate"
}
```

### Skills
```json
{ "_id": "ObjectId", "name": "JavaScript", "category": "Programming" }
```

### Posts
```json
{
  "_id": "ObjectId",
  "authorId": "ObjectId_user",
  "postType": "CoursePromotion",
  "content": "Check out my new course!",
  "metaData": {"courseId": "ObjectId_course"},
  "likes": ["ObjectId_user1"],
  "comments": [{"authorId": "ObjectId", "content": "Looks great!", "createdAt": "ISODate"}],
  "createdAt": "ISODate"
}
```

### Swaps
```json
{
  "_id": "ObjectId",
  "proposerId": "ObjectId_user",
  "receiverId": "ObjectId_user",
  "skillOfferedId": "ObjectId_skill",
  "skillSoughtId": "ObjectId_skill",
  "status": "PENDING",
  "rating": {
    "fromProposer": 5,
    "fromReceiver": 4
  },
  "feedback": {
    "fromProposer": "Great swap experience!",
    "fromReceiver": "Very helpful!"
  },
  "createdAt": "ISODate",
  "updatedAt": "ISODate"
}
```

### Courses
```json
{
  "_id": "ObjectId",
  "tutorId": "ObjectId_user",
  "title": "React for Beginners",
  "description": "Comprehensive course for React beginners",
  "lessons": [
    {
      "lessonId": "ObjectId",
      "title": "Introduction to React",
      "content": "Lesson content here...",
      "resources": ["url_to_pdf", "url_to_video"],
      "quiz": {
        "questions": [
          {
            "question": "What is JSX?",
            "options": ["A", "B", "C", "D"],
            "correctAnswer": "A"
          }
        ]
      }
    }
  ],
  "price": 49.99,
  "students": ["ObjectId_user1", "ObjectId_user2"],
  "enrolledCount": 2,
  "rating": {
    "average": 4.5,
    "reviews": [
      {
        "userId": "ObjectId_user1",
        "rating": 5,
        "comment": "Very useful course!"
      }
    ]
  },
  "createdAt": "ISODate",
  "updatedAt": "ISODate"
}
```

### Jobs
```json
{
  "_id": "ObjectId",
  "recruiterId": "ObjectId_user",
  "title": "Frontend Developer",
  "company": "Tech Solutions Ltd.",
  "description": "Looking for React developer with 2+ years experience",
  "location": "Dhaka, Bangladesh",
  "applyLink": "/jobs/apply/ObjectId_job",
  "status": "ACTIVE",
  "applicantsCount": 10,
  "createdAt": "ISODate",
  "updatedAt": "ISODate"
}
```

### JobApplications
```json
{
  "_id": "ObjectId",
  "jobId": "ObjectId_job",
  "applicantId": "ObjectId_user",
  "status": "APPLIED",
  "resumeUrl": "url_to_resume",
  "coverLetter": "Cover letter text...",
  "appliedAt": "ISODate",
  "updatedAt": "ISODate"
}
```

### Conversations
```json
{
  "_id": "ObjectId",
  "participants": ["ObjectId_user1", "ObjectId_user2"],
  "lastMessageAt": "ISODate",
  "unreadCount": {
    "ObjectId_user1": 2,
    "ObjectId_user2": 0
  },
  "conversationType": "ONE_TO_ONE",
  "createdAt": "ISODate",
  "updatedAt": "ISODate"
}
```

### Messages
```json
{
  "_id": "ObjectId",
  "conversationId": "ObjectId_conversation",
  "senderId": "ObjectId_user",
  "content": "Hello! Are you available for a skill swap?",
  "attachments": ["url_to_file", "url_to_image"],
  "isRead": false,
  "createdAt": "ISODate",
  "updatedAt": "ISODate"
}
```

---

## 7. Feature Implementation Roadmap
**Epic 1: Core User Foundation**
- User Registration & Email Verification
- Secure User Login with JWT
- Password Reset
- Create & Edit Profile
- Add/Remove Skills

**Epic 2: Community & Networking**
- View User Profiles
- Friend Requests Management
- Friends List
- Real-time Messaging

**Epic 3: Skill Swap System**
- Propose/Accept/Decline Swaps
- Swap Dashboard
- Mark Complete
- Rating & Review

**Epic 4: Social Feed**
- Skill Swap Posts
- Course Promotion & Job Posts
- Likes, Comments, Threaded Replies

**Epic 5: Tutor & Courses**
- Role Upgrade System
- Manage Courses & Lessons
- Course Enrollment & Payments
- Tutor Dashboard

**Epic 6: Recruiter & Job Board**
- Manage Job Postings
- Search & Filter Jobs
- Apply for Jobs
- Recruiter Dashboard

**Epic 7: Admin Panel**
- Admin Login
- User Management
- Content Moderation
- Analytics Dashboard

---

## 8. Development Roadmap (Phased)
- **Phase 1:** MVP – Core Platform
- **Phase 2:** Community & Engagement
- **Phase 3:** Professional Features (Courses, Jobs, Tutors, Recruiters)
- **Phase 4:** Scaling & Refinement (Admin, Analytics, Monetization)

---

## 9. Monetization Strategy
- Paid course subscriptions
- Featured job postings
- Premium membership (priority swaps, analytics, badges)

---

## 10. Future Enhancements
- Gamification (points, badges, leaderboards)
- Skill endorsements and course reviews
- Email/SMS notifications
- Mobile app version
- AI-assisted skill recommendations (future upgrade)

---

## 11. Folder Structure (with responsibility)
```
talenttrade/
├── frontend/ (React + Tailwind + Shadcn/UI)
│   ├── public/              # Static files (Munna)
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   ├── images/
│   │   │   ├── logos/
│   │   │   └── avatars/
│   │   └── icons/
│   │       └── src/
│   ├── index.js             # React entry point
│   ├── App.js               # Main App component
│   ├── routes/              # React Router routes (Yeasin)
│   │   ├── PrivateRoutes.js
│   │   ├── UserRoutes.js
│   │   ├── TutorRoutes.js
│   │   ├── RecruiterRoutes.js
│   │   └── AdminRoutes.js
│   ├── components/          # Shared UI components (Yeasin & Humaira)
│   │   ├── buttons/
│   │   ├── cards/           # SwapCard, CourseCard, JobCard
│   │   ├── modals/
│   │   ├── navbar/
│   │   └── footer/
│   ├── layouts/             # Layouts for different roles (Yeasin)
│   │   ├── UserLayout.js
│   │   ├── TutorLayout.js
│   │   ├── RecruiterLayout.js
│   │   └── AdminLayout.js
│   ├── pages/               # Individual page components (Yeasin)
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── Feed.js
│   │   ├── Profile.js
│   │   ├── Swaps.js
│   │   ├── Courses.js
│   │   ├── CourseDetail.js
│   │   ├── Jobs.js
│   │   ├── JobDetail.js
│   │   ├── Messages.js
│   │   ├── Chat.js
│   │   └── dashboards/      # Dashboards by role
│   │       ├── user/
│   │       │   ├── UserDashboard.js
│   │       │   ├── UserProfile.js
│   │       │   ├── UserSwaps.js
│   │       │   ├── UserCourses.js
│   │       │   ├── UserJobs.js
│   │       │   └── UserMessages.js
│   │       ├── tutor/
│   │       │   ├── TutorDashboard.js
│   │       │   ├── TutorProfile.js
│   │       │   ├── TutorCourses.js
│   │       │   ├── TutorStudents.js
│   │       │   ├── TutorSwaps.js
│   │       │   └── TutorMessages.js
│   │       ├── recruiter/
│   │       │   ├── RecruiterDashboard.js
│   │       │   ├── RecruiterProfile.js
│   │       │   ├── RecruiterJobs.js
│   │       │   ├── RecruiterApplicants.js
│   │       │   ├── RecruiterAnalytics.js
│   │       │   └── RecruiterMessages.js
│   │       └── admin/
│   │           ├── AdminDashboard.js
│   │           ├── AdminUsers.js
│   │           ├── AdminRoles.js
│   │           ├── AdminContent.js
│   │           ├── AdminSwaps.js
│   │           ├── AdminJobsCourses.js
│   │           ├── AdminReports.js
│   │           ├── AdminPayments.js
│   │           └── AdminSettings.js
│   ├── hooks/               # Custom hooks (Al Amin)
│   │   ├── useAuth.js
│   │   ├── useFetch.js
│   │   └── useSocket.js
│   ├── utils/               # Helper functions (Al Amin)
│   │   ├── formatDate.js
│   │   ├── validateInput.js
│   │   └── calculateSwapStats.js
│   ├── store/               # Zustand/Redux state management (Humaira)
│   │   ├── userStore.js
│   │   ├── swapStore.js
│   │   └── courseStore.js
│   └── styles/              # Global styles (Humaira)
│       ├── globals.css
│       └── tailwind.css
├── backend/ (Node.js + Express/NestJS)
│   ├── models/              # MongoDB Schemas (Al Amin)
│   ├── routes/              # REST API endpoints (Yeasin)
│   ├── controllers/         # Business logic (Al Amin)
│   ├── services/            # Email, Payments, Notifications (Munna)
│   ├── middlewares/         # Auth, Validation (Yeasin)
│   └── sockets/             # WebSocket (Mehedi)
├── tests/                   # Unit & integration tests (Mehedi)
├── docs/                    # Project documentation (All members)
├── scripts/                 # Deployment scripts (Munna)
├── .env                     # Environment variables
├── package.json
└── README.md
```

---

## 12. Testing & Deployment
- **Unit Testing:** Jest
- **Integration Testing:** Supertest
- **End-to-End Testing:** Cypress / Playwright
- **Manual UAT**
- **Frontend:** Vercel
- **Backend:** AWS EC2 / Heroku
- **Database:** MongoDB Atlas
- **CI/CD:** GitHub Actions
- **Monitoring:** LogRocket (frontend), PM2 & Datadog (backend)

---

## 13. Team Members & Responsibilities
| Member Name        | Responsibility                                 |
|--------------------|-----------------------------------------------|
| [Md. Yeasin Islam](https://github.com/yeasin-islam)  | Lead Project + Manage Admin Workflow + Git&Github (MERN Developer) |
| [Md. Al Amin](https://github.com/alamin-87)        | Layout + Manage Recruiter WorkFlow (Backend Developer) |
| [Nusrat Humaira](https://github.com/nusrathumaira12)     | Manage Tutor Workflow (Frontend Developer) |
| [Aanan Munna](https://github.com/AananMunna)        | Manage User Workflow + Implement Chatting (MERN Developer) |
| [Md. Mehedi Hasan](https://github.com/mehedidevx)       | Auth + Landing Page + Feed (Frontend Developer) |

---

## 14. Team Member Roles (Optional)
- **Project Manager:** *Md. Yeasin Islam*
- **Tech Lead:** *Md. Al-Amin*
- **UI/UX Lead:** *Nusrat Humaira*
- **DevOps Lead:** *Aanan Munna*
- **QA Lead:** *Md. Mehedi Hasan*

---

## 15. Summary
TalentTrade is a unified skill-sharing, networking, and career platform. It bridges learners, tutors, recruiters, and admins under one ecosystem. Built on Next.js, Node.js, MongoDB, Tailwind, and Shadcn/UI, it ensures performance and scalability. With clear dashboards, modular design, and modern deployment, TalentTrade is designed to become a next-generation hub for professional growth.

---

## License

This project is licensed under the MIT License.

<!-- ```
MIT License

Copyright (c) 2025 TalentTrade Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
``` -->
