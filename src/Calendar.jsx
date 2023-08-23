import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import './App.css';

const Calendar = ({ date }) => {
  moment.locale('ru'); 
  const firstDayOfMonth = moment(date).startOf('month').startOf('week');
  const lastDayOfMonth = moment(date).endOf('month').endOf('week');

  const calendarRows = [];
  let currentDate = firstDayOfMonth;

  while (currentDate.isSameOrBefore(lastDayOfMonth)) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      week.push(
        <td
          key={currentDate.toString()}
          className={
            !currentDate.isSame(date, 'month')
              ? 'ui-datepicker-other-month'
              : currentDate.isSame(moment(), 'day')
              ? 'ui-datepicker-today'
              : ''
          }
        >
          {currentDate.format('D')}
        </td>
      );
      currentDate.add(1, 'day');
    }
    calendarRows.push(<tr key={currentDate.toString()}>{week}</tr>);
  }

  const weekDays = moment.weekdaysShort(true).map((day, index) => (
    <th key={index} scope="col" title={day}>
      {day}
    </th>
  ));

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">
          {moment(date).format('dddd')}
        </div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">
            {moment(date).format('D')}
          </div>
          <div className="ui-datepicker-material-month">
            {moment(date).format('MMMM')}
          </div>
          <div className="ui-datepicker-material-year">
            {moment(date).format('YYYY')}
          </div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">
            {moment(date).format('MMMM')}
          </span>
          &nbsp;
          <span className="ui-datepicker-year">
            {moment(date).format('YYYY')}
          </span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          {new Array(7).fill(null).map((_, index) => (
            <col key={index} />
          ))}
        </colgroup>
        <thead>
          <tr>{weekDays}</tr>
        </thead>
        <tbody>{calendarRows}</tbody>
      </table>
    </div>
  );
};

export default Calendar;
