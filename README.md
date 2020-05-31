# Ionic-Angular-01-Basic-Recipe-Project
In this repository, You will learn to create a basic recipe project which uses ionic, angular and node behind the scenes.

> Click :star:if you like the project. Pull Request are highly appreciated.

# Ionic-Angular-Project-Setup
Setup an ionic project which uses ionic, angular and node behind the scenes.

## Installation | Ionic

### Description
Ionic apps are created and developed primarily through the Ionic command-line utility. The Ionic CLI is the preferred method of installation, as it offers a wide range of dev tools and help options along the way. It is also the main tool through which to run the app and connect it to other services, such as Ionic Appflow.

| No. | Steps |
|---- | ---------
|1 | Click On : https://ionicframework.com/ . |
|2 | Click On 'Developers' dropdown tab then 'Installation'. | 
|3 | Open your Terminal and execute the below command to install the Ionic CLI with npm: |
> npm install -g @ionic/cli

### Note : Before proceeding, make sure your computer has Node.js installed.

## Installation | Node.js

### Description
Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser.

| No. | Steps |
|---- | ---------
|1 | Click On : https://nodejs.org/en/ . |
|2 | Download for Windows/Linux and install it. |

## Project Setup

### Description
We will create and setup an ionic project with named 'Ionic-Angular-Project-Setup', assuming that you have installed ionic cli and node.js.

| No. | Steps |
|---- | ---------
|1 | Using System/VS Code/Any Editor's terminal, Navigate into the folder where you want to create your new project folder for ionic project once you navigate it. |
|2 | In Terminal, execute the below command. |
|3 | **`ionic start`** |  
|4 | This basically generates you a project.Now, it will ask you a couple of questions like what should be the name of that project and I'll name it 'Ionic-Angular-Project-Setup' but you can of course choose any name you want. |
|5 | Project name: **`Ionic-Angular-01-Basic-Recipe-Project`** |
|6 | Next you can choose from a couple of templates. Now the list here could change over time. You essentially have the choice between a blank template which is totally empty project with just a starting page, the side menu template where you have a side menu you can slide in from the left and a tabs menu where you have some taps at the bottom. |
|7 | Starter template: **`blank`** |
|8 | This will generate a new project with blank template and install all the dependencies like angular and ionic. |
|9 | Once it is finished, I'm asked if I want to use ionic app flow and connect my app. you can simply answer No here by typing 'n'. |
|10 | Install the free Ionic Appflow SDK and connect your app? (Y/n): **`n`** |
|11 | Now you can navigate into this newly 'Ionic-Angular-Project-Setup' or whatever you name that folder. |
|12 | **`cd Ionic-Angular-01-Basic-Recipe-Project/`** |
|13 | Now run this project using the below command.|
|14 | **`ionic serve`** |
|15 | Behind the scenes as you can see here actually use the Angular CLI ie which is installed for you in this project to spin up a development server which in the end runs your application builds your angular application and that's really cool ionic uses the angular CLI behind the scenes so all the cool features offered by the Angular CLI are included in an ionic project as well and you don't need to wait for the Ionic CLI to update to include something you might want to use from the Angular CLI. |
|16 | By Default, Your project will be served at port 8100. Keep ionic serve running and open your ionic project at any browser and visit the link below |
|17 | http://localhost:8100/ . |
|18 | Finally your ionic-angular project is running and has been setup successfully. |

---

# Working with 'Ionic-Angular-01-Basic-Recipe-Project'

## Generating a recipes page using Ionic CLI

| No. | Steps |
|---- | ---------
|1 | In VS Code/Any Editor's terminal, Using Ionic CLI; create a page with name 'recipes'. |
|2 | Execute command `ionic generate` then Ionic CLI will ask **_what would you like to generate ?_** | 
|3 | Now choose `page` from the list that Ionic CLI gave you and then Ionic CLI will ask **_Name/path of page:_** type `recipes` |
|4 | Ionic CLI will generate a page `recipes` for you and also configure everything for this page. like adds routes, adjusts app-routing.module.ts to include the path for `recipes` page using lazy-loading.  
|5 | Alternative, just execute this command to generate a page `recipes` directly `ionic generate page recipes` . This is do the same as above.|

## Removing the environments folder and its files from the git

| No. | Steps |
|---- | ----|
|1 | It is recommended to not share your api key to the public. And the best place to keep your keys are in `environments` folder in `environment.prod.ts` and `environment.ts` files which help to swaps the key according to the environment, we are working as production or testing/staging. |
|2 | When you commit your project on git and then on github, you should add these files `environment.prod.ts` and `environment.ts` to the `.gitignore` file. So that while committing your project to git and then on github. These files will be ignored by git and github, therefore would not be loaded to git and github account. |
|3 | Open `.gitignore` file and add the below path in it. |
|4 | path for environment.prod.ts file : `src/environments/environment.prod.ts` and path for environment.ts file : `src/environments/environment.ts` |
|5 | Note : If you committed your project already to git and then you add these files in `.gitignore` file then `.gitignore` will not ignore these files. For that you need to remove these files from the git and then you need to push your project to github. |
|6 |Suppose in this project we already committed this project and also pushed it to the github. Now adding these files `environment.prod.ts` and `environment.ts` to the `.gitignore file would not be ignored. So delete these files or the complete folder first from the git, for that execute the below command to your terminal. |
|7 | `git rm -r --cached src/environments` |

## Creating `recipe.model.ts` in `recipes` folder

We will be describing how a single recipe should look like in `recipe.model.ts` file.

## Rendering recipes on `index.html` file

| No. | Steps |
|----|----|
| 1 | Declaring a 'recipes' array of type `Recipe` from `recipe.model.ts` and also assigning values to `recipes` array according to model key-value pairs `recipes.page.ts` .|
| 2 | Rendering recipes on index.html file using `*ngFor` Directive. |

## Generating `recipe-detail` page in `recipes` folder

Execute this command `ionic generate page recipes/recipe-detail`.
In this, we will be displaying a single recipe detail.
