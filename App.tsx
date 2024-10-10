import React, { Component, ChangeEvent, MouseEvent } from "react";
//import { Editor } from './Editor';
// import { isRecord } from "./record";

 //Indicates if debugging console statements are activated or not
//const DEBUG: boolean = false;

type AppState = {
  page: "welcome" | "todo";
};


export class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {/*name: undefined, */ page: "welcome"};
  }

  render = (): JSX.Element => {

    // Displays if nothing has been saved and the page should be welcome or the name of the square is undefined
    if (this.state.page === "welcome") {
      // in this case, we have nothing saved and the page is welcome, we should display this page
      return (<div>
        <h1>Hello, World!</h1>
        <p>Someday soon, this will be a functioning page that includes information about a route optimization project for a food bank.</p>
        <p>Soon, we'll try to add some buttons and more functionality!</p>
        <button type="button"
          onClick={this.doToDoListClick}>See our current to-do list!</button>
      </div>)
    // Displays if the welcome page should be up or the name is undefined
    // if we should be on build and curr has something in it
    } else /*if (this.state.page === "todo") */{
      return (<div>
        <h1>TO DO</h1>
        <h2>Presentation</h2>
        <p>Soon, we will give a 30 minute lecture in early November on some of the best known techniques for solving TSPs (Traveling Salesman Problems). We will need to give enough details that the listener could code it.</p>
        <p>Here are some of the techniques we've considered so far, as well as related links.</p>
        <p>Guided Local Search: OR Tools (one of our softwares) already uses this! Nelson will research GLS.</p>
        <p><a href="https://en.wikipedia.org/wiki/Simulated_annealing">Simulated Annealing:</a> OR Tools can also use this, but it won't be as good: Cin!</p>
        <p>Cost Cheapest Arch (CC!)</p>
        <p><a href="https://developers.google.com/optimization/routing/routing_options">Routing Options from OR Tools</a></p>
            
        <p>In addition to the above, there are a few other resources that may be helpful in the future.</p>
        <p><a href="https://www.math.uwaterloo.ca/tsp/">General TSP info:</a> Here's an article about route optimization we plan to use soon:</p>
        <p><a href="https://en.wikipedia.org/wiki/Tabu_search">Tabu Search:</a> Well known and in a similar family as Simulated Annealing. Has pseudo code!
        A scientific paper <a href="https://www.sciencedirect.com/topics/computer-science/tabu-search">here</a> includes more details.</p>
        <p><a href="https://www.sciencedirect.com/topics/computer-science/adaptive-large-neighborhood-search">ALNS:</a> Less well known, but has a lot of useful information</p>
        <p><a href="https://en.wikipedia.org/wiki/Gradient_descent">Gradient Descent:</a> possible option (see if we can find things more specific to VRPs)</p>
        
        
        <p>CC: How to make check boxes?</p>

        <p></p>
        <h2>Presentation:</h2>
        <p>Talk about simulated annealing, guided local search, and at least one more</p>
        <p>Explain what a TSP is mathematically</p>
        <p>Include pseudo code</p>
          <button type="button"
          onClick={this.doBackClick}>See our current to-do list!</button>
          </div>)
    }
  }

  doBackClick = (_evt: MouseEvent<HTMLButtonElement>): void => {
    this.setState({page: "welcome"});
  }

  doToDoListClick = (_evt: MouseEvent<HTMLButtonElement>): void => {
      this.setState({page: "todo"})
    }
};