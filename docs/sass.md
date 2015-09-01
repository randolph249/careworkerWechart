sass使用文档
============

官方API：[入口](http://sass-lang.com/guide)

### 变量定义（Variables）

scss

```scss
$font-stack:Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

css

```css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```

###嵌套（Nesting）

scss

```scss
nav{
  ul{
    margin:0;
    padding:0;
    li{
      display: inline-block;
      a{
        color:#333;
        text-decoration: none;
        &:hover{
          color:#05f;
        }
      }
    }
  }
}
```

css

```css
nav ul {
  margin: 0;
  padding: 0;
}
nav ul li {
  display: inline-block;
}
nav ul li a {
  color: #333;
  text-decoration: none;
}
nav ul li a:hover {
  color: #05f;
}
```

### 导入（import）

### 宏(Mixins)

scss

```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box { @include border-radius(10px); }

```

css

```css
.box {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
```

###继承

scss

```scss
.message_sup{
    border:#ccc solid 1px;
    padding:10px;
}
.message_sub{
  @extend .message_sup;
  border-color:#0f0;
}
```

css

```css
.message_sup, .message_sub {
  border: #ccc solid 1px;
  padding: 10px;
}
.message_sub {
  border-color: #0f0;
}
```

### 计算(Operators)

sass

```sass
.container { width: 100%; }

article[role="main"] {
  float: left;
  width: 600px / 960px * 100%;
}

aside[role="complimentary"] {
  float: right;
  width: 300px / 960px * 100%;
}
```

css

```css
.container {
  width: 100%;
}
article[role="main"] {
  float: left;
  width: 62.5%;
}
aside[role="complimentary"] {
  float: right;
  width: 31.25%;
}
```

*待续...*
