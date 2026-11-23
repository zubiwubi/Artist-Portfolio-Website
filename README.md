# Artist-Portfolio-Website
My first webpage where I test out some different HTML features! My goal is to make a little website where I can showcase my work as a 2D character illustrator and 3D artist.

# Filestructure

ClientApp/
├── src/
│   ├── components/ (reusable components)
│   ├── pages/
│   ├── utils/
│   ├── assets/
│   ├── styles/
│   ├── services/ (api)
│   ├── redux/ (context)
│   └── config/

# note to self:
A code smell is the name for a sign that the structure is going wrong. Not a bug, just a shape that tends to grow bugs. Some examples for a React app:

    A component file long enough that you have to scroll around to find anything.
    The same chunk of JSX or logic in two places, so any change has to be made twice and one copy eventually gets forgotten.
    A component that knows too much about another component's internals, reaching into data that is not really its business.
    Names that lie or say nothing. data, handleStuff, a component called Card that is actually a form.

When you are not sure if something needs a refactor, these are the questions to ask. They are also, more or less, what we look at when we grade code quality, so they are worth saving somewhere for later:

1. Is any component too long to take in at a glance? If you have to scroll to find things inside one file, split it.
2. Is anything duplicated? The same HTML (JSX) or the same logic in two places? Lift it out and make it a shared thing.
3. Does each component have one clear job you can state in a sentence? "Shows a product", "collects a new product", "coordinates the products feature". If the sentence needs an "and", something should probably be done.
4. Do the names say what the thing is? A component called Card should be a card. A handler called handleSubmit should handle a submit.
5. Is state changed only through its setter, always with a new value, never mutated in place?
6. Does data still flow one way, down through props, with actions reported back up through callbacks, and no child reaching into a parent?
7. Are shared types defined once and imported, not copied?

# css
*,
*::before,
*::after {
  box-sizing: border-box;
}