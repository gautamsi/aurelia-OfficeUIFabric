# aurelia-OfficeUIFabric
Office Fabric UI components for Aurelia
Following is working - look at  [sample/dist/welcome.html](https://github.com/gautamsi/aurelia-OfficeUIFabric/blob/master/sample/dist/welcome.html) for examples, almost all api is tested on this page  

- Button
- List
- List Item
  - List Item Action - so that you can add click events
- Persona
- SearchBox - with optional Search button  which fires search event on mousedown
- Spinner
- Overlay (needs improvement)
- NavBar
- ContextualMenu

How to run sample
````cmd

git clone

cd aurelia-OfficeUIFabric

npm install
jspm install -y

cd sample
jspm install -y
npm install

cd..

gulp serve

````