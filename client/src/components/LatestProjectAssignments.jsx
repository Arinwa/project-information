import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LatestProjectAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: 'start_date', direction: 'desc' });

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await axios.get('/api/latest_project_assignments');
        console.log(response.data); // Log the response data in the browser console
        setAssignments(response.data);
      } catch (error) {
        console.error('Error fetching project assignments:', error);
      }
    };

    fetchAssignments();
    const intervalId = setInterval(fetchAssignments, 60000); // Refresh every minute

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    setAssignments((prevAssignments) =>
      [...prevAssignments].sort((a, b) => {
        if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
        if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
        return 0;
      })
    );
  };

  return (
    <div>
      <h1>Latest Project Assignments</h1>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('employee_id')}>Employee ID</th>
            <th onClick={() => handleSort('employee_name')}>Employee Name</th>
            <th onClick={() => handleSort('project_name')}>Project Name</th>
            <th onClick={() => handleSort('start_date')}>Start Date</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment) => (
            <tr key={`${assignment.employee_id?._id}-${assignment.project_code?._id}`}>
              <td>{assignment.employee_id?._id}</td>
              <td>{assignment.employee_id?.full_name}</td>
              <td>{assignment.project_code?.project_name}</td>
              <td>{new Date(assignment.start_date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LatestProjectAssignments;
