
# Email template generator ( WORKING IN PROGRESS)

Generates email templates for the following modules

- button
- data card
- description
- image
- label
- table
- highchart (TODO)

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
const labelOnly = emailhelper.getModTemplate('label');
```

Above command will result to


or
`emailhelper.processAllTemplates(['label','button']);`

### button

... TODO: More descriptions

