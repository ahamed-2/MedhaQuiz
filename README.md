# _-🧠 MedhaQuiz _- - Online Examination Platform

![Project Status](https://img.shields.io/badge/Status-Active-success)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

**_-🧠 MedhaQuiz _-** হলো একটি আধুনিক এবং রেসপন্সিভ অনলাইন পরীক্ষা দেওয়ার প্ল্যাটফর্ম। এখানে শিক্ষার্থীরা বিভিন্ন বিষয়ের ওপর এমসিকিউ (MCQ) পরীক্ষা দিতে পারে এবং এডমিনরা সহজেই প্রশ্নপত্র ও ইউজার ম্যানেজ করতে পারেন। প্রজেক্টটি **Vanilla JavaScript** এবং **Firebase** এর ওপর ভিত্তি করে তৈরি।

---

## 🌟 ফিচারসমূহ (Features)

### 👤 ইউজার প্যানেল (Student)
*   **নিরাপদ অথেন্টিকেশন:** ইমেইল এবং পাসওয়ার্ড দিয়ে সাইন-আপ ও লগইন ব্যবস্থা।
*   **পাসওয়ার্ড রিসেট:** পাসওয়ার্ড ভুলে গেলে ইমেইল ভেরিফিকেশনের মাধ্যমে রিসেট করার সুবিধা (Spam ফোল্ডার ওয়ার্নিং সহ)।
*   **Approval System:** নতুন অ্যাকাউন্ট খোলার পর এডমিনের অনুমোদনের জন্য অপেক্ষা করতে হয়। অনুমোদন না পাওয়া পর্যন্ত একটি **পেমেন্ট গেটওয়ে iframe** এবং নোটিশ প্রদর্শিত হয়।
*   **পরীক্ষা ইন্টারফেস:** সহজ এবং সুন্দর UI তে MCQ পরীক্ষা দেওয়ার ব্যবস্থা।
*   **তাৎক্ষণিক ফলাফল:** পরীক্ষা শেষ করার সাথে সাথে স্কোর এবং ভুল উত্তরের সঠিক ব্যাখ্যা (Explanation) দেখা যায়।
*   **রেসপন্সিভ ডিজাইন:** মোবাইল, ট্যাব এবং ডেস্কটপ সব ডিভাইসে পারফেক্ট ভিউ।

### 🛡️ এডমিন প্যানেল (Administrator)
*   **ড্যাশবোর্ড:** লগইন করার পর বিশেষ এডমিন ড্যাশবোর্ড এক্সেস।
*   **ইউজার ম্যানেজমেন্ট:** পেন্ডিং ইউজারদের তালিকা দেখা এবং এক ক্লিকে **Approve** বা **Deactivate** করা।
*   **প্রশ্নপত্র ম্যানেজমেন্ট:**
    *   JSON ফরম্যাটে একসাথে অনেক প্রশ্ন আপলোড করা।
    *   পুরাতন প্রশ্নপত্র ডিলিট করা।
*   **সিকিউরিটি:** শুধুমাত্র এডমিন রোলধারী ব্যক্তিরাই এই প্যানেল এক্সেস করতে পারবে।

---

## 🛠️ টেকনোলজি স্ট্যাক (Tech Stack)
```
| Component | Technology |
| :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) |
| **UI Framework** | Bootstrap 5 |
| **Backend (BaaS)** | Firebase Authentication |
| **Database** | Cloud Firestore |
| **Hosting** | Firebase Hosting |
```
---

## 📂 প্রোজেক্ট স্ট্রাকচার (Project Structure)

```bash
_-🧠 MedhaQuiz _-/
│
├── login.html              # লগইন এবং সাইন-আপ পেজ (Landing Page)
├── index.html              # ইউজার ড্যাশবোর্ড (Subject List)
├── admin.html              # এডমিন প্যানেল
├── exam.html               # পরীক্ষার মূল ইন্টারফেস
├── result.html             # ফলাফল দেখার পেজ
├── payment.html            # পেমেন্ট বা ইন্সট্রাকশন পেজ (Iframe এর জন্য)
│
├── css/                    # স্টাইলশিট ফোল্ডার
│   ├── style.css           # গ্লোবাল স্টাইল
│   ├── auth.css            # অথেন্টিকেশন পেজ স্টাইল
│   ├── exam.css            # এক্সাম এবং রেজাল্ট স্টাইল
│   └── admin.css           # এডমিন প্যানেল স্টাইল
│
├── js/                     # জাভাস্ক্রিপ্ট ফোল্ডার
│   ├── firebase-config.js  # Firebase SDK কনফিগারেশন
│   ├── auth.js             # লগইন/সাইন-আপ/লগআউট লজিক
│   ├── admin.js            # এডমিন ফাংশনালিটি
│   ├── exam.js             # এক্সাম লজিক ও রেন্ডারিং
│   ├── ui.js               # UI/Toast/Spinner কন্ট্রোল
│   └── utils.js            # হেল্পার ফাংশন
│
└── README.md               # ডকুমেন্টেশন
```

🚀 সেটআপ এবং ইন্সটলেশন (Setup Guide)

প্রোজেক্টটি আপনার লোকাল মেশিনে রান করার জন্য নিচের ধাপগুলো অনুসরণ করুন:

১. রিপোজিটরি ক্লোন করুন

```Bash
git clone https://github.com/your-username/_-🧠 MedhaQuiz _-.git cd _-🧠 MedhaQuiz _-```

২. Firebase প্রজেক্ট সেটআপ

Firebase Console এ যান এবং নতুন প্রজেক্ট তৈরি করুন।

Authentication মেনু থেকে Email/Password প্রভাইডার অন করুন।

Firestore Database তৈরি করুন এবং Production Mode সিলেক্ট করুন।

প্রজেক্ট সেটিংস থেকে firebaseConfig অবজেক্টটি কপি করুন।

৩. কনফিগারেশন আপডেট

js/firebase-config.js ফাইলটি ওপেন করুন এবং আপনার firebaseConfig দিয়ে প্রতিস্থাপন করুন:

```JavaScript
const firebaseConfig = { apiKey: "YOUR_API_KEY", authDomain: "YOUR_PROJECT_ID.firebaseapp.com", projectId: "YOUR_PROJECT_ID", storageBucket: "YOUR_PROJECT_ID.appspot.com", messagingSenderId: "YOUR_SENDER_ID", appId: "YOUR_APP_ID" };```

🗄️ ডেটাবেজ স্কিমা (Database Schema)

Firestore-এ দুটি প্রধান কালেকশন ব্যবহার করা হয়েছে:

১. users Collection

FieldTypeDescriptionusernameStringব্যবহারকারীর নামemailStringইমেইল এড্রেসroleStringadmin অথবা userisApprovedBooleantrue (অনুমোদিত) / false (অপেক্ষমান)createdAtTimestampঅ্যাকাউন্ট তৈরির সময়

২. questionPapers Collection

FieldTypeDescriptionsubjectNameStringপরীক্ষার বিষয়ের নামquestionsArrayপ্রশ্নের তালিকা (অবজেক্ট অ্যারে)createdAtTimestampপ্রশ্নপত্র তৈরির সময়

🔒 সিকিউরিটি রুলস (Security Rules)

Firestore Database-এর Rules ট্যাবে গিয়ে নিচের রুলস সেট করুন:

```Firestore
rules_version = '2'; service cloud.firestore { match /databases/{database}/documents { // ইউজাররা নিজের ডাটা দেখবে, এডমিন সব দেখবে match /users/{userId} { allow read, write: if request.auth != null && (request.auth.uid == userId || get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin'); } // অনুমোদিত ইউজাররা প্রশ্নপত্র পড়বে, এডমিন এডিট করবে match /questionPapers/{paperId} { allow read: if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isApproved == true; allow write: if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin'; } } }```

📝 প্রশ্ন আপলোড ফরম্যাট (JSON)

এডমিন প্যানেলে প্রশ্ন আপলোড করার সময় নিচের JSON ফরম্যাটটি ব্যবহার করতে হবে:

```JSON
{ "title": "General Knowledge", "questions": [ { "question": "বাংলাদেশের রাজধানীর নাম কী?", "options": ["চট্টগ্রাম", "খুলনা", "ঢাকা", "রাজশাহী"], "answer": 2, "explanation": "বাংলাদেশের রাজধানী ঢাকা।" }, { "question": "পদ্মা সেতুর দৈর্ঘ্য কত?", "options": ["৬.১৫ কি.মি.", "৫.১৫ কি.মি.", "৪.১৫ কি.মি.", "৭.১৫ কি.মি."], "answer": 0, "explanation": "পদ্মা সেতুর মূল দৈর্ঘ্য ৬.১৫ কিলোমিটার।" } ] }```

`নোট: answer ফিল্ডে সঠিক উত্তরের ইনডেক্স (0 থেকে শুরু) দিতে হবে।`

☁️ ডিপ্লয়মেন্ট (Deployment)

Firebase Hosting এ লাইভ করার জন্য:

Firebase CLI ইন্সটল করুন (যদি না থাকে):

```Bash
npm install -g firebase-tools```

লগইন করুন:

```Bash
firebase login```

প্রজেক্ট ইনিশিয়ালাইজ করুন:

```Bash
firebase init```

(Select Hosting -> Use existing project -> Select _-🧠 MedhaQuiz _- -> Public directory: . (dot) -> Single page app: No)

ডিপ্লয় করুন:

```Bash
firebase deploy```

👨‍💻 ডেভেলপার

প্রজেক্টটি তৈরি করেছেন: _-ᴀʟ ✘ Rᴀʜɪᴍ ❀ 

যেকোনো সমস্যা বা পরামর্শের জন্য যোগাযোগ করুন। হ্যাপি কোডিং! ❤️
