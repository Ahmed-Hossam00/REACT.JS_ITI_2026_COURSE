# Html Break Down

## table of content

1. what is html
2. the history of html & the different versions of html & the main differences between each version
3. language syntax
4. language limitations
5. what are html attributes
6. html file structure
7. most used html tags
8. most used html attributes & compatibility
9. html entities & character references

## what is html ?

HTML stands for HyperText Markup Language. It was invented in the early 1990s by Tim Berners-Lee at CERN to help researchers share information between different computers. Later, HTML evolved and became the main language used to build the structure of web pages, and all major web browsers understand HTML. The reason for that is that HTML proved to be a simple and reliable way to create the basic structure of web pages. As the web grew, browsers used HTML as main language for structuring content, and it became the standard language used to build the structure of almost every website, usually together with CSS and JavaScript.

## The history of html

as I mentioned before , the language didn’t got developed at once , instead it started in early versions that had small amount of utilities & tags, in this exact sequence 

1. HTML 1.0
2. HTML 2.0
3. HTML 3.2
4. HTML 4.0
5. HTML 4.01
6. XHTML (XML BASED , and not actually used currently)
7. HTML5 
8. HTML Living Standard  ( the latest version & most supported )

each of these versions introduced new features & tags , and some enhancements in language syntax itself ,until we reached to HTML Living Standard  , it receives continuous updates constantly , without the need of releasing new versions

## Language Syntax

HTML has a very special syntax because it’s not treated as a programming language. Instead, it’s a structuring and markup language, since it doesn’t send direct instructions to the operating system. Instead, it talks to the browser by telling it how the content should be structured and rendered on the page.

### Tags

**Most** of the tags can be used this way : 

1. Starting with an opening tag, which can be written like this: `<tag>`. The main idea is to start the tag with <, then write the tag name, and finally close it with >.
2. Writing the content of the tag, which is the content that should be placed between the opening and closing tags.
3. Closing the tag, which can be written like this: `</tag>`. It follows the same idea as the opening tag, but with an additional / after the <. This is called a closing tag.

example :

```html
<tag>Hello Word !</tag>
```

**Other** tags do not accept content or a closing tag even (they called self closing tags or void tags)

example :

```html
<tag />
```

while it sounds nonsense using a tag without content, but there is actually a lot of uses for it , I will get to this point in the next sections

## Language Restrictions

HTML can actually accept almost any code that the developer writes without directly throwing errors like a programming language does. However, if the code is not written correctly, the browser parser may read the content in different ways, which can cause unexpected results or incorrect content to be rendered in the viewport. That’s why HTML should be written carefully. For example, we cannot forget closing tags when they are required, place content in the wrong position, use tags incorrectly, etc.

## Language Limitations

As mentioned above, HTML is mainly used to build the core structure and markup of a website .
Its main limitations are styling, interactivity, and advanced functionality. HTML alone cannot create modern styled and interactive web pages , so it is usually used with CSS for styling and javaScript for interactivity
HTML also cannot handle complex logic, server side processing , databases, or user authentication by itself. these tasks require other technologies .

## HTML Attributes

each tag in HTML can use different set of attributes that changes its behaviour , appearing and interactivity.

attributes can be used in HTML in this way : 

```html
<tag attribute="”attribute" value”>Hello Word !</tag>
```

we start by writing attribute name followed by “=” and finally a double quotes that have the value inside it. 
however there is still attributes that doesn’t require adding a value to it , instead it acts as toggle like (hidden , required , controls, autoplay,etc…)

## HTML File Structure

for better browser understanding it uses specific file boilerplate (structure) , that any project should use to ensure correct rendering & browser parsing process,

any modern HTML project should start with \<!doctype html> , this tells the browser the html version that will be used .

then it should have `<html>` tag to act as the Root element that contain all other elements

inside `<html>` tag there should be two main tags `<head>` and `<body>`

- `<head>` tag acts as the settings tag , that tells the browser & Search engine crawlers some useful configurations related to the webpage , like page title , description , meta tags(useful for browser settings and social media)
- `<body>` tag contains the webpage actual content & all tags that will be rendered to the user viewport

**Note** that some tags that might not render anything directly can still be used inside the body tag, such as the script tag , which allows JavaScript to be included or linked to the page . 
The main reason is that the browser parses the HTML document from top to bottom .
placing the script tag at the end of the body means that most of the HTML elements have already been parsed and created, allowing javascript to interact with those elements more easily.

example :

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

## Most used HTML TAGS

below are the most used tags while writing HTML code (including semantic and non semantic elements)

| **Element(s)**    | **Simple description**                                             | **Common use case**                            |
| ----------------- | ------------------------------------------------------------------ | ---------------------------------------------- |
| `<html>`          | The root element of an HTML document                               | Wraps the entire page                          |
| `<head>`          | Contains information about the page that is not directly displayed | Metadata, CSS, title, etc                      |
| `<body>`          | Contains the visible content of the page                           | Text, images, forms, buttons, etc              |
| `<title>`         | Defines the title of the page                                      | Browser tab title                              |
| `<meta>`          | Provides information about the page                                | Character encoding, viewport, description, etc |
| `<link>`          | Connects the page to an external resource                          | Linking CSS files and icons                    |
| `<style>`         | Contains CSS code inside the HTML page                             | Adding internal styling                        |
| `<script>`        | Adds or links JavaScript code                                      | Adding functionality and interactivity         |
| `<h1>` – `<h6>`   | Define different levels of headings                                | Creating page and section headings             |
| `<p>`             | Defines a paragraph                                                | Writing normal text                            |
| `<br>`            | Creates a line break                                               | Moving text to a new line                      |
| `<hr>`            | Creates a thematic break between content                           | Separating sections                            |
| `<strong>`        | Shows that text has strong importance                              | Important text or warnings                     |
| `<em>`            | Gives text emphasis                                                | Emphasizing words or phrases                   |
| `<b>`             | Makes text visually bold                                           | Visual highlighting                            |
| `<i>`             | Displays text in an alternate style, usually italic                | Terms or stylistic text                        |
| `<u>`             | Marks text with an underline                                       | Marking or highlighting text                   |
| `<small>`         | Displays smaller text                                              | Notes and extra information                    |
| `<mark>`          | Highlights a part of the text                                      | Highlighting important or searched text        |
| `<del>`           | Represents deleted text                                            | Showing removed or old content                 |
| `<ins>`           | Represents inserted text                                           | Showing newly added content                    |
| `<sub>` / `<sup>` | Displays subscript or superscript text                             | H₂O, x², footnotes, etc                        |
| `<div>`           | A general block-level container                                    | Grouping and organizing content                |
| `<span>`          | A general inline container                                         | Styling or targeting part of text              |
| `<a>`             | Creates a hyperlink                                                | Linking to pages, files, or locations          |
| `<img>`           | Displays an image                                                  | Adding images to a page                        |
| `<figure>`        | Groups self-contained content                                      | Images, diagrams, charts, etc                  |
| `<figcaption>`    | Adds a caption to a figure                                         | Describing an image or diagram                 |
| `<picture>`       | Provides different image sources                                   | Responsive images                              |
| `<audio>`         | Adds audio content                                                 | Music, podcasts, sound effects                 |
| `<video>`         | Adds video content                                                 | Playing videos                                 |
| `<source>`        | Defines a media source                                             | Providing different media files                |
| `<track>`         | Adds text tracks to media                                          | Subtitles and captions                         |
| `<iframe>`        | Embeds another page or resource                                    | Maps, videos, external pages, etc              |
| `<ul>` / `<ol>`   | Create unordered or ordered lists                                  | Bullet points or numbered lists                |
| `<li>`            | Defines an item inside a list                                      | List items                                     |
| `<table>`         | Creates a table                                                    | Displaying structured data                     |
| `<thead>`         | Contains table header rows                                         | Grouping column headings                       |
| `<tbody>`         | Contains the main table rows                                       | Grouping table data                            |
| `<tfoot>`         | Contains table footer rows                                         | Totals or summaries                            |
| `<tr>`            | Defines a table row                                                | Creating rows                                  |
| `<th>`            | Defines a table header cell                                        | Column or row headings                         |
| `<td>`            | Defines a table data cell                                          | Adding data to a table                         |
| `<caption>`       | Gives a table a title or description                               | Naming a table                                 |
| `<form>`          | Creates a form for user input                                      | Login, registration, search, etc               |
| `<input>`         | Creates an input control have different types                      | Text, email, password, checkbox, etc           |
| `<label>`         | Provides a label for a form control                                | Naming input fields                            |
| `<button>`        | Creates a clickable button                                         | Submitting forms or triggering actions         |
| `<textarea>`      | Creates a multi-line input field                                   | Comments and messages                          |
| `<select>`        | Creates a dropdown menu                                            | Selecting an option                            |
| `<option>`        | Defines an option inside a dropdown                                | Items inside `<select>`                        |
| `<optgroup>`      | Groups related dropdown options                                    | Organizing large dropdowns                     |
| `<fieldset>`      | Groups related form controls                                       | Organizing sections of a form                  |
| `<legend>`        | Gives a title to a `<fieldset>`                                    | Naming a group of fields                       |
| `<header>`        | Represents introductory content                                    | Logo, heading, navigation, etc                 |
| `<nav>`           | Contains navigation links                                          | Menus and navigation bars                      |
| `<main>`          | Contains the main content of the page                              | Main page content                              |
| `<section>`       | Defines a related section of content                               | Grouping related content                       |
| `<article>`       | Represents independent content                                     | Blog posts, news, posts, etc                   |
| `<aside>`         | Contains secondary or related content                              | Sidebars and related links                     |
| `<footer>`        | Represents footer content                                          | Copyright, links, contact information          |
| `<address>`       | Provides contact information                                       | Author or organization contact details         |
| `<details>`       | Creates expandable content                                         | FAQs and additional information                |
| `<summary>`       | Provides the visible title for `<details>`                         | Clickable title for expandable content         |
| `<dialog>`        | Represents a dialog or popup window                                | Modals and dialogs                             |
| `<time>`          | Represents a date or time                                          | Events and publication dates                   |
| `<abbr>`          | Represents an abbreviation                                         | Showing the meaning of an abbreviation         |
| `<blockquote>`    | Represents a longer quotation                                      | Quoting another source                         |
| `<q>`             | Represents a short quotation                                       | Short quotes inside text                       |
| `<code>`          | Represents computer code                                           | Showing code inside text                       |
| `<pre>`           | Preserves spaces and line breaks                                   | Displaying formatted code or text              |

---

## most used html attributes & compatibility

attributes control or provide additional information about HTML elements . some attributes are global and can generally be used with any HTML element , while others are specific to certain elements .

| **Attribute** | **Type** | **Compatible element(s)**                                         | **Simple description**               | **Common use case**                          |
| ------------- | -------- | ----------------------------------------------------------------- | ------------------------------------ | -------------------------------------------- |
| `id`          | Global   | All HTML elements                                                 | Gives an element a unique identifier | CSS, JavaScript, and page links              |
| `class`       | Global   | All HTML elements                                                 | Assigns one or more class names      | CSS styling and JavaScript selection         |
| `style`       | Global   | All HTML elements                                                 | Adds inline CSS                      | Local styling                                |
| `title`       | Global   | All HTML elements                                                 | Provides additional information      | Extra information about an element           |
| `href`        | Specific | `<a>`, `<area>`, `<base>`, `<link>`                               | Defines a URL                        | Links and external resources                 |
| `src`         | Specific | `<img>`, `<audio>`, `<video>`, `<iframe>`, `<script>`, `<source>` | Defines an external resource source  | Images, media, scripts, and embedded content |
| `alt`         | Specific | `<img>`, `<area>`, `<input type="image">`                         | Provides alternative text            | Accessibility and failed images              |
| `type`        | Specific | `<input>`, `<button>`, `<script>`, `<link>` and others            | Defines the element or resource type | Input types and external resources           |
| `name`        | Specific | Form controls and several other elements                          | Gives an element a name              | Form submission and scripting                |
| `value`       | Specific | `<input>`, `<button>`, `<option>`, `<li>` and others              | Defines an element value             | Forms and list values                        |

global attributes such as `id` , `class` , `style` and `title` can generally be used with any HTML element , while specific attributes such as `href` , `src` and `alt` are limited to elements that define their behavior .

---

## HTML Entities & Character References

HTML character references are used to represent characters that have a special meaning in HTML or characters that are useful to write in an encoded form .

the most common forms are named character references and numeric character references .

example :

```html
<p>&lt;p&gt;Hello &amp; World&lt;/p&gt;</p>
```

the browser displays :

```text
<p>Hello & World</p>
```

| **Character**      | **Named entity** | **Decimal reference** | **Common use**                              |
| ------------------ | ---------------- | --------------------- | ------------------------------------------- |
| `&`                | `&amp;`          | `&#38;`               | Ampersand                                   |
| `<`                | `&lt;`           | `&#60;`               | Less-than symbol                            |
| `>`                | `&gt;`           | `&#62;`               | Greater-than symbol                         |
| `"`                | `&quot;`         | `&#34;`               | Double quotation mark                       |
| `'`                | `&apos;`         | `&#39;`               | Apostrophe or single quotation mark         |
| non-breaking space | `&nbsp;`         | `&#160;`              | Prevents a normal line break between spaces |
| `©`                | `&copy;`         | `&#169;`              | Copyright symbol                            |
| `®`                | `&reg;`          | `&#174;`              | Registered trademark symbol                 |
| `™`                | `&trade;`        | `&#8482;`             | Trademark symbol                            |
| `€`                | `&euro;`         | `&#8364;`             | Euro symbol                                 |
| `£`                | `&pound;`        | `&#163;`              | Pound symbol                                |
| `°`                | `&deg;`          | `&#176;`              | Degree symbol                               |

for example :

```html
<p>5 &lt; 10</p>
<p>Tom &amp; Jerry</p>
<p>Copyright &copy; 2026</p>
```

modern HTML documents normally use UTF-8 , which allows many Unicode characters to be written directly . character references are still useful when a character has a special meaning in HTML syntax .
