import React,{useState} from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
export default function SideCalender({setDate}) {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <div className="callenderFull_Item_Box">
        <h3>Calendar</h3>
      </div>
      {/* <div className="table-responsive">
        <table
          className="table table-calender-left"
          bgcolor="white"
          align="center"
          cellSpacing={21}
          cellPadding={21}
        >
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="last-date">30</td>
              <td className="last-date">31</td>
              <td>01</td>
              <td>02</td>
              <td>03</td>
              <td>04</td>
              <td>05</td>
            </tr>
            <tr />
            <tr>
              <td>06</td>
              <td className="active-date">07</td>
              <td>08</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
            </tr>
            <tr>
              <td>13</td>
              <td>14</td>
              <td className="active-CalenderNewDate">15</td>
              <td>16</td>
              <td>17</td>
              <td>18</td>
              <td>19</td>
            </tr>
            <tr>
              <td>20</td>
              <td>21</td>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td>26</td>
            </tr>
            <tr>
              <td>27</td>
              <td>28</td>
              <td className="last-date">30</td>
              <td className="last-date">31</td>
              <td className="last-date">01</td>
              <td className="last-date">02</td>
              <td className="last-date">03</td>
            </tr>
          </tbody>
        </table>
      </div> */}
      <Calendar
            onChange={(e) => {
              onChange(e);
              setDate(e)
            //   fetchSlots(e);
            }}
            value={value}
          />
    </>
  );
}
