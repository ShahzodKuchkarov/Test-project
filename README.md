Approach
The goal of the application was to build a User Management Table using React, Redux, and TypeScript. Below is a breakdown of how the key features were implemented:

1. Fetching User Data:
The user data was fetched from a mock API (JSONPlaceholder) using a GET /users request. The Redux Toolkit’s createAsyncThunk was used to handle the asynchronous data fetching in a clean and structured way. The fetched data was stored in the Redux store for global accessibility throughout the app.

2. Displaying the User Table:
A table was created to display user information (name, username, email, and phone). The table was designed to be responsive, and styled using CSS for a modern and user-friendly layout. Additional enhancements such as zebra striping and hover effects were added for better usability.

3. Filtering Functionality:
Filter inputs were added for each column (name, username, email, and phone). As users type into these inputs, the table dynamically filters the displayed results. The state for each filter is stored locally and updated as users interact with the inputs. Redux is used to centralize the filter state across the application.

4. State Management with Redux:
Redux Toolkit was chosen over the classic Redux approach to simplify the implementation. Redux is used to manage both user data and filter inputs. The use of createSlice for reducer logic and createAsyncThunk for asynchronous actions provided a clean structure for the code.
Redux’s useSelector and useDispatch were used in components to interact with the store, and actions were dispatched to fetch users and apply filters.

5. Type Safety with TypeScript:
TypeScript was used across the entire application to ensure type safety. Types were defined for user data, state, and actions, helping to avoid potential runtime errors. This made the development process more robust and scalable by catching type-related issues early on.

6. Styling:
The app’s UI was styled using CSS to create a modern and clean look. Input fields, the table, and the layout were enhanced with styles such as borders, shadows, and hover effects. Flexbox was used for the alignment of the filter inputs, ensuring the layout was responsive and visually appealing.

Challenges Faced
1. Implementing Redux with TypeScript:

One of the challenges was setting up Redux with TypeScript and ensuring all actions, state, and reducers were properly typed. Initially, there were issues with mismatches between the expected action types and the dispatched actions, especially with asynchronous actions like fetching users. This required careful type annotation for the state and action types to make sure everything aligned correctly with TypeScript.

Additionally, setting up the filters with Redux required balancing between local component state and global state, especially when dispatching filter actions for multiple fields (name, username, etc.). Ensuring these updates were efficient and did not interfere with the user experience was another challenge.

2. Invalid Hook Call Error:
   
During development, there was an error related to the invalid use of React hooks (Invalid hook call). This was traced back to a potential issue with conflicting React versions or the incorrect use of hooks outside functional components. It required checking package versions and ensuring proper usage of useSelector and useDispatch inside functional components.

Overall, this project demonstrated how to combine React, Redux, and TypeScript to create a scalable, type-safe frontend application while overcoming the challenges of managing state, data fetching, and filtering functionality.
