Dominate
========

```javascript
let { div, input, button } = require('dominate');

$('body').html(

    div({ class: 'hello' },
        div(input()),
        button({ data: 'value' }),
    )

);
```

```html
<body>
    <div class="hello">
        <div><input/></div>
        <button data="value"/>
    </div>
</body>
```

```javascript
tag ( attributes, child1, child2, ...childN )
tag ( child1, child2, ...childN )
tag ( )
```

