/**
 * File: test.js                                                               *
 * Created Date: 2023-05-26T00:12:20                                           *
 * Author: Lei                                                      *
 * Last Modified: 2023-05-26T00:12:21                                          *
 * Modified By: Lei                                                  *
 */

const emailhelper = require('./')

console.log('PACKAGE TEST')
console.log(' ============================================= ');

const callTest = (n, tmx = 1000) => {
  setTimeout(() => {
    n()
  }, tmx);
}
const singlemodulewithoutkey = (mod = 'label') => {
  const _singlemodulewithoutkey = emailhelper.getModTemplate(mod);
  // TODO make this properly work
  if (_singlemodulewithoutkey != '') console.log("Ok")
  console.log('...........')
}
const multipletemplateswithoutkey = (mod = ['label','button']) => {
  const _multipletemplateswithoutkey = emailhelper.processAllTemplates(mod);
  // TODO make this properly work
  if (_multipletemplateswithoutkey != '') console.log("Ok")
  console.log('...........')
}
const multipletemplateswithkey = (mod = [{key:'xyz1', module: 'label'}]) => {
  const _multipletemplateswithkey = emailhelper.processAllTemplates(mod);
  // TODO make this properly work
  if (_multipletemplateswithkey != '') console.log("Ok")
  console.log('...........')
}

const singlemodulewithkey = (mod = 'label', key = 'xyz') => {
  const _singlemodulewithkey = emailhelper.getModTemplate(mod,key);
  // TODO make this properly work
  if (_singlemodulewithkey != '') console.log("Ok")
  console.log('...........')
}
callTest(()=>{ console.log('running single module without key:')}, 100);
callTest(singlemodulewithoutkey, 300);
callTest(()=>{ console.log('running multiple module without key:')}, 350);
callTest(multipletemplateswithoutkey, 500);
callTest(()=>{ console.log('running multiple module with key:')}, 550);
callTest(multipletemplateswithkey, 600);
callTest(()=>{ console.log('running multiple module with key:')}, 650);
callTest(multipletemplateswithkey, 700);

callTest(()=>{ console.log('===============================')}, 750);
callTest(()=>{ console.log('Test complete')}, 750);