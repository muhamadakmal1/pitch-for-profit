<div id="top" class="">

<div align="center" class="text-center">
  <h1>Pitch for Profit 🤑🚀</h1>
  <p><em>Connecting Entrepreneurs and Investors for Mutually Beneficial Pitches</em></p>

  <img alt="last-commit" src="https://img.shields.io/github/last-commit/muhamadakmal1/pitch-for-profit?style=flat&logo=git&logoColor=white&color=indigo" class="inline-block mx-1" style="margin: 0px 2px;">
  <img alt="repo-top-language" src="https://img.shields.io/github/languages/top/muhamadakmal1/pitch-for-profit?style=flat&color=indigo" class="inline-block mx-1" style="margin: 0px 2px;">
  <img alt="repo-language-count" src="https://img.shields.io/github/languages/count/muhamadakmal1/pitch-for-profit?style=flat&color=indigo" class="inline-block mx-1" style="margin: 0px 2px;">
  <p><em>Technologies: React · Bootstrap · Node.js · Express · MongoDB · Chart.js</em></p>
</div>
<br>
<hr>

<h2>📚 Table of Contents</h2>
<ul class="list-disc pl-4 my-0">
  <li class="my-0"><a href="#overview">Overview</a></li>
  <li class="my-0"><a href="#features">Features</a></li>
  <li class="my-0"><a href="#technology-stack">Technology Stack</a></li>
  <li class="my-0"><a href="#project-structure">Project Structure</a></li>
  <li class="my-0"><a href="#getting-started">Getting Started</a>
    <ul class="list-disc pl-4 my-0">
      <li class="my-0"><a href="#prerequisites">Prerequisites</a></li>
      <li class="my-0"><a href="#installation">Installation</a></li>
      <li class="my-0"><a href="#usage">Usage</a></li>
    </ul>
  </li>
  <li class="my-0"><a href="#api-endpoints">API Endpoints</a></li>
  <li class="my-0"><a href="#future-enhancements">Future Enhancements</a></li>
  <li class="my-0"><a href="#license">License</a></li>
</ul>
<hr>

<h2 id="overview">🔍 Overview</h2>
<p><strong>Pitch for Profit</strong> is a full-stack MERN application that connects entrepreneurs and investors through a streamlined pitching and meeting-scheduling platform. Entrepreneurs can create pitch profiles and request meetings, while investors can browse pitches, review metrics, and accept or reject meeting invites. An admin panel provides oversight, user management, and high-level analytics.</p>

<hr>

<h2 id="features">✨ Features</h2>
<ul class="list-disc pl-4 my-0">
  <li class="my-0"><strong>Role-Based Authentication</strong>: JWT-based login/register for Entrepreneurs, Investors, and Admins.</li>
  <li class="my-0"><strong>Entrepreneur Dashboard</strong>:  
    <ul class="list-disc pl-4 my-0">
      <li class="my-0">Create and update pitch profile (company details, funding needs, etc.).</li>
      <li class="my-0">Search and filter investors by industry, location, and funding preferences.</li>
      <li class="my-0">Request meetings with investors; view meeting status (Accepted / Rejected).</li>
      <li class="my-0">View analytics on pitch views, meeting responses, and investor interactions (charts).</li>
    </ul>
  </li>
  <li class="my-0"><strong>Investor Dashboard</strong>:
    <ul class="list-disc pl-4 my-0">
      <li class="my-0">Browse entrepreneur pitches with detailed company summaries.</li>
      <li class="my-0">Accept or reject meeting requests; receive email notifications on new requests.</li>
      <li class="my-0">View analytics on pitches reviewed, meetings scheduled, and success rates (charts).</li>
      <li class="my-0">Invest in companies through integrated action buttons.</li>
    </ul>
  </li>
  <li class="my-0"><strong>Admin Panel</strong>:  
    <ul class="list-disc pl-4 my-0">
      <li class="my-0">Manage user roles (Approve/Block users, update profiles).</li>
      <li class="my-0">Access system-wide analytics (user counts, total meetings, revenue graphs).</li>
      <li class="my-0">Monitor platform health and view logs.</li>
    </ul>
  </li>
  <li class="my-0"><strong>Meeting Scheduler</strong>:  
    <ul class="list-disc pl-4 my-0">
      <li class="my-0">JWT-protected POST /api/meetings to schedule meetings.</li>
      <li class="my-0">Email notifications sent to investors on new meeting requests.</li>
      <li class="my-0">Calendar link generation for confirmed meetings.</li>
    </ul>
  </li>
  <li class="my-0"><strong>Interactive Charts</strong>:  
    <ul class="list-disc pl-4 my-0">
      <li class="my-0">Bar, Line, Pie, and PolarArea charts (React-Chartjs-2) to visualize user engagement and investment metrics.</li>
    </ul>
  </li>
</ul>

<hr>

<h2 id="technology-stack">💻 Technology Stack</h2>
<ul class="list-disc pl-4 my-0">
  <li class="my-0"><strong>Frontend</strong>:  
    <ul class="list-disc pl-4 my-0">
      <li class="my-0">React.js with functional components and Hooks</li>
      <li class="my-0">Bootstrap 5 for responsive styling</li>
      <li class="my-0">React-Chartjs-2 for data visualization</li>
      <li class="my-0">Axios for HTTP requests</li>
    </ul>
  </li>
  <li class="my-0"><strong>Backend</strong>:
    <ul class="list-disc pl-4 my-0">
      <li class="my-0">Node.js with Express.js</li>
      <li class="my-0">MongoDB with Mongoose ODM</li>
      <li class="my-0">JSON Web Tokens (JWT) for authentication</li>
      <li class="my-0">Nodemailer for email notifications</li>
    </ul>
  </li>
  <li class="my-0"><strong>DevOps & Tools</strong>:
    <ul class="list-disc pl-4 my-0">
      <li class="my-0">Git & GitHub for version control</li>
      <li class="my-0">Postman for API testing</li>
    </ul>
  </li>
</ul>
<hr>
<h2 id="project-structure">🗂️ Project Structure</h2>
<dl>
  <dt>🗂️ backend</dt>
  <dd>🗂️ Models</dd>
  <dt>🗂️Routes</dt>
  <dd>🗂️ uploads</dd>
  <dd>📄 index.js (server) </dd>
  <dt>🗂️ frontend</dt>
  <dd>🗂️ public</dd>
  <dd>🗂️ src</dd>
  <dd>📄 index.html </dd>
  <dd>🗂️ src</dd>
</dl>

<hr>

<h2 id="getting-started">🚀 Getting Started</h2>

<h3 id="prerequisites">📌 Prerequisites</h3>
<ul class="list-disc pl-4 my-0">
  <li class="my-0"><strong>Node.js</strong> (v14+)</li>
  <li class="my-0"><strong>npm</strong> or <strong>yarn</strong></li>
  <li class="my-0"><strong>MongoDB</strong> (local installation or MongoDB Atlas)</li>
  <li class="my-0"><strong>Postman</strong> (or similar) for API testing</li>
</ul>

<h3 id="installation">📥 Installation</h3>
<ol>
  <li class="my-0"><strong>Clone the repository</strong>  
    <pre><code>git clone https://github.com/muhamadakmal1/pitch-for-profit.git</code></pre>
  </li>
  <li class="my-0"><strong>Navigate to root directory</strong>  
    <pre><code>cd pitch-for-profit</code></pre>
  </li>
  <li class="my-0"><strong>Install root dependencies</strong>  
    <pre><code>npm install</code></pre>
  </li>
  <li class="my-0"><strong>Install backend dependencies</strong>  
    <pre><code>cd server  
npm install</code></pre>
  </li>
  <li class="my-0"><strong>Install frontend dependencies</strong>  
    <pre><code>cd ../client  
npm install</code></pre>
  </li>
</ol>

<h3 id="usage">💡 Usage</h3>
<ol>
  <li class="my-0"><strong>Start backend server</strong> (from <code>/server</code> folder)  
    <pre><code>npm run dev</code></pre>
    <p>– Runs <code>node server.js</code> (or <code>nodemon server.js</code> if <code>dev</code> script is defined).</p>
  </li>
  <li class="my-0"><strong>Start frontend application</strong> (from <code>/client</code> folder)  
    <pre><code>npm start</code></pre>
    <p>– Launches React app at <code>http://localhost:3000</code>.</p>
  </li>
  <li class="my-0"><strong>Open the app in your browser</strong>  
    and register as an Entrepreneur, Investor, or Admin. Use the dashboard nav to access role-specific features.</p>
  </li>
</ol>
<hr>
<h2 id="api-endpoints">🔗 API Endpoints</h2>
<p>Below are the key backend routes. All endpoints are prefixed with <code>/api</code>.</p>
<ul class="list-disc pl-4 my-0">
  <li class="my-0"><strong>Auth Routes (<code>/api/auth</code>)</strong>  
    <ul class="list-disc pl-4 my-0">
      <li class="my-0"><code>POST /register</code> – Register a new user (entrepreneur/investor/admin)</li>
      <li class="my-0"><code>POST /login</code> – Authenticate and receive JWT token</li>
    </ul>
  </li>
  <li class="my-0"><strong>User Routes (<code>/api/users</code>)</strong>  
    <ul class="list-disc pl-4 my-0">
      <li class="my-0"><code>GET /profile</code> – Get current user’s profile (protected)</li>
      <li class="my-0"><code>PUT /profile</code> – Update user profile</li>
      <li class="my-0"><code>GET /</code> – [Admin] List all users</li>
      <li class="my-0"><code>PUT /:id/block</code> – [Admin] Block or unblock user</li>
    </ul>
  </li>
  <li class="my-0"><strong>Pitch Routes (<code>/api/pitches</code>)</strong>  
    <ul class="list-disc pl-4 my-0">
      <li class="my-0"><code>POST /</code> – Create a new pitch (entrepreneur only)</li>
      <li class="my-0"><code>GET /</code> – List all pitches (investor/admin)</li>
      <li class="my-0"><code>GET /:id</code> – Get pitch details by ID</li>
      <li class="my-0"><code>PUT /:id</code> – Update a pitch (entrepreneur only)</li>
      <li class="my-0"><code>DELETE /:id</code> – Delete a pitch (entrepreneur only)</li>
    </ul>
  </li>
  <li class="my-0"><strong>Meeting Routes (<code>/api/meetings</code>)</strong>  
    <ul class="list-disc pl-4 my-0">
      <li class="my-0"><code>POST /</code> – Schedule a new meeting (entrepreneur only)</li>
      <li class="my-0"><code>GET /</code> – List meetings for current user</li>
      <li class="my-0"><code>PUT /:id/respond</code> – Accept or reject meeting (investor only)</li>
    </ul>
  </li>
</ul>
<hr>
<h2 id="future-enhancements">🔭 Future Enhancements</h2>
<ul class="list-disc pl-4 my-0">
  <li class="my-0">Integrate real-time chat between entrepreneurs and investors.</li>
  <li class="my-0">Add payment gateway to process investments securely.</li>
  <li class="my-0">Implement ratings & reviews for entrepreneur pitches.</li>
  <li class="my-0">Enable multi-region deployment for global scalability.</li>
</ul>
<hr>
<h2 id="license">📄 License</h2>
<p>This project is licensed under the <strong>MIT License</strong>. See the <code>LICENSE</code> file for details.</p>
<hr>
<div align="left"><a href="#top">⬆ Return to Top</a></div>
<hr>
</div>
