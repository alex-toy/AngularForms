# Angular Forms

- import **FormsModule** in the component

- optionally add a debug section anywhere in the *html*
```
{{ myCustomForm.value | json }}
```

- add the *ngForm* directive inside the *form* tag
```
<form #myCustomForm="ngForm">
```

- for each field, add *ngModel* and the name of the field
```
<input type=text ngModel name="InputField">

<select ngModel name="SelectField">
    <option *ngFor="let option of options">{{ option }}</option>
</select>

<input type="radio" value="firstValue" ngModel name="RadioField">
<input type="radio" value="secondValue" ngModel name="RadioField">
<input type="radio" value="thirdValue" ngModel name="RadioField">

<input type="checkbox"  ngModel name="CheckboxField">
```

- all the values selected should appear in the debug section