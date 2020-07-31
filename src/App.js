import React, { Component } from 'react';
import './App.css';
import myImg from './images/finishedVis.jpg'
import * as parser from 'html-react-parser'

class App extends Component {

  m_contentArray = []

  state = {
    contentArray:[]
  }
  componentDidMount(){
    this.init()
  }
  init() {
    this.m_contentArray.push(
      {stepId:"Introduction",
    description:[
      {type:"p", content:"In this exercise you will learn how to create a simple visualisation using ChartJS. The data is taken from Google Trends, and shows the interest over time in the term [Bushfire] in Australia." },
      {type:"p", content:"The finished visualisation will look something like this: <br><img width='500px' src='"+myImg+"'/>"},
      {type:"p", content:"There will be a few codepens for you to edit in each step of this exercise. We will only be using the JS and the HTML panel, and it helps to minimise the center CSS panel for clarity. If you can not complete an exercise, the codepen for the next exercise contains all the needed code."},
      {type:"p",content:"A lot of times, I will provide a link to the ChartJS documentation where you find the information to complete a certain subtask. The key to do effective web developing (and other programming, for that matter), is learn how to use external libraries, read APIs and documentation, so rather than telling you in detail how to complete a step, I point you to where you find the information to do it. :-)"},
      {type:"p",content: "Note: If you receive a popup in your codepen saying 'Something went wrong', just close it and proceed."}
    ]}
    )
    this.m_contentArray.push(
      {
        stepId:"Step 1",
        description:[
         
          {type:"p", content:"As a first step, We prepare a webpage to create a chart with ChartJS. In the codepen below, add the following: " },
          {type:"ul", content:[
                "HTML: A canvas element within the <code>chart-wrapper</code> tag, with a unique ID, for example 'chartCanvas'. This id will be referenced in the JS file, so chartJS knows where to render the chart. It needs a height and width defined to display properly. Syntax: <br><code>&lt;canvas id='' height='650' width='1850'&gt;&lt;/canvas&gt;</code>",
                "JS: At the bottom you see a function starting with d3, which needs to know from where to load the data, and what to do with it. Tell it the  URL to the csv data: <br><code>https://raw.githubusercontent.com/MonashDataFluency/visualisation-and-storytelling/master/src/data/searchesAustralia.csv</code> <br> as a <b>string</b> parameter.", 
                "JS: After the data is read, the function wants to call another function called 'makeChart'. This function does not exist yet. Implement an empty function named makeChart with one parameter called 'data' which will contain your data.",
                "use <code> console.log(data) </code> inside the new function to look at the data in the console. On Codepen itself, you can check the console panel. If you're in a browser using this site, open the browser's console (if you don't know how: <a href='https://tinyurl.com/DSVisconsoles'> How to open the browser console </a>). ",
                "Note that there will be some errors in the console which are unrelated to your coding (due to displaying a secondary page, Codepen, on our page we can not get rid of errors that occur on their site!) Only the ones ending with <span style='color:red'> at pen.js:## </span> can be fixed by you, with ## being the line number where the error occurred. You can ignore the other errors. Sorry for this inconvenience!"
              ]
          }
        ],
        codepenLink: "https://codepen.io/norahamacher/pen/mdVYQpz"
      }
    )

    this.m_contentArray.push({
      stepId:"Step 2",
      description:[
        {type:"p",content:"Have a look at the data in the console. What are the names of the two fields in each generated object? At the tennis example, they were Name, Weeks and Gender."},
        {type:"ul", content:[
          "Use the Javascript map function to save the content of the two fields in two respective arrays. For the tennis player names, we did: <br><code>var names = data.map(function(d) {return d.Name});</code>",
          "Use <code>console.log(your_array_name)</code> to print the contents of the new arrays.",
          "Create a chartJS Chart object. Check <a href='https://www.chartjs.org/docs/latest/getting-started/'>the documentation</a> to see the syntax. The first parameter of the <code>new Chart()</code> call must be your canvas element id.",
          "Use one of your generated arrays as labels, and one as data. Think about which makes sense. Also think about which TYPE of chart makes sense. Try out different ones: <a href='https://www.chartjs.org/docs/latest/charts/'>Types of Charts</a>"


        ]
      }

      ],

      codepenLink:"https://codepen.io/norahamacher/pen/KKVEXPJ"
    })

    this.m_contentArray.push({
      stepId:"Step 3",
      description:[
        {type:"p",content:"At this point, you should have a chart generated. Arguably, a line chart is best for this type of data as it shows data over time which can be put in direct relation to each other. But at the moment, we do not have any axes labels, and there is a useless legend, which we want to get rid of. At this point, the many options of chartJS come into play and it is really up to what is being visualised, what needs to be done."},
        {type:"ul", content:[
          "Add a label for both the x and the y axis. Check <a href='https://www.chartjs.org/docs/latest/axes/labelling.html'> the documentation</a> to learn how to do this.",
          "We do not need a legend for this type of chart, as we only have one dataset and the axes are self explanatory. Check <a href='https://www.chartjs.org/docs/latest/configuration/legend.html'> legend documentation </a> to see how to use the legend option's 'display' attribute to hide the legend.",
          "If you want, change the <code>borderColor</code> and/or <code>backgroundColor</code> of the line. Do this  by adding the attribute <code>borderColor</code> or <code>backgroundColor</code> to your DATASET. Colours can be a string like 'green' or 'rgb(0,0,14)'."
        ]
      }

      ],

      codepenLink:"https://codepen.io/norahamacher/pen/pogmQaj"
    })

    this.m_contentArray.push({
      stepId:"Solution",
      description:[
        {type:"p",content:"See the Codepen below for a solution for the previous exercises."},
       
      ],

      codepenLink:"https://codepen.io/norahamacher/pen/LYGoqwx"
    })

    this.m_contentArray.push({
      stepId:"Step 4 (optional)",
      description:[
        
        {type:"p",content:"If you have time left, try to add a second dataset to your chart, to compare. We also have the trend data of the same searchterm for the world available. Because the d3 functionality to read multiple files is a bit complicated, I've already added the functionality at the bottom of the JS page. Of course, this kind of data would usually probably be in one table. If that is the case, you would just have to use the array.map function on the data and save the additional column in a new array. The result will be the same."},
        {type: "p", content: "The makeChart function now gets 2 parameters, one for each dataset. Your job is to adjust the program to also read the data for the world, and display it in a separate dataset on the graph."},
        {type:"ul", content:[
          "Use the array.map function to save the world data stored in the new dataset [worlddata] in a separate array.",
          "Add the second dataset to the chart, using the new array. Give both the existing and the new dataset a label (Australia and World).",
          "Now we have 2 lines and they need to be distinguishable from one another. Add a borderColor to both datasets. The legend now also needs to be displayed, so a viewer can see what the two lines mean.",
          "The title of the page does not quite fit anymore. Feel free to change it inside the HTML document."

        ]
      }

      ],

      codepenLink:"https://codepen.io/norahamacher/pen/pogmGBB"
    })

    
    this.m_contentArray.push({
      stepId:"Finished",
      description:[
        {type:"p",content:"See the Codepen below for a solution of this exercise."},
       

      ],

      codepenLink:"https://codepen.io/norahamacher/pen/pogmGbZ"
    })

    this.setState({
           
      contentArray: this.m_contentArray
      
  })
  }

  render() {
    return (
      <div className="App">
      {this.state.contentArray.map(
          (content,i) =>
        <Exercise key={i} stepId={content.stepId} description={content.description} codepenLink={content.codepenLink} />
    )}
       
      </div>
    )
  }
}

const Exercise = ({ stepId, description, codepenLink }) => {


  const [showResults,setShowResults] = React.useState(false)
  const [arrow,setArrow] = React.useState("ᐅ")
  const onClick = () => {
    setShowResults(!showResults)
    setArrow(showResults?  "ᐅ" :"ᐁ" )
  }
  
  return( 
  <section className="tutorialSection">
    <h1> {stepId}</h1>
  
    {description.map(
      (part,i)=>
      <div className="description" key={i}>
       {part.type === "p" ? 
       <p>{ parser(part.content)}</p> 
       :<ul className="checkboxes">{part.content.map(
           (list,j)=>
           <ListItem key={j} content={list} />
          )}
       </ul>}
       </div>
    )}
    {codepenLink ? <button className="btn" type="button" onClick={onClick}> Toggle Codepen {stepId} <span className="arrow">{arrow}</span> </button> : ""}
     {codepenLink && showResults ? <div><p> {codepenLink}</p> <iframe className="iFrame" src={codepenLink} title="Exercise Step 1"></iframe> </div>: ""}

  </section>
  )
}

const ListItem = ({content}) => {
  const [checkedclass, setCheckedclass] = React.useState("todo")
  const onClick = () => {
    setCheckedclass(checkedclass=== "todo" ? "done" : "todo")
  }
  return (
    <li className={checkedclass}><div className="liContent"><div className="liInputParent"><input className="liInput" type='checkbox' onClick={onClick}/></div><div> {parser(content)}</div></div></li>
  )
}
export default App;
