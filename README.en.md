ToDo List Application - README Overview The ToDo List application is a web-based
tool designed to help users efficiently manage their daily tasks and priorities.
This application allows users to add, edit, prioritize, and delete tasks,
providing a seamless experience for organizing their to-dos. It's ideal for
anyone looking to keep track of tasks, whether they are students, professionals,
or anyone who needs an organized approach to their day-to-day activities.

<!-- !---------------------------------------------------------------------------------- -->

Features Add New Tasks: Users can easily add new tasks by entering the task name
and selecting a priority (Low, Medium, High). Edit Tasks: Users can edit
existing tasks to update the name or priority. Task Prioritization: Tasks are
automatically sorted by priority, ensuring that the most important tasks are
always at the top of the list. Delete Tasks: Users can remove tasks from the
list once they are no longer needed. Mark Tasks as Done: Tasks can be marked as
completed, which visually differentiates them from pending tasks. Persistent
Storage: The application uses local storage to save the tasks, so even after
closing the browser, the tasks remain intact.

<!-- !---------------------------------------------------------------------------------- -->

Technologies Used HTML5 & CSS3: The application structure and styling were built
using HTML5 and CSS3, ensuring a responsive and user-friendly interface.
JavaScript (ES6): Core functionality for adding, editing, and deleting tasks was
implemented using modern JavaScript features. Local Storage API: To store tasks
persistently, the Local Storage API was used, enabling the tasks to be saved
even when the browser is closed. IziToast: This library was utilized for elegant
notifications to inform users about successful actions or errors. Modular
JavaScript: The codebase is organized into modules, making it more manageable
and easier to maintain.

<!-- !---------------------------------------------------------------------------------- -->

How It Works Adding a Task:

The user inputs a task name and selects its priority. Upon submission, the task
is added to the list and sorted by priority. Editing a Task:

Users can click on the "Edit" button next to a task to modify its details. The
task's name and priority can be updated, and changes are saved instantly.
Deleting a Task:

Each task has a "Delete" button, which removes the task from the list. Marking a
Task as Done:

Users can mark tasks as completed, which visually crosses out the task,
indicating it's done. Persistent Data:

All tasks are saved to local storage, so they persist across sessions.
Step-by-Step Implementation Project Setup:

Initiated the project by setting up the basic HTML structure and linked the CSS
and JavaScript files. Creating the UI:

Designed the UI components including the task input form, task list, and buttons
for adding, editing, and deleting tasks. Used Flexbox and other CSS3 features to
ensure responsiveness and a clean layout. Adding Task Functionality:

Implemented a form submission handler that captures the task name and priority,
creates a new task object, and appends it to the list. Tasks are sorted by
priority before being rendered on the page. Editing and Deleting Tasks:

Added functionality to edit existing tasks, allowing users to update task
details inline. Implemented task deletion with a confirmation step to prevent
accidental deletions. Persistent Storage:

Leveraged the Local Storage API to save tasks locally on the user’s device.
Implemented functions to load tasks from storage on page load and save new or
edited tasks automatically. User Feedback:

Integrated iziToast for user notifications, enhancing the user experience with
visual feedback on task actions. Benefits of the Application User-Friendly
Interface: The application is designed to be intuitive, with all essential
features easily accessible. Time Management: Helps users prioritize tasks,
ensuring that critical tasks are completed first. Persistence: Tasks are stored
in local storage, so users don’t have to worry about losing their to-dos.
Customization: Users can edit tasks at any time, allowing for flexibility in
managing their tasks. Responsiveness: The application is fully responsive and
can be used on various devices, from desktops to smartphones.

<!-- !---------------------------------------------------------------------------------- -->

Target Audience This ToDo List application is ideal for:

Students: Manage assignments, projects, and study schedules. Professionals: Keep
track of work tasks, deadlines, and meetings. Busy Individuals: Organize
personal tasks, from grocery lists to daily chores. Anyone: Who needs an
easy-to-use tool for managing their tasks efficiently. This application is a
versatile tool for anyone looking to improve their productivity and task
management. With its simple interface and powerful features, it's an excellent
addition to your daily routine.
