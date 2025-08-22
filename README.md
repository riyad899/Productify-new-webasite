<h1 align="center">🛒 Productify</h1>

<p align="center">
  A modern <b>product adding and management website</b> built with <b>Next.js</b>, MongoDB, and NextAuth.  
  Productify allows users to seamlessly add, manage, and display products with authentication support, smooth animations, and an interactive UI.
</p>

<hr/>

<h2>🚀 Live Demo</h2>
<p><a href="https://productify.vercel.app" target="_blank">Live Site on Vercel</a></p>

<h2>📂 Repository</h2>
<p><a href="https://github.com/riyad899/Productify.git">GitHub Repository</a></p>

<hr/>

<h2>✨ Features</h2>
<ul>
  <li>🔐 <b>User Authentication</b> with NextAuth (Google & credentials login).</li>
  <li>📦 <b>Add, Manage, and Display Products</b> with MongoDB & Mongoose.</li>
  <li>🎨 <b>Modern UI/UX</b> with Framer Motion animations.</li>
  <li>🔔 <b>Toast Notifications</b> for success/error handling.</li>
  <li>📱 <b>Responsive Design</b> for mobile, tablet, and desktop.</li>
  <li>🖼 <b>Image Slider</b> using Swiper for product showcase.</li>
</ul>

<hr/>

<h2>🛠 Tech Stack & Dependencies</h2>
<ul>
  <li><b>Framework:</b> <a href="https://nextjs.org/">Next.js 15</a></li>
  <li><b>Frontend:</b> React 19, Framer Motion, Swiper, Lucide React Icons</li>
  <li><b>Backend/Database:</b> MongoDB + Mongoose</li>
  <li><b>Authentication:</b> NextAuth</li>
  <li><b>Styling/UX:</b> React Toastify</li>
</ul>

<pre>
<code>{
  "dependencies": {
    "bcryptjs": "^3.0.2",
    "framer-motion": "^12.23.12",
    "lucide-react": "^0.540.0",
    "mongodb": "^6.18.0",
    "mongoose": "^8.17.2",
    "next": "15.5.0",
    "next-auth": "^4.24.11",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "react-toastify": "^11.0.5",
    "swiper": "^11.2.10"
  }
}
</code>
</pre>

<hr/>

<h2>⚙️ Setup & Installation</h2>
<ol>
  <li><b>Clone the repository</b>
    <pre><code>git clone https://github.com/riyad899/Productify.git
cd Productify</code></pre>
  </li>
  <li><b>Install dependencies</b>
    <pre><code>npm install</code></pre>
  </li>
  <li><b>Set up environment variables</b>
    <pre><code>
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
    </code></pre>
  </li>
  <li><b>Run the development server</b>
    <pre><code>npm run dev</code></pre>
    <p>App will run at <a href="http://localhost:3000">http://localhost:3000</a></p>
  </li>
  <li><b>Build for production</b>
    <pre><code>npm run build
npm start</code></pre>
  </li>
</ol>

<hr/>

<h2>🗂 Route Summary</h2>
<table>
  <tr><th>Route</th><th>Description</th></tr>
  <tr><td><code>/</code></td><td>Landing page with product highlights and navigation</td></tr>
  <tr><td><code>/login</code></td><td>Login page (Google & credentials authentication via NextAuth)</td></tr>
  <tr><td><code>/products</code></td><td>Product list page (publicly accessible)</td></tr>
  <tr><td><code>/add-product</code></td><td>Add a new product (authenticated users only)</td></tr>
  <tr><td><code>/api/*</code></td><td>API routes for authentication & product CRUD operations</td></tr>
</table>

<hr/>

<h2>📌 Submission Requirements</h2>
<ul>
  <li>✅ GitHub Repository: <a href="https://github.com/riyad899/Productify.git">Productify Repo</a></li>
  <li>✅ Live Site Link: <i>(Add your deployed Vercel link here)</i></li>
  <li>✅ README.md: Included</li>
</ul>
