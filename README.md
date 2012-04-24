# jQuery Touch State Plugin

This plugin will bypass the 300ms delay when pressing elements on mobile devices such as iOS and Android.

You simply have to replace your `:active` selector with `.active` and register the specific elements.

### Example

HTML:

```html
<ul>
  <li>Item One</li>
  <li>Item Two</li>
</ul>
```

JavaScript:

```js
$(".scroller").touchStates("ul > li");
```

CSS:

```css
li.active {
  background-color: red;
}
```
