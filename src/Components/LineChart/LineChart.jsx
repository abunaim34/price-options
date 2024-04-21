import { LineChart as LChart , Line, XAxis, YAxis } from 'recharts';


const LineChart = () => {
    const mathMarksData = [
        {"student_number": 1, "math_mark": 85, "physics_mark": 78, "chemistry_mark": 90},
        {"student_number": 2, "math_mark": 78, "physics_mark": 82, "chemistry_mark": 85},
        {"student_number": 3, "math_mark": 92, "physics_mark": 88, "chemistry_mark": 91},
        {"student_number": 4, "math_mark": 68, "physics_mark": 72, "chemistry_mark": 65},
        {"student_number": 5, "math_mark": 75, "physics_mark": 68, "chemistry_mark": 72},
        {"student_number": 6, "math_mark": 88, "physics_mark": 84, "chemistry_mark": 89},
        {"student_number": 7, "math_mark": 70, "physics_mark": 65, "chemistry_mark": 78},
        {"student_number": 8, "math_mark": 95, "physics_mark": 92, "chemistry_mark": 96},
        {"student_number": 9, "math_mark": 83, "physics_mark": 79, "chemistry_mark": 85},
        {"student_number": 10, "math_mark": 79, "physics_mark": 74, "chemistry_mark": 80}
    ]
      
      
    return (
        <div>
            <LChart width={800} height={400} data={mathMarksData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math_mark"></Line>
                <Line dataKey={"physics_mark"} stroke='black'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;