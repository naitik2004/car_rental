# 🚗 Car Rental Platform — AutoReserve

**AutoReserve** is a full-stack web application that makes car booking and management easy and transparent.  
Users can browse and rent cars, while admins (car owners) can manage their vehicle listings — all through a secure authentication system built from scratch.

---

## 🌟 Features

### 👤 Authentication
- Custom **Login / Signup** (no third-party auth)
- Secure **JWT-based** authentication
- **Role-based access control** (Admin vs User)
- Persistent sessions using `localStorage`

### 🚗 Car Management
- Admins can **add, update, and delete cars**
- Each car includes name, brand, type, price per day, and image
- Cars are linked to their respective owners

### 🧭 User Dashboard
- Browse all available cars
- Book cars (upcoming feature)
- View active and past bookings

### 🧑‍💼 Admin Dashboard
- Manage your listed cars
- View all bookings for your cars
- Admin-only APIs protected by middleware

### 💻 Tech Highlights
- Fully **TypeScript**-based frontend
- **Responsive UI** using Tailwind CSS
- **Prisma ORM** with MySQL database
- **Express.js** backend
- Hosted frontend & backend ready for deployment

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React + Vite + TypeScript + Tailwind CSS |
| Backend | Node.js + Express.js |
| Database | MySQL (via Prisma ORM) |
| Auth | JSON Web Tokens (JWT) |
| Deployment | (Optional) Vercel / Render / Railway |

---

## ⚙️ Project Setup

### 1️⃣ Clone the Repository
git clone https://github.com/naitik2004/car_rental.git
cd car_rental
2️⃣ Backend Setup
bash
Copy code
cd backend
npm install
Create a .env file inside backend/ with:

env

DATABASE_URL="mysql://user:password@localhost:3306/car_rental"
JWT_SECRET="yoursecretkey"
PORT=3000

Then:
npx prisma migrate dev
npm start
Server will start on http://localhost:3000.

3️⃣ Frontend Setup
cd ../frontend
npm install
npm run dev
Frontend will start on http://localhost:5173.

🧠 Role System
Role	Description
USER	Default for all signups. Can browse and book cars.
ADMIN	Assigned manually in Prisma Studio (npx prisma studio). Can manage cars and view all bookings.

🧰 Scripts
Command	Description
npm start	Start backend (Nodemon)
npx prisma studio	Open Prisma DB UI
npm run dev	Start frontend dev server

📸 Screenshots (Coming Soon)
Login / Signup Page

Admin Dashboard

User Dashboard

💡 Future Enhancements
✅ Car image uploads (Cloudinary)

✅ Search, filter & pagination

✅ Booking & payment system

✅ Multi-admin car management

✅ Email / SMS confirmations




## 👨‍💻 Author

**Naitik Pandey**  
💼 Full-Stack Developer  
📧 [naitik123456789pandey@gmail.com](mailto:naitik123456789pandey@gmail.com)  
🌐 [GitHub](https://github.com/naitik2004)



📝 License
This project is open source under the MIT License.
