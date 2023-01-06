import TopBar from '../TopBar';
import './routes.css';

function Development () {
  return(
    <div className='explainer-page'>
      <TopBar />
      <br></br>
      <br></br>
      <br></br>

      <div className='content-container'>

      <div className='content'>
      <h1 className="title">Development Project</h1>

      <div className='part'>
        <h3>Goal and Value of Application</h3>
        <hr className='hr'></hr>
        <p>
        The goal of this application was to provide Club Penguin enthusiasts an easy way to add food from multiple different vendors to their cart, as well as to see which foods may be considered desserts, meals, snacks, and drinks.

The value of this application to a user is relatively low since Club Penguin no longer exists, however, if it can provide some nostalgia then the app has succeeded.
        </p>
      </div>

      <div className='part'>
        <h3>Usability Principles Considered</h3>
        <hr className='hr' ></hr>
        <p>
        Everything is clearly labeled for the user to understand what happens when they click on different elements. The filtering elements are on the left of the screen and the cart is on the right of the screen to follow a left-to-right reading pattern.
        </p>
      </div>

      <div className='part'>
        <h3>Organization of Components</h3>
        <hr className='hr'></hr>
        <p>
        The components are in a grid size 3x3. The header takes up the top three sections, then the second row contains a left side-bar, main, and cart element, and then there is a footer on the bottom row.
        </p>
      </div>

      <div className='conclusion'>
        <h3>How Data is Passed Down Through Components</h3>
        <hr className='hr'></hr>
        <p>
        The side-bar is its own component (mostly because the main App.js file was getting cluttered and this made the code cleaner). The side bar has props for a filtering function and a sorting function, which take in the object elements for name and type to sort or filter on. The main section includes a component for displaying the shop items. It uses the item name, image, and price and sends that to ShopItem.js which gets the data directly from the Json. The cart is contained within the App.js file and didn't require its own component file.
        </p>
      </div>

      <div className='conclusion'>
        <h3>How the User Triggers State Changes</h3>
        <hr className='hr'></hr>
        <p>
        The user triggers state changes by clicking on any of the buttons or checkboxes on the app. Clicking on the "reset" buttons for either filter of cart will reset the state of the filters or cart without refreshing the page. Adding and removing items from the cart will set the state of the total in the cart. Selecting different filters will change the state of the displayed items. I had a useEffect for the SideBar component but realized it worked the same without the useEffect so took it out.
        </p>
      </div>
      </div>

      <div className='return'>
        <a href='https://drowningdolphin123.github.io/development/' target='blank'>
          <button className='button'>Explore Project Website</button>
        </a>
        <a href='/'>
          <button className='button'>Return to Home Page</button>
        </a>
      </div>
      </div>
      <div className="footer2">
        <p>Made with love in Providence</p>
      </div>
    </div>
  );
}

export default Development;