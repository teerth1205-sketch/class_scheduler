# Class Scheduler Application

**Problem:** There is a strong demand from immigrants for naturalization classes
in NYC. There is also a large supply of volunteers offering to teach such
classes. The bottleneck is that connecting immigrants and volunteers is done
manually by non-profit staff, who do not have the capacity to provide
matching/scheduling services.

**Purpose:** Build a Rails app that lets students schedule naturalization classes with
volunteers.

## Minimum Viable Product

- Scheduling
	- Volunteers can create class sessions
	- Students can search for class sessions by location, date, and language
	- Students and volunteers can communicate

- Credibility/Safety
	- Non-anonymous volunteer accounts
	- Students and volunteers can review each other
	- Legal Disclaimer

- Mobile first design

- Cost
	- Free to use
	- Free/Cheap to maintain

## Bonus Features

- Admin portal
- Multilingual pages
- Support other types of classes
- Custom branding / design materials

## Views

Meta: 
- `/`

User Authentication:
- `students/signup`
- `volunteers/signup`
- `login`

Scheduling: 
- `classes`: index page for students to search for class sessions
- `classes/:id`: detail / signup page for a class session
- `schedule`: edit page for volunteers to create/edit schedules

## Models

- `Student`
- `Volunteer`
- `ClassSession`
- `Review`
- `Message`

## Libraries

- [Full Calendar](https://fullcalendar.io/)


## Wireframes

