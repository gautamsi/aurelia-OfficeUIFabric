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
- Label
- Panel

#How to run the sample
    cmd
    
    git clone
    
    cd aurelia-OfficeUIFabric
    
    npm install
    jspm install -y
    
    cd sample
    jspm install -y
    npm install
    
    cd..
    
    gulp serve

#Usage
To install the plugin in your Aurelia project, install it using the jspm command
```
jspm install github:gautamsi/aurelia-OfficeUIFabric
```
Afterwards, you can extend your main.ts with the following code snippet that loads the plugin (assuming you are using the Aurelia Skeleton):
```
aurelia.use.plugin('gautamsi/aurelia-OfficeUIFabric');
```