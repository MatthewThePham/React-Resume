# Personal Resume Website

![GIFofWebsiteUse](https://gitlab.com/MatthewPh/react-resume/raw/master/NON_ESSENTIAL_FILE_resumeWebsiteShowcase.gif)


## General questions

* **What technologies were used?**

> This website uses React for the frontend client. Material UI is used for GUI objects. 

> Express is used for the backend server. Node mailer was used to forward emails messages.
> The backend and frontend were written in Javascript. Here is the website link: matthew-resume.herokuapp.com

* **Features?**

>1.  Dynamic change in page when on Mobile and Desktop.
>1.  POST request for Forwarding email messages in Contact Section
>1.  Nav-bar for scrolling to page sections.
>1.  Reuse of React components. 



* **Purpose of website?**

> Showcase a visual resume and experiment with frontend heavy code.


----
### Local testing

* **How to run Local Test?**

> 1.    Make sure you have NodeJS installed as well as Yarn package manager. 
> 1.  The outermost folder is the express server, and the "client" folder is the frontend. They will both have separate modules.
> 1.  Now we install dependencies for our frontend and backend.
> 1.  Change directory into outermost folder and run, "yarn add express" for the backend. Also run "yarn add nodemailer".
> 1.  Change to the client folder and run, "yarn add @material-ui/core".
> 1.   Now we just need to run our web app!
> 1.  Change directory into outermost folder and run "yarn start" to run the start script in the server. This should run on localhost 5000.
> 1.  Open a new terminal and change to the client folder. Run the command "yarn start" to start the React client. This should run on localhost 3000.
> 1.  Test away!

