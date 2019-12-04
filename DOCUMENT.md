**Table of Content**
- [INTRODUCTION](#introduction)
  - [Purpose](#purpose)
  - [Scope](#scope)
  - [Background](#background)
  - [Assumptions and Constraints](#assumptions-and-constraints)
    - [Assumptions](#assumptions)
    - [Constraints](#constraints)
  - [Document Overview](#document-overview)
- [METHODOLOGY](#methodology)
  - [MODELING METHOD 1: Data Flow Diagram](#modeling-method-1-data-flow-diagram)
  - [MODELING METHOD 2: Use Case Diagram](#modeling-method-2-use-case-diagram)
  - [MODELING METHOD 3: MVC](#modeling-method-3-mvc)
- [FUNCTIONAL REQUIREMENTS](#functional-requirements)
  - [Signup Page](#signup-page)
  - [Verify page](#verify-page)
  - [Login Page](#login-page)
  - [Profile page](#profile-page)
  - [Home page](#home-page)
  - [Messaging Page](#messaging-page)
- [NONFUNCTIONAL REQUIREMENTS](#nonfunctional-requirements)
  - [Security](#security)
  - [User Learnability](#user-learnability)
  - [Reliability](#reliability)
- [PROJECT DIAGRAMS](#project-diagrams)
  - [Low Fidelity Prototype](#low-fidelity-prototype)
  - [Model View Controller Prototype](#model-view-controller-prototype)
  - [Use Case Diagram](#use-case-diagram)
  - [Data Flow Diagram](#data-flow-diagram)
- [OTHER REQUIREMENTS](#other-requirements)
  - [Interface Requirements](#interface-requirements)
    - [Search Bar](#search-bar)
    - [Subscribe and Unsubscribe Buttons](#subscribe-and-unsubscribe-buttons)
    - [Join Group Messages Button](#join-group-messages-button)
    - [Send Messages Button](#send-messages-button)
  - [Communication requirements](#communication-requirements)

# INTRODUCTION 
The URConnected web application is to be a social platform targeted at connecting students at the University of Regina with similar interests.

## Purpose 
The purpose of this functional requirements document is to provide documentation to the URConnected developers on the requirements of URConnected to create and implement a student communication system.

## Scope
This Functional Requirements Document will outline the functional, performance, and other system requirements identified by URConnected as the proposed communication system solution for connecting students.

## Background 
The URConnected team is a group of students responsible for developing the URConnected application. This document is being produced by the URConnected team to outline the functionality requirements of the URConnected application.

## Assumptions and Constraints 


### Assumptions 
This project assumes the availability of several technical platforms.

### Constraints 
- Milestone 1 must be achieved by Oct 2, 2019
- Milestone 2 must be achieved by Oct 23, 2019
- Milestone 3 must be achieved by Nov 13, 2019
- Milestone 4 must be achieved by Dec 2, 2019
***note:*** Failure to meet these deadlines will result in a loss of credit towards project grade.

## Document Overview
This functional requirements document will give an explanation of how the URConnected platform is built. Detailed design templates will be given, describing the intricacies of each action the user could carry out. A list of functional requirements for the environment and the system will be given to explain why each is required for the URConnected MVC.  

# METHODOLOGY
In this document, due to it currently being in the planning stage and not the developmental stage, all modeling methods were chosen as a way to best express the intentions and baseline plan of the URConnected platform. For the URConnected project, the use of various modeling methods is done to ensure that the framework and actual design of the project is structured and planned out in a way that’s easy for anyone to understand. 

## MODELING METHOD 1: Data Flow Diagram
Data Flow Diagram - It is meant to show how the information is inputted and outputted from the system, as well as any sources and destinations of that information, to where the information will get stored.

## MODELING METHOD 2: Use Case Diagram
Use Case Diagram - The purpose of the use case diagram is to show the user interaction with the product in its simplest form. Choosing this type of diagram allows for an easy visualization of what will happen when the user chooses a specific option and where they will be redirected to.

## MODELING METHOD 3: MVC
Model View Controller - The purpose of the MVC is to display how the user interface interacts with the underlying data models. This provides for a more in-depth view of the communication that goes on due to simple user actions.

# FUNCTIONAL REQUIREMENTS
For the URConnected project, the project will contain both functional and nonfunctional requirements for the user.

## Signup Page
Users will enter the info they wish to use as their permanent login information, this information includes the user’s university email, a password, and a password confirmation.

## Verify page
Users will be sent to a redirect page, which will then give them a client session code to confirm their account with the email they’ve signed up with.

## Login Page
User must log in using the corresponding info that will match up with their login information. This was the email and password that they initially entered on the signup page.

## Profile page
Users will add useful information to their profiles, such as a profile picture, display name, and personal biography.

## Home page
On the main home page the user will be able to view currently subscribed groups as well as other possible recommended groups. These groups will have a button allowing for the user to join or leave the selected group. A search bar functionality will allow the user to search for new groups, in addition to the user being able to just scroll and search on their own for groups.

## Messaging Page
Within the messaging page, users will be able to communicate with other users, as well as view the other users currently within the same group.

# NONFUNCTIONAL REQUIREMENTS

## Security
This project aims to have proper user security and confidentiality through the use of the signup, login, login verification and password hashing. 

## User Learnability
The project aims to have a quick and easy learning curve when it comes to using the web application through the use of basic web design and various instructional prompts. 

## Reliability
The aim is for the project to be consistent in the user’s use, so it remains the same during every use and the user doesn’t have to worry about drastic changes and bugs constantly.

# PROJECT DIAGRAMS

## Low Fidelity Prototype
![prototype](documentation/diagrams/Lo-fidelity&#32;drawings0001.jpg)
![prototype](documentation/diagrams/Lo-fidelity&#32;drawings0002.jpg)
![prototype](documentation/diagrams/Lo-fidelity&#32;drawings0003.jpg)
![prototype](documentation/diagrams/Lo-fidelity&#32;drawings0004.jpg)

## Model View Controller Prototype
![mvc](documentation/diagrams/MVC&#32;Diagram.png)

## Use Case Diagram
![use-case](documentation/diagrams/Use&#32;Case&#32;Diagram.png)

## Data Flow Diagram
![dfd](documentation/diagrams/Data&#32;Flow&#32;Diagram.png)

# OTHER REQUIREMENTS

## Interface Requirements
For this project, various interface methods will be given to the user to operate and navigate on the site. 

### Search Bar
Should the user want to search for a group tag, they will have to enter the group tag and then press space. They can choose to enter as many tags as they wish. These tags will be compared with the tags in the current groups.

### Subscribe and Unsubscribe Buttons
Should a user wish to join or leave a group, they will have to click the subscribe and unsubscribe buttons present on a group’s card.

### Join Group Messages Button
Should a user wish to join a group’s messaging service, they will have to click the join group messages button and then they will be taken to the groups-page.

### Send Messages Button
Should a user choose to type out a message in the text box, they will have to click the send messages button to send a message to the server messages database list.

## Communication requirements
For this project, displaying the webpage and having the capability to access the database will require the communication between the computer and localhost:4200 for the webpage and localhost:3000 for the database.