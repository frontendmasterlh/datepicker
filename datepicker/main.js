(function () {
  let datepicker = window.datepicker;

  datepicker.buildUi = function (year, month) {
    let monthData = datepicker.getMonthData(year, month);
    let html = `
    <div class="ui-datepicker-header">
      <a href="#" class="ui-datepicker-btn ui-datepicker-prev-btn">&lt;</a>
      <a href="#" class="ui-datepicker-btn ui-datepicker-next-btn">&gt;</a>
      <span class="ui-datepicker-curr-month">${monthData.year}-${monthData.month}</span>
    </div>
    <div class="ui-datepicker-body">
      <table>
        <thead>
          <tr>
            <th>一</th>
            <th>二</th>
            <th>三</th>
            <th>四</th>
            <th>五</th>
            <th>六</th>
            <th>日</th>
          </tr>
        </thead>
        <tbody>`;

    for (var i = 0; i < monthData.days.length; i++) {
      let date = monthData.days[i];
      if (i % 7 === 0) html += "<tr>";
      html += `<td>${date.showDate}</td>`;
      if (i % 7 === 6) html += "</tr>";
    }

    html += `</tbody></table></div>`;
    return html;
  };

  datepicker.init = function ($input) {
    let html = datepicker.buildUi(2022, 3)
    let $wrapper = document.createElement('div');
    $wrapper.classList.add('ui-datepicker-wrapper')
    $wrapper.innerHTML = html;
    document.body.appendChild($wrapper);
  };
})();
