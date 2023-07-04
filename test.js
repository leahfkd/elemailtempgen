/**
 * File: test.js                                                               *
 * Created Date: 2023-05-26T00:12:20                                           *
 * Author: Lei                                                      *
 * Last Modified: 2023-05-26T00:12:21                                          *
 * Modified By: Lei                                                  *
 */

const emailhelper = require('./');
const mustache = require('mustache');
const constants = require('./constants');

console.log('PACKAGE TEST')
console.log(' ============================================= ');

const callTest = (n, tmx = 1000, param) => {
  setTimeout(() => {
    n(param)
  }, tmx);
}
const singlemodulewithoutkey = (mod = 'label') => {
  const _singlemodulewithoutkey = emailhelper.getModTemplate(mod);
  // TODO make this properly work
  if (mod ==='chart') {
    const mainx = emailhelper.processAllTemplates([mod]);
    // const obj = {
    //   modChart: {
    //     src: 'https://image-charts.com/chart?cht=p3&chs=700x100&chd=t:60,40&chl=Hello|World&chan&chf=ps0-0,lg,45,ffeb3b,0.2,f44336,1|ps0-1,lg,45,8bc34a,0.2,009688,1'
    //   }
    // }
    // const html = mustache.render(mainx, obj)
    // console.log(html)
  }
  if (_singlemodulewithoutkey != '') console.log("Ok")
  console.log('...........')
}
const multipletemplateswithoutkey = (mod = ['label','button']) => {
  const _multipletemplateswithoutkey = emailhelper.processAllTemplates(mod);
  // TODO make this properly work
  if (_multipletemplateswithoutkey != '') console.log("Ok")
  console.log('...........')
}
const multipletemplateswithkey = (mod = [{key:'label_id1', module: 'label'}]) => {
  const _multipletemplateswithkey = emailhelper.processAllTemplates(mod);
  // TODO make this properly work
  if (_multipletemplateswithkey != '') console.log("Ok")
  console.log('...........')
}

const singlemodulewithkey = (mod = 'label', key = 'label_id1') => {
  const _singlemodulewithkey = emailhelper.getModTemplate(mod,key);
  // TODO make this properly work
  if (_singlemodulewithkey != '') console.log("Ok")
  // console.log(_singlemodulewithkey)
  console.log('...........')
}
callTest(()=>{ console.log('running single module without key:')}, 100);
callTest(singlemodulewithoutkey, 300);
callTest(()=>{ console.log('running multiple module without key:')}, 350);
callTest(multipletemplateswithoutkey, 500);
callTest(()=>{ console.log('running multiple module with key:')}, 550);
callTest(multipletemplateswithkey, 600);
callTest(()=>{ console.log('running multiple module with key:')}, 650);
callTest(singlemodulewithkey, 700);
/// different modules

const modules = constants.validModules
let currenttime = 700
modules.forEach(mod => {
  currenttime = currenttime+50
  callTest(()=>{ console.log(`running single module ${mod} without key:`)}, currenttime);
  currenttime = currenttime +100
  callTest(singlemodulewithoutkey, currenttime, mod);
})
callTest(()=>{ console.log('===============================')}, 750);
callTest(()=>{ console.log('Test complete')}, 750);