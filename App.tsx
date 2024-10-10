import React, { Component, ChangeEvent, MouseEvent } from "react";
import { Editor } from './Editor';
// import { isRecord } from "./record";

 //Indicates if debugging console statements are activated or not
const DEBUG: boolean = false;

type AppState = {
  //name: string | undefined;
  page: "welcome" | "todo";
  //saved: string[];
  //curr: Square | undefined;
};

/**
 * App to manage squares
 */
export class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {/*name: undefined, */ page: "welcome"};
  }

  // // Called whenever the component mounts to generate a list of saved elements
  // componentDidMount = (): void => {
  //   fetch("/api/list")
  //       .then(this.doListResp)
  //       .catch(() => this.doLoadError("failed to create list"));
  // }

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
    } else if (this.state.page === "todo") {
      return (<div>
        <h1>TO DO</h1>
        <h2>Presentation</h2>
        <p>Soon, we will give a 30 minute lecture in early November on some of the best known techniques for solving TSPs (Traveling Salesman Problems). We will need to give enough details that the listener could code it.</p>
        <p>Here are some of the techniques we've considered so far, as well as related links.</p>
        <p>Guided Local Search: OR Tools (one of our softwares) already uses this! Nelson will research GLS.</p>
        <p><a href="https://en.wikipedia.org/wiki/Simulated_annealing">Simulated Annealing:</a> OR Tools can also use this, but it won't be as good</p>
        <p><a href="https://developers.google.com/optimization/routing/routing_options">Routing Options from OR Tools</a>
            
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
    throw new Error("that shouldn't happen!");
{/*   // LIST

  // Checks the status of our list request.
  // If status is 200, proceeds.
  // Otherwise, sends error to conosle.
  doListResp = (res: Response): void => {
    if (res.status === 200) {
      res.json().then(this.doListJson)
        .catch(() => this.doListError("200 response is not valid Json"));
    } else if (res.status === 400) {
      res.text().then(this.doListError)
        .catch(() => this.doListError("400 response is not text"));
    } else {
      this.doListError(`bad status code ${res.status}`);
    }
  } */}
{/* 
  // Adds names from server to the list of saved files
  // on the client side
  doListJson = (val: unknown): void => {
    if (DEBUG) console.log("doListJson");
    // if val is not a record, we can't use it
    if (!isRecord(val)) {
      console.error("bad data from /list: not a record", val)
      return;
    }
    // if val isn't an array, something is wrong
    if (!Array.isArray(val.names)) {
      console.error("not an array", val);
      return;
    }
    // using the info from server, loads the names of
    // previously saved squares
    const items: string[] = [];
    for (const name of val.names) {
      const newSaved: string = name;
        items.push(newSaved);
    }
    this.setState({saved: items})
  } */}

{/*   // LOAD

  // Allows the user to load a specific square they had previously saved
  // from the list of clickable, saved squares
  doLoadClick = (_evt: MouseEvent<HTMLAnchorElement>, name: string): void => {
    const url: string = "/api/load?name=" + encodeURIComponent(name);
    if (DEBUG) console.log("doLoadClick");
    fetch(url)
      .then(this.doLoadResponse).catch(this.doLoadError)
  } */}

{/*   // Processes response from server for load
  doLoadResponse = (res: Response): void => {
    if (DEBUG) {
      console.log("doLoadResponse");
      console.log(res);
    }
    if (res.status === 200) {
      res.json().then(this.doLoadJson)
      .catch(this.doLoadError);
    } else {
      throw new Error(`Unexpected status ${res.status}`);
    }
  }

  // Loads the square that was previously saved that the
  // user requested to edit
  doLoadJson = (val: unknown): void => {
    if (DEBUG) console.log("doLoadJson");
    // if it's not a record, we can't use val
    if (!isRecord(val)) {
      throw new Error("not Json");
    }
    // if val's name field is not a string, something's wrong
    if (typeof val.name !== 'string') {
      throw new Error("Name of file was unexpectedly undefined.")
    }
    const sq: Square = fromJson(val.value);
    const name: string = val.name;
    this.setState({name: name, page: "build", curr: sq});  
  } */}

  // BACK FUNCTION

  // Allows the user to return to the welcome screen
  // from the building screen
  doBackClick = (): void => {
    this.setState({page: "welcome"});
  }

  // SAVE FUNCTION

{/*   // Saving things:
  // Click the save button
  doSaveClick = (name: string, square: Square): void => {
    if (DEBUG) console.log("doSaveClick");
    const jsonSquare: unknown = toJson(square);
    const args = {name: name, value: jsonSquare};
    if (DEBUG) console.log("about to do fetch");
    fetch("/api/save", {
      method: "POST",
      body: JSON.stringify(args),
      headers: {"Content-Type": "application/json"}})
      .then(this.doSaveResponse)
      .catch(() => this.doSaveError("failed to save"))
    if (DEBUG) {
      console.log("finished fetch for doSaveClick");
      console.log("saved: " + this.state.saved);
    }
  } */}

{/*   // Respond to save click
  doSaveResponse = (res: Response): void => {
    if (DEBUG) {
      console.log("doSaveResponse");
      console.log(res);
    }

    if (res.status === 200) {
      console.log("Successfully saved square!");
      res.json().then(this.doSaveJson)
          .catch(() => this.doSaveError("200 response is not JSON"));
    } else if (res.status === 400) {
      res.text().then(this.doSaveError)
        .catch(() => this.doSaveError("not text"));
    } else {
      this.doSaveError(`bad status: ${res.status}`)
    }
   } */}

{/*    // Complete saviing and update state
  doSaveJson = (data: unknown): void => {
    if (DEBUG) console.log("doSaveJson");
    // if it's not a record, we can't use it
    if (!isRecord(data)) {
      console.error("bad data from /save: not a record", data);
      return;
    }
    // if the name isn't a string, something went wrong
    if (typeof data.name !== 'string') {
      console.error("bad data from /save: name missing or wrong", data);
      return;
    }
    // if we don't already have this name saved, we want to add it
    if (!this.state.saved.includes(data.name)) {
      const newSaved: string[] = this.state.saved.concat(data.name);
      this.setState({saved: newSaved})
    }
    // otherwise, we're all good!
  } */}


  doToDoListClick = (_evt: MouseEvent<HTMLButtonElement>): void => {
    this.setState({page: "todo"})
  }

{/*   // Changes the name of the square
  doNameChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    this.setState({name: evt.target.value});
  }

  // Changes the name of the current square
  doRenameChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    this.setState({name: evt.target.value});
  }

  // Ensures renamed square is successfully saved
  // The last saved version with the old name remains and square
  // with the current name is saved separately
  doRenameSaveClick = (_evt: MouseEvent<HTMLButtonElement>): void => {
    if (this.state.name === undefined) {
      alert("Please enter a name for your square");
      return;
    }
    if (this.state.curr === undefined) {
      console.error(this.doSaveError("saving renamed square failed"));
      return;
    }
    this.doSaveClick(this.state.name, this.state.curr);
    this.setState({page: "build"})
  }


  // ERROR FUNCTIONALITY

  // Errors with save
  doSaveError = (msg: string): void => {
    if (DEBUG) console.log("doSaveError");
    console.error(`Error fetching /save: ${msg}`);
  }
  // Errors with load
  doLoadError = (msg: string): void => {
    if (DEBUG) console.log("doLoadError");
    console.error(`Error fetching /load: ${msg}`);
  }
  // Errors with list
  doListError = (msg: string): void => {
    if (DEBUG) console.log("doLoadError");
    console.error(`Error fetching /load: ${msg}`);
  } *///}
}

