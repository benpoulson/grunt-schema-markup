# grunt-schema-markup

> A Grunt preprocessor to easily add schema.org markup to HTML templates.

> Search engines including Bing, Google, Yahoo! and Yandex rely on this markup to improve the display of search results, making it easier for people to find the right Web pages.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-schema-markup --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-schema-markup');
```

## The "schema_markup" task

### Overview
In your project's Gruntfile, add a section named `schema_markup` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  schema_markup: {
		default: {
			options: {
			},
			files: [
				{ src: 'test/src/testing.html', dest: 'test/dest/' }
			]
		}
	}
});
```

### Example Usage
The "schema_markup" tasks turns the following HTML
```html
<div schema-Person>
	<span prop-name>Jane Doe</span>
	<img  prop-image src="janedoe.jpg"  alt="Photo of Jane Joe" />
	<span prop-jobTitle>Professor</span>
	<div  prop-address schema-PostalAddress>
		<span prop-streetAddress>
			20341 Whitworth Institute
			405 N. Whitworth
		</span>
		<span prop-addressLocality>Seattle</span>,
		<span prop-addressRegion>WA</span>
		<span prop-postalCode>98052</span>
	</div>
	<span prop-telephone>(425) 123-4567</span>
	<a prop-email href="mailto:jane-doe@xyz.edu">jane-doe@xyz.edu</a>

	Jane's home page:
	<a prop-url href="http://www.janedoe.com">janedoe.com</a>

	Graduate students:
	<a prop-colleague href="http://www.xyz.edu/students/alicejones.html">Alice Jones</a>
	<a prop-colleague href="http://www.xyz.edu/students/bobsmith.html">Bob Smith</a>
</div>
```

into the following schema.org markup

```html
<div itemscope itemtype="http://schema.org/Person">
	<span itemprop="name">Jane Doe</span>
	<img  itemprop="image" src="janedoe.jpg"  alt="Photo of Jane Joe" />
	<span itemprop="jobTitle">Professor</span>
	<div  itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
		<span itemprop="streetAddress">
			20341 Whitworth Institute
			405 N. Whitworth
		</span>
		<span itemprop="addressLocality">Seattle</span>,
		<span itemprop="addressRegion">WA</span>
		<span itemprop="postalCode">98052</span>
	</div>
	<span itemprop="telephone">(425) 123-4567</span>
	<a itemprop="email" href="mailto:jane-doe@xyz.edu">jane-doe@xyz.edu</a>
	
	Jane's home page:
	<a itemprop="url" href="http://www.janedoe.com">janedoe.com</a>
	
	Graduate students:
	<a itemprop="colleague" href="http://www.xyz.edu/students/alicejones.html">Alice Jones</a>
	<a itemprop="colleague" href="http://www.xyz.edu/students/bobsmith.html">Bob Smith</a>
</div>
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
