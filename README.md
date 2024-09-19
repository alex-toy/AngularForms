# Angular Forms

## Template Driven

1. Html Template

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

<input type="checkbox" ngModel name="CheckboxField">
```

- you can also use *ngModelGroup* inside the form for complex fields like addresses
```
<div ngModelGroup="Address">
```

- all the values selected should appear in the debug section


2. component.ts file

- Create model classes that conform to the form

- add a field in the component that have a type of those classes

- for each field, add an ngModel
```
[(ngModel)]="userModel.Name"
```

