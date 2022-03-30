const myHours = [
    ['1:00', '2:00', '3:00', '4:00', '5:00'],
    ['2:00'],
    ['3:00'],
    ['4:00'],
    ['5:00'],
    ['6:00'],
    ['7:00']
];

$('#picker').markyourcalendar({
    availability: myAvailability
  });

  $('#picker').markyourcalendar({
    availability: myAvailability,
    isMultiple: true
  });


  $('#picker').markyourcalendar({
    availability: myAvailability,
    months: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
    weekdays: ['sun', 'mon', 'tue', 'wed', 'thurs', 'fri', 'sat']
  });


  $('#picker').markyourcalendar({
    availability: myAvailability,
    startDate: new Date()
  });

  $('#picker').markyourcalendar({
    availability: myAvailability,
    selectedDates: []
  });

  $('#picker').markyourcalendar({
    availability: myAvailability,
    prevHtml: prevHtml,
    nextHtml: nextHtml
  });

  $('#picker').markyourcalendar({
    availability: myAvailability,
    onClick: function(ev, data) {
      // data is a list of datetimes
      console.log(data);
      var html = ``;
      $.each(data, function() {
        var d = this.split(' ')[0];
        var t = this.split(' ')[1];
        html += `<p>` + d + ` ` + t + `</p>`;
      });
      $('#output').html(html);
    },
  });

  $('#picker').markyourcalendar({
    availability: myAvailability,
    onClickNavigator: function(ev, instance) {
    var arr = [
      [
        ['4:00', '5:00', '6:00', '7:00', '8:00'],
        ['1:00', '5:00'],
        ['2:00', '5:00'],
        ['3:30'],
        ['2:00', '5:00'],
        ['2:00', '5:00'],
        ['2:00', '5:00']
      ],
      [
        ['2:00', '5:00'],
        ['4:00', '5:00', '6:00', '7:00', '8:00'],
        ['4:00', '5:00'],
        ['2:00', '5:00'],
        ['2:00', '5:00'],
        ['2:00', '5:00'],
        ['2:00', '5:00']
      ],
      [
        ['4:00', '5:00'],
        ['4:00', '5:00'],
        ['4:00', '5:00', '6:00', '7:00', '8:00'],
        ['3:00', '6:00'],
        ['3:00', '6:00'],
        ['3:00', '6:00'],
        ['3:00', '6:00']
      ],
      [
        ['4:00', '5:00'],
        ['4:00', '5:00'],
        ['4:00', '5:00'],
        ['4:00', '5:00', '6:00', '7:00', '8:00'],
        ['4:00', '5:00'],
        ['4:00', '5:00'],
        ['4:00', '5:00']
      ],
      [
        ['4:00', '6:00'],
        ['4:00', '6:00'],
        ['4:00', '6:00'],
        ['4:00', '6:00'],
        ['4:00', '5:00', '6:00', '7:00', '8:00'],
        ['4:00', '6:00'],
        ['4:00', '6:00']
      ],
      [
        ['3:00', '6:00'],
        ['3:00', '6:00'],
        ['3:00', '6:00'],
        ['3:00', '6:00'],
        ['3:00', '6:00'],
        ['4:00', '5:00', '6:00', '7:00', '8:00'],
        ['3:00', '6:00']
      ],
      [
        ['3:00', '4:00'],
        ['3:00', '4:00'],
        ['3:00', '4:00'],
        ['3:00', '4:00'],
        ['3:00', '4:00'],
        ['3:00', '4:00'],
        ['4:00', '5:00', '6:00', '7:00', '8:00']
      ]
    ]
    var rn = Math.floor(Math.random() * 10) % 7;
    instance.setAvailability(arr[rn]);
  }
  });