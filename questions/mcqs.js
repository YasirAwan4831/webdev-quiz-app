const questions = [
  {
    question: "What is the correct HTML tag for the largest heading?",
    options: [
      "<heading>", 
      "<h6>", 
      "<h1>", 
      "<head>"
    ],
    correct: 2
  },
  {
    question: "Which HTML tag is used to create an unordered list?",
    options: [
      "<ol>",
      "<li>",
      "<list>",
      "<ul>"
    ],
    correct: 3
  },
  {
    question: "Which tag is used to insert a line break in HTML?",
    options: [
      "<br>",
      "<break>",
      "<lb>",
      "<newline>"
    ],
    correct: 0 
  },
  {
    question: "What is the purpose of the <alt> attribute in <img> tag?",
    options: [
      "To specify image alignment",
      "To add animation",
      "To display text if image fails to load",
      "To link another image"
    ],
    correct: 2 
  },
  {
    question: "Which HTML tag is used to create a table?",
    options: [
      "<tab>",
      "<td>",
      "<tr>",
      "<table>"
    ],
    correct: 3
  },
  {
    question: "Which element is used for inserting a horizontal line?",
    options: [
      "<hr>",
      "<line>",
      "<br>",
      "<border>"
    ],
    correct: 0 
  },
  {
    question: "Which HTML tag is used to define a hyperlink?",
    options: [
      "<a>",
      "<href>",
      "<link>",
      "<url>"
    ],
    correct: 0 
  },
  {
    question: "What does <!DOCTYPE html> declare?",
    options: [
      "CSS stylesheet link",
      "Document type and HTML version",
      "JavaScript type",
      "HTML comment"
    ],
    correct: 1
  },
  {
    question: "Which HTML tag is used to display preformatted text?",
    options: [
      "<code>",
      "<pre>",
      "<p>",
      "<text>"
    ],
    correct: 1 
  },
  {
    question: "Which tag is used to collect user input?",
    options: [
      "<form>",
      "<submit>",
      "<collect>",
      "<input>"
    ],
    correct: 3 
  },
  {
    question: "What is the correct HTML tag to define emphasized text?",
    options: [
      "<em>",
      "<i>",
      "<bold>",
      "<strong>"
    ],
    correct: 0 
  },
  {
    question: "Which tag is used to define metadata about an HTML document?",
    options: [
      "<data>",
      "<head>",
      "<meta>",
      "<info>"
    ],
    correct: 2
  }, 
  {
    question: "Which tag defines a section in a document?",
    options: [
      "<section>",
      "<div>",
      "<area>",
      "<main>"
    ],
    correct: 0
  },
  {
    question: "Which tag is used to define a navigation link block?",
    options: [
      "<ul>",
      "<nav>",
      "<menu>",
      "<navigate>"
    ],
    correct: 1
  },
  {
    question: "Which tag is used to embed a video in HTML5?",
    options: [
      "<video>",
      "<movie>",
      "<embed>",
      "<media>"
    ],
    correct: 0
  },
  {
    question: "Which HTML attribute is used to open a link in a new tab?",
    options: [
      "open='new'",
      "link='tab'",
      "target='_blank'",
      "href='new'"
    ],
    correct: 2
  },
  {
    question: "Which HTML element is used to define a caption for a table?",
    options: [
      "<header>",
      "<title>",
      "<th>",
      "<caption>"
    ],
    correct: 3
  },
  {
    question: "Which tag is used to mark up contact information?",
    options: [
      "<address>",
      "<footer>",
      "<info>",
      "<contact>"
    ],
    correct: 0
  },
  {
    question: "Which element represents the main content of the HTML document?",
    options: [
      "<content>",
      "<main>",
      "<article>",
      "<body>"
    ],
    correct: 1
  },
  {
    question: "Which HTML tag is used to define a list item?",
    options: [
      "<point>",
      "<ul>",
      "<li>",
      "<item>"
    ],
    correct: 2
  },
  {
    question: "Which HTML tag is used to embed an external web page?",
    options: [
      "<iframe>",
      "<embed>",
      "<link>",
      "<frame>"
    ],
    correct: 0
  },
  {
    question: "Which HTML element is used to play audio files?",
    options: [
      "<music>",
      "<sound>",
      "<media>",
      "<audio>"
    ],
    correct: 3
  },
  {
    question: "Which HTML element defines a title for the document?",
    options: [
      "<title>",
      "<meta>",
      "<header>",
      "<head>"
    ],
    correct: 0
  },
  {
    question: "Which HTML tag is used to group inline elements and apply styles?",
    options: [
      "<div>",
      "<section>",
      "<span>",
      "<p>"
    ],
    correct: 2
  },
  {
    question: "Which attribute is used to give an element a unique identifier?",
    options: [
      "class",
      "id",
      "key",
      "name"
    ],
    correct: 1
  },
  {
    question: "Which HTML tag is used to define a dropdown list?",
    options: [
      "<option>",
      "<select>",
      "<dropdown>",
      "<input type='dropdown'>"
    ],
    correct: 1
  },
  {
    question: "Which HTML5 tag is used to define self-contained content like a blog post?",
    options: [
      "<main>",
      "<article>",
      "<section>",
      "<div>"
    ],
    correct: 1
  },
  {
    question: "Which tag is used to define the top of a web page or a section?",
    options: [
      "<head>",
      "<header>",
      "<title>",
      "<top>"
    ],
    correct: 1
  },
  {
    question: "Which HTML tag is used to display a progress bar?",
    options: [
      "<progress>",
      "<bar>",
      "<meter>",
      "<range>"
    ],
    correct: 0
  },
  {
    question: "Which attribute is used in HTML to specify inline styles?",
    options: [
      "script",
      "style",
      "css",
      "class"
    ],
    correct: 1
  },
  // mvvvvvvvvvvv
   {
    question: "Which tag is used to define a scalar measurement within a known range (like a disk usage meter)?",
    options: [
      "<scale>",
      "<meter>",
      "<progress>",
      "<range>"
    ],
    correct: 1
  },
  {
    question: "Which HTML attribute specifies that an input field must be filled out before submitting the form?",
    options: [
      "checked",
      "mandatory",
      "validate",
      "required"
    ],
    correct: 3
  },
  {
    question: "What is the purpose of the 'placeholder' attribute in an input field?",
    options: [
      "It validates the form",
      "It defines the input type",
      "It makes the field required",
      "It provides a hint to the user"
    ],
    correct: 3
  },
  {
    question: "Which tag defines a client-side image-map?",
    options: [
      "<map>",
      "<area>",
      "<imgmap>",
      "<imagemap>"
    ],
    correct: 0
  },
  {
    question: "What does the 'autofocus' attribute do in HTML forms?",
    options: [
      "Highlights all inputs",
      "Focuses the input on page load",
      "Resizes the input",
      "Automatically submits the form"
    ],
    correct: 1
  },
  {
    question: "Which HTML tag is used to define a label for an input element?",
    options: [
      "<form-label>",
      "<tag>",
      "<label>",
      "<input-label>"
    ],
    correct: 2
  },
  {
    question: "Which tag is used to group related elements in a form?",
    options: [
      "<formgroup>",
      "<fieldset>",
      "<section>",
      "<group>"
    ],
    correct: 1
  },
  {
    question: "What is the purpose of the 'for' attribute in the <label> tag?",
    options: [
      "It defines form method",
      "It binds the label to a CSS class",
      "It associates the label with a specific input's id",
      "It links the label to a form"
    ],
    correct: 2
  },
  {
    question: "Which tag is used to define a term in a definition list?",
    options: [
      "<dd>",
      "<dt>",
      "<li>",
      "<term>"
    ],
    correct: 1
  },
  {
    question: "Which HTML attribute prevents the user from modifying the value of an input field?",
    options: [
      "fixed",
      "disabled",
      "locked",
      "readonly"
    ],
    correct: 3
  },
  {
    question: "Which HTML tag is used to provide a short hint describing the expected value of an input field?",
    options: [
      "label",
      "alt",
      "placeholder",
      "title"
    ],
    correct: 2
  },
  {
    question: "Which HTML element defines navigation links in a document?",
    options: [
      "<menu>",
      "<navigate>",
      "<link>",
      "<nav>"
    ],
    correct: 3
  },
  {
    question: "What is the correct way to create a comment in HTML?",
    options: [
      "<!-- This is a comment -->",
      "// This is a comment",
      "/* This is a comment */",
      "# This is a comment"
    ],
    correct: 0
  },
  {
    question: "Which HTML tag is used to define a list of options for an input element?",
    options: [
      "<select>",
      "<datalist>",
      "<list>",
      "<inputlist>"
    ],
    correct: 1
  },
  {
    question: "Which global HTML attribute is used to specify a unique identifier for an element?",
    options: [
      "id",
      "class",
      "key",
      "name"
    ],
    correct: 0
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
      "Creative Style Sheets"
    ],
    correct: 0
  },
  {
    question: "Which HTML tag is used to link an external CSS file?",
    options: [
      "<link>",
      "<style>",
      "<css>",
      "<script>"
    ],
    correct: 0
  },
  {
    question: "Which CSS property is used to change text color?",
    options: [
      "font-color",
      "color",
      "text-style",
      "text-color"
    ],
    correct: 1
  },
  {
    question: "Which property is used to change the background color?",
    options: [
      "bgcolor",
      "background",
      "color",
      "background-color"
    ],
    correct: 3
  },
  {
    question: "Which CSS property controls the text size?",
    options: [
      "font-size",
      "size",
      "text-size",
      "font-style"
    ],
    correct: 0
  },
  {
    question: "How do you make text bold in CSS?",
    options: [
      "font-weight: bold",
      "text-weight: bold",
      "font-style: bold",
      "bold: true"
    ],
    correct: 0
  },
  {
    question: "Which property is used to center text?",
    options: [
      "text-align",
      "center",
      "align",
      "text-style"
    ],
    correct: 0
  },
  {
    question: "How do you select an element with id='header' in CSS?",
    options: [
      ".header",
      "header",
      "#header",
      "*header"
    ],
    correct: 2
  },
  {
    question: "How do you select elements with class='box'?",
    options: [
      "box",
      ".box",
      "#box",
      "*box"
    ],
    correct: 1
  },
  {
    question: "Which CSS unit is relative to the root element?",
    options: [
      "em",
      "vh",
      "rem",
      "%"
    ],
    correct: 2
  },
  {
    question: "Which property is used to set spacing between lines of text?",
    options: [
      "line-height",
      "line-spacing",
      "spacing",
      "text-spacing"
    ],
    correct: 0
  },
  {
    question: "Which property sets space outside an element?",
    options: [
      "margin",
      "padding",
      "border",
      "spacing"
    ],
    correct: 0
  },
  {
    question: "Which property sets space inside an element?",
    options: [
      "gap",
      "inset",
      "margin",
      "padding"
    ],
    correct: 3
  },
  {
    question: "Which value of position property makes an element stick to the top when scrolling?",
    options: [
      "relative",
      "sticky",
      "absolute",
      "fixed"
    ],
    correct: 1
  },
  {
    question: "Which CSS property is used to add shadow to text?",
    options: [
      "shadow-text",
      "text-shadow",
      "font-shadow",
      "box-shadow"
    ],
    correct: 1
  },
  {
    question: "Which property controls the stacking order of elements?",
    options: [
      "stack-order",
      "position",
      "layer",
      "z-index"
    ],
    correct: 3
  },
  {
    question: "How do you make a list without bullets?",
    options: [
      "list: hidden",
      "list-style-type: none",
      "text-decoration: none",
      "list-type: none"
    ],
    correct: 1
  },
  {
    question: "Which shorthand property sets margin in one line?",
    options: [
      "margin-all",
      "margin",
      "margin-box",
      "margin-style"
    ],
    correct: 1
  },
  {
    question: "Which property is used to make elements responsive to different screen sizes?",
    options: [
      "responsive",
      "@media",
      "position",
      "display"
    ],
    correct: 1
  },
  {
    question: "What is the default display value of a <div>?",
    options: [
      "inline-block",
      "flex",
      "inline",
      "block"
    ],
    correct: 3
  },
  {
    question: "Which property is used to change the font of text?",
    options: [
      "text-font",
      "font-weight",
      "font",
      "font-family"
    ],
    correct: 3
  },
  {
    question: "What does the 'a:hover' selector do?",
    options: [
      "Styles a link when clicked",
      "Styles a link when mouse is over it",
      "Styles an active link",
      "Styles a visited link"
    ],
    correct: 1
  },
  {
    question: "Which property adds shadow around a box?",
    options: [
      "text-shadow",
      "shadow-box",
      "box-shadow",
      "box-border"
    ],
    correct: 2
  },
  {
    question: "How do you make an element hidden but keep its space?",
    options: [
      "hidden: true",
      "opacity: 0",
      "visibility: hidden",
      "display: none"
    ],
    correct: 2
  },
  {
    question: "How do you make an element disappear completely?",
    options: [
      "display: none",
      "opacity: 0",
      "hide: true",
      "visibility: none"
    ],
    correct: 0
  },
  {
    question: "Which value of 'position' allows manual placement using top/left?",
    options: [
      "absolute",
      "fixed",
      "static",
      "relative"
    ],
    correct: 0
  },
  {
    question: "What is the box model in CSS?",
    options: [
      "HTML layout system",
      "Flex layout system",
      "Content, border, margin, padding",
      "Only width and height"
    ],
    correct: 2
  },
  {
    question: "Which CSS unit is NOT relative?",
    options: [
      "%",
      "em",
      "rem",
      "px"
    ],
    correct: 3
  },
  {
    question: "How can you apply the same style to multiple selectors?",
    options: [
      "Use multiple style blocks",
      "Use repeat()",
      "Separate them with a comma",
      "Separate them with a dot"
    ],
    correct: 2
  },
  {
    question: "Which property is used for rounded corners?",
    options: [
      "round-corner",
      "border-style",
      "border-radius",
      "corner-radius"
    ],
    correct: 2
  },
  {
    question: "Which shorthand sets padding top, right, bottom, and left?",
    options: [
      "padding: 10px;",
      "padding: 10px 20px;",
      "All of these",
      "padding: 10px 20px 10px 20px;"
    ],
    correct: 2
  },
  {
    question: "How to apply a style only to the first child of an element?",
    options: [
      ":nth-child(1)",
      ":first-child",
      ":first",
      "::first"
    ],
    correct: 1
  },
  {
    question: "Which pseudo-class targets input fields when clicked?",
    options: [
      ":focus",
      ":hover",
      ":checked",
      ":active"
    ],
    correct: 0
  },
  {
    question: "What does 'inherit' do in CSS?",
    options: [
      "Removes style",
      "Inherits value from parent element",
      "Applies default styles",
      "Copies style from sibling"
    ],
    correct: 1
  },
  {
    question: "Which layout method is best for creating flexible, responsive layouts?",
    options: [
      "Block",
      "Grid",
      "Flexbox",
      "Float"
    ],
    correct: 2
  },
  {
    question: "Which flexbox property changes the direction of items?",
    options: [
      "justify-content",
      "flex-direction",
      "direction",
      "align-items"
    ],
    correct: 1
  },
  {
    question: "Which property adds animation between states?",
    options: [
      "hover",
      "keyframe",
      "transition",
      "animation"
    ],
    correct: 2
  },
  {
    question: "How do you make a div a flex container?",
    options: [
      "flex: container",
      "display: flex",
      "layout: flex",
      "position: flex"
    ],
    correct: 1
  },
  {
    question: "Which property aligns flex items along the main axis?",
    options: [
      "align-items",
      "justify-content",
      "align-content",
      "text-align"
    ],
    correct: 1
  },
  {
    question: "Which CSS feature allows you to reuse styles with different values?",
    options: [
      "functions",
      "mixins",
      "variables",
      "classes"
    ],
    correct: 2
  },
  {
    question: "What is CSS specificity used for?",
    options: [
      "To define the size of elements",
      "To calculate margins",
      "To set the font weight",
      "To determine which CSS rule applies if multiple rules target the same element"
    ],
    correct: 3
  },
  {
    question: "Which property is used to create a CSS Grid container?",
    options: [
      "display: flex;",
      "display: grid;",
      "grid-template-columns",
      "grid-area"
    ],
    correct: 1
  },
  {
    question: "What does `fr` unit stand for in CSS Grid?",
    options: [
      "Fixed resolution",
      "Free range",
      "Frame rate",
      "Fraction of the available space"
    ],
    correct: 3
  },
  {
    question: "How do you create a CSS animation?",
    options: [
      "motion: keyframe;",
      "transition: animate;",
      "animation: create;",
      "@keyframes and animation properties"
    ],
    correct: 3
  },
  {
    question: "What is the difference between `em` and `rem` units?",
    options: [
      "`em` is relative to the parent font size, `rem` is relative to the root font size",
      "`rem` is relative to parent, `em` is relative to root",
      "`em` is fixed size, `rem` is relative",
      "Both are the same"
    ],
    correct: 0
  },
  {
    question: "How do you make a CSS Grid with 3 equal columns?",
    options: [
      "grid-template-columns: 3fr;",
      "columns: 3;",
      "grid-template-columns: repeat(3, 1fr);",
      "grid-columns: 3 equal;"
    ],
    correct: 2
  },
  {
    question: "What does `z-index` control in stacking context?",
    options: [
      "Element's transparency",
      "Position relative to viewport",
      "Size of element",
      "Order in which elements overlap"
    ],
    correct: 3
  },
  {
    question: "Which CSS selector matches an element with a specific attribute value?",
    options: [
      "element#attr",
      "element.value",
      "element[attr=value]",
      "element[attr]"
    ],
    correct: 2
  },
  {
    question: "Which property controls the timing function of CSS animations?",
    options: [
      "animation-iteration-count",
      "animation-delay",
      "animation-timing-function",
      "animation-duration"
    ],
    correct: 2
  },
  {
    question: "What does the `clamp()` CSS function do?",
    options: [
      "Limits a value between a defined minimum and maximum",
      "Clamps overflow content",
      "Clamps elements to grid",
      "Calculates width automatically"
    ],
    correct: 0
  },
  {
    question: "Which property allows CSS variables to be set and reused?",
    options: [
      "none of these",
      "custom-property",
      "var()",
      "property-set"
    ],
    correct: 2
  },
  {
    question: "How can you make text unselectable in CSS?",
    options: [
      "pointer-events: none;",
      "text-select: no;",
      "selectable: false;",
      "user-select: none;"
    ],
    correct: 3
  },
  {
    question: "Which property in Flexbox controls how much a flex item will grow relative to others?",
    options: [
      "flex-order",
      "flex-shrink",
      "flex-basis",
      "flex-grow"
    ],
    correct: 3
  },
  {
    question: "What does `object-fit: contain;` do with images?",
    options: [
      "Stretches image ignoring aspect ratio",
      "Centers image only",
      "Crops image to fill container",
      "Resizes image to fit inside container without cropping"
    ],
    correct: 3
  },
  {
    question: "Which pseudo-class applies styles to elements that are the last child of their parent?",
    options: [
      ":last-of-type",
      ":nth-last-child(1)",
      ":last-child",
      "All of these"
    ],
    correct: 3
  },
  {
    question: "Which property can break long words and prevent overflow?",
    options: [
      "overflow-wrap",
      "text-wrap",
      "Both 1 and 3",
      "word-break"
    ],
    correct: 2
  },
  {
    question: "What is the purpose of `contain` property in CSS?",
    options: [
      "Contains text inside a box",
      "Limits size of container",
      "Improves rendering performance by limiting the scope of the browser's rendering work",
      "Hides overflow content"
    ],
    correct: 2
  },
  {
   question: "How do you make a grid item span two columns?",
   options: [
     "grid-column: span 2;",
     "grid-area: 2;",
     "grid-column-span: 2;",
     "grid-span: 2;"
    ],
    correct: 0
  },
 {
   question: "Which property is used to set shadows on text?",
   options: [
     "box-shadow",
     "shadow-text",
     "text-shadow",
     "font-shadow"
    ],
    correct: 2
  },
 {
   question: "What does `will-change` property hint to the browser?",
   options: [
     "Prevents changes to the element",
     "Disables animations",
     "The element will change soon, helping optimize rendering",
     "Changes the element style immediately"
    ],
    correct: 2
  },
 {
   question: "What is the purpose of the CSS `:is()` pseudo-class?",
   options: [
     "Selects the sibling elements",
     "Selects elements matching any of the selectors in the list",
     "Selects only the first matching element",
     "Selects the parent element"
    ],
    correct: 1
  },
 {
   question: "How does the `contain` property improve rendering performance?",
   options: [
     "By caching the styles",
     "By reducing image sizes",
     "By disabling animations temporarily",
     "By limiting the browser's rendering and layout calculations to the element’s subtree"
    ],
    correct: 3
  },
 {
   question: "Which CSS property allows you to control GPU acceleration for an element?",
   options: [
     "transform-style",
     "backface-visibility",
     "will-change",
     "perspective"
    ],
   correct: 2
  },
 {
   question: "What is the effect of `mix-blend-mode: multiply;`?",
   options: [
     "Adds the colors together",
     "Multiplies the background and foreground colors resulting in darker colors",
     "Replaces the background color",
     "Subtracts colors from the background"
   ],
   correct: 1
  },
 {
   question: "Which CSS function can be used to create a smooth color transition between two colors?",
   options: [
     "color-transition()",
     "linear-gradient()",
     "gradient()",
     "color-gradient()"
    ],
    correct: 1
  },
 {
   question: "What is the primary benefit of CSS custom properties (variables)?",
   options: [
     "They can be reused and dynamically changed in CSS",
     "They only work in JavaScript",
     "They replace CSS classes",
     "They are faster than regular properties"
    ],
    correct: 0
  },
 {
   question: "How does the CSS `subgrid` value affect grid layout?",
   options: [
     "Creates a sub-section in grid container",
     "Overrides the grid-template-columns",
     "Collapses grid rows",
     "Allows nested grids to inherit the parent grid's track sizing"
    ],
    correct: 3
  },
 {
   question: "What does the CSS property `scroll-snap-type` control?",
   options: [
     "Smooth scrolling speed",
     "Scrollbar visibility",
     "Snapping behavior of scrolling containers",
     "Scroll position"
    ],
    correct: 2
  },
 {
   question: "How can you make an element ignore pointer events?",
   options: [
     "click-events: off;",
     "disable-pointer: true;",
     "event-ignore: true;",
     "pointer-events: none;"
    ],
    correct: 3
  },
 {
   question: "Which pseudo-class can be used to style an element when it gains keyboard focus?",
   options: [
     ":focus-within",
     ":focus-visible",
     ":active",
     ":focus"
    ],
    correct: 1
  },
 {
   question: "Which CSS property controls the layering context for elements?",
   options: [
     "z-index",
     "layer-index",
     "stack-level",
     "order"
    ],
    correct: 0
  },
 {
   question: "What is the difference between `rem` and `%` units when used for font size?",
   options: [
     "`rem` is relative to parent; `%` is absolute",
     "Both are relative to the viewport",
     "No difference",
     "`rem` is relative to root font size; `%` is relative to parent element font size"
    ],
    correct: 3
  },
  {
   question: "Which CSS selector matches elements based on their attribute containing a specific word?",
   options: [
     "[attr$=value]",
     "[attr~=value]",
     "[attr^=value]",
     "[attr|=value ]"
     
    ],
    correct: 1
  },
 {
    question: "How do you apply styles only when the user prefers a dark color scheme?",
    options: [
      "@media (color-scheme: dark)",
      "body.dark-mode",
      "@media (prefers-color-scheme: dark)",
      "@media (dark-mode: true)"
    ],
    correct: 2
  },
 {
   question: "Which property can you use to prevent content from overflowing an element's box?",
   options: [
     "overflow",
     "text-overflow",
     "word-wrap",
     "content-overflow"
    ],
    correct: 0   
  },

 // ------------------ JavaScript Section ------------------

 {
   question: "Which of the following is a JavaScript data type?",
   options: [
     "String",
     "Boolean",
     "Number",
     "All of the above"
    ],
    correct: 3   
  },
  {
   question: "How do you declare a variable in JavaScript?",
   options: [
     "var myVar;",
     "let myVar;",
     "const myVar;",
     "All of the above"
    ],
    correct: 3   
  },
 {
   question: "Which symbol is used for single-line comments in JavaScript?",
   options: [
     "//",
     "/*",
     "#",
     "<!--"
    ],
    correct: 0  
  },
 {
   question: "What is the output of `console.log(typeof 123);`?",
   options: [
     "number",
     "string",
     "object",
     "undefined"
    ],
    correct: 0 
  },
 {
   question: "Which function is used to parse a string to an integer?",
   options: [
     "parseFloat()",
     "Number()",
     "String()",
     "parseInt()"
    ],
    correct: 3
  },
 {
   question: "What will `console.log(2 + '2');` output?",
   options: [
     "4",
     "NaN",
     "22",
     "Error"
    ],
    correct: 2
  },
 {
   question: "Which keyword is used to define a function?",
   options: [
     "function",
     "fun",
     "def",
     "func"
    ],
    correct: 0  
  },
 {
   question: "What is the correct syntax to call a function named `myFunction`?",
   options: [
     "call myFunction();",
    "myFunction();",
     "call function myFunction();",
     "call.myFunction();"
    ],
    correct: 1 
  },
 {
   question: "Which method is used to add an element to the end of an array?",
   options: [
     "pop()",
     "shift()",
     "push()",
     "unshift()"
    ],
    correct: 2
 },
 {
   question: "What does `===` mean in JavaScript?",
   options: [
     "Equal value and type",
     "Equal value only",
     "Assignment operator",
     "Not equal"
    ],
    correct: 0 
  },
 {
   question: "Which method converts a JSON string into a JavaScript object?",
   options: [
     "JSON.toObject()",
     "JSON.stringify()",
     "JSON.convert()",
     "JSON.parse()"
    ],
    correct: 3
  },
 {
   question: "How do you create an object in JavaScript?",
   options: [
     "let obj = {};",
     "let obj = new Object();",
     "Both of the above",
     "None of these"
    ],
    correct: 2   
 },
    {
    question: "Which keyword is used to declare a constant?",
    options: [
      "const",
      "let",
      "var",
      "constant"
    ],
    correct: 0
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: [
      "=",
      "==",
      "===",
      ":"
    ],
    correct: 0
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    options: [
      "let arr = [];",
      "let arr = {};",
      "let arr = ();",
      "let arr = <>;"
    ],
    correct: 0
  },
  {
    question: "Which method removes the last element from an array?",
    options: [
      "pop()",
      "push()",
      "shift()",
      "unshift()"
    ],
    correct: 0
  },
  {
    question: "What is the output of `console.log(0 == false);`?",
    options: [
      "true",
      "false",
      "undefined",
      "Error"
    ],
    correct: 0
  },
  {
    question: "Which event occurs when the user clicks on an element?",
    options: [
      "onclick",
      "onmouseover",
      "onchange",
      "onkeydown"
    ],
    correct: 0
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    options: [
      "alert('Hello World');",
      "msg('Hello World');",
      "msgBox('Hello World');",
      "alertBox('Hello World');"
    ],
    correct: 0
  },
  {
    question: "Which method returns the length of a string?",
    options: [
      "length",
      "size",
      "count",
      "len"
    ],
    correct: 0
  },
  {
    question: "Which keyword is used to exit a loop early?",
    options: [
      "break",
      "exit",
      "stop",
      "return"
    ],
    correct: 0
  },
  {
    question: "What does `typeof null` return?",
    options: [
      "object",
      "null",
      "undefined",
      "boolean"
    ],
    correct: 0
  },
  {
    question: "How do you check if a variable `x` is an array?",
    options: [
      "Array.isArray(x)",
      "typeof x === 'array'",
      "x instanceof Array",
      "Both 1 and 3"
    ],
    correct: 3
  },
  {
    question: "Which of the following loops is guaranteed to run at least once?",
    options: [
      "while",
      "for",
      "foreach",
      "do...while"
    ],
    correct: 3
  },
  {
    question: "What is the output of `console.log(5 + 5 + '5');`?",
    options: [
      "105",
      "55",
      "15",
      "Error"
    ],
    correct: 0
  },
  {
    question: "Which method adds an element to the beginning of an array?",
    options: [
      "push()",
      "shift()",
      "pop()",
      "unshift()"
    ],
    correct: 3
  },
  {
    question: "How can you convert a string to lowercase?",
    options: [
      "lowercase()",
      "toLowerCase()",
      "toLower()",
      "convertLower()"
    ],
    correct: 1
  },
  {
    question: "Which method removes the first element from an array?",
    options: [
      "shift()",
      "pop()",
      "push()",
      "unshift()"
    ],
    correct: 0
  },
  {
    question: "How do you declare an asynchronous function?",
    options: [
      "function async myFunc() {}",
      "async => function()",
      "async function myFunc() {}",
      "async: function() {}"
    ],
    correct: 2
  },
  {
    question: "What is the output of `console.log(typeof NaN);`?",
    options: [
      "NaN",
      "number",
      "undefined",
      "object"
    ],
    correct: 1
  },
 {
    question: "Which keyword is used to handle exceptions in JavaScript?",
    options: [
      "try...catch",
      "handle...error",
      "catch...try",
      "throw...catch"
    ],
    correct: 0
  },
  {
    question: "Which symbol is used for multi-line comments in JavaScript?",
    options: [
      "/* */",
      "//",
      "#",
      "<!-- -->"
    ],
    correct: 0 
  },
  {
    question: "What will `console.log('5' - 3);` output?",
    options: [
      "2",
      "53",
      "Error",
      "NaN"
    ],
    correct: 0 
  },
  {
    question: "How do you declare an array in JavaScript?",
    options: [
      "let arr = ();",
      "let arr = {};",
      "let arr = <>;",
      "let arr = [];"
    ],
    correct: 3 
  },
  {
    question: "What is the result of `typeof NaN`?",
    options: [
      "string",
      "undefined",
      "number",
      "object"
    ],
    correct: 2 
  },
  {
    question: "Which method converts a string to uppercase?",
    options: [
      "uppercase()",
      "toUpperCase()",
      "toUpper()",
      "convertUpper()"
    ],
    correct: 1 
  },
  {
    question: "How do you add a comment in JavaScript?",
    options: [
      "None of the above",
      "/* This is a comment */",
      "// This is a comment",
      "Both of the above"
    ],
    correct: 3 
  },
  {
    question: "What is the correct syntax to create a new object?",
    options: [
      "let obj = Object();",
      "let obj = {};",
      "let obj = ();",
      "let obj = [];"
    ],
    correct: 1 
  },
  {
    question: "What will `console.log(typeof undefined);` print?",
    options: [
      "object",
      "undefined",
      "null",
      "string"
    ],
    correct: 1 
  },
  {
    question: "Which keyword is used to declare a block-scoped variable?",
    options: [
      "var",
      "let",
      "const",
      "Both let and const"
    ],
    correct: 3 
  },
  {
    question: "What is the output of `console.log(Boolean(0));`?",
    options: [
      "true",
      "false",
      "0",
      "undefined"
    ],
    correct: 1 
  },
  {
    question: "Which method removes whitespace from both ends of a string?",
    options: [
      "slice()",
      "trim()",
      "strip()",
      "substring()"
    ],
    correct: 1
  },
  {
    question: "How do you check if a number is NaN?",
    options: [
      "Number.isNaN()",
      "Both of the above",
      "isNaN()",
      "None of the above"
    ],
    correct: 1 
  },
  {
    question: "Which of these is NOT a JavaScript framework?",
    options: [
      "React",
      "Vue",
      "Angular",
      "Laravel"
    ],
    correct: 3 
  },
  {
    question: "What will `console.log(null == undefined);` return?",
    options: [
      "false",
      "true",
      "null",
      "undefined"
    ],
    correct: 1 
  },
  {
    question: "Which method is used to join two or more arrays?",
    options: [
      "push()",
      "join()",
      "append()",
      "concat()"
    ],
    correct: 3
  },
  {
    question: "How do you create a function expression?",
    options: [
      "function myFunc() {}",
      "let myFunc = () => {}",
      "const myFunc = function() {};",
      "All of the above"
    ],
    correct: 3
  },
  {
    question: "Which operator is used for exponentiation in JavaScript?",
    options: [
      "^",
      "**",
      "pow()",
      "exp()"
    ],
    correct: 1
  },
  {
    question: "How do you check if a variable is not a number?",
    options: [
      "typeof x === 'NaN'",
      "Number.isNotANumber()",
      "isNaN()",
      "isNumber()"
    ],
    correct: 2
  },
  {
    question: "What does `NaN` stand for?",
    options: [
      "Number",
      "Null and Number",
      "None",
      "Not a Number"
    ],
    correct: 3
  },
  {
    question: "Which method converts a JavaScript object into a JSON string?",
    options: [
      "JSON.parse()",
      "Object.stringify()",
      "Object.toString()",
      "JSON.stringify()"
    ],
    correct: 3
  },
  {
    question: "What is a closure in JavaScript?",
    options: [
      "A function having access to its own scope only",
      "None of the above",
      "A function with no parameters",
      "A function having access to the outer function’s scope even after the outer function has returned"
    ],
    correct: 3
  },
  {
    question: "Which method can be used to create a new array from an existing array with a condition?",
    options: [
      "map()",
      "reduce()",
      "forEach()",
      "filter()"
    ],
    correct: 3
  },
  {
    question: "What is the difference between `==` and `===`?",
    options: [
      "No difference",
      "`==` checks equality with type coercion, `===` checks strict equality without type coercion",
      "`==` checks strict equality, `===` checks equality with type coercion",
      "Both are assignment operators"
    ],
    correct: 1
  },
  {
    question: "What will be the output of the following code?\n\n```js\nconsole.log(typeof NaN);\n```",
    options: [
      "undefined",
      "object",
      "NaN",
      "number"
    ],
    correct: 3
  },
  {
    question: "How can you create a shallow copy of an array?",
    options: [
      "All of the above",
      "Using slice() method",
      "Using Array.from()",
      "Using spread operator (...)"
    ],
    correct: 0
  },
  {
    question: "What does the `bind()` method do?",
    options: [
      "Binds an event to an element",
      "Creates a new function with `this` bound to a specified value",
      "Sets a timeout for a function",
      "Invokes a function immediately"
    ],
    correct: 1
  },
  {
    question: "What is the output of this code?\n\n```js\nconsole.log(0.1 + 0.2 === 0.3);\n```",
    options: [
      "Error",
      "false",
      "true",
      "undefined"
    ],
    correct: 1
  },
  {
    question: "What is the difference between `var`, `let`, and `const`?",
    options: [
      "`var` and `let` are the same, `const` is different",
      "`var` is function-scoped, `let` and `const` are block-scoped. `const` cannot be reassigned.",
      "All three are block-scoped",
      "None of the above"
    ],
    correct: 1
  },
  {
    question: "What is event delegation in JavaScript?",
    options: [
      "Preventing event bubbling",
      "Attaching event listeners to multiple elements",
      "Using inline event handlers",
      "Using a single event listener on a parent element to manage events for child elements"
    ],
    correct: 3
  },
  {
    question: "What is the use of `async` and `await` in JavaScript?",
    options: [
      "To make functions run faster",
      "To write asynchronous code in a synchronous manner",
      "To handle errors",
      "To create new promises"
    ],
    correct: 1
  },
  {
    question: "Which of the following is NOT a way to create an object in JavaScript?",
    options: [
      "Using `createObject()`",
      "Object literal",
      "Using `Object.create()`",
      "Using `new Object()`"
    ],
    correct: 0
  },
  {
    question: "What will this code output?\n\n```js\nconsole.log(typeof null);\n```",
    options: [
      "boolean",
      "null",
      "object",
      "undefined"
    ],
    correct: 2
  },
  {
    question: "What is hoisting in JavaScript?",
    options: [
      "Declaring variables at the bottom of the code",
      "A feature only in ES6",
      "Variable declaration inside a block",
      "Moving variable and function declarations to the top of their scope"
    ],
    correct: 3
  },
  {
    question: "What does the `reduce()` method do?",
    options: [
      "None of the above",
      "Filters elements from an array",
      "Executes a reducer function on each element of the array, resulting in a single output value",
      "Reduces the size of an array"
    ],
    correct: 2
  },
  {
    question: "What will this code output?\n\n```js\nconsole.log([] + []);\n```",
    options: [
      '"[object Object][object Object]"',
      '"" (empty string)',
      "null",
      "undefined"
    ],
    correct: 1
  },
  {
    question: "How do you check if a property exists in an object?",
    options: [
      "Both of the above",
      "'property' in object",
      "object.hasOwnProperty('property')",
      "None of the above"
    ],
    correct: 0
  },
  {
    question: "What is the difference between `call()` and `apply()`?",
    options: [
      "Both are deprecated",
      "`call()` takes arguments separately, `apply()` takes arguments as an array",
      "`call()` is used for objects, `apply()` is used for arrays",
      "No difference"
    ],
    correct: 1
  },
  {
    question: "Which method is used to stop event propagation?",
    options: [
      "stopImmediatePropagation()",
      "cancelBubble()",
      "stopPropagation()",
      "preventDefault()"
    ],
    correct: 2
  },
  {
    question: "What is a Promise in JavaScript?",
    options: [
      "None of the above",
      "A synchronous callback",
      "A type of function",
      "An object representing the eventual completion or failure of an asynchronous operation"
    ],
    correct: 3
  },
  {
    question: "What will the expression `typeof NaN === 'number'` evaluate to?",
    options: [
      "false",
      "true",
      "undefined",
      "error"
    ],
    correct: 1
  },
  {
    question: "Which of the following is NOT a primitive data type in JavaScript?",
    options: [
      "number",
      "string",
      "object",
      "boolean"
    ],
    correct: 2
  },
  {
    question: "What will this code output?\n\n```js\nconsole.log([] == false);\n```",
    options: [
      "undefined",
      "false",
      "true",
      "TypeError"
    ],
    correct: 2
  },
  {
    question: "How do you create a new array with elements transformed by a function?",
    options: [
      "forEach()",
      "reduce()",
      "filter()",
      "map()"
    ],
    correct: 3
  },
  {
    question: "What does the `finally` block do in a try-catch statement?",
    options: [
      "Terminates the program",
      "Executes code after try and catch regardless of the outcome",
      "Executes only if no error occurs",
      "Executes only if an error is caught"
    ],
    correct: 1
  },
  {
    question: "What is the output of this code?\n\n```js\nconsole.log(typeof function(){});\n```",
    options: [
      "null",
      "function",
      "object",
      "undefined"
    ],
    correct: 1
  },
  {
    question: "What is the default scope of variables declared with `var`?",
    options: [
      "global scope",
      "block scope",
      "module scope",
      "function scope"
    ],
    correct: 3
  },
  {
    question: "Which keyword is used to export modules in ES6?",
    options: [
      "module",
      "require",
      "export",
      "import"
    ],
    correct: 2
  },
  {
    question: "What is the output of this code?\n\n```js\nconsole.log([] === []);\n```",
    options: [
      "true",
      "false",
      "error",
      "undefined"
    ],
    correct: 1
  },
  {
    question: "How do you create a shallow copy of an object?",
    options: [
      "None of the above",
      "Both of the above",
      "Using Object.assign()",
      "Using spread operator {...}"
    ],
    correct: 1
  },
  {
    question: "What is the difference between `null` and `undefined` in JavaScript?",
    options: [
      "`undefined` means no value, `null` means variable is declared but not assigned",
      "Both are the same",
      "None of the above",
      "`null` means no value, `undefined` means variable is declared but not assigned"
    ],
    correct: 3
  },
  {
    question: "What will this code output?\n\n```js\nconsole.log(typeof NaN);\n```",
    options: [
      "string",
      "undefined",
      "object",
      "number"
    ],
    correct: 3
  },
  {
    question: "Which of these methods converts a JSON string into a JavaScript object?",
    options: [
      "parseJSON()",
      "JSON.toObject()",
      "JSON.stringify()",
      "JSON.parse()"
    ],
    correct: 3
  },
  {
    question: "What is the output of this code?\n\n```js\nconsole.log([] + {});\n```",
    options: [
      '"[object Object][object Object]"',
      '"{}"',
      '"[object Object]"',
      '"[object Object]"'
    ],
    correct: 2
  },
  {
    question: "What will the following expression return?\n\n```js\n'5' + 3\n```",
    options: [
      "NaN",
      "Error",
      "8",
      '"53"'
    ],
    correct: 3
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    options: [
      "Undefined",
      "Symbol",
      "Boolean",
      "Float"
    ],
    correct: 3
  },
 {
    question: "What is the main purpose of the `strict mode` in JavaScript?",
    options: [
      "To allow usage of deprecated features",
      "To enable asynchronous programming",
      "To catch common coding mistakes and unsafe actions",
      "To speed up code execution"
    ],
    correct: 2
  },
  {
    question: "How do you write a comment in JavaScript?",
    options: [
      "/* This is a comment */",
      "# This is a comment",
      "<!-- This is a comment -->",
      "// This is a comment"
    ],
    correct: 3
  },
  {
    question: "What will `console.log(typeof function(){});` output?",
    options: [
      "object",
      "function",
      "undefined",
      "string"
    ],
    correct: 1
  },
  {
    question: "Which of these is used to declare a variable in ES6?",
    options: [
      "All of the above",
      "var",
      "let",
      "const"
    ],
    correct: 0
  },
  {
    question: "What is event bubbling?",
    options: [
      "Event propagation from parent to child",
      "Stopping event propagation",
      "Event propagation from child to parent",
      "Attaching multiple event listeners"
    ],
    correct: 2
  },
  {
    question: "How do you prevent the default action of an event in JavaScript?",
    options: [
      "event.preventDefault()",
      "event.prevent()",
      "event.cancel()",
      "event.stopPropagation()"
    ],
    correct: 0
  },
  {
    question: "What does the `new` keyword do in JavaScript?",
    options: [
      "All of the above",
      "Sets the prototype of the new object",
      "Creates a new empty object",
      "Calls the constructor function"
    ],
    correct: 0
  },
  {
    question: "Which array method removes the last element?",
    options: [
      "unshift()",
      "push()",
      "pop()",
      "shift()"
    ],
    correct: 2
  },
  {
    question: "What is the result of `typeof NaN === 'number'`?",
    options: [
      "undefined",
      "false",
      "true",
      "error"
    ],
    correct: 2
  },
  {
    question: "Which of the following is NOT true about arrow functions?",
    options: [
      "They do not have their own `this` context",
      "They cannot be used as constructors",
      "They are always anonymous",
      "They bind their own `arguments` object"
    ],
    correct: 3
  },
  {
    question: "What is the output of the following code?\n\n```js\nconsole.log(1 + '2' + 3);\n```",
    options: [
      '"33"',
      '"123"',
      '"15"',
      '"6"'
    ],
    correct: 1
  },
  {
    question: "What does the `splice()` method do?",
    options: [
      "Adds elements to the end of an array",
      "Sorts an array",
      "Returns a portion of an array",
      "Removes or replaces elements in an array"
    ],
    correct: 3
  },
   {
    question: "How can you create a deep copy of an object in JavaScript?",
    options: [
      "Using spread operator",
      "Using JSON.parse(JSON.stringify(object))",
      "Using Object.assign()",
      "None of the above"
    ],
    correct: 1
  },
  {
    question: "What is a JavaScript Generator?",
    options: [
      "A function that produces random numbers",
      "A function that can be exited and later re-entered",
      "A function that returns promises",
      "None of the above"
    ],
    correct: 1
  },
  {
    question: "Which keyword is used to declare a constant variable?",
    options: ["var", "const", "constant", "let"],
    correct: 1
  },
  {
    question: "What is the purpose of the `this` keyword?",
    options: [
      "Refers to global object always",
      "Refers to the parent function",
      "Refers to a function itself",
      "Refers to the current execution context"
    ],
    correct: 3
  },
  {
    question: "Which method can be used to merge two or more objects?",
    options: ["Object.merge()", "Object.combine()", "Object.push()", "Object.assign()"],
    correct: 3
  },
  {
    question: "How do you create an Immediately Invoked Function Expression (IIFE)?",
    options: [
      "() => {}()",
      "(function() {})()",
      "new Function()",
      "function() {}()"
    ],
    correct: 1
  },
  {
    question: "What will this code output?\n\n```js\nconsole.log(typeof null);\n```",
    options: ["function", "object", "null", "undefined"],
    correct: 1
  },
  {
    question: "Which of the following is NOT a way to declare a function?",
    options: [
      "Function Expression",
      "Function Invocation",
      "Arrow Function",
      "Function Declaration"
    ],
    correct: 1
  },
  {
    question: "What is the output of this code?\n\n```js\nconsole.log(typeof NaN);\n```",
    options: ["object", "NaN", "number", "undefined"],
    correct: 2
  },
  {
    question: "Which method converts a JavaScript object to a JSON string?",
    options: ["toJSON()", "JSON.stringify()", "JSON.parse()", "toString()"],
    correct: 1
  },
  {
    question: "What will `console.log([] == ![]);` output?",
    options: ["undefined", "true", "Error", "false"],
    correct: 1
  },
  {
    question: "What is a closure in JavaScript?",
    options: [
      "A special type of loop",
      "An object that contains private properties",
      "A callback function inside another function",
      "A function bundled together with its lexical environment"
    ],
    correct: 3
  },
  {
    question: "What is the output of the following code?\n\n```js\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100);\n}\n```",
    options: ["0 0 0", "3 3 3", "Undefined", "0 1 2"],
    correct: 1
  },
  {
    question: "What does the `bind()` method do?",
    options: [
      "Creates a new function with `this` bound to a specific object",
      "Calls a function immediately",
      "Creates a shallow copy of a function",
      "Binds an event listener"
    ],
    correct: 0
  },
  {
    question: "What is the difference between `call()`, `apply()`, and `bind()`?",
    options: [
      "`bind()` invokes immediately, `call()` and `apply()` return functions",
      "`apply()` returns a new function, `call()` invokes immediately",
      "`call()` and `apply()` invoke the function immediately, `bind()` returns a new function",
      "All three behave the same"
    ],
    correct: 2
  },
  {
    question: "What is the event loop in JavaScript?",
    options: [
      "An object that stores events",
      "A mechanism that handles asynchronous callbacks",
      "A method for iterating over arrays",
      "A built-in timer function"
    ],
    correct: 1
  },
  {
    question: "What will this code output?\n\n```js\nconsole.log(typeof (typeof 1));\n```",
    options: ['"number"', '"undefined"', '"string"', '"object"'],
    correct: 2
  },
    {
    question: "What are Promises in JavaScript?",
    options: [
      "Functions that run immediately",
      "Objects representing the eventual completion or failure of an async operation",
      "Callbacks passed to functions",
      "Variables that store async functions"
    ],
    correct: 1
  },
  {
    question: "What does `async` and `await` keywords do?",
    options: [
      "`async` marks a function as asynchronous, `await` pauses execution until a Promise resolves",
      "They make synchronous code asynchronous",
      "They create a new thread",
      "They are used to create callback functions"
    ],
    correct: 0
  },
  {
    question: "What is hoisting in JavaScript?",
    options: [
      "Compiling code before execution",
      "Moving variable and function declarations to the top of their scope",
      "Temporarily storing variables",
      "Delayed execution of functions"
    ],
    correct: 1
  },
  {
    question: "What are generators in JavaScript?",
    options: [
      "Objects for asynchronous programming",
      "Functions returning promises",
      "Functions that can be paused and resumed",
      "Functions that generate random numbers"
    ],
    correct: 2
  },
  {
    question: "What is the difference between `==` and `===`?",
    options: [
      "`===` compares values with type coercion, `==` compares values and types",
      "`==` compares values with type coercion, `===` compares values and types",
      "None of the above",
      "Both are the same"
    ],
    correct: 1
  },
  {
    question: "What is the output of this code?\n\n```js\nlet a = [1, 2, 3];\nlet b = a;\nb.push(4);\nconsole.log(a);\n```",
    options: ["[4]", "Error", "[1, 2, 3, 4]", "[1, 2, 3]"],
    correct: 2
  },
  {
    question: "How can you create a private variable in JavaScript?",
    options: [
      "Using global variables",
      "Using var",
      "Using let",
      "Using closures"
    ],
    correct: 3
  },
  {
    question: "What will this output?\n\n```js\nconsole.log([] == false);\n```",
    options: ["Error", "true", "false", "undefined"],
    correct: 1
  },
  {
    question: "What is the difference between `Object.freeze()` and `Object.seal()`?",
    options: [
      "`seal()` prevents all changes, `freeze()` prevents adding or removing properties",
      "`freeze()` prevents all changes, `seal()` prevents adding or removing properties but allows modification",
      "None of the above",
      "Both are the same"
    ],
    correct: 1
  },
  {
    question: "What does the `Symbol` type represent?",
    options: [
      "An object",
      "A string type",
      "A unique and immutable primitive value",
      "A number type"
    ],
    correct: 2
  },
  {
    question: "How do you handle errors in async/await functions?",
    options: [
      "Using try/catch blocks",
      "You can't handle errors in async functions",
      "Using `throw` keyword",
      "Using `.catch()`"
    ],
    correct: 0
  },
  {
    question: "What are `WeakMap` and `WeakSet`?",
    options: [
      "Immutable versions of Map and Set",
      "Types of arrays",
      "Deprecated data structures",
      "Collections where keys/values are weakly referenced and garbage collected"
    ],
    correct: 3
  },
  {
    question: "What is tail call optimization?",
    options: [
      "A method to call functions asynchronously",
      "A technique to optimize recursive function calls",
      "A way to avoid infinite loops",
      "A new syntax for arrow functions"
    ],
    correct: 1
  },
  {
    question: "What will be the output of this code?\n\n```js\nconsole.log(0.1 + 0.2 === 0.3);\n```",
    options: [
      "true",
      "Error",
      "false",
      "undefined"
    ],
    correct: 2
  },
  {
    question: "What is the Temporal Dead Zone (TDZ) in JavaScript?",
    options: [
      "The event loop delay",
      "The time when garbage collection happens",
      "The period between block start and variable declaration where accessing variables throws ReferenceError",
      "The time when code is being parsed"
    ],
    correct: 2
  },
  {
    question: "How does `Object.create()` differ from a constructor function?",
    options: [
      "`Object.create()` calls the constructor automatically",
      "`Object.create()` creates a new object with specified prototype without running constructor code",
      "Constructor functions are deprecated",
      "They are the same"
    ],
    correct: 1
  },
  {
    question: "What is the difference between `map()` and `forEach()` on arrays?",
    options: [
      "Both return undefined",
      "`map()` returns a new array, `forEach()` returns undefined",
      "`forEach()` returns a new array, `map()` returns undefined",
      "Both return new arrays"
    ],
    correct: 1
  },
  {
    question: "What does the spread operator (`...`) do in JavaScript?",
    options: [
      "Creates a shallow copy of an object",
      "None of the above",
      "Expands iterable elements into individual elements",
      "Combines multiple arrays"
    ],
    correct: 2
  },
  {
    question: "How can you debounce a function in JavaScript?",
    options: [
      "Call function once immediately",
      "Delay function execution until after a specified time has elapsed since last call",
      "Prevent function from being called",
      "Call function multiple times rapidly"
    ],
    correct: 1
  },
  {
    question: "What is memoization?",
    options: [
      "A way to prevent memory leaks",
      "A method to call functions asynchronously",
      "A technique to write recursive functions",
      "An optimization technique to cache function results"
    ],
    correct: 3
  },
  {
    question: "What will this code output?\n\n```js\nconsole.log(typeof NaN);\n```",
    options: [
      "undefined",
      "number",
      "NaN",
      "object"
    ],
    correct: 1
  },
  {
    question: "What is the purpose of `Proxy` in JavaScript?",
    options: [
      "To replace classes",
      "To define custom behavior for fundamental operations on objects",
      "To create new objects",
      "To handle async operations"
    ],
    correct: 1
  },
  {
    question: "What is the difference between `setTimeout` and `requestAnimationFrame`?",
    options: [
      "`setTimeout` runs code continuously",
      "Both are the same",
      "`requestAnimationFrame` is deprecated",
      "`setTimeout` schedules code after delay, `requestAnimationFrame` schedules before next repaint"
    ],
    correct: 3
  },
  {
    question: "How can you clone an object in JavaScript?",
    options: [
      "Using Object.assign() or spread operator for shallow copy",
      "All of the above",
      "Using JSON.stringify and JSON.parse for deep copy",
      "Using libraries like lodash"
    ],
    correct: 1
  },
  {
    question: "What are tagged template literals?",
    options: [
      "A deprecated feature",
      "A way to comment code",
      "A type of string",
      "Functions that process template literals with custom behavior"
    ],
    correct: 3
  },
  {
    question: "Which method is used to add one or more elements to the end of an array?",
    options: [
      "pop()",
      "push()",
      "shift()",
      "unshift()"
    ],
    correct: 1
  },
  {
    question: "What does the `slice()` method do?",
    options: [
      "Returns a shallow copy of a portion of an array",
      "Changes the original array",
      "Removes elements from an array",
      "Reverses the array"
    ],
    correct: 0
  },
  {
    question: "Which method combines two or more arrays?",
    options: [
      "merge()",
      "concat()",
      "join()",
      "combine()"
    ],
    correct: 1
  },
  {
    question: "What will this code return?\n\n```js\n[1, 2, 3].includes(2);\n```",
    options: [
      "NaN",
      "false",
      "undefined",
      "true"
    ],
    correct: 3
  },
  {
    question: "Which method returns the index of the first occurrence of a value?",
    options: [
      "find()",
      "map()",
      "filter()",
      "indexOf()"
    ],
    correct: 3
  },
  {
    question: "What is a Promise in JavaScript?",
    options: [
      "An object representing the eventual completion or failure of an async operation",
      "A callback function",
      "A method to handle arrays",
      "A way to define variables"
    ],
    correct: 0
  },
  {
    question: "Which method is used to handle a resolved Promise?",
    options: [
      ".done()",
      ".await()",
      ".then()",
      ".catch()"
    ],
    correct: 2
  },
  {
    question: "Which method handles errors in a Promise chain?",
    options: [
      ".error()",
      ".catch()",
      ".finally()",
      ".fail()"
    ],
    correct: 1
  },
  {
    question: "What does `Promise.all()` do?",
    options: [
      "Rejects all promises",
      "Waits for all promises to resolve or any to reject",
      "Ignores all promises",
      "Waits for the first promise to resolve"
    ],
    correct: 1
  },
  {
    question: "What is the state of a newly created Promise?",
    options: [
      "Rejected",
      "Pending",
      "Resolved",
      "Fulfilled"
    ],
    correct: 1
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Method",
      "Digital Object Mapping",
      "Document Object Model",
      "Data Object Method"
    ],
    correct: 2
  },
  {
    question: "Which method is used to select an element by ID?",
    options: [
      "querySelectorAll()",
      "getId()",
      "getElementByClass()",
      "getElementById()"
    ],
    correct: 3
  },
  {
    question: "How do you create a new HTML element in JavaScript?",
    options: [
      "document.newElement()",
      "element.new()",
      "document.createElement()",
      "create.node()"
    ],
    correct: 2
  },
  {
    question: "Which property is used to change the content of an element?",
    options: [
      "innerHTML",
      "content",
      "textContent",
      "value"
    ],
    correct: 0
  },
  {
    question: "How can you remove an element from the DOM?",
    options: [
      "element.remove()",
      "document.removeChild()",
      "delete element",
      "remove.element()"
    ],
    correct: 0
  },
{
    question: "Which method is used to attach an event handler?",
    options: [
      "onEvent()",
      "eventAttach()",
      "listenEvent()",
      "addEventListener()"
    ],
    correct: 3
  },
  {
    question: "What is event bubbling?",
    options: [
      "Event propagating from parent to child",
      "Event propagating from child to parent",
      "A method to stop events",
      "Event delayed until rendering"
    ],
    correct: 1
  },
  {
    question: "How do you prevent the default behavior of an event?",
    options: [
      "event.stop()",
      "event.prevent()",
      "event.cancel()",
      "event.preventDefault()"
    ],
    correct: 3
  },
  {
    question: "What does `event.target` refer to?",
    options: [
      "The document body",
      "The element on which the event occurred",
      "The window object",
      "The event handler function"
    ],
    correct: 1
  },
  {
    question: "What event occurs when a user clicks an HTML element?",
    options: [
      "click",
      "hover",
      "mousedown",
      "focus"
    ],
    correct: 0
  },
  {
    question: "Which tag is used to link an external CSS file in an HTML document?",
    options: [
      "<style>",
      "<script>",
      "<css>",
      "<link>"
    ],
    correct: 3
  },
  {
    question: "Where should you place the <script> tag to ensure the HTML loads before the JS runs?",
    options: [
      "Before </body>",
      "Inside <head>",
      "Before <html>",
      "After <html>"
    ],
    correct: 0
  },
  {
    question: "What is the correct order of loading in a web page?",
    options: [
      "HTML → CSS → JS",
      "JS → CSS → HTML",
      "CSS → HTML → JS",
      "JS → HTML → CSS"
    ],
    correct: 0 
  },
  {
    question: "Which HTML tag is used to embed internal JavaScript?",
    options: [
      "<script>",
      "<js>",
      "<javascript>",
      "<code>"
    ],
    correct: 0
  },
  {
    question: "Which HTML tag is used to add internal CSS?",
    options: [
      "<style>",
      "<css>",
      "<link>",
      "<design>"
    ],
    correct: 0 
  },
  {
    question: "Can we write CSS and JavaScript directly inside an HTML file?",
    options: [
      "Yes",
      "No",
      "Only CSS",
      "Only JS"
    ],
    correct: 1 
  },
  {
    question: "Which attribute in <script> tag tells browser to run JS after page load?",
    options: [
      "async",
      "delay",
      "defer",
      "run"
    ],
    correct: 2
  },
  {
    question: "What does the 'onclick' attribute do in HTML?",
    options: [
      "Applies a CSS style",
      "Adds a new element",
      "Validates a form",
      "Runs a JavaScript function when an element is clicked",
    ],
    correct: 3 
  },
  {
    question: "Which method is used in JavaScript to change the content of an HTML element?",
    options: [
      "document.getElementById().innerHTML",
      "style.innerHTML",
      "document.innerText",
      "get.HTML.value"
    ],
    correct: 0 
  },
  {
    question: "Which CSS property is commonly changed using JavaScript?",
    options: [
      "border.inner",
      "style.color",
      "js.height",
      "font.add"
    ],
    correct: 0 
  },
  {
    question: "In which section of HTML is it best to place internal CSS?",
    options: [
      "Inside <head>",
      "Inside <body>",
      "After <html>",
      "After <script>"
    ],
    correct: 0
  },
  {
    question: "Which of the following is best practice?",
    options: [
      "Keep HTML, CSS, and JS in separate files",
      "Write everything in one HTML file",
      "Avoid CSS files",
      "Use JS for all design"
    ],
    correct: 1
  },

{
    question: "Which JavaScript method is used to flatten nested arrays?",
    options: [
      "concatAll()",
      "reduce()",
      "map()",
      "flat()"
    ],
    correct: 3
  },
  {
    question: "What does the `Set` object in JavaScript store?",
    options: [
      "Unique values of any type",
      "Key-value pairs",
      "Only strings",
      "Only numbers"
    ],
    correct: 0
  },
  {
    question: "Which operator can be used to provide a default value if a variable is null or undefined?",
    options: [
      "||",
      "&&",
      "??",
      "?:"
    ],
    correct: 2
  },
  {
    question: "What will this code output?\n\n```js\nconsole.log([1, 2, 3].map(x => x * 2));\n```",
    options: [
      "[2, 4, 6]",
      "[1, 2, 3, 2, 4, 6]",
      "[1, 2, 3]",
      "Error"
    ],
    correct: 0 
  },
  {
    question: "Which array method checks if at least one element passes a condition?",
    options: [
      "every()",
      "some()",
      "filter()",
      "includes()"
    ],
    correct: 1 
  },

  {
    question: "What is the benefit of separating HTML, CSS, and JS files?",
    options: [
      "Improved code maintainability and reusability",
      "Slower website",
      "It doesn’t matter",
      "Less readable code"
    ],
    correct: 2 
  },
  {
    question: "How can JavaScript access and change CSS styles?",
    options: [
      "Using DOM and `.style` properties",
      "By editing the HTML directly",
      "Only through external libraries",
      "It cannot"
    ],
    correct: 3
  },
  {
    question: "Which HTML tag is used to link an external JavaScript file?",
    options: [
      "<js file='...'>",
      "<javascript>",
      "<script src='...'>",
      "<code>"
    ],
    correct: 2
  }
];