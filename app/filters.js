
import { DateTime } from 'luxon'



/**
 * Prototype specific filters for use in Nunjucks templates.
 *
 * You can override Prototype Rig filters by creating filter methods
 * with the same name.
 *
 * You can delete this file if you don’t need your own filters.
 */


export default (env) => {
  
  const filters = {}


  // example: 7 December 2021
  filters.dateWithYear = params => {
    const datetime = DateTime.local(parseInt(params.year), parseInt(params.month), parseInt(params.day))
    return datetime.toFormat('d MMMM yyyy')
  }

  filters.maskEmail = function (email) {
    var split = email.split("@");
    var split1 = split[0];
    var avg = split1.length / 1;
    
    split1 = split1.substring(2, (split1.length - avg));
    var split2 = split[1];
    return split1 + "******@" + split2;
}

filters.maskPhoneNumber = function(phoneNumber){
  var s = phoneNumber;
  var start = 3;
  var end = 2;

  var result = s.slice(0, start);
  result += "*".repeat(s.length-start-end);
  result += s.slice(s.length-end);
  return result;
}
filters.maskNationalInsurance = function(NationalInsurance){
  var s = NationalInsurance;
  var start = 2;
  var end = 1;

  var result = s.slice(0, start);
  result += "*".repeat(s.length-start-end);
  result += s.slice(s.length-end);
  return result;
}

  // stringify an object
  filters.stringify = obj => {
    return JSON.stringify(obj)
  }

  // example: "not like this" becomes "Not like this"
  // do not error when string is undefined
  filters.capitaliseFirstLetter = string => {
    return string ? string.charAt(0).toUpperCase() + string.slice(1) : string
  }

  // Keep the following line to return your filters to the app
  return filters
}
