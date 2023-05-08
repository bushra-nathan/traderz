import Vue from 'vue'
import moment from 'moment'
import { mapValues } from 'lodash'

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'AED',
})

var formatterUSD = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

var formatterEUR = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'EUR',
})

var formatterGBP = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'GBP',
})

Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('MMM DD, YYYY h:mm a')
  }
})

Vue.filter('formatTime', function (value) {
  if (value) {
    return moment(String(value)).format('hh:mm:ss')
  }
})

Vue.filter('formatDateWithoutTime', function (value) {
  if (value) {
    return moment(String(value)).format('MMM D, YYYY')
  }
})

Vue.filter('YearformatDate', function (value) {
  if (value) {
    var d = new Date(value)
    return d.getFullYear()
  }
})

Vue.filter('MonthformatDate', function (value) {
  if (value) {
    return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(value)
  }
})
Vue.filter('MonthformatDate_fullDay', function (value) {
  if (value) {
    return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(value)
  }
})

Vue.filter('uppercase', function (value) {
  return value.toUpperCase()
})

Vue.filter('capitalize', function (value) {
  if (value) {
    return value[0].toUpperCase() + value.substring(1)
  }
})

Vue.filter('dateFormatter', function (value) {
  if (value) {
    return moment(String(value), 'DD/MM/YYYY').format('MMM DD, YYYY')
  }
})
Vue.filter('textDate', function (value) {
  if (value) {
    return moment(String(value), 'DD-MM-YYYY').format('MMM DD, YYYY')
  }
})
Vue.filter('defaultDateFormat', function (value) {
  if (value) {
    return moment(String(value)).format('DD-MM-YYYY')
  }
})
Vue.filter('time', function (value) {
  if (value) {
    return moment(String(value)).format('hh:mm A')
  }
})

Vue.filter('time_without_ampm', function (value) {
  if (value) {
    return moment(String(value)).format('hh:mm')
  }
})

Vue.filter('time_with_ampm', function (value) {
  if (value) {
    return moment(String(value)).format('hh:mm A')
  }
})

Vue.filter('ampm', function (value) {
  if (value) {
    return moment(String(value)).format('A')
  }
})

Vue.filter('ticketingDateFormatter', function (value) {
  if (value) {
    return moment(String(value)).format('MMM DD, YYYY')
  }
})

Vue.filter('militoTime', function (duration) {
  if (duration > 0) {
    var seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
    return hours + ':' + minutes + ':' + seconds
  } else {
    let seconds = Math.floor((duration / 1000) % 60)
    let s = Math.abs(seconds)

    let t = [0, 0, 0]
    let r = s % 3600

    t[0] = Math.floor(s / 3600)
    t[1] = Math.floor(r / 60)
    r = r % 60
    t[2] = r

    return (
      (seconds < 0 ? '-' : '') +
      (t[0] < 10 ? '0' : '') +
      t[0] +
      ':' +
      (t[1] < 10 ? '0' + t[1] : t[1]) +
      ':' +
      (t[2] < 10 ? '0' + t[2] : t[2])
    )
    // return "- " + hours.replace('-','') + ":" + minutes.replace('-','') + ":" + seconds.replace('-','')
  }
})

Vue.filter('nocDateFormatter', function (value) {
  if (value) {
    return moment(String(value), 'YYYY/MM/DD').format('DD MMM, YYYY')
  }
})

Vue.filter('nocDateFormatterNew', function (value) {
  if (value) {
    return moment(String(value), 'DD/MM/YYYY').format('DD MMM, YYYY')
  }
})

Vue.filter('eventDate', function (value) {
  if (value) {
    return moment(String(value)).format('MMM DD')
  }
})

Vue.filter('PayslipDateFormatter', function (value) {
  if (value) {
    return moment(String(value), 'YYYY/MM').format('MMM, YYYY')
  }
})

Vue.filter('dayMonth', function (value) {
  if (value) {
    return moment(String(value)).format('DD/MM')
  }
})

// Regex for Rewards page content which is present in html

Vue.filter('HTMLFormatter', function (value) {
  if (value) {
    return value
      .replace(/<\/?[^>]+(>|$)/g, '')
      .replace('&nbsp;', '')
      .replace('&amp;', '&')
  }
})

Vue.filter('ArrayFormatter', function (value) {
  if (value) {
    return value.toString().replace('&amp;', '&')
  }
})

Vue.filter('formatDateWithoutTime2', function (value) {
  if (value) {
    return moment(String(value)).format('Do MMMM YYYY')
  }
})

Vue.filter('formatCurrency', function (value) {
  if (value) {
    return formatter.format(value)
  }
})

Vue.filter('formatCurrencyUSD', function (value) {
  if (value) {
    return formatterUSD.format(value)
  }
})

Vue.filter('formatCurrencyEUR', function (value) {
  if (value) {
    return formatterEUR.format(value)
  }
})

Vue.filter('formatCurrencyGBP', function (value) {
  if (value) {
    return formatterGBP.format(value)
  }
})

//date formatter

Vue.filter('DaysFinder', function (value) {
  if (value) {
    let year = value.split('-')
    return new Date(year[0], year[1], 0).getDate()
  }
})

// Vue.filter('numdays', function(value) {
//     if (value) {
//         let now = new Date()
//         return moment.duration(value.diff(end)).asDays();
//     }
// })

Vue.filter('formatDateWithoutTimeNum', function (value) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY')
  }
})

Vue.filter('twoDecimals', function (value) {
  if (value && Number(value) !== 0) {
    let newValue = parseFloat(value).toFixed(2)
    const numberFormatter = Intl.NumberFormat('en-US', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    })
    const formatted = numberFormatter.format(newValue)
    return formatted
  } else if (Number(value) == 0) {
    return 0.0
  } else return 0.0
})

Vue.filter('twoDecimalsAndPositive', function (value) {
  let val = 0.0
  if (value && Number(value) !== 0) {
    if (typeof value == 'string') {
      value = Math.abs(Number(value))
    } else if (typeof value == 'number') {
      value = Math.abs(value)
    }

    let newValue = parseFloat(value).toFixed(2)
    const numberFormatter = Intl.NumberFormat('en-US', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    })
    const formatted = numberFormatter.format(newValue)
    val = formatted
  } else if (Number(value) == 0) {
    val = 0.0
  } else val = 0.0
  return val
})

Vue.filter('truncateText', function (text, length, suffix) {
  if (text.length > length) {
    return text.substring(0, length) + suffix
  } else {
    return text
  }
})

Vue.filter('firstLetter', function (s) {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase()
})

Vue.filter('birthdayCalculator', function (value) {
  if (value) {
    return moment().diff(String(value), 'years')
  }
})

// (12345.67).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

Vue.filter('amountFormatter', function (value) {
  // if (value) {
  //     if (value == '' || value == null || value == 0) {
  //         value = 0.00
  //         return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  //     } else {
  //         return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  //     }
  // }

  return value === 0 || value === null || value == '' || isNaN(value)
    ? '0.00'
    : value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
})
