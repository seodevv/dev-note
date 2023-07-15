# STR_TO_DATE


## property
| Format | desc | example | Format | desc | example |
|--------|------|---------|--------|------|---------|
| %Y | 4자리 년도 | 2023 | %y | 2자리 년도 | 23 |
| %M | 영문 월 | March | %b | 축약 월 | Mar | %m | 2자리 월 | 03 |
| %W | 영문 일 | Monday | %d | 2글자 일 | 01, 30 | %e | 1글자 일 | 1, 30 |
| %H | 24시간 | 13 | %h | 12시간 | 01 |
| %i | 분 | 45 | %S | 초 | 13 |
| %T | hh:mm:ss AM/PM | 13:45:13 PM | %r | hh:mm:ss AM/PM 


## syntax
``` 
mysql> select STR_TO_DATE('2013-09-05T10:10:02Z','%Y-%m-%dT%TZ');
+----------------------------------------------------+
| STR_TO_DATE('2013-09-05T10:10:02Z','%Y-%m-%dT%TZ') |
+----------------------------------------------------+
| 2013-09-05 10:10:02                                |
+----------------------------------------------------+
1 row in set (0.00 sec)
```