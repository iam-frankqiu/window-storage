# window-storage

window-storage is a TypeScript module that allows you to get data from the browser's local storage or session storage easily.

## Features

- Supports both local storage and session storage
- Provides methods to get, set, remove and clear data
- Handles JSON parsing and stringify automatically
- Checks for storage availability and compatibility

## Installation

To install window-storage, you can use npm or yarn:

```bash
npm install window-storage
# or
yarn add window-storage
# or 
pnpm add window-storage
```

## Usage
To use window-storage, you need to import it in your JavaScript file:
```bash
import { getFromStorage, setToStorage, removeFromStorage, clearStorage } from 'window-storage';
```
Then you can use the methods provided by the module to access the storage:

```bash
// Set data in local storage
setToStorage('localStorage', 'name', 'Alice');

// Get data from local storage
getFromStorage('localStorage', 'name'); // 'Alice'

// Remove data from local storage
removeFromStorage('localStorage','name');

// Clear all data from local storage
clearStorage('localStorage');

// Set data in session storage
setToStorage('sessionStorage', 'age', 25);

// Get data from session storage
const age = getFromStorage('sessionStorage','age'); // 25

// Remove data from session storage
removeFromStorage('sessionStorage','age');

// Clear all data from session storage
clearStorage('sessionStorage');
```
Note that the module will automatically parse and stringify JSON data for you, so you don't need to do it manually:
```bash
// Set an object in local storage
setToStorage('localStorage', 'user', { name: 'Alice', age: 25 });

// Get an object from local storage
const user = getFromStorage('localStorage','user'); // { name: 'Alice', age: 25 }
```
## License
window-storage is licensed under the MIT License.





