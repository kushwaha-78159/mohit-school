# 🏫 Manya Public School

> **Education • Values • Future**

A modern, responsive and database-powered school website built for **Manya Public School**.

The project provides a complete public-facing school website along with a CMS-style admin panel for managing admission enquiries, contact messages, gallery images and classes/fees.

---

## 📌 Project Overview

**Manya Public School** is a full-stack school website designed to provide parents, students and visitors with easy access to important school information.

The website includes:

- School information
- About the school
- Classes and fee details
- Admission information
- Online admission enquiry
- Contact form
- School gallery
- School contact information
- Responsive design
- Admin dashboard
- Database-backed content management

The admin panel allows authorized school administrators to manage website content and incoming enquiries without directly editing the source code.

---

# ✨ Features

## 🌐 Public Website

The public website includes:

- Modern professional UI
- Responsive design
- Mobile-friendly navigation
- School branding
- School logo
- Home hero/admission image
- About section
- Classes & Fees
- Gallery
- Admission enquiry form
- Contact form
- School contact details
- Call/contact actions
- Responsive footer
- Database-driven content

---

# 📄 Website Pages

## 🏠 Home

**Route:**

```text
/
```

The Home page contains:

- Hero section
- Admission image
- School introduction
- School highlights
- Educational values
- Student development section
- Statistics
- Admission call-to-action
- Contact information

### Home Hero Image

The current hero image is stored at:

```text
public/images/home-hero.jpeg
```

---

## 🏫 About

**Route:**

```text
/about
```

The About page provides information about:

- Manya Public School
- Educational approach
- School values
- Student development
- Discipline
- Learning environment

---

## 📚 Classes & Fees

**Route:**

```text
/classes
```

The Classes & Fees page displays published class and fee information from PostgreSQL.

Each class can contain:

- Class name
- Description
- Admission fee
- Monthly fee
- Annual fee
- Published/unpublished status

The content is managed from the admin panel.

---

## 🖼️ Gallery

**Route:**

```text
/gallery
```

The Gallery page displays published school images.

Gallery content is managed through:

```text
/admin/gallery
```

Administrators can:

- Add images
- Upload images
- Add titles
- Add descriptions
- Edit gallery items
- Publish images
- Unpublish images
- Delete images

---

## 📝 Admissions

**Route:**

```text
/admissions
```

Parents/guardians can submit an admission enquiry.

The form collects:

- Student name
- Parent/Guardian name
- Phone number
- Email address
- Class
- Additional message

After submission, the enquiry is stored in PostgreSQL.

Administrators can view enquiries from:

```text
/admin/admissions
```

---

## 📞 Contact

**Route:**

```text
/contact
```

Visitors can contact the school through the contact form.

The form collects:

- Name
- Phone number
- Email address
- Message

Submitted messages are stored in PostgreSQL and can be managed through:

```text
/admin/contacts
```

---

# 🔐 Admin Panel

The website includes a CMS-style administration system.

## Admin Login

```text
/admin/login
```

## Admin Dashboard

```text
/admin
```

The dashboard provides an overview of:

- Contact messages
- Admission enquiries
- Gallery photos
- Classes
- Fee records
- Recent activity

---

# 📩 Contact Message Management

Admin route:

```text
/admin/contacts
```

Administrators can:

- View contact messages
- Search messages
- Open message details
- View phone number
- View email
- View message
- Change status
- Delete messages

### Message Status

Supported statuses:

```text
NEW
READ
RESOLVED
```

---

# 🎓 Admission Enquiry Management

Admin route:

```text
/admin/admissions
```

Administrators can:

- View admission enquiries
- Search enquiries
- View student details
- View parent/guardian details
- View phone number
- View email
- View selected class
- View additional message
- Change status
- Delete enquiries

### Admission Status

```text
NEW
READ
RESOLVED
```

---

# 🖼️ Gallery Management

Admin route:

```text
/admin/gallery
```

Administrators can:

- Add gallery items
- Upload images
- Add title
- Add description
- Edit gallery items
- Publish/unpublish images
- Delete images

Published images automatically appear on:

```text
/gallery
```

---

# 💰 Classes & Fees Management

Admin route:

```text
/admin/classes
```

Administrators can:

- Add classes
- Edit classes
- Delete classes
- Add class description
- Set admission fee
- Set monthly fee
- Set annual fee
- Publish/unpublish classes

Published classes automatically appear on:

```text
/classes
```

---

# 🔌 API Routes

## Public Contact API

```text
POST /api/contact
```

Used by the public contact form.

Creates a:

```text
ContactMessage
```

database record.

---

## Public Admission API

```text
POST /api/admissions
```

Used by the public admission form.

Creates an:

```text
AdmissionEnquiry
```

database record.

---

# 🔐 Admin APIs

## Contact API

```text
GET    /api/admin/contacts
PATCH  /api/admin/contacts/[id]
DELETE /api/admin/contacts/[id]
```

---

## Admission API

```text
GET    /api/admin/admissions
PATCH  /api/admin/admissions/[id]
DELETE /api/admin/admissions/[id]
```

---

## Gallery API

```text
GET    /api/admin/gallery
POST   /api/admin/gallery
PATCH  /api/admin/gallery/[id]
DELETE /api/admin/gallery/[id]
```

### Gallery Upload

```text
POST /api/admin/gallery/upload
```

---

## Classes API

```text
GET    /api/admin/classes
POST   /api/admin/classes
PATCH  /api/admin/classes/[id]
DELETE /api/admin/classes/[id]
```

---

# 🗄️ Database

The project uses:

**PostgreSQL**

with:

**Prisma ORM**

Current Prisma version:

```text
6.19.0
```

---

# 📊 Database Models

## AdmissionEnquiry

Stores admission form submissions.

Important fields:

```text
id
studentName
parentName
phone
email
className
message
status
createdAt
updatedAt
```

Possible status values:

```text
NEW
READ
RESOLVED
```

---

## ContactMessage

Stores contact form submissions.

Important fields:

```text
id
name
phone
email
subject
message
status
createdAt
```

Possible status values:

```text
NEW
READ
RESOLVED
```

---

## GalleryItem

Stores website gallery content.

Gallery records contain information such as:

```text
id
title
description
imageUrl
isPublished
createdAt
updatedAt
```

---

## ClassFee

Stores class and fee information.

Important fields:

```text
id
className
description
admissionFee
monthlyFee
annualFee
isPublished
createdAt
updatedAt
```

---

# 🛠️ Technology Stack

## Frontend

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Lucide React

## Backend

- Next.js App Router
- Next.js Route Handlers
- Server-side database operations

## Database

- PostgreSQL
- Prisma ORM

## Authentication

- Custom admin authentication
- HTTP-only authentication cookie/session
- Environment-based admin credentials
- Protected admin APIs

## Development

- Git
- GitHub
- GitHub Codespaces
- npm

---

# 📦 Important Dependencies

Main dependencies include:

```text
next
react
react-dom
typescript
tailwindcss
lucide-react
@prisma/client
prisma
bcryptjs
jose
```

---

# 📁 Project Structure

```text
manya-public-school/
│
├── public/
│   ├── images/
│   │   └── home-hero.jpeg
│   │
│   ├── uploads/
│   │   └── gallery/
│   │
│   └── manya-school-logo.png
│
├── prisma/
│   └── schema.prisma
│
├── scripts/
│   └── seed-class-fees.ts
│
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   │
│   │   ├── about/
│   │   │   └── page.tsx
│   │   │
│   │   ├── classes/
│   │   │   └── page.tsx
│   │   │
│   │   ├── gallery/
│   │   │   └── page.tsx
│   │   │
│   │   ├── admissions/
│   │   │   └── page.tsx
│   │   │
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   │
│   │   ├── admin/
│   │   │   ├── page.tsx
│   │   │   ├── login/
│   │   │   ├── contacts/
│   │   │   ├── admissions/
│   │   │   ├── gallery/
│   │   │   └── classes/
│   │   │
│   │   └── api/
│   │       ├── contact/
│   │       ├── admissions/
│   │       │
│   │       └── admin/
│   │           ├── contacts/
│   │           ├── admissions/
│   │           ├── gallery/
│   │           └── classes/
│   │
│   ├── components/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   │
│   └── lib/
│       ├── prisma.ts
│       └── admin-auth.ts
│
├── .env
├── .env.local
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── README.md
```

---

# ⚙️ Environment Variables

Create:

```text
.env.local
```

Example:

```env
DATABASE_URL="your-postgresql-database-url"

ADMIN_EMAIL="your-admin-email"

ADMIN_PASSWORD="your-secure-admin-password"

AUTH_SECRET="your-long-random-auth-secret"
```

### Important Security Rule

Never commit real production credentials to GitHub.

Do not expose:

```text
DATABASE_URL
ADMIN_PASSWORD
AUTH_SECRET
```

Use your hosting platform's environment variable system for production.

---

# 🚀 Installation

## 1. Clone Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

## 2. Enter Project

```bash
cd manya-public-school
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Generate Prisma Client

```bash
npx prisma generate
```

---

# 🗄️ Database Setup

Make sure PostgreSQL is available and `DATABASE_URL` is configured.

Run:

```bash
npx prisma db push
```

Then generate Prisma Client:

```bash
npx prisma generate
```

---

# 🌱 Seed Class & Fee Data

The project includes:

```text
scripts/seed-class-fees.ts
```

Run:

```bash
npx tsx scripts/seed-class-fees.ts
```

After successful execution:

```text
CLASS FEE DATA READY
```

---

# ▶️ Run Development Server

Start the development server:

```bash
npm run dev
```

The application normally runs at:

```text
http://localhost:3000
```

In GitHub Codespaces, open port:

```text
3000
```

from the **PORTS** panel.

---

# 🧪 TypeScript Check

Before committing or deploying, run:

```bash
npx tsc --noEmit
```

The command should finish without TypeScript errors.

---

# 🏗️ Production Build

Run:

```bash
npm run build
```

A successful build means the application has passed the Next.js production compilation stage.

---

# 🔐 Admin Login

Admin login page:

```text
/admin/login
```

Admin credentials should be configured through:

```text
.env.local
```

Example:

```env
ADMIN_EMAIL="admin@manya.school"
ADMIN_PASSWORD="your-secure-password"
AUTH_SECRET="your-long-random-secret"
```

> **Never publish real production credentials inside this README or in a public GitHub repository.**

---

# 🖼️ Image Management

## School Logo

```text
public/manya-school-logo.png
```

## Home Hero Image

```text
public/images/home-hero.jpeg
```

## Gallery Uploads

During local development, gallery uploads are stored under:

```text
public/uploads/gallery/
```

---

# ⚠️ Production Image Storage

Local filesystem storage is suitable for development and testing.

For production deployment, persistent object storage should be preferred.

Possible solutions include:

- Cloudinary
- AWS S3
- Vercel Blob
- Supabase Storage
- Other persistent object storage

This prevents uploaded gallery images from being lost when a deployment filesystem is replaced.

---

# 🔄 Website Content Flow

## Contact Form

```text
Visitor
   │
   ▼
/contact
   │
   ▼
POST /api/contact
   │
   ▼
PostgreSQL
   │
   ▼
ContactMessage
   │
   ▼
/admin/contacts
```

---

## Admission Form

```text
Parent / Guardian
       │
       ▼
 /admissions
       │
       ▼
POST /api/admissions
       │
       ▼
 PostgreSQL
       │
       ▼
AdmissionEnquiry
       │
       ▼
/admin/admissions
```

---

## Gallery

```text
Admin
  │
  ▼
/admin/gallery
  │
  ▼
Upload / Create / Edit
  │
  ▼
Database
  │
  ▼
Published Gallery Items
  │
  ▼
/gallery
```

---

## Classes & Fees

```text
Admin
  │
  ▼
/admin/classes
  │
  ▼
Create / Edit / Delete
  │
  ▼
Database
  │
  ▼
Published ClassFee Records
  │
  ▼
/classes
```

---

# 🔒 Security

The admin system uses protected admin routes and authenticated sessions.

Admin APIs require an authenticated administrator.

## Public users can:

- View website pages
- Submit contact messages
- Submit admission enquiries

## Public users cannot:

- Access admin dashboard
- Edit messages
- Delete messages
- Modify gallery
- Modify classes
- Modify fees

---

# 📱 Responsive Design

The website is designed for:

- Desktop
- Laptop
- Tablet
- Mobile phones

The navigation automatically adapts to smaller screens.

---

# 🎨 Design System

Primary school branding:

### Navy

```text
#071a35
```

### Yellow

```text
#facc15
```

The interface uses:

- Rounded cards
- Soft shadows
- Responsive grids
- Professional typography
- Navy and yellow branding
- Clear form fields
- Responsive navigation
- Mobile-friendly layouts

---

# ☎️ School Contact Information

## School

**Manya Public School**

## Address

**Madalpur, Tulsi Colony**

## Phone

**9873566144**

---

# 🧹 Useful Commands

## Start Development Server

```bash
npm run dev
```

## TypeScript Check

```bash
npx tsc --noEmit
```

## Production Build

```bash
npm run build
```

## Generate Prisma Client

```bash
npx prisma generate
```

## Push Prisma Schema

```bash
npx prisma db push
```

## Seed Class Fees

```bash
npx tsx scripts/seed-class-fees.ts
```

## Git Status

```bash
git status
```

## Add Changes

```bash
git add .
```

## Commit Changes

```bash
git commit -m "Update website"
```

## Push Changes

```bash
git push origin main
```

---

# 🧪 Recommended Testing Checklist

Before deployment, verify all of the following.

## Public Website

- [ ] Home page opens
- [ ] School logo displays
- [ ] Home hero image displays
- [ ] Navigation works
- [ ] About page works
- [ ] Classes & Fees page works
- [ ] Gallery page works
- [ ] Admissions page works
- [ ] Contact page works
- [ ] Phone links work
- [ ] Mobile navigation works

---

## Contact Form

- [ ] Name validation works
- [ ] Phone validation works
- [ ] Message validation works
- [ ] Successful submission shows success message
- [ ] Database record is created
- [ ] Admin can see the message
- [ ] Admin can change message status
- [ ] Admin can delete the message

---

## Admission Form

- [ ] Student name validation works
- [ ] Parent name validation works
- [ ] Phone validation works
- [ ] Class selection works
- [ ] Successful submission shows success message
- [ ] Database record is created
- [ ] Admin can see enquiry
- [ ] Admin can change enquiry status
- [ ] Admin can delete enquiry

---

## Admin Panel

- [ ] Admin login works
- [ ] Unauthorized access is blocked
- [ ] Dashboard works
- [ ] Contact management works
- [ ] Admission management works
- [ ] Gallery management works
- [ ] Classes & Fees management works
- [ ] Logout works

---

# 🚀 Deployment

The project can be deployed on a hosting platform that supports:

- Next.js
- PostgreSQL
- Environment variables
- Persistent object storage for uploads

Recommended production architecture:

```text
                 ┌─────────────────────┐
                 │       Next.js       │
                 │                     │
                 │  Frontend           │
                 │  API Routes         │
                 │  Admin Panel        │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │     PostgreSQL      │
                 │                     │
                 │  School Data        │
                 │  Admissions         │
                 │  Contacts           │
                 │  Classes / Fees     │
                 │  Gallery Metadata   │
                 └─────────────────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │ Persistent Storage  │
                 │                     │
                 │ Gallery Images      │
                 └─────────────────────┘
```

---

# ⚠️ Production Checklist

Before production deployment:

- [ ] Configure production `DATABASE_URL`
- [ ] Configure secure admin credentials
- [ ] Generate a strong `AUTH_SECRET`
- [ ] Configure production environment variables
- [ ] Run Prisma database setup
- [ ] Run production build
- [ ] Configure persistent image storage
- [ ] Test contact form
- [ ] Test admission form
- [ ] Test admin authentication
- [ ] Test gallery management
- [ ] Test classes and fees
- [ ] Test mobile responsiveness
- [ ] Verify all navigation links

---

# 🔐 Production Secrets

Never expose the following values publicly:

```text
DATABASE_URL
ADMIN_PASSWORD
AUTH_SECRET
API KEYS
PRIVATE CREDENTIALS
```

Do not commit:

```text
.env
.env.local
```

to a public GitHub repository.

Use the hosting provider's environment variable manager for production secrets.

---

# 📈 Future Improvements

The project can be extended with additional school-management features.

Possible future improvements:

- Online admission payment
- Online fee payment
- Student login
- Parent login
- Teacher login
- Student dashboard
- Parent dashboard
- Teacher dashboard
- Attendance management
- Examination management
- Result management
- Notice board CMS
- Events management
- Staff management
- Online certificates
- Certificate verification
- WhatsApp integration
- Email notifications
- SMS notifications
- Cloud image storage
- Advanced analytics dashboard
- SEO optimization
- Sitemap
- Google Search Console integration
- School announcements
- Multi-language support

---

# 👨‍💻 Development

This project is built as a full-stack modern school website using:

```text
Next.js
React
TypeScript
Tailwind CSS
Prisma
PostgreSQL
Lucide React
```

The architecture separates:

- Public website
- Admin dashboard
- API routes
- Database operations
- Authentication
- Reusable UI components

---

# 📜 License

This project is developed specifically for:

**Manya Public School**

All school-specific:

- Content
- Branding
- Images
- Logo
- Contact information

should be used only with appropriate authorization.

---

# 🏫 Manya Public School

### Education • Values • Future

**Madalpur, Tulsi Colony**

**Phone:** 9873566144

---

# 📊 Project Status

| Feature | Status |
|---|---|
| Public Website | ✅ Complete |
| Responsive Design | ✅ Complete |
| School Logo | ✅ Complete |
| Home Hero Image | ✅ Complete |
| Home Page | ✅ Complete |
| About Page | ✅ Complete |
| Classes & Fees | ✅ Complete |
| Gallery | ✅ Complete |
| Admission Enquiry | ✅ Complete |
| Contact Form | ✅ Complete |
| PostgreSQL Database | ✅ Complete |
| Prisma ORM | ✅ Complete |
| Admin Authentication | ✅ Complete |
| Admin Dashboard | ✅ Complete |
| Contact Management | ✅ Complete |
| Admission Management | ✅ Complete |
| Gallery Management | ✅ Complete |
| Classes & Fees Management | ✅ Complete |
| Public Contact API | ✅ Complete |
| Public Admission API | ✅ Complete |
| Admin APIs | ✅ Complete |
| Production Foundation | ✅ Ready |

---

## 🎯 Project Summary

**Manya Public School** is a full-stack, responsive and database-powered school website with a CMS-style administration system.

The platform allows visitors to explore the school, view classes and fees, browse the gallery, submit admission enquiries and contact the school.

Authorized administrators can manage:

```text
Admissions
Contacts
Gallery
Classes
Fees
Published Content
```

through a dedicated admin panel.

---

### 🏫 Manya Public School

> **Education • Values • Future**
