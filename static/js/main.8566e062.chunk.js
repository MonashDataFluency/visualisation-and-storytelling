(this["webpackJsonpstorytelling-vis"]=this["webpackJsonpstorytelling-vis"]||[]).push([[0],{12:function(e,t,a){e.exports=a(30)},17:function(e,t,a){},18:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(6),i=a.n(r),s=(a(17),a(1)),c=a(7),h=a(8),d=a(10),l=a(11),p=(a(18),a(9)),u=a.n(p),m=a(2),y=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).m_contentArray=[],e.state={contentArray:[]},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.init()}},{key:"init",value:function(){this.m_contentArray.push({stepId:"Introduction",description:[{type:"p",content:"In this exercise you will learn how to create a simple visualisation using ChartJS. The data is taken from Google Trends, and shows the interest over time in the term [Bushfire] in Australia."},{type:"p",content:"The finished visualisation will look something like this: <br><img width='500px' src='"+u.a+"'/>"},{type:"p",content:"There will be a few codepens for you to edit in each step of this exercise. We will only be using the JS and the HTML panel, and it helps to minimise the center CSS panel for clarity. If you can not complete an exercise, the codepen for the next exercise contains all the needed code."},{type:"p",content:"A lot of times, I will provide a link to the ChartJS documentation where you find the information to complete a certain subtask. The key to do effective web developing (and other programming, for that matter), is learn how to use external libraries, read APIs and documentation, so rather than telling you in detail how to complete a step, I point you to where you find the information to do it. :-)"},{type:"p",content:"Note: If you receive a popup in your codepen saying 'Something went wrong', just close it and proceed."}]}),this.m_contentArray.push({stepId:"Step 1",description:[{type:"p",content:"As a first step, We prepare a webpage to create a chart with ChartJS. In the codepen below, add the following: "},{type:"ul",content:["HTML: A canvas element within the <code>chart-wrapper</code> tag, with a unique ID, for example 'chartCanvas'. This id will be referenced in the JS file, so chartJS knows where to render the chart. It needs a height and width defined to display properly. Syntax: <br><code>&lt;canvas id='' height='650' width='1850'&gt;&lt;/canvas&gt;</code>","JS: At the bottom you see a function starting with d3, which needs to know from where to load the data, and what to do with it. Tell it the  URL to the csv data: <br><code>https://docs.google.com/spreadsheets/d/e/2PACX-1vRFZXodYSD3ZTX61rBX1iSl9Z77GuZ6iPbSegL5XdscqIef_PGSd90Pq0KyCx2P3Z6S5gKGNlAt9l5l/pub?gid=501007519&single=true&output=csv'</code> <br> as a <b>string</b> parameter.","JS: After the data is read, the function wants to call another function called 'makeChart'. This function does not exist yet. Implement an empty function named makeChart with one parameter called 'data' which will contain your data.","use <code> console.log(data) </code> inside the new function to look at the data in the console. On Codepen itself, you can check the console panel. If you're in a browser using this site, open the browser's console (if you don't know how: <a href='https://tinyurl.com/DSVisconsoles'> How to open the browser console </a>). ","Note that there will be some errors in the console which are unrelated to your coding (due to displaying a secondary page, Codepen, on our page we can not get rid of errors that occur on their site!) Only the ones ending with <span style='color:red'> at pen.js:## </span> can be fixed by you, with ## being the line number where the error occurred. You can ignore the other errors. Sorry for this inconvenience!"]}],codepenLink:"https://codepen.io/norahamacher/pen/mdVYQpz"}),this.m_contentArray.push({stepId:"Step 2",description:[{type:"p",content:"Have a look at the data in the console. What are the names of the two fields in each generated object? At the tennis example, they were Name, Weeks and Gender."},{type:"ul",content:["Save the content of the two fields into two separate arrays, one for each field.  In our tennis players example, we took the contents of the field 'Name' in our 'data' object, and saved it into an array called 'names', using the Javascript map function, just like this: <br><code>var names = data.map(function(d) {return d.Name});</code><br>Try modifying this code to extract the contents of our two fields and save each field into a separate array.","Use <code>console.log(your_array_name)</code> to print the contents of the new arrays.","Create a chartJS Chart object. Find the commented code and uncomment it. You can check <a href='https://www.chartjs.org/docs/latest/getting-started/'>the documentation</a> to see the detailed syntax.","Use one of your generated arrays as labels, and one as data. Think about which makes sense. Also think about which TYPE of chart makes sense. Try out different ones: <a href='https://www.chartjs.org/docs/latest/charts/'>Types of Charts</a>"]}],codepenLink:"https://codepen.io/norahamacher/pen/KKVEXPJ"}),this.m_contentArray.push({stepId:"Step 3",description:[{type:"p",content:"At this point, you should have a chart generated. Arguably, a line chart is best for this type of data as it shows data over time which can be put in direct relation to each other. But at the moment, we do not have any axes labels, and there is a useless legend, which we want to get rid of. At this point, the many options of chartJS come into play and it is really up to what is being visualised, what needs to be done."},{type:"ul",content:["Add a label for both the x and the y axis. Check <a href='https://www.chartjs.org/docs/latest/axes/labelling.html'> the documentation</a> to learn how to do this.","We do not need a legend for this type of chart, as we only have one dataset and the axes are self explanatory. Check <a href='https://www.chartjs.org/docs/latest/configuration/legend.html'> legend documentation </a> to see how to use the legend option's 'display' attribute to hide the legend.","If you want, change the <code>borderColor</code> and/or <code>backgroundColor</code> of the line. Do this  by adding the attribute <code>borderColor</code> or <code>backgroundColor</code> to your DATASET. Colours can be a string like 'green' or 'rgb(0,0,14)'."]}],codepenLink:"https://codepen.io/norahamacher/pen/pogmQaj"}),this.m_contentArray.push({stepId:"Solution",description:[{type:"p",content:"See the Codepen below for a solution for the previous exercises."}],codepenLink:"https://codepen.io/norahamacher/pen/LYGoqwx"}),this.m_contentArray.push({stepId:"Step 4 (optional)",description:[{type:"p",content:"If you have time left, try to add a second dataset to your chart, to compare. We also have the trend data of the same searchterm for the world available. Because the d3 functionality to read multiple files is a bit complicated, I've already added the functionality at the bottom of the JS page. Of course, this kind of data would usually probably be in one table. If that is the case, you would just have to use the array.map function on the data and save the additional column in a new array. The result will be the same."},{type:"p",content:"The makeChart function now gets 2 parameters, one for each dataset. Your job is to adjust the program to also read the data for the world, and display it in a separate dataset on the graph."},{type:"ul",content:["Use the array.map function to save the world data stored in the new dataset [worlddata] in a separate array.","Add the second dataset to the chart, using the new array. Give both the existing and the new dataset a label (Australia and World). Use the label property of the dataset block.","Now we have 2 lines and they need to be distinguishable from one another. Add a borderColor to both datasets. The legend now also needs to be displayed, so a viewer can see what the two lines mean.","The title of the page does not quite fit anymore. Feel free to change it inside the HTML document."]}],codepenLink:"https://codepen.io/norahamacher/pen/pogmGBB"}),this.m_contentArray.push({stepId:"Finished",description:[{type:"p",content:"See the Codepen below for a solution of this exercise."}],codepenLink:"https://codepen.io/norahamacher/pen/pogmGbZ"}),this.setState({contentArray:this.m_contentArray})}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},this.state.contentArray.map((function(e,t){return n.a.createElement(f,{key:t,stepId:e.stepId,description:e.description,codepenLink:e.codepenLink})})))}}]),a}(o.Component),f=function(e){var t=e.stepId,a=e.description,o=e.codepenLink,r=n.a.useState(!1),i=Object(s.a)(r,2),c=i[0],h=i[1],d=n.a.useState("\u1405"),l=Object(s.a)(d,2),p=l[0],u=l[1];return n.a.createElement("section",{className:"tutorialSection"},n.a.createElement("h1",null," ",t),a.map((function(e,t){return n.a.createElement("div",{className:"description",key:t},"p"===e.type?n.a.createElement("p",null,m(e.content)):n.a.createElement("ul",{className:"checkboxes"},e.content.map((function(e,t){return n.a.createElement(w,{key:t,content:e})}))))})),o?n.a.createElement("button",{className:"btn",type:"button",onClick:function(){h(!c),u(c?"\u1405":"\u1401")}}," Toggle Codepen ",t," ",n.a.createElement("span",{className:"arrow"},p)," "):"",o&&c?n.a.createElement("div",null,n.a.createElement("p",null," ",o)," ",n.a.createElement("iframe",{className:"iFrame",src:o,title:"Exercise Step 1"})," "):"")},w=function(e){var t=e.content,a=n.a.useState("todo"),o=Object(s.a)(a,2),r=o[0],i=o[1];return n.a.createElement("li",{className:r},n.a.createElement("div",{className:"liContent"},n.a.createElement("div",{className:"liInputParent"},n.a.createElement("input",{className:"liInput",type:"checkbox",onClick:function(){i("todo"===r?"done":"todo")}})),n.a.createElement("div",null," ",m(t))))},b=y;i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a.p+"static/media/finishedVis.8ef92bcf.jpg"}},[[12,1,2]]]);
//# sourceMappingURL=main.8566e062.chunk.js.map