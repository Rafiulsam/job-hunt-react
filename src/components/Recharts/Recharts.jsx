import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
const Recharts = () => {
    let assignments = [
        { assignmentName: "Assignment 1", marks: 29 },
        { assignmentName: "Assignment 2", marks: 29 },
        { assignmentName: "Assignment 3", marks: 30 },
        { assignmentName: "Assignment 4", marks: 28 },
        { assignmentName: "Assignment 5", marks: 30 },
        { assignmentName: "Assignment 6", marks: 30 },
    ];
    return (
        <div>
            <h2 className='title'>Statistics</h2>
            <div style={{ maxWidth: '1370px',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>
                <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Assignment Marks</h3>
                <AreaChart
                    width={1300}
                    height={500}
                    data={assignments}

                >

                    <XAxis dataKey="assignmentName" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="marks" stroke="#646cff" fill="#646cffbd" />
                </AreaChart>
            </div>
        </div >
    );
};

export default Recharts;