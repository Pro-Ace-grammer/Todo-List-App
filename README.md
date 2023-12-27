
# Todo List App :memo::pencil:

![Todo-ist Logo](https://github.com/Pro-Ace-grammer/Todo-List-App/assets/96662978/67a4f904-1088-4f30-a020-79021580a057)  
### *A minimalist Todo List application designed to streamline task management for users.*

Todo-ist App is a user-friendly, minimalist Todo List application tailored for efficient task management. Built with Python's Django framework on the backend and a responsive React frontend, it offers a seamless experience for organizing tasks, categorizing them, and keeping track of task history. Elevate your productivity with our intuitive interface and robust feature set.




## :star2: Prerequisites

#### Backend:
- [Python 3.x](https://www.python.org/downloads/) :link:
- [Django 5.0](https://docs.djangoproject.com/en/3.2/releases/3.0/) :link:
- Additional Python packages as listed in [requirements.txt](https://github.com/Pro-Ace-grammer/Todo-List-App/blob/main/Todo_Backend/requirements.txt) :link:

#### Frontend:
- [Node.js](https://nodejs.org/en/download/) :link:
- [npm](https://www.npmjs.com/get-npm) :link:

## :rocket: Quick Start

#### :point_right: Backend :point_left:

1. Clone this repository:
   ```bash
   git clone https://github.com/Pro-Ace-grammer/Todo-List-App.git

2. Create a virtual environment in the root directory:
   ```bash
   python -m venv [virtual folder name]

3. Activate it [ consider 'venv' is folder name]
- **Windows**
   ```bash
   venv\scripts\activate
- macOS / Linux
   ```bash
   source venv/bin/activate

4. Instal Python Dependencies
- First go to the backend folder
   ```bash
   cd Todo_Backend
- Now run the below command to install the Dependencies
   ```bash
   pip install -r requirements.txt

5. Run Migrations:
   ```bash
   python manage.py makemigrations
   python manage.py migrate

6. Now start the server
   ```bash 
   python manage.py runserver

#### :point_right: Frontend :point_left:
To start with this you might have to use  a new terminal targeting your root directory

1. Navigate to the Frontend  directory
   ```bash
   cd todo_frontend

2. Install npm Packages
   ```bash
   npm install

3. Start the server
   ```
   npm start
   ```



   
## Usage :point_up:

To interact with the Todo-ist App:

- **All Tasks**: View a comprehensive list of tasks.
   -
   - The striked ones are the completed tasks and the non strike ones are the pending tasks
![AllTasksMix](https://github.com/Pro-Ace-grammer/Todo-List-App/assets/96662978/7f9f54fb-e0ea-4066-b79a-7355a7d26b1f)

- **Incomplete Tasks**: Monitor pending tasks that require attention.
   -
   - These tasks can be marked complete by clicking the green tick icon or can be deleted by clicking the delete icon
![Incomplete](https://github.com/Pro-Ace-grammer/Todo-List-App/assets/96662978/4c2dff57-78c4-48c6-9468-195207729beb)

- **Complete Tasks**: Review tasks that are successfully completed.
   -
   - The Undo Arrow icon is used to mark the task back to as incomplete task.
![Completed](https://github.com/Pro-Ace-grammer/Todo-List-App/assets/96662978/46575f36-fd7c-4064-b327-dced3fed3ce0)

- **History**: Access a chronological log of all tasks, providing insights into your productivity journey.
   -
   - After the deletion of any task whether completed or incommplete it will get stored in the History
   - Let's say we delete two tasks one is *'Collect Order'* and another is *'Meeting'*
   - Now in the above tasks the *'Collect order'* task is marked and completed and the *'Meeting'* task as incomplete 
   - The tasks in the History after deletion will look like this
![History](https://github.com/Pro-Ace-grammer/Todo-List-App/assets/96662978/aa9ee985-181d-4f67-bbdd-d049c48c458d)

- If we want to restore our Tasks from the History then we  can just click the *Green Bucket* icon.
- Upon clicking it we restore our task Individually
- Or if we want to delete the task Individually we can do so by clicking the *Red Bucket* icon.

#### Clearing the History:
- If we want to clear the history we want to be caution because it will clear all your data in the history.
- To do so we click the *Clear All* button on the top right of the tasks.
- Upon clicking the button it will pop up a conformation message as shown below
![ConfirmMessage](https://github.com/Pro-Ace-grammer/Todo-List-App/assets/96662978/5ba1c4fa-f07c-4421-b611-d6163e409178)
- And after which we can click Confirm to Delete the data, or cancel if we don't.

