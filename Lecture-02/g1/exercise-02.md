## Solution for number validation

```javascript
    if (Number.isNaN(resultValue)){
        result.classList.add("error");
        result.value = "ERROR";
    } else {
        result.classList.remove("error");
        result.value = resultValue;
    }
```
