#input[type=date]
+ 날짜 값 없애기
``` css
input[type=date]::-webkit-datetime-edit-text {
    -webkit-appearance: none;
    display: none;
}

input[type=date]::-webkit-datetime-edit-month-field {
    -webkit-appearance: none;
    display: none;
}

input[type=date]::-webkit-datetime-edit-day-field {
    -webkit-appearance: none;
    display: none;
}

input[type=date]::-webkit-datetime-edit-year-field {
    -webkit-appearance: none;
    display: none;
}
```
