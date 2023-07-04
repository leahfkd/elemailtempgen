/**
 * File: fullExample.js                                                        *
 * Created Date: 2023-07-05T00:01:21                                           *
 * Author: Lei Fuentes                                                         *
 * Last Modified: 2023-07-05T00:01:21                                          *
 * Modified By: Lei Fuentes                                                    *
 */


const emailhelper = require('./');
const mustache = require('mustache');
const constants = require('./constants');


// ----------------- Example with Multiple templates with custom mustache key placeholder ------------- //

//Note: Templates are process by template sequence

// Templates to process
const templatesSequenceAndItKeys = [
   {module: 'label', key: 'labelId1'}
  , {module: 'label', key: 'labelId2'}
  , {module: 'button', key: 'buttonId1'}
  , {module: 'description', key: 'descriptionId1'}
  , {module: 'description', key: 'descriptionId2'}
  , {module: 'image', key: 'imageId1'}
  , {module: 'description', key: 'descriptionId3'}
  , {module: 'table', key: 'tableId1'}
  , {module: 'chart', key: 'chartId1'}
  , {module: 'description', key: 'descriptionId4'}
  , {module: 'href', key: 'hrefId1'}
];

// below command will process the template list as an html content, with mustache placeholder
// example return <html><body> Hello heres a sample : {{mustachekey}}</body></html>
// bear in mind, we are not adding the data here yet. we are just processing the template.
const customMustacheKeyHtmlContent = emailhelper.processAllTemplates(templatesSequenceAndItKeys);
// console.log(customMustacheKeyHtmlContent) // unhide to printout the results of customMustacheKeyHtmlContent


// since we are using custom key, we need to name each object by the custom key we set above in templatesSequenceAndItKeys
// may check this https://www.npmjs.com/package/elemailtempgen or library/objectKeyLib.js for sample of dataobject
const dataobject = {
  labelId1: { content:'Lorem ipsum dolor sit amet', bgcolor:'' }
  , labelId2: { content:'pulvinar elementum integer enim neque', bgcolor:''}
  , buttonId1: { label:'Hola', href:'#', bgcolor:''}
  , descriptionId1: { content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna duis convallis convallis tellus. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Adipiscing diam donec adipiscing tristique risus nec feugiat in. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.'}
  , descriptionId2: { content : 'Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. In massa tempor nec feugiat nisl. Auctor neque vitae tempus quam pellentesque nec. '}
  , imageId1: { src:'https://68.media.tumblr.com/fe692cd5e020fde060a88f8e2127c54e/tumblr_oo7yieCb0t1qkeehso1_500.gif', bgcolor:'' }
  , descriptionId3: { content : 'Duis ultricies lacus sed turpis tincidunt id aliquet. Vel risus commodo viverra maecenas accumsan. A scelerisque purus semper eget duis at tellus at. '}
  , tableId1: { 
    columns:[{ title:"Name" }, { title: "Age"}]
    , rows:[
        [ {title: "Lei"}, {title:"30"} ]
        , [ {title: "John"}, {title:"30"} ]
    ]
    , bgcolor:''
  }
  , descriptionId4: { content : 'Nibh praesent tristique magna sit. Nunc sed blandit libero volutpat sed cras ornare arcu. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum.'}
  , chartId1: { src:'https://image-charts.com/chart.js/2.8.0?bkg=white&c=%7B%0A%20%20%22type%22%3A%20%22pie%22%2C%0A%20%20%22data%22%3A%20%7B%0A%20%20%20%20%22datasets%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22data%22%3A%20%5B84%2C%2028%2C%2057%2C%2019%2C%2097%5D%2C%0A%20%20%20%20%20%20%20%20%22backgroundColor%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%22rgba%28255%2C99%2C132%2C0.5%29%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba%28255%2C159%2C64%2C0.5%29%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba%28255%2C205%2C86%2C0.5%29%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba%2875%2C192%2C192%2C0.5%29%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba%2854%2C162%2C235%2C0.5%29%22%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%22label%22%3A%20%22Dataset%201%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22labels%22%3A%20%5B%22Red%22%2C%20%22Orange%22%2C%20%22Yellow%22%2C%20%22Green%22%2C%20%22Blue%22%5D%0A%20%20%7D%0A%7D' }
  , hrefId1: { link:'https://google.com', label:'I am just a link'}
}

// using mustache lets place content to the mustache templates
const finalHtml = mustache.render(customMustacheKeyHtmlContent, dataobject)
// once you have the html with actual data, you may use now the final html content to send in as email
console.log(finalHtml)
// example of this finalOutput can be found in test.html
// ----------------- End of example with custom key ------------- //