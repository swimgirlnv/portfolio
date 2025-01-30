import "./routes.css";
import { HashLink as Link } from "react-router-hash-link";

function EllisSite() {
  return (
    <div className="explainer-page">
      <div className="content-container">
        <div className="content">
          <h1>Ellis Book Series Website</h1>
          <div style={{ textAlign: "left" }}>
            <p>
              The <strong>Ellis Book Series Website</strong> is a custom-built,
              fully responsive platform for author JC Conrad-Ellis, designed to
              promote the *Black Diamond Series* and the *Velvet Rope Girls*
              books. This site offers both a user-friendly browsing experience
              for readers and an admin dashboard for managing book entries,
              blogs, and e-commerce functionalities.
            </p>

            <br></br>

            <h3>Key Features</h3>
            <ul>
              <li>
                <strong>Book Display and E-Commerce Integration:</strong> Users
                can browse books, view detailed descriptions, and purchase books
                using Stripe Checkout with integrated shipping and billing
                options.
              </li>
              <li>
                <strong>Admin Dashboard:</strong> The admin can log in using
                Google Authentication to manage book entries, edit blogs, and
                access Stripe account details.
              </li>
              <li>
                <strong>Responsive Carousel:</strong> The homepage features a
                dynamic carousel that highlights the series' upcoming releases,
                latest blog posts, and promotional content.
              </li>
              <li>
                <strong>Dynamic Content Management:</strong> The site allows new
                content to be added and managed from a centralized dashboard,
                without requiring manual updates to the codebase.
              </li>
              <li>
                <strong>Domain Integration:</strong> The website is hosted on
                Vercel and supports multiple domains (e.g.,{" "}
                <em>blackdiamondseries.net</em>,{" "}
                <em>blackdiamondvelvetropeseries.com</em>), with DNS records
                configured via GoDaddy.
              </li>
            </ul>

            <br></br>

            <h3>Technologies Used</h3>
            <ul>
              <li>
                <strong>React.js:</strong> For the frontend UI
              </li>
              <li>
                <strong>Firebase:</strong> For authentication, Firestore
                database, and cloud functions
              </li>
              <li>
                <strong>Stripe:</strong> For secure payment processing
              </li>
              <li>
                <strong>Vercel:</strong> For deployment and domain management
              </li>
              <li>
                <strong>CSS & Responsive Design:</strong> Ensures a
                mobile-friendly experience across all devices
              </li>
            </ul>

            <br></br>

            <h3>Challenges and Solutions</h3>
            <p>
              One of the key challenges was transitioning from Stripe test mode
              to live production mode. This required careful management of API
              keys, DNS updates, and content security policies. Additionally,
              integrating multiple custom domains with GoDaddy and Vercel
              involved resolving conflicts between existing DNS records.
            </p>

            <br></br>
            <h3>My Role</h3>
            <p>
              I was responsible for the full-stack development of this site,
              including setting up the React frontend, Firebase backend, Stripe
              integration, and deployment on Vercel. I also worked closely with
              the client to ensure the site met their needs for content
              management and e-commerce.
            </p>
          </div>
        </div>

        <div className="return">
          <Link to="/#Projects">
            <button className="button">Return to Projects</button>
          </Link>
          <a href="https://www.blackdiamondseries.net/" target="_blank">
            <button className="button">Check out the Site</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default EllisSite;
