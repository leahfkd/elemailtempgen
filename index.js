/**
 * File: emailtempHelper.js                                                    *
 * Created Date: 2022-12-14T13:41:53                                           *
 * Author: Lei                                                         *
 */

 'use strict'
const mustache = require('mustache');
const fs = require('fs');
const path = require('path');

const getModTemplate = (type, objKey) => {
  let tmp = ''
  // const validtemps = ['table','button','label','image','datacard','description']
  const validtemps = ['table', 'datacard', 'label', 'image', 'description', 'button','chart']
  if (!validtemps.includes(type)) {
    console.log(`Template ${type} is not available`)
    return tmp
  }
  let temp = fs.readFileSync(path.join(__dirname,`templates/modules/${type}.mustache`)).toString()
  if (objKey) {
    switch (type) {
      case 'table':
        temp = temp.replaceAll('modTable',`${objKey}`)
        break;
      case 'label':
        temp = temp.replaceAll('modLabel',`${objKey}`)
        break;
      case 'description':
        temp = temp.replaceAll('modDescription',`${objKey}`)
        break;
      case 'datacard':
        temp = temp.replaceAll('modDatacard',`${objKey}`)
        break;
      case 'button':
        temp = temp.replaceAll('modButton',`${objKey}`)
        break;
      case 'image':
        temp = temp.replaceAll('modImage',`${objKey}`)
      case 'chart':
        temp = temp.replaceAll('modImage',`${objKey}`)
        break;
    }
  }
  return temp
}
 
const attachModulesToMainTemp = (modules) => {
  const obj = {modules: modules}
  const s = fs.readFileSync(path.join(__dirname, 'templates/main.mustache')).toString()
  const html = mustache.render(s, obj)
  return html
}

const processAllTemplates = (modules) => {
  if (!Array.isArray(modules)) {
    console.log('This method only accepts array of valid modules')
    return ''
  }
  let tempsInModules = ''
  modules.forEach(mod => {
    if (typeof mod === 'string') {
      tempsInModules += getModTemplate(mod)
    } else {
      tempsInModules += getModTemplate(mod.module, mod.key)
    }
    
    tempsInModules += '' + 
                      '<!--- ---> \n' +
                      '';
  })
  const html = attachModulesToMainTemp(tempsInModules)
  return html
}

module.exports = {
  getModTemplate,
  attachModulesToMainTemp,
  processAllTemplates
}
 


