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
