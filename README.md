### Candy Monster Clinic: Answering Your React Router Questions!

### What is React Router?

React's Router library allows you to add multiple pages and flows of information, and to seamlessly keep the browser in touch with your UI.

Router allows you to nest routes to share UI across different pages while keeping your code DRY, allows you to set up dynamic links to different parts of your app, and updates the URL without making an HTTP request.

### Connecting URLs to React Components

To use Router, you'll wrap everything in a top-level component called `Root` that calls upon everything we need from Router.

`Root` will take `browserHistory` and `routes` -- both of which we get from Router -- as props. `browserHistory` uses the History API built into the browser to create clean URLs. `routes` is a collection of `Route` components, each of which takes another component as props.

Our `routes.js` file lays out all the Route components -- and their level of nesting -- within our app. We'll import that file into our `main.js` file so we can pass our defined routes down as props to our `Root` component.

To dig a little deeper into our `routes.js` file itself, we're setting our `IndexRoute`, or default component, so it displays the `CandyListContainer`, or the list of all the candies in our database. When we navigate to our root path for the application `/`, it will display that list.

We also have a `Route` for our `CandyShowContainer`, and both this route and our `IndexRoute` are wrapped inside a `Route` which renders our Layout component. More on that in a minute.

A few things to note:

* Most of the components that get passed into our `Route` components tend to be "containers" that store the state for each page (or URL) in our app, rather than presentational components.
* All our URLs need to be initially defined in Rails' `routes.rb` file.
* We only pass URLs that display views into our `Route` components. The API endpoints that we use to fetch our data (i.e., `/api/v1/candies.json` in the CandyListContainer) only need to be defined inside Rails' `routes.rb` file. We do not tell Router to listen to those.

### Using Nested Routes

But what's that `Layout` component all about, and why do we render it in a top-level Route in our routes.js file?

Well, while our `Layout` isn't doing too much for us _at the moment_, if we were to create a nav bar and decide we want it to be present on every page, we'd need to find a way to share that bit of UI.

Creating a `Layout` component is a good way to keep things semantically nice and organized. Next, in order to force all our pages to share a particular bit of UI, we nest all the other routes below the one that renders it. The `this.props.children` line in Layout.js allows us to render "children" components in addition to our theoretically ubiquitous nav bar.

Putting routes inside other routes allows us to have greater control over which UI is rendered where.

### Creating Links

To create links between pages in our application, we will use React Router's `Link` component, which performs similarly to an anchor tag (`<a>`), except that it's aware of its Router context. Clicking on a `Link` component will take you to the specified part of your React app without making an HTTP request. You can also use it to dynamically create links.

In our `CandyListTile` component, we've included the following line of code:

`<Link to={`/candies/${props.id}`}><img src={props.url} className="list-item-image"/></Link>`.

This allows us, from our list of candies, to create dynamic links leading to each candy's show page.

## How Do I Troubleshoot?

A few tips from my own experiences...

* Always start simple and small. When building a component, make sure you can see it rendering "Hello World" before you add the complicated stuff. When making a Fetch request, put a `binding.pry` inside your controller action to ensure you're sending a request to the right endpoint, before adding anything else.
* Make tons of use of `binding.pry` and `debugger`, sometimes at the same time.
* When a React component all of a sudden doesn't render, it could be a typo. Seriously. React is kinda a drama queen when it comes to syntax. Look for missing semi-colons and extra curly braces.
* Test, test, test. Learn to read and understand test errors. They often offer clues to what could be going on.

### A Reminder

React is new! By learning it now, you're on the cutting-edge.

However, we understand there are plenty of frustrations that come with working with a new library that doesn't have set-in-stone conventions like Rails does. You'll also need to keep in mind that, since React is constantly and rapidly evolving, some of the stuff you'll see online, on Stack Overflow and such, is now out-of-date, even if it was posted relatively recently. So keep asking lots of questions, trying and failing and trying again, and just plugging along!


### Candy Monster: Basic Set-Up

```
git clone git@github.com:lilybarrett/candy_monster.git
cd candy_monster
bundle install
npm install
rake db:create && rake db:migrate && rake db:rollback && rake db:migrate && rake db:seed
```
