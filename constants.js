/**
 * File: constants.js                                                          *
 * Created Date: 2022-12-14T14:16:39                                           *
 * Author: Lei                                                         *
 */



module.exports = {
  validModules: ['table', 'datacard', 'label', 'image', 'description', 'button','chart','href']
  , moduleObjectsSample: {
      modLabel:{
        content:'', bgcolor:''
      }
      , modButton: {
        label:'', href:'', bgcolor:''
      }
      , modDatacard: {
        label:'', subLabel:'', imageLink:'', cardNumber:''
      }
      , modDescription: {
        content:''
      }
      , modeImage: {
        src:'', bgcolor:''
      }
      , modChart: {
        src:''
      }
      , modTable: {
        columns:[{ title:"Name" }, { title: "Age"}]
        , rows:[
            [ {title: "Lei"}, {title:"30"} ]
            , [ {title: "John"}, {title:"30"} ]
        ]
        , bgcolor:''
      }
      , modHref: {
        link: ''
        , label:''
      }
  }
}