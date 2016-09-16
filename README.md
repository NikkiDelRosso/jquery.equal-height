# jQuery Equal Heights
Sets elements which start at the same vertical position to have the same height.

## Usage
```html
<!-- Example HTML: Bootstrap columns -->
<div class="row">
  <div class="col-md-3 col-sm-6 equal-height">
    <p>Cras varius. Vivamus in erat ut urna cursus vestibulum. Phasellus gravida semper nisi. Praesent ac massa at ligula laoreet iaculis. Proin magna.</p>

    <p>Maecenas nec odio et ante tincidunt tempus. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Fusce fermentum odio nec arcu. Donec posuere vulputate arcu.</p>
  </div>
  <div class="col-md-3 col-sm-6 equal-height">
    <p>Lorem Ipsum</p>
  </div>
  <div class="col-md-3 col-sm-6 equal-height">
    <p>Dolor Sit Amet</p>
  </div>
  <div class="col-md-3 col-sm-6 equal-height">
    <p>Aenean viverra rhoncus pede. Praesent turpis. In hac habitasse platea dictumst. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Nullam sagittis.</p>
  </div>
</div>
```

```javascript
jQuery('.equal-height').equalHeight();
```

## Notes
Elements will only have their height adjusted when they start at the same (EXACT same) vertical pixel.  This is useful in responsive designs when you have columns which you want to match height in one responsive state, but when they stack, should match the height of the content.
