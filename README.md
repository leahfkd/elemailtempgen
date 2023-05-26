
# Email template generator ( WORKING IN PROGRESS)

Generates email templates for the following modules with set of mustache placeholder.

- button
- datacard
- description
- image
- label
- table
- chart see https://www.image-charts.com/blog/create-chart-with-one-url

## Installation
```bash
  npm install elemailtempgen
```

Example to include the package to project file:
```
const emailhelper = require('elemailtempgen');

```
## Usage/Examples

### Without custom key
This generate template with default keys
```
emailhelper.getModTemplate(modulename);
```
Example:
```
const nocustomkey = emailhelper.getModTemplate('label');

console.log(nocustomkey);
```

Above command will result to a single module hmtl content structure with mustache placeholder `{{{modLabel.content}}}`.

---


To attach modules in a whole html document format, you may use:

```
emailhelper.processAllTemplates(['label']);
```

For multiple modules you can process it by:

```
emailhelper.processAllTemplates(['label','button']);
```

### With custom key
To generate template with custom keys:

```
emailhelper.getModTemplate(modulename,customkey);
```
Example: 
```
const modulewithcustomkey = emailhelper.getModTemplate('label','label_id1' );

console.log(modulewithcustomkey);
```

It will generate module html with mustache placeholder like

`{{{label_id1.content}}}`

This process is the same when you want to create template already attached to a whole html content.

Example:
```
const modulestogeneratewithkeys = [
  {key:'label_id1', module: 'label'}
  , {key:'button_id1', module: 'button'}
];

const htmlcontent = emailhelper.processAllTemplates(modulestogeneratewithkeys);

console.log(htmlcontent);
```

---


## List of all available modules and their info
| module | available object nodes   | Default key  |
| :-----: | :---: | :---: |
| button | label, href, bgcolor   | modButton   |
| label | content, bgcolor   | modLabel   |
| datacard | label, subLabel,  imageLink, cardNumber   | modDatacard   |
| description | content | modDescription   |
| image | src, bgcolor | modImage   |
| chart | src | modChart   |
| table | columns, rows, bgcolor | modTable   |

Module table additional objects for columns and rows

array of `title`

Example:
 ```
 const moduleobjects = {
   modTable: {
    rows: [
      [ {title: "Lei"}, {title:"29"} ]
      , [ {title: "John"}, {title:"30"} ]
    ],
    columns: [ { title:"Name" }, { title: "Age"}]
  }
 }
 ```


This will generate a table that looks like (Note Display is based on default table display placed here)
| Name |  Age |
| :-----: | :---: |
| Lei | 29 |
| John | 30 |


## How available objects nodes and keys are use in actual

### Using module button

```
{
 label: '',
 href: '',
 bgcolor:''
}
```
If you have default key, the package will generate below mustache placeholder

- `modButton.label`
- `modButton.href`
- `modButton.bgcolor`

If you have custom key the `modButton` will replaced with supplied custom key

Full example for default key:
```
const emailhelper = require('elemailtempgen')
const mustache = require('mustache');


const htmlwithbutton = emailhelper.processAllTemplates(['button']);

const mustacheobj = {
  modButton: {
    label: 'Hello World',
    href: 'https://www.youtube.com',
    bgcolor:'red'
  }
}

const html = mustache.render(htmlwithbutton, mustacheobj)
console.log(html);


```

Full example for default key:
```
const emailhelper = require('elemailtempgen')
const mustache = require('mustache');


const modulestogeneratewithkeys = [
  {key:'button_id1', module: 'button'}
];
const htmlwithbutton = emailhelper.processAllTemplates(modulestogeneratewithkeys);

const mustacheobj = {
  button_id1: {
    label: 'Hello World',
    href: 'https://www.youtube.com',
    bgcolor:'red'
  }
}

const html = mustache.render(htmlwithbutton, mustacheobj)
console.log(html);


```
