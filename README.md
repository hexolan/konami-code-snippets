# Konami Code Snippets

The Konami Code (sometimes called the Contra Code) is a cheat code that has appeared in many Konami video games.

It is now often used as a gag, homage or an easter egg within many products or websites.

Read more about the Konami Code from the associated [Wikipedia entry](https://en.wikipedia.org/wiki/Konami_Code).

## Usage

### JSDelivr

You can use this as a library within your web applications.

#### Links

Version 1.0 (+ hotfixes): <https://cdn.jsdelivr.net/gh/hexolan/konami-code-snippets@1.0/src/core.min.js>

Latest Version: <https://cdn.jsdelivr.net/gh/hexolan/konami-code-snippets/src/core.min.js>

#### Example

```html
<html>
  <body>
    (...content)

    <script src="https://cdn.jsdelivr.net/gh/hexolan/konami-code-snippets/src/core.min.js" />

    <script>
      document.addEventListener("keydown", handleKonami(() => {
        console.log('konami!');
      }));
    </script>
  </body>
</html>
```

### Direct

An example of direct usage can be seen within the source of [examples/redirect.html](/examples/redirect.html).

## License

The code contained within this repository is released under the [MIT License](/LICENSE.txt).

"Konami" and "Contra" are registered trademarks of the KONAMI CORPORATION (Konami Digital Entertainment), who hold no affiliation to this project.
