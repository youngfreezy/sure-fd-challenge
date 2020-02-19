export function  hasAllRequiredProperties (addressState)  {
    let requiredKeys = [
      "first_name",
      "last_name",
      "line_1",
      "city",
      "region",
      "postal"
    ];
    for (var i = 0; i < requiredKeys.length; i++) {
      if (!addressState[requiredKeys[i]]) {
        return false;
      }
    }
    return true;
  };