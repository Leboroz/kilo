'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Input } from './Input';

export const ListOfApplications = (props: {}) => {

  const [filteredApplications, setFilteredAplications] = useState(props.apps);

  const listItems = Array.from({ length: props.apps.pagination.total_pages }, (_, index) => (
    <li key={index} className="page-item"><button type='button' className='page-link'>{index + 1}</button></li>
  ));
  const handleChange = (e) => {
    const zoneName = e.currentTarget.value;
    const found = props.zones.data.map((n, i) => n[i + 1]).find((z, i) => z.name.includes(zoneName));
    if (zoneName === '') {
      setFilteredAplications(props.apps);
    } else if (found) {
      setFilteredAplications(prev => {
        console.log(prev)
        prev.data = props.apps.data.filter((app, i) => {
          return app[i + 1].zone1 == found.zone_id ||
            app[i + 1].zone2 == found.zone_id ||
            app[i + 1].zone3 == found.zone_id
        })
        return prev;
      });
    }
  }
  //App breaks because the filtered data not updating

  return (
    <div>

      <label >
        Filter by Name
        <input type="text" onChange={handleChange} />
      </label>
      <ul className="list-group">
        {filteredApplications.data.map((app, i) => {
          app = app[i + 1];
          return (<li className="list-group-item d-flex gap-2 align-items-center" key={app.aplication_id}>
            <h2>{app.application_id}</h2>
            Zones:
            <ul>
              <li>{app.zone1}</li>
              <li>{app.zone2}</li>
              <li>{app.zone3}</li>
            </ul>
            Dates:
            <ul>
              <li>{app.date1}</li>
              <li>{app.date2}</li>
              <li>{app.date3}</li>
            </ul>
          </li>)
        })}
      </ul>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="#">Previous</a></li>
          {listItems}
          <li className="page-item"><button className="page-link">Next</button></li>
        </ul>
      </nav>
    </div>
  )
}
