# jQuery Equal Heights
Sets elements which start at the same vertical position to have the same height.

## Usage
```javascript
jQuery('.equal-height').equalHeight();
```

## Notes
Elements will only have their height adjusted when they start at the *exact* same vertical pixel.  This is useful in responsive designs when you have columns which you want to match height in one responsive state, but when they stack, should match the height of the content.
