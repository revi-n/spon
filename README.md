# SPON - Node.js project with a pre-configured Webpack template

## tried to use all latest module's 

## Requirements
If you do not intend to work with the template source code (and that means you will not be compiling it or running the Webpack dev server), you do not need to install anything. You can simply navigate to the dist folder and start editing the files.

Most developers will be editing the source code and will also be running Webpack to recompile the template files. If that's the case, then ensure that you have Node.js installed. [You can download it from here](https://nodejs.org/en/download/)


## Quick Start
- [Download the latest release](https://github.com/revi-n/spon/archive/refs/heads/main.zip) OR clone the repo: `git clone https://github.com/revi-n/spon.git`
- Install Node.js if you don't already have it on your system.
- Open the project root in your command line.
- run `npm install` in your command line.
- if you want to recompile the template files (which output to the dist folder), run `npm run build`

To keep code repetition to a minimum, we've used Handlebars.js as the templating engine and partials to quickly add the same code to different pages. We also use a Handlebars plugin for JSON data - this allows us to use loops and output a single HTML code block instead of repeating the same HTML.

**Please note that this is an HTML template only. It does not connect to a database, and will not automatically work in a content management system (Wordpress etc). You will need to incorporate our code into your application.**


## Template Key Features
* used letest webpack.(template will be always up to date)
* added custon css and js example
* imported bootstrap as sample.


## Template File structure

📁 dist - Generated version of the template. Go here if you do not want to work with the template source code. But be warned: if you customise anything in this folder directly, and then later recompile the template using webpack, unless you move the dist folder out of the template, your changes will be overridden.

📁 node_modules - Directory where NPM installs dependancies. You will not see this folder until you complete the template installation. You do not need to create this folder.

📁 src - Template source code. Go here to customise your template.

📁 src/assets - Template assets such as CSS, JS, Images etc.

📁 src/data - Template JSON Data files. We use these JSON files to make your job easier to insert content into the template. 

📁 src/html - Template pages. Go here to edit existing pages or add new pages.

📁 src/partials - Handlebars partial templates. 


## Handlebars
Handlebars is a template engine that allows us to keep our template source code as organised and as clean as possible. It cuts down on code duplication and through the use of helper functions, allows template developers to very quickly output large amounts of data with minimal code. [You can read more about it here](https://handlebarsjs.com).


### Example Handlebars Partial
Open the following file in our template: src/html/index.html.

Around line 21 you'll see the following code:
```
{{> header/head }}
```
That's a Handlebars partial. That code tells Handlebars to look inside a folder called content (located in the partials folder) and then to find a file called breadcrumbs and insert it into the index.html file when it is compiled.

There are a few important notes about our use of Handlebars partials:

* All of our partials are stored inside src/partials. Do not place partials anywhere else.
* We use .html as our partial file extension. We have also added .svg as a valid partial file extension.
* If you have folders within folders inside your partial folder, only reference the folder the partial resides in. So "partials/header/navbars/navbar.html" would be referenced as "navbars/navbar".
* Do not include the partial file extension. Note in the example above that we output "breadcrumbs" and not "breadcrumbs.html"

## Template JSON Data
The Webpack Handlebars plugin that we use comes with a very handy utility that allows us to pass in JSON files as template data.

Please navigate to: src/data. Here is where our template data JSON files reside. You can edit, remove or add your own to this folder.


## Customise Template Styles
All of the template's source CSS/SASS files are kept inside the template's assets folder. Navigate to src/assets/scss. Open up theme.scss with your editor.

This is the main entry point for all other SASS/CSS files.


## Create New Pages
To create a new page, navigate in your code editor to: src/html. To make it easier to get the correct HTML in place, clone an existing page. Rename the newly-created file to whatever URL you require. And that's it. You are now free to open the new page with your code editor, make your changes, and then save the file. Quit Webpack devserver and restart it for the page to show up.


## Bootstrap Documentation
Bootstrap already has a comprehensive documentation site that will guide you in setting up and using all default Bootstrap features. Bootstrap 5 is fully integrated to our template's source code. Please refer to Bootstrap's doc site first for any default Bootstrap features: [Visit Bootstrap's Doc Site](https://getbootstrap.com/docs/5.3/getting-started/introduction/)


## Credits
[Bootstrap](https://getbootstrap.com/)

## Contact Us
you can email us at art.400t@gmail.com
