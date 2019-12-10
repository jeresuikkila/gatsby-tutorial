---
title: "CLI design"
date: "2019-12-18"
---

# CS-E5220 User Interface Construction

Command line user interface / Dialogue design  
M-Government Service: Announcing births and death  
Jere Suikkila 614 663

## 1 Background

Namibia is a southern African country with the world's 34th largest area with a population density that is among the lowest with most of the area being desert. [[1]]

The purpose of this report is to introduce a command line user interface for Namibian citizens to announce births or deaths of family members. Even with limited experience and access to technology this would help the people who would otherwise have to travel long distances to government offices to conduct their business.

## 2 Aims and challenges

This goal-based dialog application aims to replace a paper form -based process done at government offices with a government official. The user interface needs to be able to speak the user's language, identify the user and take in the necessary information for announcing a death or a birth. This needs to be aimed at users with limited experience with technology, so extra emphasis should be placed on self-descriptiveness and giving continuous feedback to the user.

## 3 Description of the user

The typical user is expected to be a Namibian person aged between 15 - 75. The age range is quite large as the same application covers both births and deaths of family members. The user doesn't have their own internet-enabled device and instead rely on a shared, community smartphone. The user's are likely to be in an emotional state, either happy or sad depending on the subject of the announcement. Depending on the local social structure the announcement might be important only to the government or it might also be very important for the user themselves.

The user will be using a smartphone that is not theirs and might not have experience with such a device. It might have a touch screen as that is how smart phones are often defined. The input device is however the keyboard either on-screen or a physical one.

This outlines the interaction cycle of the user as described by Seven stages of action [[3]].

1. Forming the goal: I want to announce a birth / death
2. Forming the intention: I will use the community device available to me nearby
3. Specifying an action: Select a wanted action from a list of actions. Each action is identified with a single key input such as **b** for selecting to announce a birth.
4. Executing the action: Selecting the appropriate action, inputting the required details as requested by the command-line interface.
5. Perceiving the system state: At each step options are listed alongside with a prompt for action and showing the relevant system state, the detail of which could vary along the process. The state is printed on the smartphone command line interface.
6. Interpreting system state: System state is displayed in user's preferred language. Help is available at each step of the process
7. Evaluating the outcome: In the end confirming the information to be correct. Some points of the user interface could confirm crucial details even earlier.

## 4 Description of the interaction

The solution is a menu selection interface with some form filling for details. These types have the advantage of little to none requirements for user training, simple data entry and minimized keystrokes by using selections instead of free form writing when possible [[4]]. However, form filling and menus require adequate amount of screen space but an even older smartphone will be able to handle the amount required here. If this becomes a problem in user testing, the forms can be divided into smaller parts for clarity.

ISO 9241-110 [[2]] defines seven important dialogue design principles:

1. Task suitability
2. Self-descriptiveness
3. Controllability
4. Conformity with expectations
5. Fault tolerance
6. Customizability
7. Suitability for learning

The system is suitable for the task as it lets the user perform their desired actions with efficiency. The dialog steps are small and self-explanatory to make sure that the user is not overwhelmed at any given point by information. As the accuracy of the data is crucial, the fault tolerance will be available through confirmation dialogs in situations where errors in input are suspected. Additionally, immediate feedback is given to the user. The system helps the user by always presenting an option for asking for a help text. Customizability can be present for example by giving an option for experienced users to skip the introduction and on-boarding.

Example of the starting menu

```
Welcome to the M-government. Please select the desired option by writing the letter.
All commands and fields are confirmed by hitting ENTER.
If this is your first time using the service, we recommend starting with the tutorial:

[T]: Tutorial
[B]: Birth
[D]: Death

>
```

Example of steps to announce a death

```
You are announcing a death. First, we need to identify you by your M-government key.
Please type it in to continue.
[H]: Help
[E]: Exit

> 006d78fe-fe8a-4dd9-8afa-b5fe575f2802

Thank you, Brian. Please enter the identification code of the deceased.
[H]: Help
[E]: Exit

> 42b3eb48

Thank you! Our deepest condolences on the passing of Maria.
When was the date of death? You can enter the date in the following format DD/MM/YYYY
[H]: Help
[E]: Exit

> 9/11/2019

Thank you! Could you confirm the details for us once more for the final death announcement?
[H]: Help
[E]: Exit
[C]: Confirm
[B]: Back to modify the details

Name: Maria Agave
Identification: 42b3eb48
Date of death: 9/11/2019

> C

We are grateful for your announcement. Your announcement has been sent and confirmed.
Once again please accept our deepest condolences.
```

## 5 Limitations and concerns

Self-reporting of births and deaths might be unreliable even in the best conditions. In this case, we are relieving a hurdle by not requiring the user to travel as much but they need to be using technology that might feel difficult to them. How are the user's incentiviced to report these events and to report them accurately?

Strong identification of the user might become a problem. Information security of a shared device can also be questioned. The current design might even offer opportunities for finding out other people's information.

The user's are potentially emotional when using the application and supporting their emotional state might be difficult using a command line interface. Attention should be paid to communicating clearly and with empathy. However, that might be easier with a graphical user interface than purely text-based alternative.

## References

1. [Namibia - Wikipedia _https://en.wikipedia.org/wiki/Namibia_](https://en.wikipedia.org/wiki/namibia)
2. [ISO 9241-110 _https://www.iso.org/standard/38009.html_](https://www.iso.org/standard/38009.html)
3. [Seven stages of action _https://mycourses.aalto.fi/pluginfile.php/1141088/mod_resource/content/2/CS-E5220%20%282019%29%20User%20Interface%20Construction%204%20-%20CLI.pdf_](https://mycourses.aalto.fi/pluginfile.php/1141088/mod_resource/content/2/CS-E5220%20%282019%29%20User%20Interface%20Construction%204%20-%20CLI.pdf)
4. [Shneiderman's four principles of good design _https://mycourses.aalto.fi/pluginfile.php/1141088/mod_resource/content/2/CS-E5220%20%282019%29%20User%20Interface%20Construction%204%20-%20CLI.pdf_](https://mycourses.aalto.fi/pluginfile.php/1141088/mod_resource/content/2/CS-E5220%20%282019%29%20User%20Interface%20Construction%204%20-%20CLI.pdf)

[1]: https://en.wikipedia.org/wiki/Namibia "Namibia - Wikipedia"
[2]: https://www.iso.org/standard/38009.html "ISO 9241-110"
[3]: https://mycourses.aalto.fi/pluginfile.php/1141088/mod_resource/content/2/CS-E5220%20%282019%29%20User%20Interface%20Construction%204%20-%20CLI.pdf "Seven stages of action (Norman 1986)"
[4]: https://mycourses.aalto.fi/pluginfile.php/1141088/mod_resource/content/2/CS-E5220%20%282019%29%20User%20Interface%20Construction%204%20-%20CLI.pdf "Schneiderman's four principles of good design"
