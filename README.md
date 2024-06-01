# Nextlabs
## Overview
This is a web application built with Django and React. The app has an admin interface to manage apps and points, and a user interface to view tasks and upload screenshots.

## Features
- Admin dashboard to manage apps and points.
- User dashboard to view tasks and upload screenshots.
- Authentication using JWT.
- Periodic task scheduling using Celery.

## Setup Instructions

### Backend (Django)
1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/my-web-app.git
    cd my-web-app
    ```

2. Create a virtual environment and activate it:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```

3. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

4. Run migrations:
    ```bash
    python manage.py migrate
    ```

5. Create a superuser:
    ```bash
    python manage.py createsuperuser
    ```

6. Run the development server:
    ```bash
    python manage.py runserver
    ```

### Frontend (React)
1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

## Running Celery
To run Celery worker and beat scheduler:
```bash
celery -A myproject worker --loglevel=info
celery -A myproject beat --loglevel=info
