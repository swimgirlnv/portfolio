import "./routes.css";
import { HashLink as Link } from "react-router-hash-link";

function CCGPT() {
  return (
    <div className="explainer-page">
      <div className="content-container">
        <div className="content">
          <h1 className="title">CC GPT</h1>
          <hr className="hr"></hr>
          <div className="part">
            <p>
              I developed a comprehensive Residence Hall Management Application aimed at 
              streamlining the management and communication within a university residence hall. 
              This project incorporates both backend and frontend technologies, delivering a robust 
              platform for students and administrators.
            </p>
            <br></br>
            <p>
              <b>Key Features:</b>
              <ul style={{padding: '20px'}}>
                <li><i>AI Assistant:</i> 
                <br />
                Created an OpenAI Assistant that uses uploaded files from the Community Coordinator training to accurately answer student queries about their residential experience.</li>
                <br />
                <li><i>Digital Bulletin Board:</i> 
                <br />
                Formed an event posting forum for administrators to advertise events in the building and inform students of important information regarding the residence hall.</li>
                <br />
                <li><i>Student Registration & Authentication:</i> 
                <br />
                Implemented secure JWT authentication, allowing students to register, log in, and manage their profiles.</li>
                <br />
                <li><i>Admin Pre-Set & Automatic Login:</i> 
                <br />
                Pre-seeded administrators with automatic login capabilities, ensuring quick and secure access to the admin dashboard.</li>
                <br />
                <li><i>React Frontend:</i> 
                <br />
                Built an interactive and user-friendly frontend using React, providing a seamless experience for both students and administrators.</li>
                <br />
                <li><i>Role-Based Access Control:</i> 
                <br />
                Designed role-based access control to differentiate between students and administrators, ensuring appropriate access levels for different user types.</li>
                <br />
                <li><i>Secure Data Management:</i> 
                <br />
                Leveraged MongoDB for data storage, ensuring the secure handling of user information, including password hashing and token generation.</li>
              </ul>
            </p>
            <br></br>
            <p>
              <b>Technologies Used:</b>
              <ul style={{padding: '20px'}}>
                <li><i>Frontend:</i> React, TypeScript</li>
                <li><i>Backend:</i> Node.js, Express.js, JWT, bcrypt</li>
                <li><i>Database:</i> MongoDB</li>
                <li><i>Development Tools:</i> Git, npm, Postman</li>
              </ul>
            </p>
            <br></br>
            <p>
              This application significantly enhances the efficiency of residence hall operations by providing a centralized platform for communication, user management, and role-based access, ultimately contributing to a better living experience for students and streamlined management for administrators.
            </p>
          </div>
        </div>

        <div className="return">
          <a href="https://github.com/swimgirlnv/gradai" target="blank">
            <button className="button">Check out the Repository</button>
          </a>
          <Link to="/#Projects">
            <button className="button">Return to Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CCGPT;
