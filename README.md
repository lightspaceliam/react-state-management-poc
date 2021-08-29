# React State Management POC

## Story

**As a** React developer 

**I want to** demonstrate the difference between React Context & Redux

**So that I can** make an informed decision about how I facilitate state management.

Keeping in mind Context is not a state manager. It merely facilitates injecting state into subscribing components! In the Context branch, I have implemented React's:

- useReducer
- Dispatch
- createContext

Both `context` & `redux` implement local storage to simulate persistence between List & Form pages. I have added a setTimeout(() => {}) to simulate latency.

## Get Started

Using Visual Studio Code, in terminal (Menu -> Terminal -> New Terminal):

1. clone the repo:

    ```git clone https://github.com/lightspaceliam/react-state-management-poc.git```

2. choose a branch: master | context | redux:

    ```git fetch origin <branch-name>```

3. Switch to branch: 

    ```git checkout <branch-name>```

4. Install packages: 
    
    ```npm install```

5. Run the app: 

    ```npm start```

## Initial Environment Requirements

- [LTS Node](https://nodejs.org/en/download/)
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Git](https://git-scm.com/downloads) 

## Branches 

> `master`
Implements React's Dispatch, useReducer & createContext to handle state management and transport.

> `context`
Same as master however, includes updated UX/UI to provide an improved user experiance and now has List & Form pages.

> `redux`
Re wire state management only to implement Redux.

## Acceptance Criteria

- Create an MVP POC to get a basic understanding of using Context with Dispatch, useReducer & createContext.
- Extend findings into a real life form, implementing a List & Form pages.
- Re wire to implement Redux

## Technology Stacks

- React 17.0.2^
- Redux 4.1.1^
- Material UI 4.12.3^

## References

1. [Aug 24th 2020 A Typescript 'Todo' app using the context API within React.](https://medium.com/@jameshunt.co/a-typescript-todo-app-using-the-context-api-within-react-f135d18e1620)
2. [Mark Erikson - Why React Context is Not a "State Management" Tool (and Why It Doesn't Replace Redux)](https://blog.isquaredsoftware.com/2021/01/context-redux-differences/)
