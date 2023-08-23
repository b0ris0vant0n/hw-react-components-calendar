import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isToday } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import './App.css';

const Calendar = ({ date }) => {
  const locale = ruLocale;
  const startMonth = startOfMonth(date);
  const startDate = startOfWeek(startMonth);
  const endMonth = endOfMonth(date);
  const endDate = endOfWeek(endMonth);

  const calendarRows = [];
  let currentDate = startDate;

  while (currentDate <= endDate) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      week.push(
        <td
          key={currentDate.toString()}
          className={
            !isSameMonth(currentDate, date)
              ? 'ui-datepicker-other-month'
              : isToday(currentDate)
              ? 'ui-datepicker-today'
              : ''
          }
        >
          {format(currentDate, 'd')}
        </td>
      );
      currentDate = addDays(currentDate, 1);
    }
    calendarRows.push(<tr key={currentDate.toString()}>{week}</tr>);
  }

  const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day, index) => (
    <th key={index} scope="col" title={day}>
      {day}
    </th>
  ));

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">
          {format(date, 'eeee', { locale })}
        </div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">
            {format(date, 'd')}
          </div>
          <div className="ui-datepicker-material-month">
            {format(date, 'MMMM', { locale })}
          </div>
          <div className="ui-datepicker-material-year">
            {format(date, 'yyyy')}
          </div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">
            {format(date, 'MMMM', { locale })}
          </span>
          <span className="ui-datepicker-year">
            {format(date, 'yyyy')}
          </span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          {new Array(7).fill(null).map((_, index) => (
            <col key={index} className={index === 5 || index === 6 ? 'ui-datepicker-week-end' : ''} />
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
